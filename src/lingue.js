// SPDX-License-Identifier: AGPL-3.0-or-later
// Interface languages. The pages are written in Italian; every other language is a dictionary keyed by the
// Italian text (src/lingue/<code>.js). The server puts in each page only the dictionary of the language in use.
import en from "./lingue/en.js";
import es from "./lingue/es.js";
import fr from "./lingue/fr.js";
import de from "./lingue/de.js";

export const LINGUE = { it: "Italiano", en: "English", es: "Español", fr: "Français", de: "Deutsch" };
export const LOCALE = { it: "it-IT", en: "en-GB", es: "es-ES", fr: "fr-FR", de: "de-DE" };
export const DIZ = { en, es, fr, de };

// language of a request: the "lang" cookie set by the language menu, otherwise the first supported language of the
// browser, otherwise English
export function linguaRichiesta(req) {
  const c = /(?:^|;\s*)lang=([a-z]{2})(?:;|$)/.exec(req.headers.get("cookie") || "");
  if (c && LINGUE[c[1]]) return c[1];
  for (const p of (req.headers.get("accept-language") || "").split(",")) {
    const l = p.trim().slice(0, 2).toLowerCase();
    if (LINGUE[l]) return l;
  }
  return "en";
}

// languages of a message to a user (email, Telegram): their language, or Italian, followed by English
export const lingueMessaggio = (l) => [l === "es" || l === "fr" || l === "de" ? l : "it", "en"];

// data for one page, as a JS literal: dictionary, patterns of the server messages, OCPP log events, country names
const serRe = (l) => (l || []).map(([re, r]) => [re.source, re.flags, r]);
const cache = new Map();
export function i18nPagina(l, pagina) {
  const k = l + "|" + pagina;
  if (!cache.has(k)) {
    const d = DIZ[l] || {}, main = pagina === "main", pref = pagina === "login" || pagina === "invito";
    const o = { lingue: LINGUE, loc: LOCALE[l] || "it-IT", d: d[pagina] || {}, pat: main ? serRe(d.pat) : [], ocpp: main ? serRe(d.ocpp) : [],
      paesi: pref ? d.paesi || {} : {} };
    // safe inside <script>: no "</script>", no line separators
    cache.set(k, JSON.stringify(o).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029"));
  }
  return cache.get(k);
}
// fills the language placeholders of a page: __LANG__ and __I18N_<page>__
export const conLingua = (h, l) => h.replace(/__LANG__/g, l).replace(/__I18N_(\w+)__/g, (m, p) => i18nPagina(l, p));

// mail and Telegram texts: template with {name} placeholders, the Italian text is the key
export function tm(l, s, v = {}) {
  const t = l === "it" ? s : (DIZ[l] && DIZ[l].mail && DIZ[l].mail[s]) || s;
  return t.replace(/\{(\w+)\}/g, (m, k) => (v[k] === undefined || v[k] === null ? "" : String(v[k])));
}
