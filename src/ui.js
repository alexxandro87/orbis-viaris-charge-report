// Single-page UI (HTML + JS, no libraries). Never use backticks inside the page code (it lives in String.raw templates).
export const HTML = String.raw`<!doctype html>
<html lang="it">
<head>
<script>try{var _t=localStorage.getItem("tema");if(_t)document.documentElement.setAttribute("data-t",_t)}catch(e){}</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__TITLE__</title>
<style>
*{box-sizing:border-box}
body{margin:0;font:15px/1.4 system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--tx)}
header{padding:8px 16px;background:var(--card);border-bottom:1px solid var(--line)}
h1{font-size:16px;margin:0}
.top{display:flex;align-items:center;justify-content:space-between;gap:6px 16px;flex-wrap:wrap}
.riga2{margin-top:6px}
.utente,.azioni{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.utente{font-size:13px}
header button{padding:4px 10px;font-size:13px}
button.l{border:0;padding:0 2px}
.pill{background:var(--acc);color:var(--btx);border-radius:10px;padding:1px 8px;font-size:11px}
.pwbox{display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:flex-end;margin-top:8px}
.pwbox input{padding:5px 8px;font-size:13px}
.sub{color:var(--mut);font-size:13px}
main{padding:12px 16px;max-width:1400px;margin:0 auto}
.bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0}
button,select,input{font:inherit;padding:7px 10px;border:1px solid var(--line);border-radius:6px;background:var(--card);color:var(--tx)}

nav{display:flex;gap:4px;margin:12px 0 0;border-bottom:1px solid var(--line)}
nav button{border:0;border-bottom:3px solid transparent;border-radius:0;background:none;color:var(--tx)}
#navN,#navUN,#navTN{background:#c62828;color:#fff;border-radius:10px;padding:1px 7px;font-size:11px;font-weight:600;margin-left:6px;vertical-align:middle}#navN:empty,#navUN:empty,#navTN:empty{display:none}.piede{margin:24px auto 12px;text-align:center;font-size:12px;color:var(--mut)}.piede a{color:var(--acc)}.noprint-f{}@media print{.piede{display:none}}
nav button.on{border-bottom-color:var(--acc);font-weight:600}
.card{background:var(--card);border:1px solid var(--line);border-radius:8px;padding:12px;margin:12px 0}
h2{font-size:15px;margin:0 0 8px}
.w{overflow-x:visible}input,select,textarea{max-width:100%}
table{border-collapse:collapse;width:100%;font-size:calc(15px*var(--z,1))}
th,td{padding:6px 7px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap}
table.wr th,table.wr td{white-space:normal;overflow-wrap:break-word;vertical-align:top}
th{color:var(--mut);font-weight:600;font-size:.87em}
td.n,th.n{text-align:right}
tr.t td{font-weight:600;border-top:2px solid var(--tx)}
tr.cl{cursor:pointer}tr.cl:hover{background:var(--bg)}
#tabO th{position:sticky;top:0;background:var(--card)}#tabO td,#tabO th{padding:4px 8px}
.err{color:var(--err)}.ok{color:var(--acc)}
.tot{font-size:16px;font-weight:600;text-align:right;margin-top:8px}
.hide{display:none}
@media print{.noprint{display:none!important}body{background:#fff;color:#000}.card{border:0}}
#tabU td:nth-child(3){white-space:normal}#tabU td.n{white-space:nowrap;width:1%}#tabU button{padding:3px 9px;font-size:13px}
.solostampa{display:none}@media print{.solostampa{display:block;font-weight:600;margin-bottom:6px}}
tr.rs{cursor:pointer}tr.rs:hover td{background:var(--bg)}tr.rs.sel td{background:rgba(90,140,255,.28)}tr.old td{color:var(--mut)}tr.ut{cursor:pointer}tr.ut:hover td{background:var(--bg)}tr.det td{background:var(--bg);color:var(--mut);font-size:.92em}
tr.det td:first-child{padding-left:24px}
nav{flex-wrap:wrap}button{white-space:nowrap}.top h1{min-width:0;overflow-wrap:anywhere}@media(max-width:700px){main{padding:10px 8px}.w{overflow-x:visible}table.tbm{min-width:0;display:block}table.tbm thead,table.tbm tr:has(>th){display:none}table.tbm tbody{display:block}table.tbm tr{display:block;border:1px solid var(--line);border-radius:8px;margin:0 0 8px;padding:4px 10px;background:var(--card)}table.tbm td{display:flex;justify-content:space-between;align-items:center;gap:12px;border:0;padding:4px 0;white-space:normal;text-align:right;overflow-wrap:anywhere}table.tbm td::before{content:attr(data-l);color:var(--mut);font-weight:600;font-size:13px;text-align:left;flex:none;max-width:45%}table.tbm td[data-l=""]::before{display:none}table.tbm td[data-l=""]{justify-content:flex-start;flex-wrap:wrap}table.tbm tr.det{margin:-6px 0 8px;border-top:0;border-radius:0 0 8px 8px}table.tbm td.n{width:auto}nav button{padding:7px 8px}.bar>label{display:block;flex:1 1 100%;min-width:0}.bar>label input,.bar>label select,.bar>label textarea,.bar>input,.bar>select,textarea{width:100%;max-width:100%}.bar>input[type=checkbox],.bar>label input[type=checkbox]{width:auto}}
</style>
</head>
<body>
<header class="noprint">
  <div class="top">
    <div id="titoloM"></div>
    <div class="marca"><span class="logo" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg></span><h1>__TITLE__ <span class="ver">__VERSION__</span></h1></div>
    <div class="utente">
      <span class="ver verM">__VERSION__</span>
      <span id="chi"></span>
      <select class="lingua" id="bLang" aria-label="Lingua / Language"></select>
      <button class="l" id="bTema"></button>
      <button class="l" id="bPw">Cambia password</button>
      <button id="bEsci">Esci</button>
    </div>
  </div>
  <div class="top riga2">
    <div class="sub"><span id="stato">Caricamento...</span> <span class="err" id="esito"></span></div>
    <div class="azioni">
      <button class="p" id="bScarica">Scarica dalla colonnina</button>
      <button id="bImporta">Importa CSV Viaris</button>
      <input type="file" id="fCsv" accept=".csv" multiple class="hide">
    </div>
  </div>
  <div class="pwbox hide" id="boxPw">
    <input type="password" id="pwOld" placeholder="Password attuale" autocomplete="current-password">
    <input type="password" id="pwNew" placeholder="Nuova password (min. 12, con maiuscola, numero e simbolo)" autocomplete="new-password">
    <input type="password" id="pwNew2" placeholder="Ripeti la nuova password" autocomplete="new-password">
    <button class="p" id="bPwOk">Salva</button>
    <span class="sub err" id="pwEsito"></span>
  </div>
</header>
<nav class="noprint">
  <button class="on" data-t="t1">Report mensile</button>
  <button data-t="t3">Tutte le sessioni</button>
  <button data-t="t2">Storico annuale</button>
  <button data-t="t4" id="navUt" class="hide">Utenti/Card<span id="navUN"></span></button>
  <button data-t="t13" id="navPre" class="hide">Prepagate</button>
  <button data-t="t9" id="navL">Monitoraggio<span id="navN"></span></button>
  <button data-t="t5" id="navM" class="hide">Le mie ricariche</button>
  <button data-t="t10" id="navP" class="hide">Il mio profilo</button>
  <button data-t="t6" id="navSet" class="hide">Impostazioni</button>
  <button data-t="t8" id="navOc" class="hide">OCPP</button>
  <button data-t="t11" id="navT" class="hide">Assistenza<span id="navTN"></span></button>
  <button data-t="t12" id="navI" class="hide">Informazioni</button>
</nav>
<main>

<section id="t1">
  <div class="solostampa">__TITLE__</div>
  <div class="bar noprint">
    <select id="selAnno"></select>
    <select id="selMese"></select>
    <label>Prezzo €/kWh <input id="prezzo" size="7" inputmode="decimal"></label>
    <label>IVA % <input id="iva" size="4" inputmode="decimal"></label>
    <button class="p" id="bPrezzo">Salva prezzo</button>
    <button id="bReinvia" class="hide">Reinvia report</button>
  </div>
  <div class="sub err noprint" id="avviso"></div>
  <div class="card">
    <h2 id="titoloRep"></h2>
    <div class="sub" id="subRep"></div>
  </div>
  <div class="card">
    <h2>Ricariche con tessera</h2>
    <div class="w"><table id="tabT"></table></div>
  </div>
  <div class="card hide" id="cApp">
    <h2>Ricariche avviate da app (non attribuite a una tessera)</h2>
    <div class="w"><table id="tabA"></table></div>
  </div>
  <div class="card"><div class="tot" id="totale"></div></div>
  <div class="bar noprint">
    <button id="bStampa">Stampa / PDF</button>
    <button id="bCsv">Esporta CSV</button>
  </div>
</section>

<section id="t2" class="hide">
  <div class="bar noprint">
    <select id="selAnnoS"></select>
    <button id="bCsvAnno">Esporta CSV</button>
  </div>
  <div class="card"><div class="w"><table id="tabS"></table></div>
  <div class="tot" id="totAnno"></div>
  <div class="sub noprint">Tocca un mese per aprirlo. I mesi senza prezzo mostrano solo i kWh.</div></div>
</section>

<section id="t8" class="hide">
  <div class="card">
    <h2>Impostazioni OCPP</h2>
    <div class="bar"><label>Indirizzo da dare alla colonnina <input id="oUrl" readonly size="72"></label></div>
    <div class="bar"><button id="bOAgg">Aggiorna</button> <button id="bORig">Rigenera codice segreto</button> <span class="sub err" id="oEsito"></span></div>
    <div class="sub" id="oStato"></div>
    <div class="bar"><label><input type="checkbox" id="oListaOn"> Invia la lista tessere alla colonnina (OCPP SendLocalList)</label> <button id="bOSync">Sincronizza lista tessere</button></div>
    <div class="sub" id="oLista"></div>
    <div class="sub">Opzione disattivata di serie: il server non manda nessun elenco tessere. Se la attivi, le tessere attive vengono inviate all'avvio della colonnina, circa 30 secondi dopo una modifica e con il pulsante; mai con un'auto collegata o in carica. Dopo l'invio i nomi vengono rimessi sulla colonnina. Provato solo su firmware Orbis 7.2.53.</div>
    <div class="bar"><label>Conferma collegamento ogni <input id="oHb" type="number" min="1" max="60" style="width:5em"> minuti</label> <button id="bOHb">Salva</button> <span class="sub" id="oHbTxt"></span></div>
<label class="sub"><input type="checkbox" id="oRaw"> Mostra i messaggi grezzi</label>
    <div style="overflow:auto;height:240px;border:1px solid var(--line);border-radius:6px"><table id="tabO" style="table-layout:fixed;width:100%"></table></div>
    <div class="bar"><button id="bOPrec">Mostra precedenti</button> <span class="sub" id="oPrecTxt"></span></div>
    <div class="sub">Il server riceve e registra i messaggi della colonnina e le manda solo le impostazioni scelte qui sotto (e la lista tessere, se attivata). Il codice dentro l'indirizzo è segreto, chi non lo conosce non può collegarsi. Se lo rigeneri devi aggiornare l'indirizzo sulla colonnina.</div>
  </div>
  <div class="card">
    <h2>Comandi OCPP</h2>
    <div class="sub" id="ocStato"></div>
    <div class="bar"><label>Comando <select id="ocCmd">
      <option value="GetConfiguration">GetConfiguration - legge tutte le impostazioni OCPP</option>
      <option value="GetLocalListVersion">GetLocalListVersion - versione della lista tessere offline</option>
      <option value="TriggerMessage">TriggerMessage - fa inviare subito un messaggio</option>
      <option value="RemoteStopTransaction">RemoteStopTransaction - ferma la ricarica in corso (non provato)</option>
      <option value="Reset">Riavvia colonnina (non cancella nulla, solo se libera)</option>
    </select></label>
    <label class="hide" id="ocMsgL">Messaggio <select id="ocMsg"><option>MeterValues</option><option>StatusNotification</option><option>Heartbeat</option><option>DiagnosticsStatusNotification</option><option>FirmwareStatusNotification</option></select></label>
    <button class="p" id="bOcInvia">Invia</button> <span class="sub err" id="ocEsito"></span></div>
    <div id="ocRis"></div>
    <div class="sub">I comandi di lettura non cambiano nulla. RemoteStopTransaction agisce sulla colonnina e non è ancora stato provato su quella reale: chiede conferma prima dell'invio. La risposta arriva dalla colonnina stessa, entro 15 secondi.</div>
  </div>
  <div class="card">
    <h2>Parametri avanzati della colonnina</h2>
    <div id="oPar"></div>
    <div class="sub">Il server manda alla colonnina solo i valori che cambi, subito o al primo messaggio utile, e li rimanda a ogni riavvio. Per vedere i valori letti dalla colonnina usa GetConfiguration.</div>
  </div>
</section>


<section id="t5" class="hide">
  <div class="bar noprint"><select id="selAnnoM"></select> <select id="selMeseM"></select> <button class="p" id="bPdfM">Scarica PDF</button></div>
  <div id="cPre"></div>
  <div class="card">
    <h2 id="mieTit">Le mie ricariche</h2>
    <div class="w"><table id="tabM"></table></div>
    <div class="tot" id="totM"></div>
    <div class="sub noprint hide" id="noteM">I mesi senza prezzo (-) non hanno ancora l'importo perché il prezzo dell'energia non è ancora stato inserito dall'Amministratore: l'importo viene calcolato appena il prezzo è disponibile.</div>
    <div class="sub noprint">Tocca un mese per vedere le singole ricariche.</div>
  </div>
</section>

<section id="t10" class="hide">
  <div class="card">
    <h2>Il mio profilo</h2>
    <table id="tabP"></table>
    <h3 style="margin:16px 0 6px;font-size:14px">Messaggi di servizio</h3>
    <label class="chk" style="display:flex;gap:8px;margin:6px 0"><input type="checkbox" id="pTg"> <span>Acconsento a ricevere messaggi di servizio su Telegram</span></label>
    <div class="bar"><button class="p" id="bProfilo">Salva</button> <span class="sub" id="pEsito"></span></div>
    <div id="pTgBox" class="sub hide">Telegram: <b id="pTgStato"></b> <button type="button" class="l" id="bTgCollega">Collega Telegram</button><button type="button" class="l hide" id="bTgScollega">Scollega Telegram</button><div id="pTgLink"></div></div>
    <div class="sub">Il consenso è facoltativo. Puoi cambiarlo o revocarlo quando vuoi da qui: la modifica vale subito e ne resta traccia con data e ora. I tuoi dati sono usati solo per erogare il servizio, senza cessione a terzi e senza pubblicità.</div>
    <div class="sub">Per correggere i dati o chiederne la cancellazione apri una richiesta dalla scheda «Assistenza»<span id="pContatto"></span>.</div>
    <div class="sub" id="pAgg"></div>
  </div>
</section>

<section id="t11" class="hide">
  <div class="card" id="cTkNuovo">
    <h2>Assistenza</h2>
    <div class="card hide" id="cSenzaT" style="margin:0 0 10px">Non hai ancora una tessera. Puoi richiederla qui sotto<span class="fee-par"></span>: ti contatteremo per la consegna e il pagamento. Se l'hai già, attendi che l'Amministratore la abbini al tuo account.</div>
    <div class="sub">Da qui puoi inviare una richiesta all'Amministratore. Riceverai l'esito per email.</div>
    <div class="bar"><label>Tipo di richiesta <select id="tkTipo">
      <option value="tessera">Tessera smarrita o danneggiata</option><option value="nuova">Richiesta nuova tessera</option><option value="dati">Correzione dei dati</option>
      <option value="cancellazione">Cancellazione dei dati / dell'utenza</option><option value="colonnina">Problema con la colonnina</option><option value="altro">Altro</option></select></label></div>
    <div class="bar" id="tkTessBox"><label>Tessera <select id="tkTess"></select></label> <label>Motivo <select id="tkMotivo"><option value="smarrita">Smarrita</option><option value="danneggiata">Danneggiata</option></select></label></div>
    <div class="sub" id="tkTessInfo">Per sicurezza la tessera viene bloccata subito sulla colonnina. Se la ritrovi, scrivi all'Amministratore: può sbloccarla. Se non la ritrovi o è danneggiata dovrai richiederne una nuova<span class="fee-par"></span>.</div>
    <div class="sub" id="tkNuovaInfo" style="display:none"><span class="fee-info"></span>Ti contatteremo al telefono indicato nel tuo profilo per la consegna e il pagamento. Il messaggio è facoltativo (ad esempio gli orari in cui sei reperibile).</div>
    <div class="bar hide" id="tkPagBox"><label>Come vuoi pagare<span class="fee-par"></span> <select id="tkPagSel"></select></label></div>
    <div class="sub" id="tkPag"></div>
    <div id="tkDatiBox" class="hide">
      <div class="sub">Compila solo i campi da cambiare. I telefoni con il prefisso internazionale (es. +39 333 1234567).</div>
      <div class="bar"><input id="tkNome" placeholder="Nome" size="14"><input id="tkCognome" placeholder="Cognome" size="14"><input id="tkTel1" placeholder="Telefono" size="16"><input id="tkTel2" placeholder="Secondo telefono" size="16"></div>
    </div>
    <div class="sub" id="tkCancInfo" style="display:none">Se l'Amministratore approva, l'utenza e i tuoi dati personali vengono cancellati; restano solo i dati di consumo che il gestore deve conservare per legge.</div>
    <label style="display:block">Messaggio<br><textarea id="tkTesto" rows="4" maxlength="1000" style="width:100%;font:inherit;padding:7px 10px;border:1px solid var(--line);border-radius:6px;background:var(--card);color:var(--tx)"></textarea></label>
    <div class="bar"><button class="p" id="bTk">Invia richiesta</button> <span class="sub" id="tkEsito"></span></div>
  </div>
  <div class="card"><h2 id="tkTit">Le mie richieste</h2><div id="listaT"></div></div>
</section>

<section id="t12" class="hide">
  <div class="card">
    <h2>Informazioni e contatti</h2>
    <table>
      <tr><th>Software</th><td>Orbis Viaris Charge Report</td></tr>
      <tr id="infoContatto" class="hide"><th>Contatto del gestore</th><td id="infoContattoV"></td></tr>
      <tr><th>Codice sorgente</th><td><a href="https://github.com/alexxandro87/orbis-viaris-charge-report" target="_blank" rel="noopener">github.com/alexxandro87/orbis-viaris-charge-report</a></td></tr>
      <tr><th>Licenza</th><td><a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">GNU AGPL-3.0</a></td></tr>
    </table>
    <div class="sub">Il contatto del gestore si imposta nella scheda Impostazioni. Per errori del software o proposte usa il codice sorgente (issue su GitHub).</div>
  </div>
</section>

<section id="t13" class="hide">
  <div class="card">
    <h2>Tessere prepagate</h2>
    <div class="w"><table id="tabPre"></table></div>
    <div class="sub">Il prezzo serve solo a scalare il credito e lo decidi tu, tessera per tessera. Il consumo conta le ricariche dalla data di attivazione, compresa quella in corso. A credito esaurito la tessera viene bloccata sulla colonnina e la ricarica in corso viene fermata da remoto; l'utente riceve mail e messaggio. Aggiungere credito sblocca la tessera. Tocca una riga per sceglierla.</div>
  </div>
  <div class="card">
    <h2>Aggiungi credito o modifica</h2>
    <div class="bar" style="flex-wrap:wrap"><label>Tessera <select id="prSel"></select></label> <label>Importo da aggiungere <input id="prImp" type="number" min="0" step="0.01" style="width:6em"> €</label> <label>Prezzo €/kWh <input id="prPr" type="number" min="0.01" step="0.01" style="width:6em"></label> <label>Avviso sotto <input id="prSo" type="number" min="0" step="1" style="width:5em"> €</label></div>
    <div class="bar"><button class="p" id="bPrSalva">Salva</button> <button id="bPrTogli">Torna a consumo</button> <span class="sub err" id="prEsito"></span></div>
    <div class="sub" id="prStor"></div>
  </div>
  <div class="card">
    <h2>Rendi prepagata una tessera esistente</h2>
    <div class="bar" style="flex-wrap:wrap"><label>Tessera <select id="prNuova"></select></label> <label>Prezzo €/kWh <input id="prNPr" type="number" min="0.01" step="0.01" placeholder="0,40" style="width:6em"></label> <label>Credito iniziale <input id="prNCr" type="number" min="0" step="0.01" style="width:6em"> €</label> <label>Avviso sotto <input id="prNSo" type="number" min="0" step="1" value="5" style="width:5em"> €</label> <button class="p" id="bPrNuova">Attiva prepagata</button> <span class="sub err" id="prNEsito"></span></div>
    <div class="sub">Tessere già presenti sulla colonnina. Da questo momento le loro ricariche scalano il credito. Le tessere nuove si aggiungono dalla scheda Utenti/Card scegliendo il tipo «Prepagata».</div>
  </div>
</section>

<section id="t9" class="hide">
  <div class="card">
    <h2>Ricarica in corso</h2>
    <div id="liveTit" style="font-size:20px;font-weight:600;margin-bottom:8px"></div>
    <table id="tabL"></table>
    <div class="sub" id="liveAgg"></div>
  </div>

  <div class="card solo-adm hide" id="cardNot">
    <h2>Notifiche</h2>
    <div id="listaNot"></div>
    <button id="bNotLette" class="hide">Segna come lette</button>
    <p class="sub">Qui compaiono gli avvisi che non partono via mail: controlli solo notifica (consumi Cloudflare), mail non inviate, nessun destinatario impostato.</p>
  </div>
  <div class="card solo-adm hide">
    <h2>Avvisi agli utenti</h2>
    <div class="bar"><label><input type="checkbox" id="avOn"> Avvisa chi ha caricato quando la ricarica è finita: riepilogo con orari e kWh e invito a scollegare l'auto</label></div>
    <div class="bar"><label>Promemoria dopo <input id="avAt" type="number" min="0" max="240" style="width:5em"> minuti se l'auto è ancora collegata (0 = nessuno)</label> <label>Secondo promemoria dopo <input id="avSo" type="number" min="0" max="1440" style="width:5em"> minuti (0 = nessuno)</label></div>
    <div class="bar"><button class="p" id="bAv">Salva</button> <span class="sub err" id="avEsito"></span></div>
    <div class="sub">Il riepilogo (inizio, fine, durata, kWh; per le prepagate anche costo e credito residuo) parte appena la ricarica risulta finita: subito se il cavo è stato staccato o la tessera passata, dopo 5 minuti se la presa è in sospeso o il contatore è fermo ad auto piena. Arriva per mail all'utente registrato con la tessera usata e, per chi lo ha attivato, anche su Telegram. Il controllo gira ogni 5 minuti, quindi può arrivare fino a 5 minuti dopo. Nessun riepilogo per le ricariche a 0 kWh.</div>
  </div>
  <div class="card solo-adm hide">
    <h2>Destinatari malfunzionamenti</h2>
    <div class="bar"><label>A (separa più indirizzi con la virgola) <input id="mA" size="48" autocomplete="off"></label></div>
    <div class="bar"><label>In copia (separa più indirizzi con la virgola) <input id="mCc" size="48" autocomplete="off"></label></div>
    <div class="w"><table id="tabMal"></table></div>
    <div class="bar"><button class="p" id="bMal">Salva</button> <button id="bMalProva">Invia mail di prova</button> <span class="sub err" id="mEsito"></span></div>
    <div class="sub" id="mUlt"></div>
    <div class="sub">Tutti i controlli partono disattivati: accendi quelli che vuoi. Il controllo gira ogni 5 minuti. Quando un problema dura più della soglia parte una mail con il tipo di malfunzionamento, e una seconda quando rientra; gli avvisi singoli (riavvio, IP, firmware) arrivano una volta sola. Il controllo della Conferma collegamento tiene conto del suo intervallo (soglia almeno il doppio).</div>
  </div>
  <div class="card solo-adm hide">
    <h2>Ultimi episodi</h2>
    <div class="w"><table id="tabEp"></table></div>
  </div>
  <div class="card solo-adm hide">
    <h2>Consumi Cloudflare</h2>
    <h3 style="margin:0 0 6px;font-size:14px">Mail e messaggi inviati dal sito</h3>
    <div class="w"><table id="tabMsg"></table></div>
    <p class="sub" id="msgNota"></p>
    <h3 style="margin:14px 0 6px;font-size:14px">Cosa consuma (conteggio del sito)</h3>
    <div class="w"><table id="tabChi"></table></div>
    <p class="sub" id="chiNota"></p>
    <h3 style="margin:14px 0 6px;font-size:14px">Cloudflare</h3>
    <div class="w"><table id="tabCf"></table></div>
    <h3 style="margin:14px 0 6px;font-size:14px">Riepilogo mensile</h3>
    <div class="w"><table id="tabCfM"></table></div>
    <p id="cfSpazio" style="margin:10px 0 0"></p>
    <p class="sub" id="cfNota"></p>
  </div>
</section>

<section id="t4" class="hide">
  <div class="card">
    <h2>Tessere RFID della colonnina</h2>
    <div class="bar"><label>Codice tessera <input id="rId" size="12" autocomplete="off"></label> <label>Nome <input id="rNome" size="28" maxlength="25" autocomplete="off"></label> <label>Scadenza <input id="rScad" type="date"></label> <label id="rDalL">Assegnata dal <input id="rDal" type="date"></label> <label>Stato <select id="rStato"><option value="0">Attiva</option><option value="1">Bloccata</option><option value="2">Scaduta</option><option value="3">Non valida</option></select></label> <label id="rTipoL">Tipo <select id="rTipo"><option value="consumo">A consumo</option><option value="prepagata">Prepagata</option></select></label> <button class="p" id="bRAgg">Aggiungi</button> <button id="bRAnn" class="hide">Annulla</button></div>
    <div class="bar hide" id="rPreBox" style="flex-wrap:wrap"><label>Prezzo €/kWh <input id="rPPr" type="number" min="0.01" step="0.01" placeholder="0,40" style="width:6em"></label> <label>Credito iniziale <input id="rPCr" type="number" min="0" step="0.01" style="width:6em"> €</label> <label>Avviso sotto <input id="rPSo" type="number" min="0" step="1" value="5" style="width:5em"> €</label> <span class="sub">Prepagata: il credito scala con questo prezzo; a zero la tessera viene bloccata. Con credito 0 resta bloccata finché non aggiungi credito dalla scheda Prepagate.</span></div>
    <div class="bar"><button id="bRDis" disabled>Disattivazione Permanente</button> <button id="bRImp">Importa file</button><input id="rFile" type="file" accept=".csv,.txt" class="hide"> <button id="bREsp">Esporta lista</button> <button id="bRLeggi">Rileggi dalla colonnina</button> <button id="bRRip" class="hide">Ripristina lista precedente</button> <span class="sub err" id="rEsito"></span></div>
    <table id="tabR"></table>
    <div class="sub">Clicca su una tessera per selezionarla: Disattivazione Permanente la toglie dalla colonnina (lo storico resta), Modifica cambia nome, stato o data di assegnazione. In grigio le tessere disattivate: le loro ricariche restano attribuite a chi le aveva in quel periodo.</div>
    <div class="sub">Nome al massimo 25 caratteri (oltre, la colonnina lo tronca). Scadenza facoltativa: la tessera vale fino alla fine di quel giorno. Le modifiche vengono scritte subito sulla colonnina. Prima di ogni scrittura il sito tiene una copia della lista precedente. L'import aggiunge le tessere nuove e aggiorna nomi e stati, senza cancellare nulla (va bene sia il file esportato da qui sia il CSV esportato da Viaris).</div>
  </div>
  <div class="card">
    <h2>Utenti</h2>
    <div class="w"><table id="tabU"></table></div>
    <p class="sub" id="cifraInfo"></p>
  </div>
  <div class="card">
    <h2>Invita un utente o modifica i permessi</h2>
    <div class="bar"><input id="uNome" type="email" size="32" placeholder="email dell'utente" autocomplete="off"></div>
    <div class="bar"><label>Tipo di utente
      <select id="uTipo"><option value="g">Gestione (scegli i permessi)</option><option value="c">Utente della colonnina (vede solo le sue ricariche)</option></select></label></div>
    <div class="bar hide" id="uTessBox"><label>Tessera <select id="uTess"></select></label> <label>Altre tessere, facoltativo (Ctrl/⌘ per sceglierne più di una) <select id="uTess2" multiple size="4"></select></label></div>
    <div class="bar hide" id="uAnBox" style="flex-wrap:wrap"><label>Nome <input id="uAnNome" size="14" autocomplete="off"></label> <label>Cognome <input id="uAnCognome" size="14" autocomplete="off"></label> <label>Telefono <input id="uAnTel1" size="14" autocomplete="off" placeholder="+39..."></label> <label>Telefono facoltativo <input id="uAnTel2" size="14" autocomplete="off" placeholder="+39..."></label></div>
    <div class="bar" id="uPerm" style="flex-direction:column;align-items:flex-start;gap:4px">
      <label><input type="checkbox" data-p="report"> Vedere il report mensile</label>
      <label><input type="checkbox" data-p="storico"> Vedere lo storico annuale</label>
      <label><input type="checkbox" data-p="sessioni"> Vedere tutte le sessioni</label>
      <label><input type="checkbox" data-p="prezzo"> Inserire prezzo kWh e IVA</label>
      <label><input type="checkbox" data-p="stampa"> Stampare ed esportare i report</label>
      <label><input type="checkbox" data-p="scarica"> Scaricare dalla colonnina e importare CSV</label>
      <label><input type="checkbox" data-p="app"> Vedere le ricariche avviate da app</label>
      <label><input type="checkbox" data-p="live"> Vedere i dettagli della ricarica in corso (potenza, kWh...)</label>
    </div>
    <div class="bar">
      <button class="p" id="bUInvita">Invia invito</button>
      <button id="bUPerm">Salva solo i permessi</button>
    </div>
    <div class="sub">L'utente riceve una mail con un link monouso (valido 48 ore) per scegliere la propria password al primo accesso.</div>
    <div class="sub err" id="uEsito"></div>
    <input id="uLink" class="hide" readonly size="60">
  </div>
  <div class="card">
    <h2>Canali di contatto</h2>
    <div class="w"><table id="tabCanali"></table></div>
    <p class="sub">Conteggio sugli utenti con profilo. I messaggi inviati per canale, mese per mese, sono nel Monitoraggio (Consumi).</p>
  </div>
  <div class="card">
    <h2>Comunicazione a tutti gli utenti</h2>
    <div class="bar"><label>Oggetto (italiano / inglese) <input id="cmOgg" size="48" autocomplete="off"></label></div>
    <div class="bar"><label style="flex:1">Testo italiano<textarea id="cmIt" rows="5" style="width:100%;display:block"></textarea></label></div>
    <div class="bar"><label style="flex:1">Testo inglese<textarea id="cmEn" rows="5" style="width:100%;display:block"></textarea></label></div>
    <div class="bar"><label><input type="checkbox" id="cmTg"> Anche su Telegram a chi lo ha collegato</label></div>
    <div class="bar"><button id="bCmAnteprima">Anteprima</button> <button class="p hide" id="bCmInvia">Invia</button> <span class="sub" id="cmEsito"></span></div>
    <div id="cmPrev" class="hide" style="border:1px solid var(--line);border-radius:6px;padding:10px;margin-top:8px"></div>
    <div class="sub">Va a tutti gli account attivi con email confermata, tranne l'admin; al massimo 44 mail per invio. L'anteprima mostra quanti sono i destinatari e la mail come arriverà. Ogni riga del testo diventa una riga della mail.</div>
  </div>
</section>

<section id="t6" class="hide">
  <div class="card">
    <h2>Destinatari report mensili</h2>
    <div class="bar"><label>A (separa più indirizzi con la virgola) <input id="dA" size="48" autocomplete="off"></label></div>
    <div class="bar"><label>In copia (separa più indirizzi con la virgola) <input id="dCc" size="48" autocomplete="off"></label></div>
    <div class="bar"><button class="p" id="bDest">Salva destinatari</button> <span class="sub err" id="dEsito"></span></div>
    <div class="sub">Appena viene inserito il prezzo di un mese, il report con i totali per tessera viene inviato a questi indirizzi (le ricariche avviate da app non sono incluse).</div>
  </div>
  <div class="card">
    <h2>Colonnina</h2>
    <div class="sub">Indirizzo da cui il sito scarica i dati e legge le tessere. Per una Orbis bastano l'indirizzo e la porta (es. http://nome-ddns:81); gli altri campi servono solo per colonnine con risposte diverse.</div>
    <div class="bar"><label>Indirizzo (http:// o https://) <input id="cf_url" size="36" placeholder="http://colonnina.esempio.it:81" autocomplete="off"></label> <span class="sub" id="envUrl"></span></div>
    <div class="bar"><label>Utente (se la colonnina chiede una password) <input id="cf_user" size="16" autocomplete="off"></label> <label>Password <input id="cf_password" type="password" size="16" autocomplete="new-password"></label> <label><input type="checkbox" id="cf_pw_clear"> Cancella la password salvata</label></div>
    <div class="bar"><label>Intestazione aggiuntiva, nome <input id="cf_header_name" size="16" autocomplete="off"></label> <label>Valore <input id="cf_header_value" size="24" autocomplete="off"></label></div>
    <div class="bar"><label>Percorso dello storico <input id="cf_history_path" size="40"></label></div>
    <div class="bar"><label>Percorso dell'elenco tessere (deve contenere level=file) <input id="cf_tags_path" size="32"></label> <label>Percorso dello stato (vuoto = non controllato) <input id="cf_status_path" size="28"></label></div>
    <div class="bar"><label>Tempo massimo di risposta, secondi <input id="cf_timeout" inputmode="numeric" style="width:5em"></label> <label><input type="checkbox" id="cf_auto"> Scarico automatico ogni 6 ore</label></div>
    <div class="sub" id="cInfo"></div>
    <details><summary>Formato dei dati (solo se la colonnina non è una Orbis)</summary>
      <div class="bar"><label>Campo JSON con le righe dello storico (vuoto = la risposta è già CSV) <input id="cf_hist_json_field" size="10"></label> <label>Separatore <input id="cf_hist_sep" size="3"></label> <label>Righe da saltare <input id="cf_hist_skip" inputmode="numeric" style="width:4em"></label></div>
      <div class="bar"><label>Colonna inizio <input id="cf_c_start" inputmode="numeric" style="width:4em"></label> <label>Colonna fine <input id="cf_c_end" inputmode="numeric" style="width:4em"></label> <label>Colonna tessera <input id="cf_c_tag" inputmode="numeric" style="width:4em"></label> <label>Colonna tipo <input id="cf_c_type" inputmode="numeric" style="width:4em"></label> <label>Colonna contatore iniziale <input id="cf_c_cont_ini" inputmode="numeric" style="width:4em"></label> <label>Colonna contatore finale <input id="cf_c_cont_fin" inputmode="numeric" style="width:4em"></label></div>
    </details>
  </div>
  <div class="card">
    <h2>Sito</h2>
    <div class="bar"><label>Titolo del sito <input id="cf_title" size="40"></label></div>
    <div class="bar"><label>Fuso orario <input id="cf_tz" size="18" placeholder="Europe/Rome"></label> <label>Valuta <input id="cf_currency" size="4"></label> <label>Etichetta dell'imposta (vuoto = IVA) <input id="cf_tax_label" size="8"></label></div>
    <div class="bar"><label>Costo della tessera (0 = non mostrato) <input id="cf_card_fee" inputmode="decimal" style="width:6em"></label> <label>Contatto del gestore (email o testo, facoltativo) <input id="cf_contact" size="32" autocomplete="off"></label> <label>Identificativo della colonnina nell'indirizzo OCPP <input id="cf_charger_id" size="16"></label></div>
    <div class="sub">Il titolo compare nelle pagine, nelle mail e nei PDF. Il costo della tessera è mostrato a chi la richiede dalla scheda Assistenza, nella registrazione e nelle mail. Il contatto compare nel profilo e nella scheda Informazioni.</div>
  </div>
  <div class="card">
    <h2>Mail</h2>
    <div class="sub">Facoltativo, con Resend (resend.com): serve per inviti, registrazioni, report, ticket e avvisi. Senza, il sito mostra i link da inviare a mano e le mail non partono. La chiave si può anche mettere come secret RESEND_API_KEY.</div>
    <div class="bar"><label>Chiave API Resend <input id="cf_resend_key" type="password" size="28" autocomplete="new-password"></label> <label><input type="checkbox" id="cf_rk_clear"> Cancella la chiave salvata</label></div>
    <div class="bar"><label>Mittente (dominio verificato su Resend) <input id="cf_mail_from" size="40" placeholder="Colonnina &lt;ricariche@esempio.it&gt;" autocomplete="off"></label></div>
  </div>
  <div class="card">
    <h2>Telegram</h2>
    <div class="sub">Facoltativo: un bot Telegram manda agli utenti che danno il consenso gli avvisi di servizio (ricarica terminata, importi del mese, esito delle richieste) e accetta richieste di assistenza con i comandi. Crea il bot con BotFather, incolla qui il token e un segreto lungo a caso, salva le impostazioni e premi «Attiva Telegram» (da rifare se cambia il dominio). Gli utenti collegano Telegram dal proprio profilo.</div>
    <div class="bar"><label>Token del bot <input id="cf_telegram_token" type="password" size="28" autocomplete="new-password"></label> <label>Segreto del webhook <input id="cf_telegram_secret" type="password" size="28" autocomplete="new-password"></label> <button type="button" id="bTgGenera">Genera segreto</button> <label><input type="checkbox" id="cf_tg_clear"> Cancella token e segreto salvati</label></div>
    <div class="bar"><button type="button" id="bTgAttiva">Attiva Telegram</button> <span class="sub" id="msgStato"></span> <span class="sub err" id="msgEsito"></span></div>
  </div>
  <div class="bar"><button class="p" id="bCfSalva">Salva impostazioni</button> <button id="bCfProva">Prova il collegamento</button> <button id="bCfReset">Valori predefiniti</button> <span class="sub err" id="cfEsito"></span></div>
  <div id="cfProva"></div>
  <div class="card">
    <h2>Testi legali</h2>
    <div class="sub">Regolamento d'uso della colonnina e informativa privacy mostrati nella registrazione e nell'invito, in italiano e in inglese (HTML semplice: p, b, ul, li). Vanno scritti da chi gestisce il sito: il progetto non ne fornisce. L'edizione (es. una data) viene salvata nei consensi di ogni utente.</div>
    <div class="bar"><label>Edizione <input id="tl_edizione" size="14" placeholder="es. 01-01-2027"></label></div>
    <div class="bar"><label style="width:100%">Regolamento (italiano)<br><textarea id="tl_reg_it" rows="6" style="width:100%"></textarea></label></div>
    <div class="bar"><label style="width:100%">Regolamento (inglese)<br><textarea id="tl_reg_en" rows="6" style="width:100%"></textarea></label></div>
    <div class="bar"><label style="width:100%">Informativa privacy (italiano)<br><textarea id="tl_priv_it" rows="6" style="width:100%"></textarea></label></div>
    <div class="bar"><label style="width:100%">Informativa privacy (inglese)<br><textarea id="tl_priv_en" rows="6" style="width:100%"></textarea></label></div>
    <div class="bar"><button class="p" id="bTesti">Salva testi</button> <span class="sub err" id="tlEsito"></span></div>
  </div>
  <div class="card">
    <h2>Backup del database</h2>
    <div class="bar"><label>Passphrase del backup (almeno 12 caratteri) <input type="password" id="bkP" autocomplete="new-password"></label>
      <label>Ripetila <input type="password" id="bkP2" autocomplete="new-password"></label>
      <button type="button" id="bBackup">Scarica backup cifrato (.sql.enc)</button> <span id="bkEsito" class="sub"></span></div>
    <div class="sub">Il file viene cifrato nel tuo browser con la passphrase (AES-256-GCM): senza passphrase non si legge e non si può recuperare, quindi conservala. Contiene sessioni, tessere, prezzi e utenti, con gli hash delle password. Per ripristinarlo: node decifra_backup.mjs ricariche_AAAA-MM-GG.sql.enc (chiede la passphrase e crea il file .sql), poi npx wrangler d1 execute ricariche --remote --file=ricariche_AAAA-MM-GG.sql</div>
  </div>
  <div class="card">
    <h2>Archivio delle ricariche</h2>
    <div class="bar"><label>Da <select id="arDa"></select></label> <label>A <select id="arA"></select></label></div>
    <div class="bar"><label>Passphrase (almeno 12 caratteri) <input type="password" id="arP" autocomplete="new-password"></label> <label>Ripetila <input type="password" id="arP2" autocomplete="new-password"></label> <button type="button" class="p" id="bArEsp">Scarica archivio (zip)</button> <span class="sub" id="arEsito"></span></div>
    <div class="sub">Lo zip contiene l'estrazione cifrata del periodo (sessioni, prezzi e nomi delle tessere) e archivio.html, che la apre in qualunque browser con la passphrase: niente da installare, nessuna connessione. La passphrase non viene salvata da nessuna parte, nemmeno nello zip: chi la perde non apre più l'archivio.</div>
    <div class="bar"><label>Elimina dal sito le sessioni fino a <select id="arFino"></select></label> <button type="button" id="bArEl" disabled>Elimina</button></div>
    <div class="sub" id="arElTxt"></div>
    <div class="sub">L'eliminazione libera spazio su Cloudflare ed è possibile solo per i mesi già esportati a partire dall'inizio dello storico, mai per il mese corrente. Le sessioni eliminate spariscono da report e storico del sito: restano solo negli archivi scaricati.</div>
  </div>
  <div class="card hide" id="cPag"><h2>Pagamento tessera</h2><div class="sub">Scrivi solo il nome dell'account a cui deve arrivare il costo della tessera (oppure incolla il link completo). Il costo si imposta qui sopra, nelle impostazioni generali. Le opzioni lasciate vuote non vengono proposte. "Contanti alla consegna" è sempre disponibile. Con PayPal l'utente deve scegliere "Amici e familiari".</div>
    <div class="bar"><label>paypal.me/ <input id="pagPp" placeholder="nome account" size="22" maxlength="200"></label> <label>tag.satispay.com/ <input id="pagSa" placeholder="nome account" size="22" maxlength="200"></label> <label>revolut.me/ <input id="pagRe" placeholder="nome account" size="22" maxlength="200"></label></div>
    <div class="bar"><button id="bPag">Salva</button> <span class="sub" id="pagEs"></span></div></div>
</section>

<section id="t3" class="hide">
  <div class="bar noprint"><label>Utente <select id="selUt"></select></label></div>
  <div class="card"><div class="w"><table id="tabX"></table></div></div>
</section>
</main>
<footer class="piede">Orbis Viaris Charge Report · software libero, <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">licenza AGPL-3.0</a> · <a href="https://github.com/alexxandro87/orbis-viaris-charge-report" target="_blank" rel="noopener">codice sorgente</a></footer>

<script>
var LANG="__LANG__",I18N=__I18N_main__,D=I18N.d;
function rp(s,re,r){return s.replace(re,function(){var g=arguments;return r.replace(/\$(T?)(\d)/g,function(x,t,i){var v=g[+i];if(typeof v!=="string")v="";return t?T(v):v})})}
// language menu: the choice goes in a cookie (the server puts the right dictionary in the page) and survives the reload
function cambiaLingua(l){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax"+(location.protocol==="https:"?";secure":"");try{localStorage.setItem("lang",l)}catch(e){}location.reload()}
function selLingua(){var e=document.getElementById("bLang"),h="";if(!e)return;for(var k in I18N.lingue)h+='<option value="'+k+'"'+(k===LANG?" selected":"")+">"+I18N.lingue[k]+"</option>";e.innerHTML=h;e.onchange=function(){cambiaLingua(e.value)}}
// language chosen before v2.20 (kept in the browser only): moved to the cookie once
(function(){try{var l=localStorage.getItem("lang"),c=/(^|;\s*)lang=/;if(l&&l!==LANG&&I18N.lingue[l]&&!c.test(document.cookie)){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax";if(c.test(document.cookie))location.reload()}}catch(e){}})();
var LOC=I18N.loc;
// messages built by the server with a variable part: prefix/pattern translated, the detail kept as is
var PAT=I18N.pat.map(function(p){return [new RegExp(p[0],p[1]),p[2]]});
function T(s){
  if(LANG==="it"||s===null||s===undefined)return s;
  if(D.hasOwnProperty(s))return D[s];
  if(typeof s!=="string")return s;
  for(var i=0;i<PAT.length;i++){var p=PAT[i];if(p[0].test(s)){var rest=rp(s,p[0],p[1]);
    var m=/^(.*?: )(.+)$/.exec(rest);if(m&&m[2].length<s.length)return m[1]+T(m[2]);   // the detail may itself be a known message
    return rest}}
  return s;
}
function Tm(s){var p=String(s).split(" ");p[0]=T(p[0]);return p.join(" ")}
function trDom(){
  if(LANG==="it")return;
  document.documentElement.lang=LANG;
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,L=[];
  while(n=w.nextNode())L.push(n);
  L.forEach(function(x){var v=x.nodeValue,k=v.trim();if(k&&D.hasOwnProperty(k))x.nodeValue=v.replace(k,D[k])});
  document.querySelectorAll("[placeholder]").forEach(function(e){e.placeholder=T(e.placeholder)});
  document.querySelectorAll("[title]").forEach(function(e){e.title=T(e.title)});
}
var MESI=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
function $(i){return document.getElementById(i)}
function it(x,d){if(x===null||x===undefined)return "-";d=(d===undefined)?2:d;return x.toLocaleString(LOC,{minimumFractionDigits:d,maximumFractionDigits:d})}
function api(p,o){return fetch(p,o).then(function(r){if(r.status===401){location.reload();return new Promise(function(){})}return r.json()})}
function post(p,b){return api(p,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(b)})}
function b64(t){return btoa(String.fromCharCode.apply(null,new TextEncoder().encode(t)))}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
var SEP=LANG==="en"?",":";";
function nf(x,d){if(x===null||x===undefined)return "-";d=(d===undefined)?2:d;return LANG==="en"?x.toFixed(d):it(x,d)}
function J(a){return a.map(function(v){v=String(v);return(LANG==="en"&&/[",]/.test(v))?'"'+v.replace(/"/g,'""')+'"':v}).join(SEP)}
function row(cells,cls){return "<tr"+(cls?' class="'+cls+'"':"")+">"+cells.join("")+"</tr>"}
function td(v,n){return "<td"+(n?' class="n"':"")+">"+v+"</td>"}
function th(v,n){return "<th"+(n?' class="n"':"")+">"+v+"</th>"}

function pwUguali(a,b){var i=$(b),d=document.createElement("div");d.className="pwm";var dopo=i.closest("label")||(i.nextElementSibling&&i.nextElementSibling.className==="occhio"?i.nextElementSibling:i);dopo.insertAdjacentElement("afterend",d);function c(){var x=$(a).value,y=i.value;d.className="pwm"+(y?(x===y?" ok":" no"):"");d.textContent=y?T(x===y?"Le due password coincidono":"Le due password non coincidono"):""}i.addEventListener("input",c);$(a).addEventListener("input",c)}
function occhi(){document.querySelectorAll('input[type="password"]').forEach(function(i){if(i.nextElementSibling&&i.nextElementSibling.className==="occhio")return;var b=document.createElement("button");b.type="button";b.className="occhio";b.textContent=T("mostra");b.onclick=function(){var v=i.type==="password";i.type=v?"text":"password";b.textContent=T(v?"nascondi":"mostra")};i.insertAdjacentElement("afterend",b)})}
occhi();pwUguali("pwNew","pwNew2");trDom();
selLingua();(function(){var b=$("bTema");function cur(){return document.documentElement.getAttribute("data-t")||"auto"}function lab(){var m={auto:"◐ Auto",light:T("☀ Giorno"),dark:T("☾ Notte")};b.textContent=m[cur()]}lab();b.onclick=function(){var n={auto:"light",light:"dark",dark:"auto"}[cur()];if(n==="auto")document.documentElement.removeAttribute("data-t");else document.documentElement.setAttribute("data-t",n);try{if(n==="auto")localStorage.removeItem("tema");else localStorage.setItem("tema",n)}catch(e){}lab()}})();function adattaNav(){var n=document.querySelector("nav");if(!n)return;var b=[].filter.call(n.querySelectorAll("button"),function(x){return x.offsetWidth>0});if(b.length<2)return;
  var f=15;n.style.fontSize=f+"px";while(b[b.length-1].offsetTop!==b[0].offsetTop&&f>12){f-=0.5;n.style.fontSize=f+"px"}}
function adatta(){if(innerWidth<=700)return;adattaNav();document.querySelectorAll("table").forEach(function(t){if(t.id==="tabO")return;var c=t.parentNode;if(!c||!c.clientWidth)return;
  t.classList.remove("wr");var z=1;t.style.setProperty("--z",1);while(t.offsetWidth>c.clientWidth+1&&z>0.74){z-=0.03;t.style.setProperty("--z",z.toFixed(2))}
  if(t.offsetWidth>c.clientWidth+1)t.classList.add("wr")})}
document.addEventListener("click",function(e){if(e.target.closest&&e.target.closest("nav button"))setTimeout(adatta,60)});addEventListener("resize",function(){clearTimeout(window._ad);window._ad=setTimeout(adatta,100)});setTimeout(adatta,700);setTimeout(adatta,2000);
(function(){function lab(){document.querySelectorAll("table:not(.tbm)").forEach(function(t){if(t.id==="tabO"||!t.rows.length)return;var r0=t.rows[0],hs=[];for(var i=0;i<r0.cells.length;i++){if(r0.cells[i].tagName!=="TH")return;hs.push(r0.cells[i].textContent.trim())}t.classList.add("tbm");for(var j=1;j<t.rows.length;j++){var c=t.rows[j].cells;for(var k=0;k<c.length;k++){if(c[k].colSpan>1)continue;c[k].setAttribute("data-l",hs[k]||"")}}})}var tm=0;new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(function(){lab();adatta()},30)}).observe(document.body,{childList:true,subtree:true});lab()})();
var oggi=new Date(), rep=null, righeAnno=[];
(function init(){
  var a="";for(var y=2024;y<=oggi.getFullYear()+1;y++)a+='<option>'+y+'</option>';
  $("selAnno").innerHTML=a;$("selAnnoS").innerHTML=a;$("selAnnoM").innerHTML=a;$("selAnnoM").value=String(oggi.getFullYear());
  var mm='<option value="0">'+T("Tutto l\'anno")+'</option>';for(var j=0;j<12;j++)mm+='<option value="'+(j+1)+'">'+T(MESI[j])+'</option>';$("selMeseM").innerHTML=mm;
  $("selAnno").value=$("selAnnoS").value=String(oggi.getFullYear());
  var m="";for(var i=0;i<12;i++)m+='<option value="'+(i+1)+'">'+T(MESI[i])+'</option>';
  $("selMese").innerHTML=m;$("selMese").value=String(oggi.getMonth()+1);
})();

document.querySelectorAll("nav button").forEach(function(b){b.onclick=function(){
  window.scrollTo(0,0);
  document.querySelectorAll("nav button").forEach(function(x){x.classList.toggle("on",x===b)});
  ["t1","t2","t3","t4","t5","t6","t8","t9","t10","t11","t12","t13"].forEach(function(t){$(t).classList.toggle("hide",t!==b.dataset.t)});
  if(b.dataset.t==="t2")caricaStorico();if(b.dataset.t==="t3")caricaSessioni();if(b.dataset.t==="t4"){caricaUtenti();caricaRfid()}if(b.dataset.t==="t13")caricaPrepagate();if(b.dataset.t==="t5")caricaMie();if(b.dataset.t==="t10")caricaProfilo();if(b.dataset.t==="t11")caricaTicket();if(b.dataset.t==="t9"){caricaLive();if(MONADM){caricaMal();caricaCf();caricaNot()}}if(b.dataset.t==="t8"){ocStato();caricaOcpp()}if(b.dataset.t==="t6"){caricaDest();caricaConfig();caricaTesti();caricaArchivio()}
}});

function caricaStato(){return api("/api/stato").then(function(s){
  var t=s.sessioni?(s.sessioni+(s.sessioni===1?T(" sessione"):T(" sessioni"))+T(" dal ")+s.dal.slice(0,10)+T(" al ")+s.al.slice(0,10)):T("Archivio vuoto");
  if(s.ultimo_scarico)t+=T(" · aggiornato il ")+new Date(s.ultimo_scarico).toLocaleString(LOC,{dateStyle:"short",timeStyle:"short"});
  $("stato").textContent=t;
  $("esito").textContent=s.ultimo_errore?(T("Ultimo scarico non riuscito: ")+s.ultimo_errore):"";
})}

function caricaReport(){
  return api("/api/report?anno="+$("selAnno").value+"&mese="+$("selMese").value).then(function(r){
    if(r.errore)return;
    rep=r;
    $("prezzo").value=r.prezzo===null?"":String(r.prezzo).replace(".",",");
    var iv=(r.prezzo===null)?r.iva_prec:r.iva_pct;
    $("iva").value=String(iv===null||iv===undefined?0:iv).replace(".",",");
    $("titoloRep").textContent=T("Ripartizione costi ricarica - ")+Tm(r.titolo);
    $("subRep").textContent=r.prezzo===null?T("Prezzo non ancora inserito"):(T("Prezzo ")+it(r.prezzo,4)+T(" €/kWh, IVA ")+it(r.iva_pct,1)+"% - "+T("sessioni: ")+r.sessioni);
    $("avviso").textContent=r.prezzo===null?T("Inserisci il prezzo del kWh di questo mese e premi Salva prezzo per calcolare gli importi. Dopo il salvataggio non si potra' piu' modificare."):
      (r.bloccato?T("Prezzo bloccato: una volta inserito non si puo' piu' modificare."):"");
    $("avviso").style.color=r.bloccato?"":"var(--mut)";
    $("prezzo").disabled=$("iva").disabled=$("bPrezzo").disabled=!!r.bloccato;
    $("bReinvia").classList.toggle("hide",!(io&&io.ruolo==="admin"&&r.prezzo!==null));
    var t=row([th(T("Tessera")),th(T("Utente")),th(T("Sess."),1),th(T("kWh"),1),th(T("Imponibile"),1),th(T("IVA"),1),th(T("Totale"),1)]);
    r.tessere.forEach(function(x,i){t+='<tr class="ut" data-i="'+i+'" title="'+T("Clicca per vedere le sessioni")+'">'+td(esc(x.tag))+td(esc(T(x.nome)))+td(x.n,1)+td(it(x.kwh),1)+td(it(x.imp),1)+td(it(x.iva),1)+td(it(x.tot),1)+"</tr>"});
    t+=row([td(""),td(T("Totale tessere")),td(r.tessere.reduce(function(s,x){return s+x.n},0),1),td(it(r.kwh_tessere),1),td(it(r.imp_tessere),1),td(it(r.iva_tessere),1),td(it(r.tot_tessere),1)],"t");
    $("tabT").innerHTML=t;
    document.querySelectorAll("#tabT tr.ut").forEach(function(tr){tr.onclick=function(){
      var nx=tr.nextElementSibling;
      if(nx&&nx.classList.contains("det")){while(tr.nextElementSibling&&tr.nextElementSibling.classList.contains("det"))tr.nextElementSibling.remove();return}
      var x=r.tessere[+tr.dataset.i],h="";
      x.sess.forEach(function(s){h+='<tr class="det"><td></td><td>'+s.inizio+" &rarr; "+s.fine+'</td><td></td><td class="n">'+it(s.kwh)+'</td><td class="n">'+it(s.imp)+'</td><td class="n">'+it(s.iva)+'</td><td class="n">'+it(s.tot)+'</td></tr>'});
      tr.insertAdjacentHTML("afterend",h)}});
    $("cApp").classList.toggle("hide",!r.riservato);
    var a=row([th(T("Inizio")),th(T("Fine")),th(T("kWh"),1),th(T("Imponibile"),1),th(T("IVA"),1),th(T("Totale"),1)]);
    if(!r.app.length)a+='<tr><td colspan="6"><i>'+T("Nessuna ricarica da app in questo mese.")+'</i></td></tr>';
    r.app.forEach(function(x){a+=row([td(x.inizio),td(x.fine),td(it(x.kwh),1),td(it(x.imp),1),td(it(x.iva),1),td(it(x.tot),1)])});
    a+=row([td(T("Totale app")),td(""),td(it(r.kwh_app),1),td(it(r.imp_app),1),td(it(r.iva_app),1),td(it(r.tot_app),1)],"t");
    $("tabA").innerHTML=a;
    $("totale").textContent=T(r.riservato?"TOTALE ":"TOTALE tessere ")+Tm(r.titolo)+": "+it(r.kwh_tot)+T(" kWh - imponibile ")+it(r.imp_tot)+T(" + IVA ")+it(r.iva_tot)+" = "+it(r.eur_tot)+" €";
  });
}

function caricaStorico(){
  return api("/api/storico?anno="+$("selAnnoS").value).then(function(rr){
    if(!Array.isArray(rr))return;
    righeAnno=rr;
    var R=rr.length&&rr[0].riservato;
    var t=row([th(T("Mese")),th(T("Sess."),1),th(T("kWh tess."),1)].concat(R?[th(T("kWh app"),1),th(T("kWh tot."),1)]:[]).concat([th(T("€/kWh"),1),th(T("IVA %"),1),th(T("Totale"),1)]));
    var k=0,e=0;
    rr.forEach(function(x){k+=x.kwh_tot;e+=x.eur_tot||0;
      t+='<tr class="cl" data-m="'+x.mese+'">'+td(T(x.nome))+td(x.sessioni,1)+td(it(x.kwh_tessere),1)+(R?td(it(x.kwh_app),1)+td(it(x.kwh_tot),1):"")+td(it(x.prezzo,4),1)+td(x.prezzo===null?"-":it(x.iva_pct,1),1)+td(it(x.eur_tot),1)+"</tr>"});
    $("tabS").innerHTML=t;
    $("totAnno").textContent=T("TOTALE ")+$("selAnnoS").value+": "+it(k)+" kWh - "+it(Math.round(e*100)/100)+T(" € (IVA inclusa)");
    document.querySelectorAll("#tabS tr.cl").forEach(function(tr){tr.onclick=function(){
      $("selAnno").value=$("selAnnoS").value;$("selMese").value=tr.dataset.m;
      document.querySelector('nav button[data-t="t1"]').click();caricaReport()}});
  });
}

var tutteSess=[];
function disegnaSessioni(){
  var f=$("selUt").value, t=row([th(T("Inizio")),th(T("Fine")),th(T("Tessera")),th(T("Utente")),th(T("kWh"),1),th(T("Imponibile"),1),th(T("IVA"),1),th(T("Totale"),1)]), k=0, n=0, ti=null, tv=null, tt=null;
  function som(a,b){return b===null?a:(a||0)+b}
  tutteSess.forEach(function(s){if(f&&s.nome!==f)return;k+=s.kwh;n++;ti=som(ti,s.imp);tv=som(tv,s.iva);tt=som(tt,s.tot);
    t+='<tr>'+td(s.inizio)+td(s.fine)+td(esc(T(s.tag)))+'<td class="ut" style="cursor:pointer" data-u="'+esc(s.nome)+'">'+esc(T(s.nome))+'</td>'+td(it(s.kwh),1)+td(it(s.imp),1)+td(it(s.iva),1)+td(it(s.tot),1)+'</tr>'});
  function r2c(x){return x===null?null:Math.round(x*100)/100}
  t+=row([td(""),td(""),td(""),td(n+(n===1?T(" sessione"):T(" sessioni"))),td(it(k),1),td(it(r2c(ti)),1),td(it(r2c(tv)),1),td(it(r2c(tt)),1)],"t");
  $("tabX").innerHTML=t;
  document.querySelectorAll("#tabX td.ut").forEach(function(c){c.onclick=function(){$("selUt").value=c.dataset.u;disegnaSessioni()}});
}
function caricaSessioni(){
  return api("/api/sessioni").then(function(ss){
    if(!Array.isArray(ss))return;
    tutteSess=ss;var cur=$("selUt").value,nomi={};
    ss.forEach(function(s){if(s.nome)nomi[s.nome]=1});
    $("selUt").innerHTML='<option value="">'+T("Tutti")+'</option>'+Object.keys(nomi).sort().map(function(n){return '<option value="'+esc(n)+'">'+esc(T(n))+'</option>'}).join("");
    $("selUt").value=nomi[cur]?cur:"";
    disegnaSessioni();
  });
}
$("selUt").onchange=disegnaSessioni;


function tutto(){return caricaStato().then(function(){if(!io||io.perm.report)return caricaReport()})}

$("selAnno").onchange=$("selMese").onchange=caricaReport;
$("selAnnoS").onchange=caricaStorico;

$("bPrezzo").onclick=function(){
  var p=$("prezzo").value.trim().replace(",","."), i=$("iva").value.trim().replace(",",".")||"0";
  if(p!==""&&(isNaN(+p)||+p<=0||+p>=5)){alert(T("Prezzo non valido: scrivi per esempio 0,2845"));return}
  if(isNaN(+i)||+i<0||+i>100){alert(T("IVA non valida: scrivi per esempio 10 oppure 0"));return}
  if(p!==""&&!confirm(T("Dopo il salvataggio il prezzo di questo mese non si potra' piu' modificare e il report verra' inviato per mail ai destinatari e ogni utente ricevera' i propri importi. Confermi?")))return;
  post("/api/prezzo",{anno:+$("selAnno").value,mese:+$("selMese").value,prezzo:p===""?null:+p,iva:+i}).then(function(r){
    if(r.errore)alert(T(r.errore));else $("esito").textContent=esitoMail(r,"Prezzo salvato. ")+(r.utenti&&(r.utenti.inviate||r.utenti.errori)?". "+T("Mail agli utenti: ")+r.utenti.inviate+T(" inviate")+(r.utenti.errori?", "+r.utenti.errori+T(" non riuscite"):"")+(r.utenti.messaggi?", "+r.utenti.messaggi+T(" messaggi Telegram in partenza entro 5 minuti"):""):"");caricaReport()});
};

$("bScarica").onclick=function(){
  var b=$("bScarica");b.disabled=true;$("esito").textContent=T("Scarico in corso...");
  api("/api/scarica",{method:"POST"}).then(function(r){
    $("esito").textContent=r.ok?(T("Scarico: ")+r.lette+T(" sessioni lette, ")+r.nuove+T(" nuove")):(T("Colonnina non raggiungibile: ")+T(r.errore));
    b.disabled=false;tutto().then(function(){if(r.ok)return;});
  }).catch(function(e){$("esito").textContent=T("Errore: ")+e;b.disabled=false});
};

$("bImporta").onclick=function(){$("fCsv").click()};
$("fCsv").onchange=function(){
  var files=Array.prototype.slice.call($("fCsv").files), out=[];
  (function next(){
    if(!files.length){$("esito").textContent=out.join(" | ");$("fCsv").value="";tutto();return}
    var f=files.shift();
    f.text().then(function(t){return post("/api/importa",{nome:f.name,csv:t})}).then(function(r){
      out.push(r.ok?(r.tessera+": "+r.lette+T(" sessioni, ")+r.nuove+T(" nuove")):(f.name+T(": NON importato - ")+T(r.errore)));next()});
  })();
};

function scarico(nome,testo){
  var a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["﻿"+testo],{type:"text/csv;charset=utf-8"}));
  a.download=nome;document.body.appendChild(a);a.click();a.remove();
}
$("bStampa").onclick=function(){window.print()};
$("bCsv").onclick=function(){
  if(!rep)return;var r=rep,L=[];
  L.push("__TITLE__");L.push(T("Ripartizione costi ricarica - ")+Tm(r.titolo));
  L.push(J([T("Prezzo EUR/kWh"),nf(r.prezzo,4),T("IVA %"),nf(r.iva_pct,1)]));L.push("");
  L.push(J([T("Tessera"),T("Utente"),T("Sessioni"),"kWh",T("Imponibile"),T("IVA"),T("Totale")]));
  r.tessere.forEach(function(x){L.push(J([x.tag,T(x.nome),x.n,nf(x.kwh,3),nf(x.imp),nf(x.iva),nf(x.tot)]))});
  L.push(J(["",T("Totale tessere"),"",nf(r.kwh_tessere,3),nf(r.imp_tessere),nf(r.iva_tessere),nf(r.tot_tessere)]));L.push("");
  if(r.riservato){L.push(T("Ricariche avviate da app (non attribuite a una tessera)"));L.push(J([T("Inizio"),T("Fine"),"","kWh",T("Imponibile"),T("IVA"),T("Totale")]));
  r.app.forEach(function(x){L.push(J([x.inizio,x.fine,"",nf(x.kwh,3),nf(x.imp),nf(x.iva),nf(x.tot)]))});
  L.push(J(["",T("Totale app"),"",nf(r.kwh_app,3),nf(r.imp_app),nf(r.iva_app),nf(r.tot_app)]));L.push("")}
  L.push(J(["",T("TOTALE"),"",nf(r.kwh_tot,3),nf(r.imp_tot),nf(r.iva_tot),nf(r.eur_tot)]));
  scarico(T("Ricariche_")+r.anno+"-"+("0"+r.mese).slice(-2)+".csv",L.join("\r\n"));
};
$("bCsvAnno").onclick=function(){
  var R=righeAnno.length&&righeAnno[0].riservato;
  var L=["__TITLE__",T("Storico ricariche ")+$("selAnnoS").value];
  L.push(J([T("Mese"),T("Sessioni"),T("kWh tessere"),R?T("kWh app"):"",T("kWh totali"),T("Prezzo EUR/kWh"),T("IVA %"),T("Imponibile"),T("IVA"),T("Totale")]));
  righeAnno.forEach(function(x){L.push(J([T(x.nome),x.sessioni,nf(x.kwh_tessere,3),nf(x.kwh_app,3),nf(x.kwh_tot,3),nf(x.prezzo,4),x.prezzo===null?"-":nf(x.iva_pct,1),nf(x.imp_tot),nf(x.iva_tot),nf(x.eur_tot)]))});
  scarico(T("Storico_")+$("selAnnoS").value+".csv",L.join("\r\n"));
};

// ---------- tessere prepagate (scheda Prepagate, admin) e riquadro del credito in "Le mie ricariche"
var PRE=[];
function prStato(p){return p.bloccata?'<span class="pst err">'+T("bloccata")+"</span>":p.residuo_cent<=0?'<span class="pst err">'+T("credito esaurito")+"</span>":p.avvisata?'<span class="pst warn">'+T("credito basso, avvisato")+"</span>":'<span class="pst ok">'+T("attiva")+"</span>"}
function prStorico(p){var N={attivata:"attivata",credito:"credito +",prezzo:"prezzo ",soglia:"soglia ",blocco:"blocco",sblocco:"sblocco",avviso:"avviso",stop:"stop ricarica"};
  return (p.storico||[]).slice().reverse().map(function(s){var v=s.tipo==="credito"||s.tipo==="attivata"||s.tipo==="soglia"?it(s.v/100)+" €":s.tipo==="prezzo"?it(s.v/100)+" €/kWh":s.tipo==="stop"?"+"+it(s.v/1000,1)+" kWh":"";
    return oraTxt(s.ts)+" "+T(N[s.tipo]||s.tipo)+(v?" "+v:"")}).join(" · ")}
function caricaPrepagate(){
  return api("/api/prepagate").then(function(r){
    if(!r||r.errore)return;PRE=r.prepagate||[];
    var h=row([th(T("Tessera")),th(T("€/kWh"),1),th(T("Caricato"),1),th(T("Consumato"),1),th(T("Residuo"),1),th(T("Stato"))]);
    PRE.forEach(function(p){
      h+='<tr class="ut" data-tag="'+esc(p.tag)+'">'+td(esc(p.nome||"")+'<br><span class="sub">'+esc(p.tag)+"</span>")+td(it(p.prezzo_cent/100),1)+td(it(p.credito_cent/100)+" €",1)
        +td(it(p.consumato_wh/1000,1)+' kWh<br><span class="sub">'+it(p.consumato_cent/100)+" €</span>",1)
        +td('<b class="'+(p.residuo_cent<=0?"err":p.residuo_cent<=p.soglia_cent?"warn":"")+'">'+it(p.residuo_cent/100)+" €</b>",1)
        +td(prStato(p)+(p.in_corso_wh?" · "+T("in ricarica")+" "+it(p.in_corso_wh/1000,1)+" kWh":""))+"</tr>"});
    $("tabPre").innerHTML=PRE.length?h:'<tr><td class="sub">'+T("Nessuna tessera prepagata")+"</td></tr>";
    var sel=$("prSel"),cur=sel.value;sel.innerHTML=PRE.map(function(p){return '<option value="'+esc(p.tag)+'">'+esc((p.nome?p.nome+" · ":"")+p.tag)+"</option>"}).join("");
    if(cur&&PRE.some(function(p){return p.tag===cur}))sel.value=cur;prMostra();
    $("prNuova").innerHTML=(r.disponibili||[]).map(function(t){return '<option value="'+esc(t.tag)+'">'+esc((t.nome?t.nome+" · ":"")+t.tag)+"</option>"}).join("");
  });
}
function prMostra(){var p=PRE.filter(function(x){return x.tag===$("prSel").value})[0];$("prImp").value="";
  $("prPr").value=p?(p.prezzo_cent/100).toFixed(2):"";$("prSo").value=p?(p.soglia_cent/100).toFixed(0):"";$("prStor").textContent=p?T("Storico: ")+prStorico(p):""}
$("prSel").onchange=prMostra;
$("tabPre").onclick=function(e){var tr=e.target.closest("tr.ut");if(!tr)return;$("prSel").value=tr.dataset.tag;prMostra()};
$("bPrSalva").onclick=function(){
  var p=PRE.filter(function(x){return x.tag===$("prSel").value})[0];if(!p)return;var e=$("prEsito");e.classList.remove("err");e.textContent="...";
  var az=[],imp=parseFloat($("prImp").value);if(imp>0)az.push({azione:"credito",tag:p.tag,importo:imp});
  var pr=parseFloat($("prPr").value);if(pr>0&&Math.round(pr*100)!==p.prezzo_cent)az.push({azione:"prezzo",tag:p.tag,prezzo:pr});
  var so=parseFloat($("prSo").value);if(so>=0&&Math.round(so*100)!==p.soglia_cent)az.push({azione:"soglia",tag:p.tag,soglia:so});
  if(!az.length){e.textContent=T("Niente da salvare");return}
  var k=0,err=null;function next(){if(k>=az.length||err){caricaPrepagate().then(function(){e.classList.toggle("err",!!err);e.textContent=err?T(err):T("Salvato")});return}
    post("/api/prepagate",az[k++]).then(function(r){if(r.errore)err=r.errore;next()})}next()};
$("bPrTogli").onclick=function(){var p=PRE.filter(function(x){return x.tag===$("prSel").value})[0];if(!p)return;
  if(!confirm(T("Riportare la tessera a consumo? Il credito residuo non viene più controllato e la tessera, se bloccata per il credito, viene sbloccata.")))return;
  post("/api/prepagate",{azione:"rimuovi",tag:p.tag}).then(function(r){$("prEsito").textContent=r.errore?T(r.errore):T("Salvato");caricaPrepagate()})};
$("bPrNuova").onclick=function(){var e=$("prNEsito");e.classList.remove("err");e.textContent="...";
  post("/api/prepagate",{azione:"attiva",tag:$("prNuova").value,prezzo:$("prNPr").value,credito:$("prNCr").value||0,soglia:$("prNSo").value}).then(function(r){
    e.classList.toggle("err",!!r.errore);e.textContent=r.errore?T(r.errore):T("Tessera attivata come prepagata");if(!r.errore){$("prNCr").value="";caricaPrepagate()}})};
$("rTipo").onchange=function(){$("rPreBox").classList.toggle("hide",this.value!=="prepagata")};
function caricaMiePrepagata(){
  api("/api/mieprepagata").then(function(L){
    var c=$("cPre");if(!Array.isArray(L)||!L.length){c.innerHTML="";return}
    c.innerHTML=L.map(function(p){
      var pct=p.credito_cent>0?Math.max(0,Math.min(100,Math.round(p.residuo_cent*100/p.credito_cent))):0,cls=p.bloccata||p.residuo_cent<=0?"err":p.residuo_cent<=p.soglia_cent?"warn":"";
      var txt=p.bloccata||p.residuo_cent<=0?T("Credito esaurito: la tessera è bloccata. Per ricaricare il credito contatta l'amministratore."):(p.residuo_cent<=p.soglia_cent?T("Credito quasi esaurito. "):"")+T("Quando il credito arriva a zero la ricarica si ferma e la tessera viene bloccata. Per ricaricare il credito contatta l'amministratore.");
      return '<div class="card"><h2>'+T("Tessera prepagata")+(p.nome?" · "+esc(p.nome):"")+' <span class="sub">'+esc(p.tag)+'</span></h2>'
        +'<div class="metri"><div><small>'+T("Credito residuo")+'</small><b class="'+cls+'">'+it(Math.max(0,p.residuo_cent)/100)+' €</b></div><div><small>'+T("Prezzo")+'</small><b>'+it(p.prezzo_cent/100)+' €/kWh</b></div>'
        +'<div><small>'+T("Ancora disponibili")+'</small><b>'+it(p.residuo_wh/1000,1)+' kWh</b></div><div><small>'+T("Consumato dal ")+new Date(p.dal).toLocaleDateString(LOC)+'</small><b>'+it(p.consumato_wh/1000,1)+' kWh</b></div></div>'
        +'<div class="barra"><div class="'+cls+'" style="width:'+pct+'%"></div></div><div class="sub">'+txt+"</div></div>"}).join("");
  });
}
function caricaMie(){
  caricaMiePrepagata();
  return api("/api/mie?anno="+$("selAnnoM").value).then(function(L){
    if(!Array.isArray(L))return;
    var t=row([th(T("Mese")),th(T("Ricariche"),1),th(T("kWh"),1),th(T("€/kWh"),1),th(T("Imponibile"),1),th(T("IVA"),1),th(T("Totale"),1)]),k=0,e=0,ok=false;
    L.forEach(function(x){k+=x.kwh;if(x.tot!==null){e+=x.tot;ok=true}
      t+='<tr class="ut" data-m="'+x.mese+'">'+td(T(x.nome))+td(x.n,1)+td(it(x.kwh),1)+td(x.prezzo===null?"-":it(x.prezzo,4),1)+td(it(x.imp),1)+td(it(x.iva),1)+td(it(x.tot),1)+"</tr>"});
    $("tabM").innerHTML=t;
    $("noteM").classList.toggle("hide",!L.some(function(x){return x.prezzo===null&&x.kwh>0}));
    $("totM").textContent=T("TOTALE ")+$("selAnnoM").value+": "+it(k)+" kWh"+(ok?" - "+it(Math.round(e*100)/100)+T(" € (IVA inclusa)"):"");
    document.querySelectorAll("#tabM tr.ut").forEach(function(tr){tr.onclick=function(){
      var nx=tr.nextElementSibling;
      if(nx&&nx.classList.contains("det")){while(tr.nextElementSibling&&tr.nextElementSibling.classList.contains("det"))tr.nextElementSibling.remove();return}
      var x=L[+tr.dataset.m-1],h="";
      x.sess.forEach(function(s){h+='<tr class="det"><td>'+s.inizio+" &rarr; "+s.fine+(io&&io.tessere&&io.tessere.length>1&&s.tag?" ("+esc(s.tag)+")":"")+'</td><td></td><td class="n">'+it(s.kwh)+'</td><td></td><td class="n">'+it(s.imp)+'</td><td class="n">'+it(s.iva)+'</td><td class="n">'+it(s.tot)+'</td></tr>'});
      tr.insertAdjacentHTML("afterend",h)}});
  });
}
$("selAnnoM").onchange=caricaMie;
$("bPdfM").onclick=function(){location.href="/api/mie.pdf?anno="+$("selAnnoM").value+"&mese="+$("selMeseM").value};
function esitoMail(r,pre){
  if(r.mail==="inviata")return pre+T("Report inviato a ")+(r.destinatari||[]).join(", ");
  return pre+T("Report non inviato (")+T(r.mail)+")";
}
$("bReinvia").onclick=function(){
  if(!confirm(T("Inviare di nuovo il report di questo mese ai destinatari?")))return;
  post("/api/reinvia",{anno:+$("selAnno").value,mese:+$("selMese").value}).then(function(r){
    $("esito").textContent=r.errore?T(r.errore):esitoMail(r,"")});
};
/* ---- installation settings (admin) ---- */
var CUR="€",FEE="",CONTATTO="",cfg=null;
var CF_TXT=["url","user","header_name","header_value","history_path","tags_path","status_path","timeout","hist_json_field","hist_sep","hist_skip","c_start","c_end","c_tag","c_type","c_cont_ini","c_cont_fin","title","tz","currency","tax_label","card_fee","contact","charger_id","mail_from"];
function feeTesto(){return FEE?" ("+FEE+")":""}
function applicaConfig(m){
  CUR=m.valuta||"€";FEE=m.costo_tessera||"";CONTATTO=m.contatto||"";
  if(CUR!=="€"){var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,L=[];while(n=w.nextNode())L.push(n);L.forEach(function(x){if(x.nodeValue.indexOf("€")>=0)x.nodeValue=x.nodeValue.split("€").join(CUR)})}
  document.querySelectorAll(".fee-par").forEach(function(e){e.textContent=FEE?" ("+T("costo")+" "+FEE+" "+T("una tantum")+")":""});
  document.querySelectorAll(".fee-info").forEach(function(e){e.textContent=FEE?T("Costo della tessera: ")+FEE+" "+T("una tantum, non è una cauzione e non viene restituito; se la tessera viene smarrita o danneggiata ne servirà un'altra. "):""});
  var pc=$("pContatto");if(pc)pc.textContent=CONTATTO?T(", oppure scrivi a ")+CONTATTO:"";
  if(CONTATTO){$("infoContatto").classList.remove("hide");$("infoContattoV").textContent=CONTATTO}
}
function formCfg(c){
  CF_TXT.forEach(function(k){var e=$("cf_"+k);if(e)e.value=c[k]===undefined||c[k]===null?"":c[k]});
  $("cf_auto").checked=!!c.auto;$("cf_password").value="";$("cf_pw_clear").checked=false;
  $("cf_password").placeholder=c.password_set?T("(salvata)"):"";
  $("cf_resend_key").value="";$("cf_rk_clear").checked=false;$("cf_resend_key").placeholder=c.resend_set?T("(salvata)"):"re_...";
  $("cf_telegram_token").value="";$("cf_telegram_secret").value="";$("cf_tg_clear").checked=false;
  $("cf_telegram_token").placeholder=c.telegram_set?T("(salvato)"):"123456:ABC...";$("cf_telegram_secret").placeholder=c.telegram_set?T("(salvato)"):"";
  caricaMessaggi();
}
function leggiCfg(){
  var o={};CF_TXT.forEach(function(k){var e=$("cf_"+k);if(e)o[k]=e.value});
  o.auto=$("cf_auto").checked;
  if($("cf_pw_clear").checked)o.password="";else if($("cf_password").value!=="")o.password=$("cf_password").value;else o.password=null;
  if($("cf_rk_clear").checked)o.resend_key="";else if($("cf_resend_key").value!=="")o.resend_key=$("cf_resend_key").value;else o.resend_key=null;
  if($("cf_tg_clear").checked){o.telegram_token="";o.telegram_secret=""}else{o.telegram_token=$("cf_telegram_token").value!==""?$("cf_telegram_token").value:null;o.telegram_secret=$("cf_telegram_secret").value!==""?$("cf_telegram_secret").value:null}
  return o;
}
function caricaMessaggi(){return api("/api/messaggi").then(function(s){if(!s||s.errore||!s.telegram)return;
  $("msgStato").textContent=!s.telegram.attivo?T("non configurato"):s.telegram.bot?T("attivo, bot @")+s.telegram.bot+" ("+oraTxt(Date.parse(s.telegram.attivato))+")":T("salvato, bot da attivare")})}
$("bTgAttiva").onclick=function(){$("msgEsito").textContent="";post("/api/messaggi",{azione:"attiva_telegram"}).then(function(r){$("msgEsito").textContent=r.errore?T(r.errore):T("Telegram attivato");caricaMessaggi()})};
$("bTgGenera").onclick=function(){var a=new Uint8Array(24);crypto.getRandomValues(a);$("cf_telegram_secret").type="text";$("cf_telegram_secret").value=Array.prototype.map.call(a,function(x){return("0"+x.toString(16)).slice(-2)}).join("")};
function caricaConfig(){
  return api("/api/config").then(function(r){
    if(!r.config)return;cfg=r;formCfg(r.config);
    $("envUrl").textContent=r.fonti.url_env?T("(valore iniziale da wrangler.toml)"):"";
    api("/api/colonnina-info").then(function(c){var t="";if(c&&c.ultimo_ip)t=T("IP all'ultimo scarico: ")+c.ultimo_ip.ip+" ("+new Date(c.ultimo_ip.quando).toLocaleString(LOC,{dateStyle:"short",timeStyle:"short"})+")";$("cInfo").textContent=t});
  });
}
$("bCfSalva").onclick=function(){
  $("cfEsito").textContent="";
  post("/api/config",leggiCfg()).then(function(r){
    if(r.errore){$("cfEsito").classList.add("err");$("cfEsito").textContent=T(r.errore);return}
    $("cfEsito").classList.remove("err");$("cfEsito").textContent=T("Impostazioni salvate");
    api("/api/me").then(function(m){io=m;applicaConfig(m);caricaConfig()});
  });
};
$("bCfReset").onclick=function(){if(cfg){var d=cfg.defaults;d.password_set=false;formCfg(d);$("cf_url").value=cfg.config.url;$("cf_pw_clear").checked=false}};
$("bCfProva").onclick=function(){
  $("cfProva").innerHTML='<div class="sub">'+T("Provo la connessione...")+'</div>';$("cfEsito").textContent="";
  post("/api/config/test",leggiCfg()).then(function(r){
    if(r.errore){$("cfProva").innerHTML="";$("cfEsito").classList.add("err");$("cfEsito").textContent=T(r.errore);return}
    $("cfProva").innerHTML=bloccoProva(T("Storico"),r.history)+(r.tags?bloccoProva(T("Elenco tessere"),r.tags):"");
  });
};
function bloccoProva(nome,x){
  if(!x)return "";
  var h='<div class="card"><h2>'+esc(nome)+": "+(x.ok?T("ok"):T("errore"))+' <span class="sub">('+x.ms+" ms"+(x.bytes!==undefined?", "+x.bytes+" byte":"")+')</span></h2>';
  if(x.errore)h+='<div class="sub err">'+esc(x.errore)+"</div>";
  if(x.righe!==undefined)h+='<div class="sub">'+T("Righe lette: ")+x.righe+"</div>";
  if(x.primo)h+='<div class="sub">'+T("Prima sessione: ")+esc(x.primo.inizio)+" - "+esc(x.primo.fine)+", "+T("tessera ")+esc(x.primo.tag)+", "+esc(x.primo.wh)+" Wh</div>";
  if(x.sample)h+='<pre style="white-space:pre-wrap;font-size:12px;max-height:160px;overflow:auto;border:1px solid var(--line);border-radius:6px;padding:6px">'+esc(x.sample)+"</pre>";
  return h+"</div>";
}
/* ---- legal texts (admin) ---- */
var TL=["edizione","reg_it","reg_en","priv_it","priv_en"];
function caricaTesti(){return api("/api/testi").then(function(t){if(!t)return;TL.forEach(function(k){$("tl_"+k).value=t[k]||""})})}
$("bTesti").onclick=function(){var o={};TL.forEach(function(k){o[k]=$("tl_"+k).value});
  post("/api/testi",o).then(function(r){$("tlEsito").classList.toggle("err",!!r.errore);$("tlEsito").textContent=r.errore?T(r.errore):T("Testi salvati")})};
function oraTxt(ms){return ms?new Date(ms).toLocaleString(LOC,{dateStyle:"short",timeStyle:"medium"}):"-"}
function misura(m,k,div,dec,u){var x=m&&m.dati&&m.dati[k];if(!x)return null;var v=parseFloat(x.v);if(isNaN(v))return null;if(/^k/i.test(x.u))div=1;return (v/div).toFixed(dec)+" "+u}
function caricaOcpp(leggero){
  var dopo=leggero&&OEV.length?OEV[0].id:null;
  return api("/api/ocpp"+(dopo?"?dopo="+dopo:"")).then(function(r){
    if(r.errore){$("oEsito").textContent=T(r.errore);return}
    $("oEsito").textContent="";$("oUrl").value="wss://"+r.host+r.percorso;
    var t=(r.connessa?T("Colonnina collegata"):T("Colonnina non collegata"))+" · "+T("ultimo messaggio: ")+oraTxt(r.ultimo_msg);
    var pr=r.prese&&r.prese["1"];if(pr)t+=" · "+T("presa: ")+pr.status+(pr.errore&&pr.errore!=="NoError"?" ("+pr.errore+")":"");
    var tx=r.transazione_aperta;
    if(tx){t+=" · "+T("ricarica in corso, tessera ")+tx.tag+T(", dalle ")+oraTxt(tx.inizio);
      var m=r.meter,pw=misura(m,"Power.Active.Import",1000,2,"kW"),a=misura(m,"Current.Import",1,1,"A")||misura(m,"Current.Import.L1",1,1,"A"),v=misura(m,"Voltage",1,0,"V");
      var e=m&&m.dati&&m.dati["Energy.Active.Import.Register"],ks=e&&tx.meter_ini!=null?((parseFloat(e.v)-tx.meter_ini)/(/^k/i.test(e.u)?1:1000)).toFixed(2)+" kWh":null;
      var q=[pw,ks&&T("caricati ")+ks,a,v].filter(Boolean);if(q.length)t+=" · "+q.join(" · ")}
    $("oStato").textContent=t;if(document.activeElement!==$("oListaOn"))$("oListaOn").checked=!!r.lista_on;$("bOSync").disabled=!r.lista_on;$("oLista").textContent=listaTxt(r);
    var hb=r.heartbeat;if(hb){if(document.activeElement!==$("oHb"))$("oHb").value=Math.round(hb.voluto/60);
      $("oHbTxt").textContent=hb.inviato===hb.voluto?T("impostato sulla colonnina"):T("in attesa: viene mandato alla colonnina al prossimo messaggio")}
    disegnaPar(r.parametri);OEV=dopo?(r.eventi||[]).concat(OEV):(r.eventi||[]);disegnaOcpp()});
}
var PAR_ET={ConnectionTimeOut:["Attesa tessera dopo il collegamento del cavo","secondi"],WebSocketPingInterval:["Controllo della connessione col sito ogni","secondi"],
  TransactionMessageRetryInterval:["Nuovo tentativo se un messaggio di ricarica non arriva dopo","secondi"],TransactionMessageAttempts:["Numero di tentativi per ogni messaggio di ricarica","volte"],
  MeterValueSampleInterval:["Misure durante la ricarica ogni","secondi"],ClockAlignedDataInterval:["Misure a orari fissi ogni (0 = mai)","secondi"]};
function disegnaPar(p){
  var box=$("oPar");if(!p||!box)return;
  if(box.contains(document.activeElement)&&document.activeElement.tagName==="INPUT")return;
  var h="";
  Object.keys(PAR_ET).forEach(function(k){
    var d=p.def[k],v=p.voluti[k]!==undefined?p.voluti[k]:d[2],st=p.voluti[k]===undefined?"":(p.inviati[k]===p.voluti[k]?T("impostato sulla colonnina"):T("in attesa: viene mandato alla colonnina al prossimo messaggio"));
    h+='<div class="bar"><label>'+T(PAR_ET[k][0])+' <input data-k="'+k+'" type="number" min="'+d[0]+'" max="'+d[1]+'" value="'+v+'" style="width:6em"> '+T(PAR_ET[k][1])+'</label> <button data-k="'+k+'" class="bPar">'+T("Salva")+'</button> <span class="sub">'+T("da")+' '+d[0]+' '+T("a")+' '+d[1]+(st?' · '+st:'')+'</span></div>'});
  var off=p.voluti.LocalAuthorizeOffline!==undefined?p.voluti.LocalAuthorizeOffline:true,so=p.voluti.LocalAuthorizeOffline===undefined?"":(p.inviati.LocalAuthorizeOffline===p.voluti.LocalAuthorizeOffline?T("impostato sulla colonnina"):T("in attesa: viene mandato alla colonnina al prossimo messaggio"));
  h+='<div class="bar"><label><input type="checkbox" id="oOff"'+(off?' checked':'')+'> '+T("Tessere in lista valide anche se il server non risponde")+'</label> <span class="sub">'+so+'</span></div>';
  box.innerHTML=h;
}
$("oPar").onclick=function(e){
  var t=e.target,k=t.getAttribute&&t.getAttribute("data-k");
  if(t.className==="bPar"&&k){var inp=$("oPar").querySelector('input[data-k="'+k+'"]');
    post("/api/ocpp",{azione:"parametro",chiave:k,valore:inp.value}).then(function(r){if(r&&r.errore)alert(T(r.errore));setTimeout(ocStato,2500)})}};
$("oPar").onchange=function(e){
  if(e.target.id==="oOff")post("/api/ocpp",{azione:"parametro",chiave:"LocalAuthorizeOffline",valore:e.target.checked}).then(function(){setTimeout(ocStato,2500)})};
function listaTxt(r){
  var l=r.lista,t;
  if(!r.lista_on)return T("Lista offline: disattivata, il server non invia tessere alla colonnina");
  if(r.sync_pendente)t=T("Lista offline: aggiornamento in attesa che la presa sia libera");
  else if(!l)t=T("Lista offline: nessun invio registrato");
  else{var q=l.inviate+"/"+l.n+" "+T("tessere inviate il ")+oraTxt(l.quando);
    t=T("Lista offline: ")+q+" - "+(l.ok===true?T("allineata"):l.ok===false?T("ultimo invio non riuscito"):T("invio non completato"))}
  return t}
$("bOHb").onclick=function(){post("/api/ocpp",{azione:"heartbeat",minuti:$("oHb").value}).then(function(r){if(r&&r.errore)alert(T(r.errore));setTimeout(caricaOcpp,2500)})};
$("bOSync").onclick=function(){post("/api/ocpp",{azione:"sincronizza"}).then(function(r){if(r&&r.errore)alert(T(r.errore));setTimeout(caricaOcpp,2500)})};
$("oListaOn").onchange=function(){post("/api/ocpp",{azione:"lista",attiva:$("oListaOn").checked}).then(function(){setTimeout(caricaOcpp,800)})};
var OEV=[];
var OCPP_TR=I18N.ocpp.map(function(p){return [new RegExp(p[0],p[1]),p[2]]});
function evTr(t){if(LANG==="it")return t;OCPP_TR.forEach(function(p){t=rp(t,p[0],p[1])});return t}
function disegnaOcpp(){
  var raw=$("oRaw").checked;
  var h='<colgroup><col style="width:150px"><col style="width:28px"><col></colgroup>'+row([th(T("Ora")),th(""),th(T("Messaggio"))]);
  OEV.forEach(function(e){h+=row([td(oraTxt(e.ts)),td(esc(e.dir==="<"?"←":e.dir===">"?"→":"·")),td('<div style="white-space:normal;overflow-wrap:anywhere;font-size:'+(raw?12:14)+'px">'+esc(raw?e.raw:evTr(T(e.testo)))+"</div>")])});
  $("tabO").innerHTML=h;
}
$("oRaw").onchange=disegnaOcpp;
$("bOPrec").onclick=function(){if(!OEV.length)return;$("bOPrec").disabled=true;api("/api/ocpp?prima="+OEV[OEV.length-1].id).then(function(r){$("bOPrec").disabled=false;
  var e=(r&&r.eventi)||[];if(!e.length){$("bOPrec").classList.add("hide");$("oPrecTxt").textContent=T("Fine del registro (conservato 48 ore)");return}OEV=OEV.concat(e);disegnaOcpp()})};
$("bOAgg").onclick=caricaOcpp;
$("bORig").onclick=function(){if(confirm(T("Rigenerare il codice? La colonnina smette di collegarsi finché non aggiorni l'indirizzo.")))post("/api/ocpp",{azione:"rigenera"}).then(function(){caricaOcpp()})};
setInterval(function(){if(!document.hidden&&!$("t8").classList.contains("hide"))caricaOcpp(true)},10000);
function ocStato(){return api("/api/ocpp").then(function(r){
  if(r.errore){$("ocStato").textContent=T(r.errore);return}
  var pr=r.prese&&r.prese["1"];
  $("ocStato").textContent=(r.connessa?T("Colonnina collegata"):T("Colonnina non collegata"))+(pr?" · "+T("presa: ")+pr.status:"")+(r.transazione_aperta?" · "+T("ricarica in corso, tessera ")+r.transazione_aperta.tag:"");disegnaPar(r.parametri)})}
function ocForm(){var c=$("ocCmd").value;$("ocMsgL").classList.toggle("hide",c!=="TriggerMessage");}
$("ocCmd").onchange=ocForm;
function ocMostra(c,r){
  var h="";
  if(c==="GetConfiguration"&&r.configurationKey){
    h='<div class="w" style="max-height:420px;overflow:auto"><table>'+row([th(T("Voce")),th(T("Valore")),th(T("Modificabile"))])
      +r.configurationKey.map(function(k){return row([td(esc(k.key)),td(esc(k.value===undefined?"-":k.value)),td(k.readonly?T("no"):T("sì"))])}).join("")+"</table></div>";
    if(r.unknownKey&&r.unknownKey.length)h+='<div class="sub">'+T("Voci sconosciute: ")+esc(r.unknownKey.join(", "))+"</div>"}
  else h='<pre style="white-space:pre-wrap;overflow-wrap:anywhere;margin:8px 0">'+esc(JSON.stringify(r,null,2))+"</pre>";
  $("ocRis").innerHTML=h}
$("bOcInvia").onclick=function(){
  var c=$("ocCmd").value,b={azione:"comando",comando:c,richiesta:$("ocMsg").value};
  if(c==="RemoteStopTransaction"&&!confirm(T("Fermare la ricarica in corso?")))return;
  if(c==="Reset"&&!confirm(T("Riavviare la colonnina? Durante il riavvio resta scollegata dal server.")))return;
  $("ocEsito").classList.remove("err");$("ocEsito").textContent=T("In attesa della risposta...");$("ocRis").innerHTML="";$("bOcInvia").disabled=true;
  post("/api/ocpp",b).then(function(r){
    $("bOcInvia").disabled=false;
    if(r.errore){$("ocEsito").classList.add("err");$("ocEsito").textContent=T(r.errore);return}
    $("ocEsito").textContent=T("Risposta ricevuta alle ")+new Date().toLocaleTimeString(LOC);ocMostra(c,r.risposta||{})})};
function durTxt(ms){var m=Math.max(0,Math.round(ms/60000)),h=Math.floor(m/60);return h?h+" h "+(m%60)+" min":m+" min"}
function caricaLive(){
  return api("/api/live").then(function(r){
    var tit="",h="",agg="";
    if(r.errore)tit=T(r.errore);
    else if(!r.connessa)tit=T("Colonnina non collegata al server: dati non disponibili");
    else if(!r.occupata)tit=r.stato==="Preparing"?T("Auto collegata, in attesa della tessera"):T("Colonnina libera");
    else{tit=T("Occupata")+" - "+(r.da?r.da:T("tessera sconosciuta"));
      var d=r.dettagli;
      if(d){var f=function(x,n,u){return x==null?"-":x.toFixed(n)+" "+u};
        h=row([td(T("Potenza")),td(f(d.kw,2,"kW"))])+row([td(T("Corrente")),td(f(d.a,1,"A"))])+(d.v!=null?row([td(T("Tensione")),td(f(d.v,0,"V"))]):"")
          +row([td(T("Energia caricata")),td(f(d.kwh,2,"kWh"))])+row([td(T("Inizio")),td(oraTxt(d.inizio))])+row([td(T("Durata")),td(durTxt(Date.now()-d.inizio))])+row([td(T("Tessera")),td(esc(d.tag))]);
        if(d.agg)agg=T("Aggiornato alle ")+new Date(d.agg).toLocaleTimeString(LOC,{timeStyle:"short"})}}
    $("liveTit").textContent=tit;$("tabL").innerHTML=h;$("liveAgg").textContent=agg});
}
var MONN=0;setInterval(function(){if(!document.hidden&&!$("t9").classList.contains("hide")){caricaLive();if(MONADM&&++MONN%6===0)caricaMal()}},10000);   // live status every 10 s, rules every 60 s (they change with the 5-minute cron)
var RFID=[],RMOD=null;
function scadIso(d){if(!d)return"";var o=-new Date(d+"T23:59:00").getTimezoneOffset(),z=o>=0?"+":"-";o=Math.abs(o);return d+"T23:59:00"+z+String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")}
function scadTxt(x){if(!x.scad)return"";var d=new Date(x.scad);if(isNaN(d))return esc(x.scad);var t=d.toLocaleDateString(LOC);return d<new Date()?'<span class="err">'+t+" ("+T("scaduta")+")</span>":t}
function modoR(m){RMOD=m;$("rTipoL").classList.toggle("hide",!!m);if(m)$("rPreBox").classList.add("hide");$("rDalL").classList.toggle("hide",!!(m&&m.indice!==undefined));$("bRAgg").textContent=T(m?(m.indice!==undefined?"Ripara":"Salva modifica"):"Aggiungi");$("bRAnn").classList.toggle("hide",!m);$("rId").readOnly=!!(m&&m.indice===undefined);
  if(!m){$("rId").value="";$("rNome").value="";$("rScad").value="";$("rDal").value="";$("rStato").value="0"}}
var STATI=["Attiva","Bloccata","Scaduta","Non valida"];
function statoTxt(v){var t=STATI[+v];return t===undefined?esc(v):(v==="0"?T(t):'<span class="err">'+T(t)+"</span>")}
var RSEL=-1,NOMI=[],RERR="";
// one table: cards on the charger (with their assignment period) + closed periods (deactivated or reassigned cards)
function mostraRfid(r){
  var e=$("rEsito");e.classList.toggle("err",!!r.errore||!!r.avviso);
  RERR=r.errore||"";
  if(r.errore){e.textContent=T(r.errore);RFID=[]}
  if(r.lista)RFID=r.lista.map(function(x,i){x.i=i;return x});
  if(r.backup!==undefined){$("bRRip").classList.toggle("hide",!r.backup);if(r.backup)$("bRRip").title=T("Copia del ")+new Date(r.backup.quando).toLocaleString(LOC,{dateStyle:"short",timeStyle:"short"})+" ("+r.backup.n+T(" tessere)")}
  disegnaR();
  if(r.avviso)e.textContent=T(r.avviso);
  else if(!r.errore&&RFID.some(function(x){return !x.id}))e.textContent=T("Ci sono tessere senza codice: non funzionano finché non le ripari");
}
function disegnaR(){
  var bDate=function(n){return n<0?"":' <button class="nd" data-n="'+n+'">'+T("Date")+'</button>'};
  var aperto=function(tag){var k=-1;NOMI.forEach(function(p,n){if(p.tag===tag&&!p.al_txt)k=n});return k};
  var sc=RFID.some(function(x){return x.scad}),tdS=function(v){return sc?td(v):""};
  var t=row([th(T("Codice tessera")),th(T("Nome")),th(T("Assegnata dal")),th(T("Disattivata il")),sc?th(T("Scadenza")):"",th(T("Stato")),th("")]);
  var ord=RFID.slice().sort(function(a,b){return a.nome.localeCompare(b.nome,undefined,{numeric:true})});
  var usati={};
  ord.forEach(function(x){
    var n=x.id?aperto(x.id):-1;if(n>=0)usati[n]=1;var p=n>=0?NOMI[n]:null;
    var az=x.mancante?'<button class="p rput" data-i="'+x.i+'">'+T("Rimetti")+'</button> <button class="rd" data-i="'+x.i+'">'+T("Elimina")+'</button>':x.id?'<button class="rm" data-i="'+x.i+'" data-n="'+n+'">'+T("Modifica")+'</button>'
      :'<button class="p rr" data-i="'+x.i+'">'+T("Ripara")+'</button> <button class="rd" data-i="'+x.i+'">'+T("Elimina")+'</button>';
    t+='<tr class="rs" data-i="'+x.i+'">'+td(x.id?esc(x.id):'<span class="err">'+T("senza codice")+(x.suggerito?" ("+T("era ")+esc(x.suggerito)+")":"")+"</span>")+td(esc(x.nome)+(x.prepagata?' <span class="pst '+(x.prepagata.bloccata?"err":"ok")+'">'+T("prepagata")+(x.prepagata.residuo_cent!=null?" · "+it(x.prepagata.residuo_cent/100)+" €":"")+"</span>":"")+(x.mancante?' <span class="pst err" title="'+T("È nell'elenco del sito ma non sulla colonnina: il sito la rimanda via OCPP. «Rimetti» la scrive subito sulla colonnina.")+'">'+T("manca sulla colonnina")+"</span>":""))+td(p?esc(p.dal_txt):"")+td("")+tdS(scadTxt(x))+td(statoTxt(x.stato))+'<td class="n">'+az+"</td></tr>";
  });
  // closed periods and, if the charger does not answer, the open ones from the site database
  NOMI.map(function(p,n){return {p:p,n:n}}).filter(function(o){return !usati[o.n]&&(o.p.al_txt||RERR)})
    .sort(function(a,b){return a.p.nome.localeCompare(b.p.nome,undefined,{numeric:true})||a.p.dal-b.p.dal})
    .forEach(function(o){var p=o.p;
      t+='<tr class="old">'+td(esc(p.tag))+td(esc(p.nome))+td(esc(p.dal_txt))+td(p.al_txt?esc(p.al_txt):"")+tdS("")+td(p.al_txt?T("Disattivata"):T("non verificata"))+'<td class="n">'+bDate(o.n)+"</td></tr>"});
  $("tabR").innerHTML=t;RSEL=-1;$("bRDis").disabled=true;
}
function caricaNomi(){return api("/api/nomi").then(function(L){NOMI=Array.isArray(L)?L:[]})}
function caricaRfid(){modoR(null);$("rEsito").classList.remove("err");$("rEsito").textContent=T("Leggo la colonnina...");
  return Promise.all([api("/api/rfid"),caricaNomi()]).then(function(v){$("rEsito").textContent="";mostraRfid(v[0])})}
function rfid(b,msg){$("rEsito").classList.remove("err");$("rEsito").textContent=T("Scrivo sulla colonnina...");return post("/api/rfid",b).then(function(r){
  if(!r.errore){caricaRfid().then(function(){$("rEsito").classList.toggle("err",!r.ok);$("rEsito").textContent=r.ok?T(msg):T(r.avviso||"")})}else mostraRfid(r);return r})}
$("bRAgg").onclick=function(){
  var b={id:$("rId").value,nome:$("rNome").value,scad:scadIso($("rScad").value),stato:$("rStato").value,dal:$("rDal").value};
  if(!RMOD){var pre=$("rTipo").value==="prepagata"?{azione:"attiva",tag:b.id,prezzo:$("rPPr").value,credito:$("rPCr").value||0,soglia:$("rPSo").value}:null;
    if(pre&&!(parseFloat(String(pre.prezzo).replace(",","."))>0)){$("rEsito").classList.add("err");$("rEsito").textContent=T("Indica il prezzo al kWh della prepagata");return}
    rfid(Object.assign(b,{azione:"aggiungi"}),"Tessera aggiunta").then(function(r){if(r&&!r.errore&&pre)post("/api/prepagate",pre).then(function(q){$("rEsito").classList.toggle("err",!!q.errore);$("rEsito").textContent=q.errore?T(q.errore):T("Tessera aggiunta e attivata come prepagata");caricaRfid()})})}
  else if(RMOD.indice!==undefined)rfid(Object.assign(b,{azione:"ripara",indice:RMOD.indice}),"Tessera riparata");
  else{
    var p=RMOD.p,nd=b.dal?b.dal.split("-").reverse().join("-"):"",cambioData=p&&nd&&nd!==p.dal_txt;
    var cambioCol=b.nome.trim()!==RMOD.nome||b.stato!==RMOD.stato||$("rScad").value!==RMOD.scad;
    var data=function(){return cambioData?post("/api/nomi",{tag:p.tag,dal:p.dal,nuovo_dal:nd,nuovo_al:""}).then(function(r){if(r.errore)alert(T(r.errore))}):Promise.resolve()};
    if(cambioCol)data().then(function(){rfid(Object.assign(b,{azione:"modifica"}),"Tessera aggiornata")});   // writes to the charger only when needed
    else data().then(function(){caricaNomi().then(function(){modoR(null);disegnaR();$("rEsito").classList.remove("err");$("rEsito").textContent=T(cambioData?"Data aggiornata":"Nessuna modifica")})});
  }
};
$("bRAnn").onclick=function(){modoR(null)};
$("tabR").onclick=function(ev){
  var b=ev.target.closest("button");
  if(b&&b.classList.contains("nd")){var p=NOMI[+b.dataset.n];if(!p)return;
    var d=prompt(T("Assegnata dal (gg-mm-aaaa)"),p.dal_txt);if(d===null)return;
    var a=prompt(T("Dismessa il (gg-mm-aaaa). Vuoto = ancora assegnata"),p.al_txt);if(a===null)return;
    post("/api/nomi",{tag:p.tag,dal:p.dal,nuovo_dal:d.trim(),nuovo_al:a.trim()}).then(function(r){if(r.errore)alert(T(r.errore));caricaNomi().then(disegnaR)});return}
  if(!b){var tr=ev.target.closest("tr.rs");if(!tr)return;var k=+tr.dataset.i;
    Array.prototype.forEach.call($("tabR").querySelectorAll("tr.rs"),function(q){q.classList.remove("sel")});
    if(RSEL===k){RSEL=-1}else{RSEL=k;tr.classList.add("sel")}
    var sx=RFID[RSEL];$("bRDis").disabled=!(sx&&sx.id);return}var x=RFID[+b.dataset.i];if(!x)return;
  var d=x.scad&&!isNaN(new Date(x.scad))?x.scad.slice(0,10):"";
  if(b.classList.contains("rput")){rfid({azione:"aggiungi",id:x.id,nome:x.nome||x.id,scad:x.scad,stato:"0"},"Tessera rimessa sulla colonnina");return}
  if(b.classList.contains("rm")){var pn=NOMI[+b.dataset.n];modoR({p:pn,nome:x.nome,stato:x.stato,scad:d});$("rDal").value=pn?pn.dal_txt.split("-").reverse().join("-"):"";$("rId").value=x.id;$("rNome").value=x.nome;$("rScad").value=d;$("rStato").value=STATI[+x.stato]?x.stato:"0";$("rNome").focus()}
  if(b.classList.contains("rr")){modoR({indice:x.i});$("rId").value=x.suggerito||"";$("rNome").value=(x.nome_completo||x.nome).slice(0,25);$("rScad").value=d;$("rStato").value=STATI[+x.stato]?x.stato:"0";$("rId").focus()}
  if(b.classList.contains("rd")&&confirm(x.id?T("Dismettere la tessera ")+x.id+" - "+x.nome+T("? Viene tolta dalla colonnina, lo storico resta."):T("Eliminare dalla colonnina la tessera ")+T("senza codice")+" - "+x.nome+"?")){
    var al="";if(x.id){al=prompt(T("Data di dismissione (gg-mm-aaaa). Vuoto = oggi"),"");if(al===null)return;al=al.trim();if(al&&!/^\d{1,2}[\/.-]?\d{1,2}[\/.-]?\d{4}$/.test(al)){alert(T("Data non valida"));return}}
    rfid(x.id?{azione:"elimina",id:x.id,al:al}:{azione:"elimina",indice:x.i},"Tessera eliminata")}
};
$("bRDis").onclick=function(){var x=RFID[RSEL];if(!x||!x.id)return;
  if(!confirm(T("Disattivare in modo permanente la tessera ")+x.id+" - "+x.nome+T("? Viene tolta dalla colonnina, lo storico resta.")))return;
  var al=prompt(T("Data di disattivazione (gg-mm-aaaa). Vuoto = oggi"),"");if(al===null)return;al=al.trim();
  if(al&&!/^\d{1,2}[\/.-]?\d{1,2}[\/.-]?\d{4}$/.test(al)){alert(T("Data non valida"));return}
  rfid({azione:"elimina",id:x.id,al:al},"Tessera disattivata")};
$("bRImp").onclick=function(){$("rFile").value="";$("rFile").click()};
$("rFile").onchange=function(){var f=this.files[0];if(!f)return;f.text().then(function(t){
  if(confirm(T("Importare le tessere del file ")+f.name+T(" sulla colonnina?")))rfid({azione:"importa",testo:t},"Import completato")})};
$("bRLeggi").onclick=function(){$("rEsito").classList.remove("err");caricaRfid()};
$("bREsp").onclick=function(){
  var s="1\r\n"+RFID.map(function(x){return x.id+";"+x.scad+";"+x.nome+";"+x.stato+"\r\n"}).join("");
  var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([s],{type:"text/plain"}));a.download="tessere_colonnina_"+new Date().toISOString().slice(0,10)+".txt";a.click();
};
$("bRRip").onclick=function(){if(confirm(T("Riportare sulla colonnina la lista com'era prima dell'ultima modifica?")))rfid({azione:"ripristina"},"Lista ripristinata")};
var MONADM=false,MALDIRTY=false,AVDIRTY=false;
function caricaMal(){return api("/api/malfunzionamenti").then(disegnaMal)}
function caricaProfilo(salva){
  var p=salva?post("/api/profilo",{whatsapp:false,telegram:$("pTg").checked}):api("/api/profilo");
  return p.then(function(d){
    if(!d||d.errore||!d.registrato)return;
    $("tabP").innerHTML=row([th(T("Nome")),td(esc(d.nome+" "+d.cognome))])+row([th("Email"),td(esc(d.email))])+row([th(T("Telefono")),td(esc(d.tel1||"")+(d.tel2?" / "+esc(d.tel2):""))]);
    $("pTg").checked=!!d.telegram;
    if(d.tg_attivo){$("pTgBox").classList.remove("hide");tgStato()}else $("pTgBox").classList.add("hide");
    $("pAgg").textContent=d.aggiornato?T("Ultima modifica del consenso: ")+oraTxt(Date.parse(d.aggiornato)):"";
    if(salva)$("pEsito").textContent=T("Salvato");
  });
}
$("bProfilo").onclick=function(){$("pEsito").textContent="";caricaProfilo(true)};
var TGPOLL=null,TGN=0,TGPREV=0;
function tgStato(d){
  var p=d?Promise.resolve(d):api("/api/telegram");
  return p.then(function(s){
    if(!s||s.errore){$("pTgStato").textContent=s&&s.errore?T(s.errore):"";return}
    TGN=s.chat||0;
    $("pTgStato").textContent=s.collegato?T("collegato")+(TGN>1?" ("+TGN+")":""):T("non collegato");
    $("bTgCollega").classList.toggle("hide",TGN>=2);$("bTgCollega").textContent=T(TGN===1?"Collega un secondo Telegram":"Collega Telegram");$("bTgScollega").classList.toggle("hide",!s.collegato);
    $("pTgLink").innerHTML=s.link?'<a href="'+esc(s.link)+'" target="_blank" rel="noopener">'+T("Apri Telegram e premi Avvia")+'</a> '+T("(il collegamento vale 15 minuti)"):"";
    if(TGPOLL&&TGN>TGPREV){clearInterval(TGPOLL);TGPOLL=null}
  });
}
$("bTgCollega").onclick=function(){TGPREV=TGN;post("/api/telegram",{azione:"collega"}).then(function(s){tgStato(s);
  if(s&&s.link&&!TGPOLL){var n=0;TGPOLL=setInterval(function(){if(++n>180){clearInterval(TGPOLL);TGPOLL=null;return}tgStato()},5000)}})};
$("bTgScollega").onclick=function(){if(confirm(T("Scollegare Telegram (tutte le chat collegate)? Non riceverai più messaggi lì.")))post("/api/telegram",{azione:"scollega"}).then(tgStato)};

var TIPIT={tessera:"Tessera smarrita o danneggiata",dati:"Correzione dei dati",cancellazione:"Cancellazione dei dati / dell'utenza",colonnina:"Problema con la colonnina",altro:"Altro",nuova:"Richiesta nuova tessera"};
var TESST=[];
function tipoT(){var t=$("tkTipo").value;$("tkTessBox").classList.toggle("hide",t!=="tessera");$("tkTessInfo").style.display=t==="tessera"?"block":"none";$("tkDatiBox").classList.toggle("hide",t!=="dati");$("tkCancInfo").style.display=t==="cancellazione"?"block":"none";$("tkNuovaInfo").style.display=t==="nuova"?"block":"none";$("tkPagBox").classList.toggle("hide",t!=="nuova");$("tkPag").style.display=t==="nuova"?"block":"none";if(t==="nuova")pagTesto()}
var PAG={};
function pagLink(k,v){if(/^https:\/\//.test(v))return v;return k==="paypal"?"https://paypal.me/"+v+"/5EUR":k==="satispay"?"https://tag.satispay.com/"+v:"https://revolut.me/"+v}
function pagTesto(){api("/api/pagamento").then(function(d){if(!d)return;PAG=d;var cur=$("tkPagSel").value,o=[];
  if(d.paypal)o.push(["paypal","PayPal"]);if(d.satispay)o.push(["satispay","Satispay"]);if(d.revolut)o.push(["revolut","Revolut"]);o.push(["contanti",T("Contanti alla consegna")]);
  $("tkPagSel").innerHTML=o.map(function(x){return '<option value="'+x[0]+'">'+esc(x[1])+"</option>"}).join("");
  if(cur&&o.some(function(x){return x[0]===cur}))$("tkPagSel").value=cur;pagMostra()})}
function causale(){return "Tessera "+((io&&(io.nome_completo||io.nome))||"")}
function pagMostra(){var v=$("tkPagSel").value,h="";
  if(v==="contanti")h=T("Pagherai in contanti alla consegna della tessera")+(FEE?" ("+FEE+")":"")+".";
  else if(PAG[v]){var l=esc(pagLink(v,PAG[v]));h=T("Paga da qui")+(FEE?" ("+FEE+")":"")+': <a href="'+l+'" target="_blank" rel="noopener">'+l+"</a>"+(v==="paypal"?"<br>"+T("Su PayPal scegli «Amici e familiari»."):"")+"<br>"+T("Causale da indicare:")+' <b id="causale">'+esc(causale())+'</b> <button type="button" id="bCopia">'+T("Copia causale")+"</button>"}
  $("tkPag").innerHTML=h;var bc=$("bCopia");if(bc)bc.onclick=function(){var t=causale();try{navigator.clipboard.writeText(t).then(function(){bc.textContent=T("Copiata")})}catch(e){var r=document.createRange();r.selectNode($("causale"));getSelection().removeAllRanges();getSelection().addRange(r)}}}
$("tkPagSel").onchange=pagMostra;
$("bPag").onclick=function(){post("/api/pagamento",{paypal:$("pagPp").value,satispay:$("pagSa").value,revolut:$("pagRe").value}).then(function(r){$("pagEs").textContent=r.errore?T(r.errore):T("Salvato")})};
$("tkTipo").onchange=tipoT;tipoT();
function statoT(s){return T(s==="aperto"?"aperta":s==="approvato"?"approvata":s==="rifiutato"?"rifiutata":"chiusa")}
function extraT(t){
  var x=t.extra;if(!x)return "";
  if(t.tipo==="tessera")return T("Tessera ")+esc(x.tessera)+" ("+T(x.motivo==="danneggiata"?"danneggiata":"smarrita")+") - "+T(x.blocco==="sbloccata"?"tessera sbloccata":x.blocco==="ok"?"bloccata sulla colonnina":x.blocco==="assente"?"tessera non presente sulla colonnina":"blocco in attesa: la colonnina non risponde, riprovo ogni 5 minuti");
  if(t.tipo==="nuova"&&x.pagamento)return T("Pagamento")+": "+({paypal:"PayPal",satispay:"Satispay",revolut:"Revolut",contanti:T("Contanti alla consegna")}[x.pagamento]||esc(x.pagamento));
  if(t.tipo==="dati"){var p=[];if(x.nome)p.push(T("Nome")+": "+esc(x.nome));if(x.cognome)p.push(T("Cognome")+": "+esc(x.cognome));if(x.tel1)p.push(T("Telefono")+": "+esc(x.tel1));if(x.tel2)p.push(T("Secondo telefono")+": "+esc(x.tel2));return p.join(", ")}
  return "";
}
function badgeTicket(){
  return api("/api/ticket").then(function(L){
    if(!Array.isArray(L))return;
    var n=L.filter(function(x){return x.stato==="aperto"}).length;
    $("navTN").textContent=n?String(n):"";
  });
}
function caricaTicket(){
  var adm=io&&io.ruolo==="admin";
  var pt=adm?api("/api/tessere").then(function(L){TESST=Array.isArray(L)?L:[]}):Promise.resolve();
  return pt.then(function(){return api("/api/ticket")}).then(function(L){
    if(!Array.isArray(L))return;
    var h="";
    L.forEach(function(t){
      var ap=t.stato==="aperto";
      h+='<div style="padding:8px 0;border-top:1px solid var(--line)"><b>#'+t.id+" "+T(TIPIT[t.tipo]||t.tipo)+'</b> <small>'+esc(oraTxt(Date.parse(t.creato)))+" - "+statoT(t.stato)+"</small>";
      if(adm)h+="<br><small>"+esc(t.nome_utente?t.nome_utente+" - ":"")+esc(t.utente)+"</small>";
      var ex=extraT(t);if(ex)h+="<br>"+ex;
      if(t.testo)h+="<br>"+esc(t.testo).replace(/\n/g,"<br>");
      (t.integrazioni||[]).forEach(function(g){h+='<div style="margin:4px 0 0 10px;padding-left:8px;border-left:3px solid var(--line)"><small>'+T("Integrazione")+" - "+esc(oraTxt(Date.parse(g.ts)))+"</small><br>"+esc(g.testo).replace(/\n/g,"<br>")+"</div>"});
      if(!adm&&ap)h+='<div class="bar"><input id="ig'+t.id+'" placeholder="'+T("Aggiungi informazioni a questa richiesta")+'" size="34" maxlength="1000"><button class="igb" data-i="'+t.id+'">'+T("Aggiungi")+"</button></div>";
      if(t.nota)h+='<br><small>'+T("Nota dell'Amministratore: ")+esc(t.nota)+"</small>";
      if(adm&&!ap&&t.tipo==="tessera"&&t.extra&&(t.extra.blocco==="ok"||t.extra.blocco==="in attesa"))h+='<div class="bar"><button class="tkb" data-i="'+t.id+'" data-e="sblocca">'+T("Sblocca tessera")+"</button></div>";
      if(adm&&ap){
        h+='<div class="bar"><input id="tn'+t.id+'" placeholder="'+T("Nota per l'utente (facoltativa)")+'" size="30" maxlength="500">';
        if(t.tipo==="tessera"||t.tipo==="nuova")h+='<select id="tx'+t.id+'"><option value="">'+T(t.tipo==="nuova"?"scegli la tessera da assegnare":"nessuna nuova tessera (la vecchia viene solo dismessa)")+'</option>'+TESST.map(function(x){return '<option value="'+esc(x.tag)+'">'+esc(x.tag)+" - "+esc(x.nome)+"</option>"}).join("")+"</select>";
        if(t.tipo==="tessera"||t.tipo==="dati"||t.tipo==="cancellazione"||t.tipo==="nuova")h+='<button class="p tkb" data-i="'+t.id+'" data-e="approva" data-t="'+t.tipo+'" data-u="'+esc(t.utente)+'">'+T(t.tipo==="tessera"?"Sostituisci tessera":t.tipo==="nuova"?"Assegna tessera":"Approva")+"</button>";
        if(t.tipo!=="tessera")h+='<button class="tkb" data-i="'+t.id+'" data-e="rifiuta">'+T("Rifiuta")+"</button>";
        if(t.tipo==="tessera"&&t.extra&&t.extra.blocco!=="sbloccata")h+='<button class="tkb" data-i="'+t.id+'" data-e="ritrovata">'+T("Ritrovata: sblocca e chiudi")+"</button>";
        if(t.tipo==="colonnina"||t.tipo==="altro")h+='<button class="tkb" data-i="'+t.id+'" data-e="chiudi">'+T("Chiudi")+"</button>";
        h+="</div>";
      }
      h+="</div>";
    });
    $("listaT").innerHTML=h||'<p class="sub">'+T("Nessuna richiesta")+"</p>";
    document.querySelectorAll("#listaT .igb").forEach(function(b){b.onclick=function(){
      var i=$("ig"+b.dataset.i);if(!i.value.trim())return;
      post("/api/ticket",{azione:"integra",id:+b.dataset.i,testo:i.value}).then(function(r){
        if(r.errore){alert(T(r.errore));return}
        caricaTicket()})}});
    document.querySelectorAll("#listaT .tkb").forEach(function(b){b.onclick=function(){
      var e=b.dataset.e,t=b.dataset.t;
      if(e==="approva"&&t==="cancellazione"&&!confirm(T("Cancellare definitivamente l'utenza e i dati di ")+b.dataset.u+"?"))return;
      if(e==="approva"&&t==="tessera"&&!confirm(T("Scollegare la tessera dall'utente?")))return;
      var n=$("tx"+b.dataset.i);
      if(e==="approva"&&t==="nuova"&&!(n&&n.value)){alert(T("Scegli la tessera da assegnare"));return}
      var corpo=e==="sblocca"?{azione:"sblocca",id:+b.dataset.i}:{azione:"gestisci",id:+b.dataset.i,esito:e,nota:$("tn"+b.dataset.i).value,nuova:n?n.value:""};
      post("/api/ticket",corpo).then(function(r){
        if(r.errore){alert(T(r.errore));return}
        if(r.applicato)alert(T(r.applicato));
        caricaTicket();badgeTicket()})}});
  });
}
$("bTk").onclick=function(){
  var e=$("tkEsito");e.textContent="";
  var tipo=$("tkTipo").value;
  $("bTk").disabled=true;
  post("/api/ticket",{azione:"apri",tipo:tipo,pagamento:$("tkPagSel").value,testo:$("tkTesto").value,tessera:$("tkTess").value,motivo:$("tkMotivo").value,
    nome:$("tkNome").value,cognome:$("tkCognome").value,tel1:$("tkTel1").value,tel2:$("tkTel2").value}).then(function(r){
    $("bTk").disabled=false;
    if(r.errore){e.textContent=T(r.errore);return}
    e.textContent=T("Richiesta inviata: riceverai l'esito per email");
    ["tkTesto","tkNome","tkCognome","tkTel1","tkTel2"].forEach(function(i){$(i).value=""});
    caricaTicket()});
};
function badgeUtenti(){
  return api("/api/utenti").then(function(L){
    if(!Array.isArray(L))return;
    var n=L.filter(function(x){return x.in_attesa_tessera}).length;      // registered with confirmed email, waiting for the card
    $("navUN").textContent=n?String(n):"";
    return L;
  });
}
var NOT_TUTTE=false;
function caricaNot(letti){
  return (letti?post("/api/notifiche",{}):api("/api/notifiche")).then(function(d){
    if(!d||d.errore)return;
    $("navN").textContent=d.nonLette?String(d.nonLette):"";
    // the unread ones and at least the last 5; the rest behind "Mostra tutte"
    var tutte=d.notifiche,lim=Math.max(5,d.nonLette||0),vis=NOT_TUTTE?tutte:tutte.slice(0,lim);
    var h="";vis.forEach(function(n){h+='<div style="padding:5px 0;border-top:1px solid var(--line)'+(n.letta?";opacity:.65":"")+'"><b>'+esc(T(n.titolo))+'</b> <small>'+esc(oraTxt(n.ts))+'</small><br>'+esc(n.dett)+"</div>"});
    if(tutte.length>lim)h+='<div style="padding:6px 0 4px;border-top:1px solid var(--line)"><a href="#" id="lNotTutte">'+(NOT_TUTTE?T("Mostra meno"):T("Mostra tutte")+" ("+tutte.length+")")+"</a></div>";
    $("listaNot").innerHTML=h||'<p class="sub">'+T("Nessuna notifica")+"</p>";
    if($("lNotTutte"))$("lNotTutte").onclick=function(ev){ev.preventDefault();NOT_TUTTE=!NOT_TUTTE;caricaNot()};
    $("bNotLette").classList.toggle("hide",!d.nonLette);
  });
}
$("bNotLette").onclick=function(){caricaNot(true)};
setInterval(function(){if(MONADM&&!document.hidden){caricaNot();badgeUtenti()}},30000);
function caricaCf(){
  return api("/api/consumi").then(function(d){
    if(d&&d.messaggi){var K=Object.keys(d.messaggi).sort().reverse(),M2=row([th(T("Mese")),th("Mail",1),th("Telegram",1),th(T("Errori"),1)]);
      K.forEach(function(k){var c=d.messaggi[k];M2+=row([td(esc(k.split("-").reverse().join("-"))),td((c.mail||0).toLocaleString(LOC)+' <small>('+((c.mail||0)/3000*100).toLocaleString(LOC,{maximumFractionDigits:1})+'%)</small>',1),td(String(c.tg||0),1),td(String((c.mail_err||0)+(c.wa_err||0)+(c.tg_err||0)),1)])});
      $("tabMsg").innerHTML=K.length?M2:"";$("msgNota").textContent=(K.length?"":T("Nessun invio contato finora. "))+T("Resend gratuito: 3.000 mail al mese e 100 al giorno (tra parentesi la quota mensile); Telegram non ha limiti di costo.")+(d.coda?" "+T("Messaggi in coda: ")+d.coda:"")}
    if(d&&d.chi){var G=d.chi.giorni||{},gg=Object.keys(G).sort().reverse().slice(0,2),C=row([th(T("Giorno (UTC)")),th(T("Pagina / API")),th(T("Chiamate"),1),th(T("Query D1"),1),th(T("Chiamate in uscita"),1)]);
      gg.forEach(function(g){Object.keys(G[g]).sort(function(a,b){return G[g][b].q-G[g][a].q}).forEach(function(k){var x=G[g][k];C+=row([td(esc(g.split("-").reverse().join("-"))),td(esc(k)),td(x.n.toLocaleString(LOC),1),td(x.q.toLocaleString(LOC),1),td(x.f.toLocaleString(LOC),1)])})});
      var PP=(d.chi.pesanti||[]).slice().reverse();
      $("tabChi").innerHTML=gg.length?C:"";
      $("chiNota").textContent=(gg.length?"":T("Nessun dato finora. "))+T("Conteggio del sito dalla versione 2.8.0: per ogni pagina o API, chiamate, query D1 e chiamate in uscita (mail, messaggi, colonnina), oggi e ieri (UTC). Le query del server OCPP non sono incluse. Per singola richiesta il piano gratuito ammette 50 query D1 e 50 chiamate in uscita.")+(PP.length?" "+T("Richieste pesanti (oltre 35): ")+PP.map(function(p){return oraTxt(p.ts)+" "+p.chiave+" ("+p.q+" query, "+p.f+" "+T("chiamate")+")"}).join("; "):"")}
    if(!d||d.errore&&!d.configurato)return;
    if(!d.configurato){$("tabCf").innerHTML="";$("cfNota").textContent=T("Per vedere i consumi serve un token Cloudflare con il permesso Account Analytics: Read (secret CF_API_TOKEN) e CF_ACCOUNT_ID in wrangler.toml.");return}
    if(d.errore){$("tabCf").innerHTML="";$("cfNota").textContent=d.errore;return}
    function pc(v,l){var p=v/l*100;return v.toLocaleString(LOC)+' <small>('+(p<0.1?"<0,1":p.toLocaleString(LOC,{maximumFractionDigits:1}))+"%)</small>"}
    var L=d.limiti,t=row([th(T("Giorno (UTC)")),th(T("Richieste sito"),1),th(T("Errori"),1),th("CPU 99% ms",1),th(T("D1 righe lette"),1),th(T("D1 righe scritte"),1),th(T("Richieste OCPP"),1),th("OCPP GB-s",1),th(T("OCPP righe lette"),1),th(T("OCPP righe scritte"),1)]);
    t+=row([td("<b>"+T("Limite giornaliero")+"</b>"),td(L.req.toLocaleString(LOC),1),td("-",1),td("-",1),td(L.d1r.toLocaleString(LOC),1),td(L.d1w.toLocaleString(LOC),1),td(L.dor.toLocaleString(LOC),1),td(L.dogbs.toLocaleString(LOC),1),td(L.dorr.toLocaleString(LOC),1),td(L.dorw.toLocaleString(LOC),1)]);
    d.giorni.forEach(function(g){t+=row([td(esc(g.giorno.split("-").reverse().join("-"))),td(pc(g.req,L.req),1),td(String(g.err),1),td(g.cpu99.toLocaleString(LOC,{maximumFractionDigits:1}),1),td(pc(g.d1r,L.d1r),1),td(pc(g.d1w,L.d1w),1),td(pc(g.dor,L.dor),1),td(pc(Math.round(g.dogbs),L.dogbs),1),td(pc(g.dorr,L.dorr),1),td(pc(g.dorw,L.dorw),1)])});
    $("tabCf").innerHTML=t;
    var M=row([th(T("Mese")),th(T("Richieste sito"),1),th(T("D1 righe lette"),1),th(T("D1 righe scritte"),1),th(T("Richieste OCPP"),1),th("OCPP GB-s",1),th(T("OCPP righe lette"),1),th(T("OCPP righe scritte"),1),th(T("Giorno di picco"))]);
    d.mesi.forEach(function(m){var p=m.picco,mm=m.mese.split("-").reverse().join("-");
      M+=row([td(esc(mm)),td(m.req.toLocaleString(LOC),1),td(m.d1r.toLocaleString(LOC),1),td(m.d1w.toLocaleString(LOC),1),td(m.dor.toLocaleString(LOC),1),td(Math.round(m.dogbs).toLocaleString(LOC),1),td(m.dorr.toLocaleString(LOC),1),td(m.dorw.toLocaleString(LOC),1),
        td(p.voce?esc(p.giorno.split("-").reverse().join("-"))+" - "+esc(T(p.voce))+" "+p.pct.toLocaleString(LOC,{maximumFractionDigits:1})+"%":"-")])});
    $("tabCfM").innerHTML=M;
    function by(n){return n>=1e9?(n/1e9).toLocaleString(LOC,{maximumFractionDigits:2})+" GB":n>=1e6?(n/1e6).toLocaleString(LOC,{maximumFractionDigits:1})+" MB":Math.round(n/1e3).toLocaleString(LOC)+" KB"}
    var sp=d.spazio||{};
    $("cfSpazio").innerHTML=T("Spazio occupato (limite 5 GB ciascuno, totale):")+" D1 <b>"+(sp.d1?by(sp.d1)+" ("+(sp.d1/L.spazio*100).toLocaleString(LOC,{maximumFractionDigits:3})+"%)":"-")+"</b>; "+T("server OCPP")+" <b>"+(sp.ocpp?by(sp.ocpp)+" ("+(sp.ocpp/L.spazio*100).toLocaleString(LOC,{maximumFractionDigits:3})+"%)":"-")+"</b>";
    $("cfNota").textContent=T("Tutti i limiti del piano gratuito sono giornalieri e si azzerano alle 00:00 UTC (01:00 ora solare, 02:00 ora legale in Italia); non ce ne sono di mensili. Tra parentesi la quota del limite del giorno. Il giorno corrente è parziale. Il riepilogo mensile somma i giorni e indica il giorno più vicino al limite. Lo spazio (5 GB totali per D1 e per il server OCPP) non è giornaliero: si accumula e conta nell'avviso. Non monitorata la CPU (10 ms per richiesta). Dati aggiornati alle ")+oraTxt(d.ts)+".";
  });
}
function disegnaMal(d){
  if(!d||d.errore)return;
  function statoTxt(r){var st=d.stato[r.id];return !r.on?T("disattivato"):!st?T("regolare"):st.notificato?T("segnalato il ")+oraTxt(st.notificato):T("in corso dal ")+oraTxt(st.da)+(st.esito&&st.esito!=="inviata"?" - "+T("mail non inviata"):"")}
  if(MALDIRTY){d.regole.forEach(function(r){var c=document.querySelector('#tabMal td[data-s="'+r.id+'"]');if(c){var cb=document.querySelector('#tabMal input[data-m="'+r.id+'"]'),cn=document.querySelector('#tabMal input[data-n="'+r.id+'"]');c.textContent=cb&&!cb.checked&&cn&&!cn.checked?T("disattivato"):statoTxt(Object.assign({},r,{on:true}))}})}   // unsaved changes: do not redraw the table
  else{$("mA").value=d.a.join(", ");$("mCc").value=d.cc.join(", ");
    var h=row([th(T("Mail")),th(T("Notifica")),th(T("Controllo")),th(T("Soglia")),th(T("Stato"))]),g="";
    d.regole.forEach(function(r){
      if(r.g!==g){g=r.g;h+='<tr><th colspan="5" style="background:var(--bg)">'+esc(T(g))+"</th></tr>"}
      var t=statoTxt(r);
      var v=r.tipo==="evento"?'<span class="sub">'+T("avviso singolo")+"</span>":'<input type="number" data-v="'+r.id+'" min="'+r.da+'" max="'+r.a+'" value="'+r.valore+'" style="width:5em"> '+esc(T(r.unita));
      h+=row([td('<input type="checkbox" data-m="'+r.id+'"'+(r.mail?" checked":"")+">"),td('<input type="checkbox" data-n="'+r.id+'"'+(r.not?" checked":"")+">"),td(esc(T(r.label))),td(v),'<td data-s="'+r.id+'">'+esc(t)+'</td>'])});
    $("tabMal").innerHTML=h}
  if(d.avvisi&&!AVDIRTY){$("avOn").checked=!!d.avvisi.on;$("avAt").value=d.avvisi.attesa;$("avSo").value=d.avvisi.sollecito}
  var ep=row([th(T("Controllo")),th(T("Dal")),th(T("Al")),th(T("Mail"))]);
  if(!d.storico.length)ep+='<tr><td colspan="4" class="sub">'+T("Nessun episodio registrato")+"</td></tr>";
  d.storico.forEach(function(x){ep+=row([td(esc(T(x.label))),td(oraTxt(x.dal)),td(x.evento?"-":x.al?oraTxt(x.al):T("in corso")),td(x.evento?(x.inviata?T("inviata"):T("non inviata")):"")])});
  $("tabEp").innerHTML=ep;
  $("mUlt").textContent=d.ultimo?T("Ultimo controllo: ")+oraTxt(d.ultimo):T("Il controllo non è ancora partito")}
function leggiMal(){
  var rg={};document.querySelectorAll("#tabMal input[data-m]").forEach(function(c){var id=c.getAttribute("data-m");var vi=document.querySelector('#tabMal input[data-v="'+id+'"]');var cn=document.querySelector('#tabMal input[data-n="'+id+'"]');rg[id]={mail:c.checked,not:!!(cn&&cn.checked),valore:vi?vi.value:0}});
  return {a:$("mA").value,cc:$("mCc").value,regole:rg}}
["tabMal","mA","mCc"].forEach(function(id){var e=$(id);e.addEventListener("input",function(){MALDIRTY=true});e.addEventListener("change",function(){MALDIRTY=true})});
["avOn","avAt","avSo"].forEach(function(id){$(id).addEventListener("input",function(){AVDIRTY=true});$(id).addEventListener("change",function(){AVDIRTY=true})});
$("bAv").onclick=function(){post("/api/malfunzionamenti",{azione:"avvisi",on:$("avOn").checked,attesa:$("avAt").value,sollecito:$("avSo").value}).then(function(r){
  $("avEsito").textContent=r.errore?T(r.errore):T("Salvato");if(!r.errore)AVDIRTY=false})};
$("bMal").onclick=function(){post("/api/malfunzionamenti",leggiMal()).then(function(r){
  $("mEsito").textContent=r.errore?T(r.errore):T("Impostazioni salvate");if(!r.errore){MALDIRTY=false;disegnaMal(r)}})};
$("bMalProva").onclick=function(){post("/api/malfunzionamenti",{azione:"prova"}).then(function(r){$("mEsito").textContent=r.errore?T(r.errore):T("Mail di prova inviata")})};
function caricaDest(){return api("/api/destinatari").then(function(d){if(d&&d.a){$("dA").value=d.a.join(", ");$("dCc").value=d.cc.join(", ")}})}
$("bDest").onclick=function(){
  post("/api/destinatari",{a:$("dA").value,cc:$("dCc").value}).then(function(r){
    $("dEsito").textContent=r.errore?T(r.errore):T("Destinatari salvati");if(r.a){$("dA").value=r.a.join(", ");$("dCc").value=r.cc.join(", ")}});
};
var io=null;
var ETI={report:"report",storico:"storico",sessioni:"sessioni",prezzo:"prezzo",stampa:"stampa",scarica:"scarico",app:"app",live:"ricarica in corso"};
function permForm(){var p={};document.querySelectorAll("#uPerm input").forEach(function(c){p[c.dataset.p]=c.checked});return p}
function setPermForm(p){document.querySelectorAll("#uPerm input").forEach(function(c){c.checked=!!p[c.dataset.p]})}
setPermForm({report:1,storico:1,sessioni:1,stampa:1});
var ATT=null;
function modoUtente(att){
  ATT=att||null;
  $("bUInvita").textContent=T(ATT?"Attiva utenza":"Invia invito");
  $("bUPerm").classList.toggle("hide",!!ATT);
  if(ATT){$("uTipo").value="c";tipoUI()}
}
function tipoUI(){var c=$("uTipo").value==="c";$("uTessBox").classList.toggle("hide",!c);$("uPerm").classList.toggle("hide",c)}
$("uTipo").onchange=tipoUI;
var ANAG=null;   // registered user whose personal details are being edited
function anagMostra(x){
  var an=x&&x.anagrafica;ANAG=an?x.nome:null;
  $("uAnBox").classList.toggle("hide",!an);
  $("bUPerm").textContent=T(an?"Salva permessi e dati":"Salva solo i permessi");
  if(an){$("uAnNome").value=an.nome||"";$("uAnCognome").value=an.cognome||"";$("uAnTel1").value=an.tel1||"";$("uAnTel2").value=an.tel2||""}
}
function anagDati(){
  if(!ANAG||$("uNome").value.trim().toLowerCase()!==ANAG)return null;
  return {nome:$("uAnNome").value,cognome:$("uAnCognome").value,tel1:$("uAnTel1").value,tel2:$("uAnTel2").value};
}
function caricaTessere(){
  return api("/api/tessere").then(function(L){
    if(!Array.isArray(L))return;var cur=$("uTess").value;
    $("uTess").innerHTML='<option value="">'+T("- scegli la tessera -")+'</option>'+L.map(function(x){return '<option value="'+esc(x.tag)+'">'+esc(x.tag)+' - '+esc(x.nome)+'</option>'}).join("");
    $("uTess").value=cur;
    var cur2=Array.prototype.map.call($("uTess2").selectedOptions,function(o){return o.value});
    $("uTess2").innerHTML=L.map(function(x){return '<option value="'+esc(x.tag)+'">'+esc(x.tag)+' - '+esc(x.nome)+'</option>'}).join("");
    Array.prototype.forEach.call($("uTess2").options,function(o){o.selected=cur2.indexOf(o.value)>=0});
  });
}
function invia(email,perm,tess,altre){
  $("uEsito").textContent="";$("uLink").classList.add("hide");
  return post("/api/utenti",{azione:"invita",nome:email,permessi:perm,tessera:tess||"",tessere_altre:altre||[],lang:LANG}).then(function(r){
    if(r.errore){$("uEsito").textContent=T(r.errore);return}
    if(r.mail==="inviata")$("uEsito").textContent=T("Invito inviato a ")+email;
    else{$("uEsito").textContent=T("Mail non inviata (")+T(r.mail)+T("). Copia il link e invialo tu:");$("uLink").value=r.link;$("uLink").classList.remove("hide")}
    $("uNome").value="";caricaUtenti();
  });
}
function caricaUtenti(){
  return api("/api/utenti").then(function(L){
    if(!Array.isArray(L))return;
    var na=L.filter(function(x){return x.in_attesa_tessera}).length;$("navUN").textContent=na?String(na):"";
    caricaTessere();
    api("/api/cifratura").then(function(c){if(!c||c.errore)return;
      $("cifraInfo").textContent=c.attiva?T("Cifratura dei dati personali: attiva")+(c.utenti?" ("+c.cifrati+" "+T("campi cifrati")+(c.chiaro?", "+c.chiaro+" "+T("in chiaro"):"")+")":""):T("Cifratura dei dati personali NON attiva: manca il secret DATA_KEY, i dati dei nuovi utenti restano in chiaro (vedi README)");
      $("cifraInfo").style.color=c.attiva&&!c.chiaro?"":"var(--err)";
      if(!c.turnstile)$("cifraInfo").textContent+=" - "+T("Controllo anti-robot nella registrazione NON attivo: mancano TURNSTILE_SITE_KEY e TURNSTILE_SECRET (vedi README)")});
    var t=row([th(T("Utente")),th(T("Stato")),th(T("Permessi / tessera")),th("")]);
    L.forEach(function(x){
      var adm=x.ruolo==="admin";
      var an=x.anagrafica;
      var st=adm?"admin":T(an&&an.da_confermare?"email da confermare":x.in_attesa_tessera?"in attesa di tessera":(x.attivo?"attivo":(x.invito_scaduto?"invito scaduto":"invito in attesa")));
      var pe=adm?T("tutti"):x.tessera?(x.tessera+" - "+(x.tessera_nome||"")+(x.tessere_altre&&x.tessere_altre.length?" + "+x.tessere_altre.map(function(a){return a.tag+" - "+(a.nome||"")}).join(" + "):"")):Object.keys(x.perm).filter(function(k){return x.perm[k]}).map(function(k){return T(ETI[k])}).join(", ")||T("nessuno");
      var attiva=an&&(x.in_attesa_tessera||an.da_confermare);
      var az=adm?"":'<button class="bm" data-m="'+esc(x.nome)+'">'+T("Modifica")+'</button> '+(attiva?'<button class="ba" data-m="'+esc(x.nome)+'">'+T("Attiva utenza")+'</button> ':'<button class="br" data-m="'+esc(x.nome)+'" title="'+T(x.attivo?"Manda un link per reimpostare la password":"Manda di nuovo il link di invito")+'">'+T(x.attivo?"Reimposta":"Reinvia")+'</button> ')+'<button class="bd" data-d="'+esc(x.nome)+'">'+T("Elimina")+'</button>';
      var ut=esc(x.nome);
      if(an)ut='<b>'+esc((an.nome||"")+" "+(an.cognome||""))+'</b><br>'+ut+'<br><small>'+esc(an.tel1||"")+(an.tel2?" / "+esc(an.tel2):"")+(an.messaggi?" - Telegram: "+T("sì"):"")+'</small>';
      t+=row([td(ut),td(st),td(esc(pe)),'<td class="n">'+az+"</td>"]);
    });
    $("tabU").innerHTML=t;
    var per={};L.forEach(function(x){per[x.nome]=x});
    var S={reg:0,wa:0,tg:0,tgc:0,tg2:0,ent:0,nessuno:0,tel2:0};L.forEach(function(x){var c=x.anagrafica&&x.anagrafica.canali;if(!c)return;S.reg++;if(c.wa)S.wa++;if(c.tg)S.tg++;if(c.tg_chat)S.tgc++;if(c.tg_chat>1)S.tg2++;if(c.wa&&c.tg)S.ent++;if(!c.wa&&!c.tg)S.nessuno++;if(c.wa&&c.tel2)S.tel2++});
    function pct(n){return S.reg?" ("+Math.round(n/S.reg*100)+"%)":""}
    $("tabCanali").innerHTML=row([th(T("Utenti con profilo")),td(String(S.reg),1)])+row([th(T("Consenso Telegram")),td(S.tg+pct(S.tg),1)])+row([th(T("Telegram collegato")),td(S.tgc+pct(S.tgc)+(S.tg2?" - "+S.tg2+" "+T("con due chat"):""),1)])+row([th(T("Nessun consenso (solo mail)")),td(S.nessuno+pct(S.nessuno),1)]);
    document.querySelectorAll("#tabU .bm,#tabU .ba").forEach(function(b){b.onclick=function(){var x=per[b.dataset.m];$("uNome").value=x.nome;setPermForm(x.perm);$("uTipo").value=x.tessera?"c":"g";tipoUI();$("uTess").value=x.tessera||"";var al=(x.tessere_altre||[]).map(function(a){return a.tag});Array.prototype.forEach.call($("uTess2").options,function(o){o.selected=al.indexOf(o.value)>=0});anagMostra(x);modoUtente(b.classList.contains("ba")?x.nome:null);$("uTess").focus();window.scrollTo(0,0)}});
    document.querySelectorAll("#tabU .br").forEach(function(b){b.onclick=function(){
      if(confirm(T("Mandare un nuovo link a ")+b.dataset.m+"?"))invia(b.dataset.m,per[b.dataset.m].perm,per[b.dataset.m].tessera,(per[b.dataset.m].tessere_altre||[]).map(function(a){return a.tag}))}});
    document.querySelectorAll("#tabU .bd").forEach(function(b){b.onclick=function(){
      if(!confirm(T("Eliminare l'utente ")+b.dataset.d+"?"))return;
      post("/api/utenti",{azione:"elimina",nome:b.dataset.d}).then(function(r){$("uEsito").textContent=T(r.errore)||"";caricaUtenti()})}});
  });
}
function datiForm(){
  var c=$("uTipo").value==="c";
  if(c&&!$("uTess").value){$("uEsito").textContent=T("Scegli la tessera da abbinare");return null}
  return {perm:c?{}:permForm(),tess:c?$("uTess").value:"",altre:c?Array.prototype.map.call($("uTess2").selectedOptions,function(o){return o.value}):[],an:anagDati()};
}
$("bUInvita").onclick=function(){
  var d=datiForm();if(!d)return;
  if(!ATT){invia($("uNome").value,d.perm,d.tess,d.altre);return}
  post("/api/utenti",{azione:"permessi",nome:ATT,permessi:{},tessera:d.tess,tessere_altre:d.altre,anagrafica:d.an}).then(function(r){
    if(r.errore){$("uEsito").textContent=T(r.errore);return}
    $("uEsito").textContent=r.mail==="inviata"?T("Utenza attivata: mail inviata a ")+ATT:r.mail?T("Utenza attivata, ma la mail non è partita (")+T(r.mail)+")":T("Tessera abbinata: l'utenza si attiverà quando l'utente conferma l'email");
    modoUtente(null);anagMostra(null);$("uNome").value="";caricaUtenti()});
};
$("uNome").addEventListener("input",function(){if(ATT&&$("uNome").value.trim().toLowerCase()!==ATT)modoUtente(null);if(ANAG&&$("uNome").value.trim().toLowerCase()!==ANAG)anagMostra(null)});
$("bUPerm").onclick=function(){
  var d=datiForm();if(!d)return;
  post("/api/utenti",{azione:"permessi",nome:$("uNome").value,permessi:d.perm,tessera:d.tess,tessere_altre:d.altre,anagrafica:d.an}).then(function(r){
    $("uEsito").textContent=T(r.errore)||T(d.an?"Permessi e dati salvati":"Permessi salvati");caricaUtenti()});
};
function cmDati(){return {oggetto:$("cmOgg").value,it:$("cmIt").value,en:$("cmEn").value,telegram:$("cmTg").checked}}
$("bCmAnteprima").onclick=function(){$("cmEsito").textContent="";post("/api/comunicazione",Object.assign(cmDati(),{azione:"anteprima"})).then(function(r){
  if(r.errore){$("cmEsito").textContent=T(r.errore);$("bCmInvia").classList.add("hide");return}
  $("cmPrev").innerHTML=r.anteprima;$("cmPrev").classList.remove("hide");$("bCmInvia").classList.remove("hide");$("bCmInvia").textContent=T("Invia a ")+r.destinatari+T(" utenti")})};
$("bCmInvia").onclick=function(){if(!confirm(T("Inviare la comunicazione a tutti gli utenti? Non si può annullare.")))return;$("bCmInvia").disabled=true;
  post("/api/comunicazione",Object.assign(cmDati(),{azione:"invia"})).then(function(r){$("bCmInvia").disabled=false;if(r.errore){$("cmEsito").textContent=T(r.errore);return}
    $("cmEsito").textContent=T("Inviate ")+r.inviate+(r.errori?", "+r.errori+T(" non riuscite"):"")+(r.saltate?", "+r.saltate+T(" non inviate per il limite"):"")+(r.messaggi?", "+r.messaggi+T(" messaggi in partenza entro 5 minuti"):"");$("bCmInvia").classList.add("hide")})};
$("bBackup").onclick=function(){
  var p=$("bkP").value,e=$("bkEsito");e.textContent="";
  if(p.length<12){e.textContent=T("La passphrase deve avere almeno 12 caratteri");return}
  if(p!==$("bkP2").value){e.textContent=T("Le due passphrase non coincidono");return}
  var enc=new TextEncoder(),salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
  e.textContent="...";
  fetch("/api/backup").then(function(r){if(!r.ok)throw new Error("http");return r.arrayBuffer()}).then(function(buf){
    return crypto.subtle.importKey("raw",enc.encode(p),"PBKDF2",false,["deriveKey"]).then(function(km){
      return crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:600000,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["encrypt"])})
    .then(function(k){return crypto.subtle.encrypt({name:"AES-GCM",iv:iv},k,buf)})
  }).then(function(ct){
    var magic=enc.encode("RBK1"),out=new Uint8Array(4+16+12+ct.byteLength);
    out.set(magic,0);out.set(salt,4);out.set(iv,20);out.set(new Uint8Array(ct),32);
    var a=document.createElement("a"),d=new Date().toISOString().slice(0,10);
    a.href=URL.createObjectURL(new Blob([out],{type:"application/octet-stream"}));a.download="ricariche_"+d+".sql.enc";
    document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},5000);
    $("bkP").value="";$("bkP2").value="";e.textContent=T("Backup cifrato scaricato");
  }).catch(function(){e.textContent=T("Backup non riuscito")});
};
// ---------- archivio delle ricariche: estrazione cifrata nel browser + visualizzatore, in uno zip; eliminazione solo dei mesi esportati
var ARC=null,CRC_T=null;
function ymTxt(s){if(!s)return "-";var p=s.split("-");return T(MESI[+p[1]-1])+" "+p[0]}
function mesiTra(da,a){var out=[],y=+da.slice(0,4),m=+da.slice(5,7),ya=+a.slice(0,4),ma=+a.slice(5,7);while(y<ya||(y===ya&&m<=ma)){out.push(y+"-"+("0"+m).slice(-2));if(++m>12){m=1;y++}}return out}
function caricaArchivio(){return api("/api/archivio").then(function(r){if(!r||r.errore)return;ARC=r;
  var da=r.primo||r.corrente,a=r.ultimo||r.corrente,lista=mesiTra(da,a),opt=function(l,sel){return l.map(function(k){return '<option value="'+k+'"'+(k===sel?" selected":"")+">"+ymTxt(k)+"</option>"}).join("")};
  $("arDa").innerHTML=opt(lista,da);$("arA").innerHTML=opt(lista,a);
  var prec=lista.filter(function(k){return k<r.corrente&&(!r.coperto||k<=r.coperto)});$("arFino").innerHTML=opt(prec,prec[prec.length-1]);
  var cop=r.coperto?T("Esportato dall'inizio dello storico fino a ")+ymTxt(r.coperto)+". ":T("Nessuna esportazione dall'inizio dello storico: l'eliminazione non è disponibile. ");
  if(r.eliminato)cop+=T("Ultima eliminazione: ")+r.eliminato.n+T(" sessioni fino a ")+ymTxt(r.eliminato.fino)+". ";
  $("arElTxt").textContent=cop;$("bArEl").disabled=!r.coperto||!prec.length})}
function crc32(u8){if(!CRC_T){CRC_T=new Int32Array(256);for(var n=0;n<256;n++){var c=n;for(var k=0;k<8;k++)c=c&1?(0xEDB88320^(c>>>1)):(c>>>1);CRC_T[n]=c}}var r=-1;for(var i=0;i<u8.length;i++)r=CRC_T[(r^u8[i])&255]^(r>>>8);return (r^-1)>>>0}
function zipStore(files){
  var enc=new TextEncoder(),parti=[],cd=[],off=0,now=new Date(),dt=((now.getHours()<<11)|(now.getMinutes()<<5)|(now.getSeconds()>>1))&0xffff,dd=(((now.getFullYear()-1980)<<9)|((now.getMonth()+1)<<5)|now.getDate())&0xffff;
  files.forEach(function(f){var n=enc.encode(f.nome),crc=crc32(f.dati),h=new DataView(new ArrayBuffer(30)),c=new DataView(new ArrayBuffer(46));
    h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0,true);h.setUint16(8,0,true);h.setUint16(10,dt,true);h.setUint16(12,dd,true);h.setUint32(14,crc,true);h.setUint32(18,f.dati.length,true);h.setUint32(22,f.dati.length,true);h.setUint16(26,n.length,true);h.setUint16(28,0,true);
    c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0,true);c.setUint16(10,0,true);c.setUint16(12,dt,true);c.setUint16(14,dd,true);c.setUint32(16,crc,true);c.setUint32(20,f.dati.length,true);c.setUint32(24,f.dati.length,true);c.setUint16(28,n.length,true);c.setUint16(30,0,true);c.setUint16(32,0,true);c.setUint16(34,0,true);c.setUint16(36,0,true);c.setUint32(38,0,true);c.setUint32(42,off,true);
    parti.push(h.buffer,n,f.dati);cd.push(c.buffer,n);off+=30+n.length+f.dati.length});
  var cdLen=cd.reduce(function(s,x){return s+x.byteLength},0),e=new DataView(new ArrayBuffer(22));
  e.setUint32(0,0x06054b50,true);e.setUint16(4,0,true);e.setUint16(6,0,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,cdLen,true);e.setUint32(16,off,true);e.setUint16(20,0,true);
  return new Blob(parti.concat(cd,[e.buffer]),{type:"application/zip"})}
$("bArEsp").onclick=function(){
  var p=$("arP").value,e=$("arEsito"),da=$("arDa").value,a=$("arA").value;e.classList.remove("err");e.textContent="";
  if(a<da){e.classList.add("err");e.textContent=T("Il mese finale viene prima di quello iniziale");return}
  if(p.length<12){e.classList.add("err");e.textContent=T("La passphrase deve avere almeno 12 caratteri");return}
  if(p!==$("arP2").value){e.classList.add("err");e.textContent=T("Le due passphrase non coincidono");return}
  var enc=new TextEncoder(),salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12)),n=0;e.textContent="...";
  Promise.all([fetch("/api/archivio?da="+da+"&a="+a).then(function(r){return r.json()}),fetch("/archivio.html").then(function(r){if(!r.ok)throw new Error("http");return r.text()})]).then(function(v){
    if(v[0].errore)throw new Error(v[0].errore);n=v[0].sessioni.length;
    return crypto.subtle.importKey("raw",enc.encode(p),"PBKDF2",false,["deriveKey"]).then(function(km){return crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:600000,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["encrypt"])})
      .then(function(k){return crypto.subtle.encrypt({name:"AES-GCM",iv:iv},k,enc.encode(JSON.stringify(v[0])))}).then(function(ct){
        var out=new Uint8Array(32+ct.byteLength);out.set(enc.encode("ARC1"),0);out.set(salt,4);out.set(iv,20);out.set(new Uint8Array(ct),32);
        var nome="archivio_"+da+"_"+a,z=zipStore([{nome:nome+".enc",dati:out},{nome:"archivio.html",dati:enc.encode(v[1])}]);
        var el=document.createElement("a");el.href=URL.createObjectURL(z);el.download=nome+".zip";document.body.appendChild(el);el.click();el.remove();setTimeout(function(){URL.revokeObjectURL(el.href)},5000)})
  }).then(function(){$("arP").value="";$("arP2").value="";e.textContent=T("Archivio scaricato: ")+n+T(" sessioni");caricaArchivio()}).catch(function(x){e.classList.add("err");e.textContent=T(x&&x.message&&x.message!=="http"?x.message:"Esportazione non riuscita")})};
$("bArEl").onclick=function(){var f=$("arFino").value,e=$("arEsito");if(!f)return;e.classList.remove("err");
  if(!confirm(T("Eliminare dal sito tutte le sessioni fino a ")+ymTxt(f)+T("? Spariscono da report e storico: restano solo negli archivi già scaricati.")))return;
  if(prompt(T("Per confermare scrivi ELIMINA"))!=="ELIMINA")return;
  post("/api/archivio",{azione:"elimina",fino:f}).then(function(r){e.classList.toggle("err",!!r.errore);e.textContent=r.errore?T(r.errore):T("Eliminate ")+r.eliminate+T(" sessioni");caricaArchivio()})};
$("bEsci").onclick=function(){post("/api/logout",{}).then(function(){location.reload()})};
$("bPw").onclick=function(){$("boxPw").classList.toggle("hide")};
$("bPwOk").onclick=function(){
  if($("pwNew").value!==$("pwNew2").value){$("pwEsito").textContent=T("Le due nuove password non coincidono");return}
  post("/api/miapassword",{vecchia:$("pwOld").value,nuova:$("pwNew").value,ripeti:$("pwNew2").value}).then(function(r){
    $("pwEsito").textContent=T(r.errore)||T("Password cambiata");if(r.ok){$("pwOld").value="";$("pwNew").value="";$("pwNew2").value=""}});
};
// ---------- phone (up to 700 px): bottom tab bar with icons; extra tabs go into the "More" menu
var ICO={t1:'<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
t3:'<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
t2:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
t4:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6"/><path d="M17 4a4 4 0 0 1 0 8"/><path d="M22 21c0-3-1.5-5-4-5.6"/>',
t13:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>',
t9:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
t5:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
t10:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
t6:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="m4.9 4.9 2.1 2.1"/><path d="m17 17 2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.9 19.1 2.1-2.1"/><path d="m17 7 2.1-2.1"/>',
t8:'<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a6 6 0 0 1-12 0V8z"/>',
t11:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
t12:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
altro:'<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>'};
var CORTO={t1:"Report",t3:"Sessioni",t2:"Storico",t4:"Utenti/Card",t13:"Prepagate",t9:"Stato",t5:"Ricariche",t10:"Profilo",t6:"Impostazioni",t8:"OCPP",t12:"Info"};
var PRI=["t9","t5","t1","t4","t11","t13","t10","t3","t2","t6","t8","t12"];
function svgIco(k){return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICO[k]+"</svg>"}
function testoTab(b){var n=b.firstChild;return n&&n.nodeType===3?n.nodeValue.trim():""}
function navMob(){
  var nav=document.querySelector("nav");if(!nav)return;
  var bs=[].slice.call(nav.querySelectorAll("button[data-t]"));
  bs.forEach(function(b){
    if(!b.querySelector(".ico")){var i=document.createElement("span");i.className="ico";i.innerHTML=svgIco(b.dataset.t);b.appendChild(i);var l=document.createElement("span");l.className="lbM";b.appendChild(l)}
    var c=b.dataset.t==="t11"?(io&&io.ruolo==="admin"?"Ticket":"Assistenza"):CORTO[b.dataset.t],lb=b.querySelector(".lbM");
    if(lb.textContent!==T(c))lb.textContent=T(c);
    if(b.getAttribute("aria-label")!==testoTab(b))b.setAttribute("aria-label",testoTab(b));
  });
  var vis=bs.filter(function(b){return !b.classList.contains("hide")});
  var prim=vis.length<=5?vis:PRI.map(function(t){return vis.filter(function(b){return b.dataset.t===t})[0]}).filter(Boolean).slice(0,4);
  bs.forEach(function(b){b.classList.toggle("fuori",prim.indexOf(b)<0)});
  var al=$("navAltro");
  if(!al){al=document.createElement("button");al.type="button";al.id="navAltro";al.innerHTML='<span class="ico">'+svgIco("altro")+'</span><span class="lbM">'+T("Altro ").trim()+"</span>";nav.appendChild(al);
    var sh=document.createElement("div");sh.id="altroM";sh.setAttribute("role","menu");document.body.appendChild(sh);
    al.onclick=function(e){e.stopPropagation();var aperto=!sh.classList.contains("aperto");
      if(aperto){sh.innerHTML="";[].slice.call(nav.querySelectorAll("button[data-t].fuori:not(.hide)")).forEach(function(b){
        var x=document.createElement("button");x.type="button";x.setAttribute("role","menuitem");x.className=b.classList.contains("on")?"on":"";x.innerHTML=svgIco(b.dataset.t);x.appendChild(document.createTextNode(testoTab(b)));
        x.onclick=function(){sh.classList.remove("aperto");b.click()};sh.appendChild(x)})}
      sh.classList.toggle("aperto",aperto)};
    document.addEventListener("click",function(){sh.classList.remove("aperto")});
  }
  al.style.display=vis.length>5?"":"none";
  var attiva=document.querySelector("nav button.on[data-t]");
  al.classList.toggle("on",!!(attiva&&attiva.classList.contains("fuori")));
  var tit=attiva?testoTab(attiva):"";if($("titoloM").textContent!==tit)$("titoloM").textContent=tit;
}
(function(){var tm=0,nav=document.querySelector("nav");if(!nav)return;
  new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(navMob,20)}).observe(nav,{attributes:true,attributeFilter:["class"],characterData:true,subtree:true});
  navMob()})();
api("/api/me").then(function(m){
  io=m;var P=m.perm;
  if(m.completa){location.href="/?completa=1";return}
  applicaConfig(m);
  if(m.registrato){$("navP").classList.remove("hide");$("navT").classList.remove("hide")}
  if(m.tessere&&m.tessere.length)$("tkTess").innerHTML=m.tessere.map(function(t){return '<option value="'+esc(t.tag)+'">'+esc(t.tag)+(t.nome?" - "+esc(t.nome):"")+'</option>'}).join("");
  if(m.senzaTessera){
    document.querySelectorAll("nav button").forEach(function(b){b.classList.add("hide")});
    $("navP").classList.remove("hide");$("navT").classList.remove("hide");$("bScarica").classList.add("hide");$("bImporta").classList.add("hide");$("stato").classList.add("hide");
    $("cSenzaT").classList.remove("hide");var po=$("tkTipo").querySelector('option[value="tessera"]');if(po)po.remove();$("tkTipo").value="nuova";tipoT();
  }
  $("chi").innerHTML=esc(m.nome)+(m.ruolo==="admin"&&m.nome!=="admin"?' <span class="pill">admin</span>':"");
  if(m.senzaTessera){$("chi").innerHTML=esc(m.nome);$("navT").click();return}
  if(m.tessera){
    document.querySelectorAll("nav button").forEach(function(b){b.classList.add("hide")});
    $("navM").classList.remove("hide");$("navL").classList.remove("hide");if(m.registrato){$("navP").classList.remove("hide");$("navT").classList.remove("hide")}$("bScarica").classList.add("hide");$("bImporta").classList.add("hide");$("stato").classList.add("hide");
    $("mieTit").textContent=T("Le mie ricariche")+((m.tessere&&m.tessere.length>1)?" - "+m.tessere.map(function(t){return (t.nome?t.nome+" ":"")+"("+t.tag+")"}).join(", "):(m.tessera.nome?" - "+m.tessera.nome+" ("+m.tessera.tag+")":""));
    $("navM").click();return;
  }
  if(m.ruolo==="admin"){MONADM=true;caricaNot();badgeUtenti();badgeTicket();$("navT").classList.remove("hide");$("navT").firstChild.nodeValue=T("Ticket");$("navI").classList.remove("hide");$("navPre").classList.remove("hide");$("cTkNuovo").classList.add("hide");$("cPag").classList.remove("hide");api("/api/pagamento").then(function(d){if(d){$("pagPp").value=d.paypal||"";$("pagSa").value=d.satispay||"";$("pagRe").value=d.revolut||""}});$("tkTit").textContent=T("Richieste degli utenti");document.querySelectorAll(".solo-adm").forEach(function(e){e.classList.remove("hide")});$("navUt").classList.remove("hide");$("navSet").classList.remove("hide");$("navOc").classList.remove("hide")}
  function nasc(id,ok){var e=$(id);if(e)e.classList.toggle("hide",!ok)}
  nasc("bScarica",P.scarica);nasc("bImporta",P.scarica);
  document.querySelectorAll("#prezzo,#iva,#bPrezzo").forEach(function(e){(e.tagName==="BUTTON"?e:e.parentNode).classList.toggle("hide",!P.prezzo)});
  nasc("bStampa",P.stampa);nasc("bCsv",P.stampa);nasc("bCsvAnno",P.stampa);
  document.querySelector('nav button[data-t="t1"]').classList.toggle("hide",!P.report);
  document.querySelector('nav button[data-t="t2"]').classList.toggle("hide",!P.storico);
  document.querySelector('nav button[data-t="t3"]').classList.toggle("hide",!P.sessioni);
  if(!P.report){var primo=document.querySelector("nav button:not(.hide)");if(primo)primo.click()}
  caricaStato();if(P.report)caricaReport();
});
</script>
</body>
</html>`;

export const LOGIN = String.raw`<!doctype html>
<html lang="it">
<head>
<script>try{var _t=localStorage.getItem("tema");if(_t)document.documentElement.setAttribute("data-t",_t)}catch(e){}</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__TITLE__</title>
<style>
*{box-sizing:border-box}
body{margin:0;font:15px/1.45 system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--tx);display:flex;min-height:100vh;justify-content:center;padding:20px 0}
.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:22px;width:min(460px,94vw);align-self:flex-start;margin:auto 0}
h1{font-size:18px;margin:0 0 4px}
.sub{color:var(--mut);font-size:13px;margin-bottom:12px}
.tabs{display:flex;gap:6px;margin:10px 0 14px}
.tabs button{flex:1;background:var(--bg);color:var(--tx);border:1px solid var(--line)}
form{display:flex;flex-direction:column;gap:10px}
label{font-size:13px;color:var(--mut);display:flex;flex-direction:column;gap:3px}
input,select,button{font:inherit;padding:9px 10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--tx);min-width:0}
.riga{display:flex;gap:8px}
.riga>label{flex:1;min-width:0}
label input,label select{width:100%}
.tel select{width:44%}.tel input{width:auto}.chk input{width:auto}
.tel{display:flex;gap:6px}
.tel select{width:44%;flex:none}.tel input{flex:1}
.err{color:var(--err);min-height:1.2em;font-size:13px}
.okm{color:var(--ok);font-size:14px}
.rg{font-size:12px;color:var(--mut);margin:-4px 0 0;display:flex;flex-wrap:wrap;gap:2px 12px}
.rg span.s{color:var(--ok)}
.chk{flex-direction:row;gap:8px;align-items:flex-start;font-size:13px;color:var(--tx)}
.chk input{margin-top:3px;flex:none}
details{border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:13px}
details summary{cursor:pointer;color:var(--acc)}
details .t{max-height:220px;overflow:auto;margin-top:6px}
details h4{margin:10px 0 3px;font-size:13px}details p,details li{margin:3px 0}
.hide{display:none!important}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.piede{margin:24px auto 12px;text-align:center;font-size:12px;color:var(--mut)}.piede a{color:var(--acc)}.noprint-f{}</style>
</head>
<body>
<div class="card">
  <select class="lingua lingua-p" id="bLang" aria-label="Lingua / Language"></select><button type="button" id="bTema" style="float:right;margin-right:12px;background:none;border:0;color:var(--acc);padding:0;cursor:pointer"></button>
  <div class="marca"><span class="logo" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg></span><h1>__TITLE__ <span class="ver">__VERSION__</span></h1></div>
  <div class="sub">Accedi o registrati per consultare le tue ricariche</div>
  <div class="tabs"><button type="button" id="tA" class="on">Accedi</button><button type="button" id="tR">Registrati</button></div>

  <form id="f">
    <input id="n" placeholder="Email" autocomplete="username" autocapitalize="none" required>
    <input id="p" type="password" placeholder="Password" autocomplete="current-password" required>
    <button type="submit" class="p">Accedi</button>
    <div class="err" id="e"></div>
    <button type="button" class="l" id="bDim" style="align-self:flex-start;padding:0">Password dimenticata?</button>
    <div id="recBox" class="hide" style="display:flex;flex-direction:column;gap:8px">
      <input id="recN" type="text" inputmode="email" placeholder="Email dell'accesso" autocomplete="off" autocapitalize="none">
      <button type="button" class="p" id="bRec">Invia il link</button>
      <div class="sub" id="recE"></div>
    </div>
  </form>

  <form id="g" class="hide" autocomplete="on" novalidate>
    <div class="riga">
      <label>Nome<input id="rN" autocomplete="given-name" required></label>
      <label>Cognome<input id="rC" autocomplete="family-name" required></label>
    </div>
    <label>Indirizzo email<input id="rE" type="email" autocomplete="email" autocapitalize="none" required></label>
    <label>Password<input id="rP" type="password" autocomplete="new-password" required></label>
    <div class="rg" id="rg"><span data-k="l">12+ caratteri</span><span data-k="a">minuscola</span><span data-k="A">maiuscola</span><span data-k="d">numero</span><span data-k="s">carattere speciale</span></div>
    <label>Ripeti la password<input id="rP2" type="password" autocomplete="new-password" required></label>
    <label>Numero di telefono (obbligatorio)
      <div class="tel"><select id="pf1"></select><input id="t1" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="333 1234567" required></div>
    </label>
    <label>Secondo numero di telefono (facoltativo)
      <div class="tel"><select id="pf2"></select><input id="t2" type="tel" inputmode="tel" placeholder="333 1234567"></div>
    </label>
    <div class="hp" aria-hidden="true"><label>Sito web<input id="hp" tabindex="-1" autocomplete="off"></label></div>

    <details><summary>Leggi il regolamento della colonnina</summary><div class="t" id="regTxt"></div></details>
    <label class="chk"><input type="checkbox" id="cR"><span>Ho letto e accetto il regolamento per l'uso della colonnina di ricarica.</span></label>

    <details><summary>Leggi l'informativa sulla privacy<span id="edTxt"></span></summary><div class="t" id="prTxt"></div></details>
    <label class="chk"><input type="checkbox" id="cP"><span>Ho letto l'informativa sulla privacy: i miei dati saranno utilizzati solo ed esclusivamente per erogare il servizio, senza cessione a terzi e senza pubblicità.</span></label>

    <label class="chk"><input type="checkbox" id="cM"><span>Facoltativo: acconsento a ricevere messaggi di servizio su Telegram. Posso cambiare o revocare il consenso in qualsiasi momento dalla pagina «Il mio profilo», dopo l'accesso.</span></label>

    __TURNSTILE__
    <button type="submit" class="p" id="bR">Registrati</button>
    <div class="err" id="re"></div>
    <div class="okm hide" id="ro"></div>
  </form>
<footer class="piede">Orbis Viaris Charge Report · software libero, <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">licenza AGPL-3.0</a> · <a href="https://github.com/alexxandro87/orbis-viaris-charge-report" target="_blank" rel="noopener">codice sorgente</a></footer>
</div>
<script>
var PREFISSI=[["Afghanistan","Afghanistan",93],["Albania","Albania",355],["Algeria","Algeria",213],["Andorra","Andorra",376],["Angola","Angola",244],["Anguilla","Anguilla",1],["Antigua e Barbuda","Antigua & Barbuda",1],["Arabia Saudita","Saudi Arabia",966],["Argentina","Argentina",54],["Armenia","Armenia",374],["Aruba","Aruba",297],["Australia","Australia",61],["Austria","Austria",43],["Azerbaigian","Azerbaijan",994],["Bahamas","Bahamas",1],["Bahrein","Bahrain",973],["Bangladesh","Bangladesh",880],["Barbados","Barbados",1],["Belgio","Belgium",32],["Belize","Belize",501],["Benin","Benin",229],["Bermuda","Bermuda",1],["Bhutan","Bhutan",975],["Bielorussia","Belarus",375],["Bolivia","Bolivia",591],["Bosnia ed Erzegovina","Bosnia & Herzegovina",387],["Botswana","Botswana",267],["Brasile","Brazil",55],["Brunei","Brunei",673],["Bulgaria","Bulgaria",359],["Burkina Faso","Burkina Faso",226],["Burundi","Burundi",257],["Cambogia","Cambodia",855],["Camerun","Cameroon",237],["Canada","Canada",1],["Capo Verde","Cape Verde",238],["Caraibi Olandesi","Caribbean Netherlands",599],["Cechia","Czechia",420],["Ciad","Chad",235],["Cile","Chile",56],["Cina","China",86],["Cipro","Cyprus",357],["Città del Vaticano","Vatican City",39],["Colombia","Colombia",57],["Comore","Comoros",269],["Congo - Kinshasa","Congo - Kinshasa",243],["Congo-Brazzaville","Congo - Brazzaville",242],["Corea del Nord","North Korea",850],["Corea del Sud","South Korea",82],["Costa d’Avorio","Côte d’Ivoire",225],["Costa Rica","Costa Rica",506],["Croazia","Croatia",385],["Cuba","Cuba",53],["Curaçao","Curaçao",599],["Danimarca","Denmark",45],["Dominica","Dominica",1],["Ecuador","Ecuador",593],["Egitto","Egypt",20],["El Salvador","El Salvador",503],["Emirati Arabi Uniti","United Arab Emirates",971],["Eritrea","Eritrea",291],["Estonia","Estonia",372],["Eswatini","Eswatini",268],["Etiopia","Ethiopia",251],["Figi","Fiji",679],["Filippine","Philippines",63],["Finlandia","Finland",358],["Francia","France",33],["Gabon","Gabon",241],["Gambia","Gambia",220],["Georgia","Georgia",995],["Germania","Germany",49],["Ghana","Ghana",233],["Giamaica","Jamaica",1],["Giappone","Japan",81],["Gibilterra","Gibraltar",350],["Gibuti","Djibouti",253],["Giordania","Jordan",962],["Grecia","Greece",30],["Grenada","Grenada",1],["Groenlandia","Greenland",299],["Guadalupa","Guadeloupe",590],["Guam","Guam",1],["Guatemala","Guatemala",502],["Guernsey","Guernsey",44],["Guinea","Guinea",224],["Guinea Equatoriale","Equatorial Guinea",240],["Guinea-Bissau","Guinea-Bissau",245],["Guyana","Guyana",592],["Guyana Francese","French Guiana",594],["Haiti","Haiti",509],["Honduras","Honduras",504],["India","India",91],["Indonesia","Indonesia",62],["Iran","Iran",98],["Iraq","Iraq",964],["Irlanda","Ireland",353],["Islanda","Iceland",354],["Isola Ascensione","Ascension Island",247],["Isola Christmas","Christmas Island",61],["Isola di Man","Isle of Man",44],["Isola Norfolk","Norfolk Island",672],["Isole Cayman","Cayman Islands",1],["Isole Cocos (Keeling)","Cocos (Keeling) Islands",61],["Isole Cook","Cook Islands",682],["Isole Falkland","Falkland Islands",500],["Isole Fær Øer","Faroe Islands",298],["Isole Marianne Settentrionali","Northern Mariana Islands",1],["Isole Marshall","Marshall Islands",692],["Isole Salomone","Solomon Islands",677],["Isole Turks e Caicos","Turks & Caicos Islands",1],["Isole Vergini Americane","U.S. Virgin Islands",1],["Isole Vergini Britanniche","British Virgin Islands",1],["Isole Åland","Åland Islands",358],["Israele","Israel",972],["Italia","Italy",39],["Jersey","Jersey",44],["Kazakistan","Kazakhstan",7],["Kenya","Kenya",254],["Kirghizistan","Kyrgyzstan",996],["Kiribati","Kiribati",686],["Kosovo","Kosovo",383],["Kuwait","Kuwait",965],["Laos","Laos",856],["Lesotho","Lesotho",266],["Lettonia","Latvia",371],["Libano","Lebanon",961],["Liberia","Liberia",231],["Libia","Libya",218],["Liechtenstein","Liechtenstein",423],["Lituania","Lithuania",370],["Lussemburgo","Luxembourg",352],["Macedonia del Nord","North Macedonia",389],["Madagascar","Madagascar",261],["Malawi","Malawi",265],["Malaysia","Malaysia",60],["Maldive","Maldives",960],["Mali","Mali",223],["Malta","Malta",356],["Marocco","Morocco",212],["Martinica","Martinique",596],["Mauritania","Mauritania",222],["Mauritius","Mauritius",230],["Mayotte","Mayotte",262],["Messico","Mexico",52],["Micronesia","Micronesia",691],["Moldavia","Moldova",373],["Monaco","Monaco",377],["Mongolia","Mongolia",976],["Montenegro","Montenegro",382],["Montserrat","Montserrat",1],["Mozambico","Mozambique",258],["Myanmar (Birmania)","Myanmar (Burma)",95],["Namibia","Namibia",264],["Nauru","Nauru",674],["Nepal","Nepal",977],["Nicaragua","Nicaragua",505],["Niger","Niger",227],["Nigeria","Nigeria",234],["Niue","Niue",683],["Norvegia","Norway",47],["Nuova Caledonia","New Caledonia",687],["Nuova Zelanda","New Zealand",64],["Oman","Oman",968],["Paesi Bassi","Netherlands",31],["Pakistan","Pakistan",92],["Palau","Palau",680],["Panama","Panama",507],["Papua Nuova Guinea","Papua New Guinea",675],["Paraguay","Paraguay",595],["Perù","Peru",51],["Polinesia Francese","French Polynesia",689],["Polonia","Poland",48],["Portogallo","Portugal",351],["Portorico","Puerto Rico",1],["Qatar","Qatar",974],["RAS di Hong Kong","Hong Kong SAR China",852],["RAS di Macao","Macao SAR China",853],["Regno Unito","United Kingdom",44],["Repubblica Centrafricana","Central African Republic",236],["Repubblica Dominicana","Dominican Republic",1],["Riunione","Réunion",262],["Romania","Romania",40],["Ruanda","Rwanda",250],["Russia","Russia",7],["Sahara Occidentale","Western Sahara",212],["Saint Kitts e Nevis","St. Kitts & Nevis",1],["Saint Lucia","St. Lucia",1],["Saint Martin","St. Martin",590],["Saint Vincent e Grenadine","St. Vincent & Grenadines",1],["Saint-Barthélemy","St. Barthélemy",590],["Saint-Pierre e Miquelon","St. Pierre & Miquelon",508],["Samoa","Samoa",685],["Samoa Americane","American Samoa",1],["San Marino","San Marino",378],["Sant’Elena","St. Helena",290],["Senegal","Senegal",221],["Serbia","Serbia",381],["Seychelles","Seychelles",248],["Sierra Leone","Sierra Leone",232],["Singapore","Singapore",65],["Sint Maarten","Sint Maarten",1],["Siria","Syria",963],["Slovacchia","Slovakia",421],["Slovenia","Slovenia",386],["Somalia","Somalia",252],["Spagna","Spain",34],["Sri Lanka","Sri Lanka",94],["Stati Uniti","United States",1],["Sud Sudan","South Sudan",211],["Sudafrica","South Africa",27],["Sudan","Sudan",249],["Suriname","Suriname",597],["Svalbard e Jan Mayen","Svalbard & Jan Mayen",47],["Svezia","Sweden",46],["Svizzera","Switzerland",41],["São Tomé e Príncipe","São Tomé & Príncipe",239],["Tagikistan","Tajikistan",992],["Taiwan","Taiwan",886],["Tanzania","Tanzania",255],["Territori Palestinesi","Palestinian Territories",970],["Territorio Britannico dell’Oceano Indiano","British Indian Ocean Territory",246],["Thailandia","Thailand",66],["Timor Est","Timor-Leste",670],["Togo","Togo",228],["Tokelau","Tokelau",690],["Tonga","Tonga",676],["Trinidad e Tobago","Trinidad & Tobago",1],["Tristan da Cunha","Tristan da Cunha",290],["Tunisia","Tunisia",216],["Turchia","Türkiye",90],["Turkmenistan","Turkmenistan",993],["Tuvalu","Tuvalu",688],["Ucraina","Ukraine",380],["Uganda","Uganda",256],["Ungheria","Hungary",36],["Uruguay","Uruguay",598],["Uzbekistan","Uzbekistan",998],["Vanuatu","Vanuatu",678],["Venezuela","Venezuela",58],["Vietnam","Vietnam",84],["Wallis e Futuna","Wallis & Futuna",681],["Yemen","Yemen",967],["Zambia","Zambia",260],["Zimbabwe","Zimbabwe",263]];
var LANG="__LANG__",I18N=__I18N_login__,D=I18N.d;
function rp(s,re,r){return s.replace(re,function(){var g=arguments;return r.replace(/\$(T?)(\d)/g,function(x,t,i){var v=g[+i];if(typeof v!=="string")v="";return t?T(v):v})})}
// language menu: the choice goes in a cookie (the server puts the right dictionary in the page) and survives the reload
function cambiaLingua(l){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax"+(location.protocol==="https:"?";secure":"");try{localStorage.setItem("lang",l)}catch(e){}location.reload()}
function selLingua(){var e=document.getElementById("bLang"),h="";if(!e)return;for(var k in I18N.lingue)h+='<option value="'+k+'"'+(k===LANG?" selected":"")+">"+I18N.lingue[k]+"</option>";e.innerHTML=h;e.onchange=function(){cambiaLingua(e.value)}}
// language chosen before v2.20 (kept in the browser only): moved to the cookie once
(function(){try{var l=localStorage.getItem("lang"),c=/(^|;\s*)lang=/;if(l&&l!==LANG&&I18N.lingue[l]&&!c.test(document.cookie)){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax";if(c.test(document.cookie))location.reload()}}catch(e){}})();
function T(s){return(LANG!=="it"&&D.hasOwnProperty(s))?D[s]:s}
function $(i){return document.getElementById(i)}
function trDom(){
  if(LANG==="it")return;
  document.documentElement.lang=LANG;
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,L=[];
  while(n=w.nextNode())L.push(n);
  L.forEach(function(x){var v=x.nodeValue,k=v.trim();if(k&&D.hasOwnProperty(k))x.nodeValue=v.replace(k,D[k])});
  document.querySelectorAll("[placeholder]").forEach(function(e){e.placeholder=T(e.placeholder)});
}
// prefixes: Italy (+39) by default
function riempi(sel){
  // countries sorted by their name in the page language
  var nome=function(p){return LANG==="it"?p[0]:LANG==="en"?p[1]:(I18N.paesi[p[1]]||p[1])};
  var h="";PREFISSI.slice().sort(function(a,b){return nome(a).localeCompare(nome(b),I18N.loc)}).forEach(function(p){h+='<option value="'+p[2]+'"'+(p[2]===39&&p[0]==="Italia"?" selected":"")+'>'+nome(p)+" (+"+p[2]+")</option>"});
  sel.innerHTML=h;
}
riempi($("pf1"));riempi($("pf2"));
function pwUguali(a,b){var i=$(b),d=document.createElement("div");d.className="pwm";var dopo=i.closest("label")||(i.nextElementSibling&&i.nextElementSibling.className==="occhio"?i.nextElementSibling:i);dopo.insertAdjacentElement("afterend",d);function c(){var x=$(a).value,y=i.value;d.className="pwm"+(y?(x===y?" ok":" no"):"");d.textContent=y?T(x===y?"Le due password coincidono":"Le due password non coincidono"):""}i.addEventListener("input",c);$(a).addEventListener("input",c)}
function occhi(){document.querySelectorAll('input[type="password"]').forEach(function(i){if(i.nextElementSibling&&i.nextElementSibling.className==="occhio")return;var b=document.createElement("button");b.type="button";b.className="occhio";b.textContent=T("mostra");b.onclick=function(){var v=i.type==="password";i.type=v?"text":"password";b.textContent=T(v?"nascondi":"mostra")};i.insertAdjacentElement("afterend",b)})}
occhi();pwUguali("rP","rP2");trDom();
fetch("/api/testi").then(function(r){return r.json()}).then(function(t){
  var en=LANG!=="it",reg=en?(t.reg_en||t.reg_it):(t.reg_it||t.reg_en),pr=en?(t.priv_en||t.priv_it):(t.priv_it||t.priv_en),no='<p class="sub">'+T("(testo non ancora pubblicato dal gestore del sito)")+"</p>";
  document.getElementById("regTxt").innerHTML=reg||no;document.getElementById("prTxt").innerHTML=pr||no;
  if(t.edizione)document.getElementById("edTxt").textContent=T(" (edizione ")+t.edizione+")";
  var f=document.getElementById("feeReg");if(f)f.textContent=t.costo?" ("+T("costo")+" "+t.costo+" "+T("una tantum")+")":"";
}).catch(function(){});selLingua();(function(){var b=$("bTema");function cur(){return document.documentElement.getAttribute("data-t")||"auto"}function lab(){var m={auto:"◐ Auto",light:T("☀ Giorno"),dark:T("☾ Notte")};b.textContent=m[cur()]}lab();b.onclick=function(){var n={auto:"light",light:"dark",dark:"auto"}[cur()];if(n==="auto")document.documentElement.removeAttribute("data-t");else document.documentElement.setAttribute("data-t",n);try{if(n==="auto")localStorage.removeItem("tema");else localStorage.setItem("tema",n)}catch(e){}lab()}})();
function mostra(reg){
  $("f").className=reg?"hide":"";$("g").className=reg?"":"hide";
  $("tA").className=reg?"":"on";$("tR").className=reg?"on":"";
}
$("tA").onclick=function(){mostra(false)};$("tR").onclick=function(){mostra(true)};
if(location.hash==="#registrati")mostra(true);

$("f").onsubmit=function(ev){
  ev.preventDefault();
  fetch("/api/login",{method:"POST",headers:{"content-type":"application/json"},
    body:JSON.stringify({nome:$("n").value,password:$("p").value})})
  .then(function(r){return r.json()}).then(function(r){
    if(r.ok)location.replace("/");else $("e").textContent=T(r.errore||"Errore")})
  .catch(function(){$("e").textContent=T("Errore di rete")});
};

$("bDim").onclick=function(){var b=$("recBox");b.classList.toggle("hide");if(!$("recN").value)$("recN").value=$("n").value;$("recN").focus()};
$("bRec").onclick=function(){var e=$("recE"),n=$("recN").value.trim();e.classList.remove("err");if(!n){e.classList.add("err");e.textContent=T("Scrivi l'email dell'accesso");return}
  $("bRec").disabled=true;fetch("/api/recupero",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nome:n})}).then(function(r){return r.json()}).then(function(r){
    $("bRec").disabled=false;e.classList.toggle("err",!r.ok);e.textContent=r.ok?T("Se l'indirizzo corrisponde a un accesso attivo, riceverai una mail con il link per scegliere una nuova password (valido un'ora)."):T(r.errore||"Errore")})
  .catch(function(){$("bRec").disabled=false;e.textContent=T("Errore di rete")})};
// password requirements (same checks as the server)
function reqPw(p){return{l:p.length>=12,a:/[a-z]/.test(p),A:/[A-Z]/.test(p),d:/[0-9]/.test(p),s:/[^A-Za-z0-9\s]/.test(p)}}
function pwOk(p){var r=reqPw(p);return r.l&&r.a&&r.A&&r.d&&r.s}
$("rP").oninput=function(){
  var r=reqPw($("rP").value);
  document.querySelectorAll("#rg span").forEach(function(s){s.className=r[s.dataset.k]?"s":""});
};
function nazionale(t){return t.value.replace(/[\s.\-()\/]/g,"")}
function telOk(pf,n){return /^[0-9]{6,12}$/.test(n)&&/^\+[1-9][0-9]{7,14}$/.test("+"+pf.value+n)}
$("g").onsubmit=function(ev){
  ev.preventDefault();
  var er=$("re");er.textContent="";$("ro").className="okm hide";
  var nome=$("rN").value.trim(),cog=$("rC").value.trim(),em=$("rE").value.trim().toLowerCase();
  if(!nome||!cog){er.textContent=T("Inserisci nome e cognome");return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)){er.textContent=T("Indirizzo email non valido");return}
  if(!pwOk($("rP").value)){er.textContent=T("La password non rispetta i requisiti");return}
  if($("rP").value!==$("rP2").value){er.textContent=T("Le due password non coincidono");return}
  var n1=nazionale($("t1")),n2=nazionale($("t2")),t1,t2="";
  if(!telOk($("pf1"),n1)){er.textContent=T("Numero di telefono non valido");return}
  t1="+"+$("pf1").value+n1;
  if(n2){if(!telOk($("pf2"),n2)){er.textContent=T("Secondo numero di telefono non valido");return}t2="+"+$("pf2").value+n2}
  if(!$("cR").checked){er.textContent=T("Devi accettare il regolamento");return}
  if(!$("cP").checked){er.textContent=T("Devi confermare di aver letto l'informativa privacy");return}
  $("bR").disabled=true;
  fetch("/api/registrazione",{method:"POST",headers:{"content-type":"application/json"},
    body:JSON.stringify({nome:nome,cognome:cog,email:em,password:$("rP").value,tel1:t1,tel2:t2,
      reg:true,priv:true,msg:$("cM").checked,lang:LANG,hp:$("hp").value,turnstile:(document.querySelector("[name=cf-turnstile-response]")||{}).value||""})})
  .then(function(r){return r.json()}).then(function(r){
    $("bR").disabled=false;
    if(!r.ok&&window.turnstile){try{turnstile.reset()}catch(e){}}
    if(r.ok){$("g").querySelectorAll("input,select,button.p").forEach(function(x){x.disabled=true});$("ro").textContent=T("Registrazione ricevuta. Ti abbiamo mandato una email di conferma: apri il link per confermare l'indirizzo, poi potrai accedere. Se hai già la tessera, l'Amministratore la abbinerà al tuo account e riceverai la mail di Attivazione del servizio; se non ce l'hai, dopo l'accesso potrai richiederla dalla pagina Assistenza.");$("ro").className="okm"}
    else er.textContent=T(r.errore||"Errore")})
  .catch(function(){$("bR").disabled=false;er.textContent=T("Errore di rete")});
};
</script>
</body>
</html>`;

export const INVITO = String.raw`<!doctype html>
<html lang="it">
<head>
<script>try{var _t=localStorage.getItem("tema");if(_t)document.documentElement.setAttribute("data-t",_t)}catch(e){}</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__TITLE__</title>
<style>
*{box-sizing:border-box}
body{margin:0;font:15px/1.45 system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--tx);display:flex;min-height:100vh;justify-content:center;padding:20px 0}
.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:22px;width:min(460px,94vw);align-self:flex-start;margin:auto 0}
h1{font-size:18px;margin:0 0 4px}
.sub{color:var(--mut);font-size:13px;margin-bottom:12px}
.tabs{display:flex;gap:6px;margin:10px 0 14px}
.tabs button{flex:1;background:var(--bg);color:var(--tx);border:1px solid var(--line)}
form{display:flex;flex-direction:column;gap:10px}
label{font-size:13px;color:var(--mut);display:flex;flex-direction:column;gap:3px}
input,select,button{font:inherit;padding:9px 10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--tx);min-width:0}
.riga{display:flex;gap:8px}
.riga>label{flex:1;min-width:0}
label input,label select{width:100%}
.tel select{width:44%}.tel input{width:auto}.chk input{width:auto}
.tel{display:flex;gap:6px}
.tel select{width:44%;flex:none}.tel input{flex:1}
.err{color:var(--err);min-height:1.2em;font-size:13px}
.okm{color:var(--ok);font-size:14px}
.rg{font-size:12px;color:var(--mut);margin:-4px 0 0;display:flex;flex-wrap:wrap;gap:2px 12px}
.rg span.s{color:var(--ok)}
.chk{flex-direction:row;gap:8px;align-items:flex-start;font-size:13px;color:var(--tx)}
.chk input{margin-top:3px;flex:none}
details{border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:13px}
details summary{cursor:pointer;color:var(--acc)}
details .t{max-height:220px;overflow:auto;margin-top:6px}
details h4{margin:10px 0 3px;font-size:13px}details p,details li{margin:3px 0}
.hide{display:none!important}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.piede{margin:24px auto 12px;text-align:center;font-size:12px;color:var(--mut)}.piede a{color:var(--acc)}.noprint-f{}</style>
</head>
<body>
<div class="card">
  <select class="lingua lingua-p" id="bLang" aria-label="Lingua / Language"></select><button type="button" id="bTema" style="float:right;margin-right:12px;background:none;border:0;color:var(--acc);padding:0;cursor:pointer"></button>
  <div class="marca"><span class="logo" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg></span><h1>__TITLE__ <span class="ver">__VERSION__</span></h1></div>
  <div class="sub" id="tit"></div>
  <div class="sub" id="chi"></div>
  <form id="g" autocomplete="on" novalidate>
    <div class="riga">
      <label>Nome<input id="rN" autocomplete="given-name" required></label>
      <label>Cognome<input id="rC" autocomplete="family-name" required></label>
    </div>
    <div id="pwBox" style="display:flex;flex-direction:column;gap:10px">
      <label>Password<input id="rP" type="password" autocomplete="new-password"></label>
      <div class="rg" id="rg"><span data-k="l">12+ caratteri</span><span data-k="a">minuscola</span><span data-k="A">maiuscola</span><span data-k="d">numero</span><span data-k="s">carattere speciale</span></div>
      <label>Ripeti la password<input id="rP2" type="password" autocomplete="new-password"></label>
    </div>
    <label>Numero di telefono (obbligatorio)
      <div class="tel"><select id="pf1"></select><input id="t1" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="333 1234567" required></div>
    </label>
    <label>Secondo numero di telefono (facoltativo)
      <div class="tel"><select id="pf2"></select><input id="t2" type="tel" inputmode="tel" placeholder="333 1234567"></div>
    </label>
    <details><summary>Leggi il regolamento della colonnina</summary><div class="t" id="regTxt"></div></details>
    <label class="chk"><input type="checkbox" id="cR"><span>Ho letto e accetto il regolamento per l'uso della colonnina di ricarica.</span></label>

    <details><summary>Leggi l'informativa sulla privacy<span id="edTxt"></span></summary><div class="t" id="prTxt"></div></details>
    <label class="chk"><input type="checkbox" id="cP"><span>Ho letto l'informativa sulla privacy: i miei dati saranno utilizzati solo ed esclusivamente per erogare il servizio, senza cessione a terzi e senza pubblicità.</span></label>

    <label class="chk"><input type="checkbox" id="cM"><span>Facoltativo: acconsento a ricevere messaggi di servizio su Telegram. Posso cambiare o revocare il consenso in qualsiasi momento dalla pagina «Il mio profilo».</span></label>

    <button type="submit" class="p" id="bR">Salva e accedi</button>
    <div class="err" id="re"></div>
    <button type="button" id="bEsci" class="p hide" style="align-self:flex-start">Esci</button>
  </form>
<footer class="piede">Orbis Viaris Charge Report · software libero, <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener">licenza AGPL-3.0</a> · <a href="https://github.com/alexxandro87/orbis-viaris-charge-report" target="_blank" rel="noopener">codice sorgente</a></footer>
</div>
<script>

var PREFISSI=[["Afghanistan","Afghanistan",93],["Albania","Albania",355],["Algeria","Algeria",213],["Andorra","Andorra",376],["Angola","Angola",244],["Anguilla","Anguilla",1],["Antigua e Barbuda","Antigua & Barbuda",1],["Arabia Saudita","Saudi Arabia",966],["Argentina","Argentina",54],["Armenia","Armenia",374],["Aruba","Aruba",297],["Australia","Australia",61],["Austria","Austria",43],["Azerbaigian","Azerbaijan",994],["Bahamas","Bahamas",1],["Bahrein","Bahrain",973],["Bangladesh","Bangladesh",880],["Barbados","Barbados",1],["Belgio","Belgium",32],["Belize","Belize",501],["Benin","Benin",229],["Bermuda","Bermuda",1],["Bhutan","Bhutan",975],["Bielorussia","Belarus",375],["Bolivia","Bolivia",591],["Bosnia ed Erzegovina","Bosnia & Herzegovina",387],["Botswana","Botswana",267],["Brasile","Brazil",55],["Brunei","Brunei",673],["Bulgaria","Bulgaria",359],["Burkina Faso","Burkina Faso",226],["Burundi","Burundi",257],["Cambogia","Cambodia",855],["Camerun","Cameroon",237],["Canada","Canada",1],["Capo Verde","Cape Verde",238],["Caraibi Olandesi","Caribbean Netherlands",599],["Cechia","Czechia",420],["Ciad","Chad",235],["Cile","Chile",56],["Cina","China",86],["Cipro","Cyprus",357],["Città del Vaticano","Vatican City",39],["Colombia","Colombia",57],["Comore","Comoros",269],["Congo - Kinshasa","Congo - Kinshasa",243],["Congo-Brazzaville","Congo - Brazzaville",242],["Corea del Nord","North Korea",850],["Corea del Sud","South Korea",82],["Costa d’Avorio","Côte d’Ivoire",225],["Costa Rica","Costa Rica",506],["Croazia","Croatia",385],["Cuba","Cuba",53],["Curaçao","Curaçao",599],["Danimarca","Denmark",45],["Dominica","Dominica",1],["Ecuador","Ecuador",593],["Egitto","Egypt",20],["El Salvador","El Salvador",503],["Emirati Arabi Uniti","United Arab Emirates",971],["Eritrea","Eritrea",291],["Estonia","Estonia",372],["Eswatini","Eswatini",268],["Etiopia","Ethiopia",251],["Figi","Fiji",679],["Filippine","Philippines",63],["Finlandia","Finland",358],["Francia","France",33],["Gabon","Gabon",241],["Gambia","Gambia",220],["Georgia","Georgia",995],["Germania","Germany",49],["Ghana","Ghana",233],["Giamaica","Jamaica",1],["Giappone","Japan",81],["Gibilterra","Gibraltar",350],["Gibuti","Djibouti",253],["Giordania","Jordan",962],["Grecia","Greece",30],["Grenada","Grenada",1],["Groenlandia","Greenland",299],["Guadalupa","Guadeloupe",590],["Guam","Guam",1],["Guatemala","Guatemala",502],["Guernsey","Guernsey",44],["Guinea","Guinea",224],["Guinea Equatoriale","Equatorial Guinea",240],["Guinea-Bissau","Guinea-Bissau",245],["Guyana","Guyana",592],["Guyana Francese","French Guiana",594],["Haiti","Haiti",509],["Honduras","Honduras",504],["India","India",91],["Indonesia","Indonesia",62],["Iran","Iran",98],["Iraq","Iraq",964],["Irlanda","Ireland",353],["Islanda","Iceland",354],["Isola Ascensione","Ascension Island",247],["Isola Christmas","Christmas Island",61],["Isola di Man","Isle of Man",44],["Isola Norfolk","Norfolk Island",672],["Isole Cayman","Cayman Islands",1],["Isole Cocos (Keeling)","Cocos (Keeling) Islands",61],["Isole Cook","Cook Islands",682],["Isole Falkland","Falkland Islands",500],["Isole Fær Øer","Faroe Islands",298],["Isole Marianne Settentrionali","Northern Mariana Islands",1],["Isole Marshall","Marshall Islands",692],["Isole Salomone","Solomon Islands",677],["Isole Turks e Caicos","Turks & Caicos Islands",1],["Isole Vergini Americane","U.S. Virgin Islands",1],["Isole Vergini Britanniche","British Virgin Islands",1],["Isole Åland","Åland Islands",358],["Israele","Israel",972],["Italia","Italy",39],["Jersey","Jersey",44],["Kazakistan","Kazakhstan",7],["Kenya","Kenya",254],["Kirghizistan","Kyrgyzstan",996],["Kiribati","Kiribati",686],["Kosovo","Kosovo",383],["Kuwait","Kuwait",965],["Laos","Laos",856],["Lesotho","Lesotho",266],["Lettonia","Latvia",371],["Libano","Lebanon",961],["Liberia","Liberia",231],["Libia","Libya",218],["Liechtenstein","Liechtenstein",423],["Lituania","Lithuania",370],["Lussemburgo","Luxembourg",352],["Macedonia del Nord","North Macedonia",389],["Madagascar","Madagascar",261],["Malawi","Malawi",265],["Malaysia","Malaysia",60],["Maldive","Maldives",960],["Mali","Mali",223],["Malta","Malta",356],["Marocco","Morocco",212],["Martinica","Martinique",596],["Mauritania","Mauritania",222],["Mauritius","Mauritius",230],["Mayotte","Mayotte",262],["Messico","Mexico",52],["Micronesia","Micronesia",691],["Moldavia","Moldova",373],["Monaco","Monaco",377],["Mongolia","Mongolia",976],["Montenegro","Montenegro",382],["Montserrat","Montserrat",1],["Mozambico","Mozambique",258],["Myanmar (Birmania)","Myanmar (Burma)",95],["Namibia","Namibia",264],["Nauru","Nauru",674],["Nepal","Nepal",977],["Nicaragua","Nicaragua",505],["Niger","Niger",227],["Nigeria","Nigeria",234],["Niue","Niue",683],["Norvegia","Norway",47],["Nuova Caledonia","New Caledonia",687],["Nuova Zelanda","New Zealand",64],["Oman","Oman",968],["Paesi Bassi","Netherlands",31],["Pakistan","Pakistan",92],["Palau","Palau",680],["Panama","Panama",507],["Papua Nuova Guinea","Papua New Guinea",675],["Paraguay","Paraguay",595],["Perù","Peru",51],["Polinesia Francese","French Polynesia",689],["Polonia","Poland",48],["Portogallo","Portugal",351],["Portorico","Puerto Rico",1],["Qatar","Qatar",974],["RAS di Hong Kong","Hong Kong SAR China",852],["RAS di Macao","Macao SAR China",853],["Regno Unito","United Kingdom",44],["Repubblica Centrafricana","Central African Republic",236],["Repubblica Dominicana","Dominican Republic",1],["Riunione","Réunion",262],["Romania","Romania",40],["Ruanda","Rwanda",250],["Russia","Russia",7],["Sahara Occidentale","Western Sahara",212],["Saint Kitts e Nevis","St. Kitts & Nevis",1],["Saint Lucia","St. Lucia",1],["Saint Martin","St. Martin",590],["Saint Vincent e Grenadine","St. Vincent & Grenadines",1],["Saint-Barthélemy","St. Barthélemy",590],["Saint-Pierre e Miquelon","St. Pierre & Miquelon",508],["Samoa","Samoa",685],["Samoa Americane","American Samoa",1],["San Marino","San Marino",378],["Sant’Elena","St. Helena",290],["Senegal","Senegal",221],["Serbia","Serbia",381],["Seychelles","Seychelles",248],["Sierra Leone","Sierra Leone",232],["Singapore","Singapore",65],["Sint Maarten","Sint Maarten",1],["Siria","Syria",963],["Slovacchia","Slovakia",421],["Slovenia","Slovenia",386],["Somalia","Somalia",252],["Spagna","Spain",34],["Sri Lanka","Sri Lanka",94],["Stati Uniti","United States",1],["Sud Sudan","South Sudan",211],["Sudafrica","South Africa",27],["Sudan","Sudan",249],["Suriname","Suriname",597],["Svalbard e Jan Mayen","Svalbard & Jan Mayen",47],["Svezia","Sweden",46],["Svizzera","Switzerland",41],["São Tomé e Príncipe","São Tomé & Príncipe",239],["Tagikistan","Tajikistan",992],["Taiwan","Taiwan",886],["Tanzania","Tanzania",255],["Territori Palestinesi","Palestinian Territories",970],["Territorio Britannico dell’Oceano Indiano","British Indian Ocean Territory",246],["Thailandia","Thailand",66],["Timor Est","Timor-Leste",670],["Togo","Togo",228],["Tokelau","Tokelau",690],["Tonga","Tonga",676],["Trinidad e Tobago","Trinidad & Tobago",1],["Tristan da Cunha","Tristan da Cunha",290],["Tunisia","Tunisia",216],["Turchia","Türkiye",90],["Turkmenistan","Turkmenistan",993],["Tuvalu","Tuvalu",688],["Ucraina","Ukraine",380],["Uganda","Uganda",256],["Ungheria","Hungary",36],["Uruguay","Uruguay",598],["Uzbekistan","Uzbekistan",998],["Vanuatu","Vanuatu",678],["Venezuela","Venezuela",58],["Vietnam","Vietnam",84],["Wallis e Futuna","Wallis & Futuna",681],["Yemen","Yemen",967],["Zambia","Zambia",260],["Zimbabwe","Zimbabwe",263]];
var LANG="__LANG__",I18N=__I18N_invito__,D=I18N.d;
function rp(s,re,r){return s.replace(re,function(){var g=arguments;return r.replace(/\$(T?)(\d)/g,function(x,t,i){var v=g[+i];if(typeof v!=="string")v="";return t?T(v):v})})}
// language menu: the choice goes in a cookie (the server puts the right dictionary in the page) and survives the reload
function cambiaLingua(l){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax"+(location.protocol==="https:"?";secure":"");try{localStorage.setItem("lang",l)}catch(e){}location.reload()}
function selLingua(){var e=document.getElementById("bLang"),h="";if(!e)return;for(var k in I18N.lingue)h+='<option value="'+k+'"'+(k===LANG?" selected":"")+">"+I18N.lingue[k]+"</option>";e.innerHTML=h;e.onchange=function(){cambiaLingua(e.value)}}
// language chosen before v2.20 (kept in the browser only): moved to the cookie once
(function(){try{var l=localStorage.getItem("lang"),c=/(^|;\s*)lang=/;if(l&&l!==LANG&&I18N.lingue[l]&&!c.test(document.cookie)){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax";if(c.test(document.cookie))location.reload()}}catch(e){}})();
function T(s){return(LANG!=="it"&&D.hasOwnProperty(s))?D[s]:s}
function $(i){return document.getElementById(i)}
function trDom(){
  if(LANG==="it")return;
  document.documentElement.lang=LANG;
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,L=[];
  while(n=w.nextNode())L.push(n);
  L.forEach(function(x){var v=x.nodeValue,k=v.trim();if(k&&D.hasOwnProperty(k))x.nodeValue=v.replace(k,D[k])});
  document.querySelectorAll("[placeholder]").forEach(function(e){e.placeholder=T(e.placeholder)});
}
var PREFISSI=[["Afghanistan","Afghanistan",93],["Albania","Albania",355],["Algeria","Algeria",213],["Andorra","Andorra",376],["Angola","Angola",244],["Anguilla","Anguilla",1],["Antigua e Barbuda","Antigua & Barbuda",1],["Arabia Saudita","Saudi Arabia",966],["Argentina","Argentina",54],["Armenia","Armenia",374],["Aruba","Aruba",297],["Australia","Australia",61],["Austria","Austria",43],["Azerbaigian","Azerbaijan",994],["Bahamas","Bahamas",1],["Bahrein","Bahrain",973],["Bangladesh","Bangladesh",880],["Barbados","Barbados",1],["Belgio","Belgium",32],["Belize","Belize",501],["Benin","Benin",229],["Bermuda","Bermuda",1],["Bhutan","Bhutan",975],["Bielorussia","Belarus",375],["Bolivia","Bolivia",591],["Bosnia ed Erzegovina","Bosnia & Herzegovina",387],["Botswana","Botswana",267],["Brasile","Brazil",55],["Brunei","Brunei",673],["Bulgaria","Bulgaria",359],["Burkina Faso","Burkina Faso",226],["Burundi","Burundi",257],["Cambogia","Cambodia",855],["Camerun","Cameroon",237],["Canada","Canada",1],["Capo Verde","Cape Verde",238],["Caraibi Olandesi","Caribbean Netherlands",599],["Cechia","Czechia",420],["Ciad","Chad",235],["Cile","Chile",56],["Cina","China",86],["Cipro","Cyprus",357],["Città del Vaticano","Vatican City",39],["Colombia","Colombia",57],["Comore","Comoros",269],["Congo - Kinshasa","Congo - Kinshasa",243],["Congo-Brazzaville","Congo - Brazzaville",242],["Corea del Nord","North Korea",850],["Corea del Sud","South Korea",82],["Costa d’Avorio","Côte d’Ivoire",225],["Costa Rica","Costa Rica",506],["Croazia","Croatia",385],["Cuba","Cuba",53],["Curaçao","Curaçao",599],["Danimarca","Denmark",45],["Dominica","Dominica",1],["Ecuador","Ecuador",593],["Egitto","Egypt",20],["El Salvador","El Salvador",503],["Emirati Arabi Uniti","United Arab Emirates",971],["Eritrea","Eritrea",291],["Estonia","Estonia",372],["Eswatini","Eswatini",268],["Etiopia","Ethiopia",251],["Figi","Fiji",679],["Filippine","Philippines",63],["Finlandia","Finland",358],["Francia","France",33],["Gabon","Gabon",241],["Gambia","Gambia",220],["Georgia","Georgia",995],["Germania","Germany",49],["Ghana","Ghana",233],["Giamaica","Jamaica",1],["Giappone","Japan",81],["Gibilterra","Gibraltar",350],["Gibuti","Djibouti",253],["Giordania","Jordan",962],["Grecia","Greece",30],["Grenada","Grenada",1],["Groenlandia","Greenland",299],["Guadalupa","Guadeloupe",590],["Guam","Guam",1],["Guatemala","Guatemala",502],["Guernsey","Guernsey",44],["Guinea","Guinea",224],["Guinea Equatoriale","Equatorial Guinea",240],["Guinea-Bissau","Guinea-Bissau",245],["Guyana","Guyana",592],["Guyana Francese","French Guiana",594],["Haiti","Haiti",509],["Honduras","Honduras",504],["India","India",91],["Indonesia","Indonesia",62],["Iran","Iran",98],["Iraq","Iraq",964],["Irlanda","Ireland",353],["Islanda","Iceland",354],["Isola Ascensione","Ascension Island",247],["Isola Christmas","Christmas Island",61],["Isola di Man","Isle of Man",44],["Isola Norfolk","Norfolk Island",672],["Isole Cayman","Cayman Islands",1],["Isole Cocos (Keeling)","Cocos (Keeling) Islands",61],["Isole Cook","Cook Islands",682],["Isole Falkland","Falkland Islands",500],["Isole Fær Øer","Faroe Islands",298],["Isole Marianne Settentrionali","Northern Mariana Islands",1],["Isole Marshall","Marshall Islands",692],["Isole Salomone","Solomon Islands",677],["Isole Turks e Caicos","Turks & Caicos Islands",1],["Isole Vergini Americane","U.S. Virgin Islands",1],["Isole Vergini Britanniche","British Virgin Islands",1],["Isole Åland","Åland Islands",358],["Israele","Israel",972],["Italia","Italy",39],["Jersey","Jersey",44],["Kazakistan","Kazakhstan",7],["Kenya","Kenya",254],["Kirghizistan","Kyrgyzstan",996],["Kiribati","Kiribati",686],["Kosovo","Kosovo",383],["Kuwait","Kuwait",965],["Laos","Laos",856],["Lesotho","Lesotho",266],["Lettonia","Latvia",371],["Libano","Lebanon",961],["Liberia","Liberia",231],["Libia","Libya",218],["Liechtenstein","Liechtenstein",423],["Lituania","Lithuania",370],["Lussemburgo","Luxembourg",352],["Macedonia del Nord","North Macedonia",389],["Madagascar","Madagascar",261],["Malawi","Malawi",265],["Malaysia","Malaysia",60],["Maldive","Maldives",960],["Mali","Mali",223],["Malta","Malta",356],["Marocco","Morocco",212],["Martinica","Martinique",596],["Mauritania","Mauritania",222],["Mauritius","Mauritius",230],["Mayotte","Mayotte",262],["Messico","Mexico",52],["Micronesia","Micronesia",691],["Moldavia","Moldova",373],["Monaco","Monaco",377],["Mongolia","Mongolia",976],["Montenegro","Montenegro",382],["Montserrat","Montserrat",1],["Mozambico","Mozambique",258],["Myanmar (Birmania)","Myanmar (Burma)",95],["Namibia","Namibia",264],["Nauru","Nauru",674],["Nepal","Nepal",977],["Nicaragua","Nicaragua",505],["Niger","Niger",227],["Nigeria","Nigeria",234],["Niue","Niue",683],["Norvegia","Norway",47],["Nuova Caledonia","New Caledonia",687],["Nuova Zelanda","New Zealand",64],["Oman","Oman",968],["Paesi Bassi","Netherlands",31],["Pakistan","Pakistan",92],["Palau","Palau",680],["Panama","Panama",507],["Papua Nuova Guinea","Papua New Guinea",675],["Paraguay","Paraguay",595],["Perù","Peru",51],["Polinesia Francese","French Polynesia",689],["Polonia","Poland",48],["Portogallo","Portugal",351],["Portorico","Puerto Rico",1],["Qatar","Qatar",974],["RAS di Hong Kong","Hong Kong SAR China",852],["RAS di Macao","Macao SAR China",853],["Regno Unito","United Kingdom",44],["Repubblica Centrafricana","Central African Republic",236],["Repubblica Dominicana","Dominican Republic",1],["Riunione","Réunion",262],["Romania","Romania",40],["Ruanda","Rwanda",250],["Russia","Russia",7],["Sahara Occidentale","Western Sahara",212],["Saint Kitts e Nevis","St. Kitts & Nevis",1],["Saint Lucia","St. Lucia",1],["Saint Martin","St. Martin",590],["Saint Vincent e Grenadine","St. Vincent & Grenadines",1],["Saint-Barthélemy","St. Barthélemy",590],["Saint-Pierre e Miquelon","St. Pierre & Miquelon",508],["Samoa","Samoa",685],["Samoa Americane","American Samoa",1],["San Marino","San Marino",378],["Sant’Elena","St. Helena",290],["Senegal","Senegal",221],["Serbia","Serbia",381],["Seychelles","Seychelles",248],["Sierra Leone","Sierra Leone",232],["Singapore","Singapore",65],["Sint Maarten","Sint Maarten",1],["Siria","Syria",963],["Slovacchia","Slovakia",421],["Slovenia","Slovenia",386],["Somalia","Somalia",252],["Spagna","Spain",34],["Sri Lanka","Sri Lanka",94],["Stati Uniti","United States",1],["Sud Sudan","South Sudan",211],["Sudafrica","South Africa",27],["Sudan","Sudan",249],["Suriname","Suriname",597],["Svalbard e Jan Mayen","Svalbard & Jan Mayen",47],["Svezia","Sweden",46],["Svizzera","Switzerland",41],["São Tomé e Príncipe","São Tomé & Príncipe",239],["Tagikistan","Tajikistan",992],["Taiwan","Taiwan",886],["Tanzania","Tanzania",255],["Territori Palestinesi","Palestinian Territories",970],["Territorio Britannico dell’Oceano Indiano","British Indian Ocean Territory",246],["Thailandia","Thailand",66],["Timor Est","Timor-Leste",670],["Togo","Togo",228],["Tokelau","Tokelau",690],["Tonga","Tonga",676],["Trinidad e Tobago","Trinidad & Tobago",1],["Tristan da Cunha","Tristan da Cunha",290],["Tunisia","Tunisia",216],["Turchia","Türkiye",90],["Turkmenistan","Turkmenistan",993],["Tuvalu","Tuvalu",688],["Ucraina","Ukraine",380],["Uganda","Uganda",256],["Ungheria","Hungary",36],["Uruguay","Uruguay",598],["Uzbekistan","Uzbekistan",998],["Vanuatu","Vanuatu",678],["Venezuela","Venezuela",58],["Vietnam","Vietnam",84],["Wallis e Futuna","Wallis & Futuna",681],["Yemen","Yemen",967],["Zambia","Zambia",260],["Zimbabwe","Zimbabwe",263]];
function riempi(sel){
  // countries sorted by their name in the page language
  var nome=function(p){return LANG==="it"?p[0]:LANG==="en"?p[1]:(I18N.paesi[p[1]]||p[1])};
  var h="";PREFISSI.slice().sort(function(a,b){return nome(a).localeCompare(nome(b),I18N.loc)}).forEach(function(p){h+='<option value="'+p[2]+'"'+(p[2]===39&&p[0]==="Italia"?" selected":"")+'>'+nome(p)+" (+"+p[2]+")</option>"});
  sel.innerHTML=h;
}
var q=new URLSearchParams(location.search),mail=q.get("e")||"",REC=q.get("recupero")||"",tok=q.get("invito")||REC,COMPLETA=!!q.get("completa");
riempi($("pf1"));riempi($("pf2"));
if(COMPLETA){
  $("pwBox").style.display="none";$("tit").textContent="Completa il tuo profilo";
  $("chi").textContent="Per continuare a usare il servizio servono i tuoi dati, l'accettazione del regolamento e la presa visione dell'informativa privacy.";
  $("bR").textContent="Salva e continua";$("bEsci").classList.remove("hide");
  $("bEsci").onclick=function(){fetch("/api/logout",{method:"POST"}).then(function(){location.href="/"})};
}else if(REC){                                          // password recovery: password fields only
  [].forEach.call($("g").children,function(x){if(x.id!=="pwBox"&&x.id!=="bR"&&x.id!=="re")x.style.display="none"});
  $("tit").textContent="Scegli una nuova password";$("chi").textContent=T("Utente: ")+mail;$("bR").textContent="Salva e accedi";
}else{
  $("tit").textContent="Scegli la tua password e completa i tuoi dati";$("chi").textContent=T("Utente: ")+mail;
}
function pwUguali(a,b){var i=$(b),d=document.createElement("div");d.className="pwm";var dopo=i.closest("label")||(i.nextElementSibling&&i.nextElementSibling.className==="occhio"?i.nextElementSibling:i);dopo.insertAdjacentElement("afterend",d);function c(){var x=$(a).value,y=i.value;d.className="pwm"+(y?(x===y?" ok":" no"):"");d.textContent=y?T(x===y?"Le due password coincidono":"Le due password non coincidono"):""}i.addEventListener("input",c);$(a).addEventListener("input",c)}
function occhi(){document.querySelectorAll('input[type="password"]').forEach(function(i){if(i.nextElementSibling&&i.nextElementSibling.className==="occhio")return;var b=document.createElement("button");b.type="button";b.className="occhio";b.textContent=T("mostra");b.onclick=function(){var v=i.type==="password";i.type=v?"text":"password";b.textContent=T(v?"nascondi":"mostra")};i.insertAdjacentElement("afterend",b)})}
occhi();pwUguali("rP","rP2");trDom();
fetch("/api/testi").then(function(r){return r.json()}).then(function(t){
  var en=LANG!=="it",reg=en?(t.reg_en||t.reg_it):(t.reg_it||t.reg_en),pr=en?(t.priv_en||t.priv_it):(t.priv_it||t.priv_en),no='<p class="sub">'+T("(testo non ancora pubblicato dal gestore del sito)")+"</p>";
  document.getElementById("regTxt").innerHTML=reg||no;document.getElementById("prTxt").innerHTML=pr||no;
  if(t.edizione)document.getElementById("edTxt").textContent=T(" (edizione ")+t.edizione+")";
  var f=document.getElementById("feeReg");if(f)f.textContent=t.costo?" ("+T("costo")+" "+t.costo+" "+T("una tantum")+")":"";
}).catch(function(){});selLingua();(function(){var b=$("bTema");function cur(){return document.documentElement.getAttribute("data-t")||"auto"}function lab(){var m={auto:"◐ Auto",light:T("☀ Giorno"),dark:T("☾ Notte")};b.textContent=m[cur()]}lab();b.onclick=function(){var n={auto:"light",light:"dark",dark:"auto"}[cur()];if(n==="auto")document.documentElement.removeAttribute("data-t");else document.documentElement.setAttribute("data-t",n);try{if(n==="auto")localStorage.removeItem("tema");else localStorage.setItem("tema",n)}catch(e){}lab()}})();
function reqPw(p){return{l:p.length>=12,a:/[a-z]/.test(p),A:/[A-Z]/.test(p),d:/[0-9]/.test(p),s:/[^A-Za-z0-9\s]/.test(p)}}
function pwOk(p){var r=reqPw(p);return r.l&&r.a&&r.A&&r.d&&r.s}
$("rP").oninput=function(){
  var r=reqPw($("rP").value);
  document.querySelectorAll("#rg span").forEach(function(s){s.className=r[s.dataset.k]?"s":""});
};
function nazionale(t){return t.value.replace(/[\s.\-()\/]/g,"")}
function telOk(pf,n){return /^[0-9]{6,12}$/.test(n)&&/^\+[1-9][0-9]{7,14}$/.test("+"+pf.value+n)}
$("g").onsubmit=function(ev){
  ev.preventDefault();
  var er=$("re");er.textContent="";
  if(REC){
    if(!pwOk($("rP").value)){er.textContent=T("La password non rispetta i requisiti");return}
    if($("rP").value!==$("rP2").value){er.textContent=T("Le due password non coincidono");return}
    $("bR").disabled=true;
    fetch("/api/recupero",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:tok,email:mail,password:$("rP").value})})
    .then(function(r){return r.json()}).then(function(r){$("bR").disabled=false;if(r.ok)location.href="/";else er.textContent=T(r.errore||"Errore")})
    .catch(function(){$("bR").disabled=false;er.textContent=T("Errore di rete")});
    return;
  }
  var nome=$("rN").value.trim(),cog=$("rC").value.trim();
  if(!nome||!cog){er.textContent=T("Inserisci nome e cognome");return}
  if(!COMPLETA){
    if(!pwOk($("rP").value)){er.textContent=T("La password non rispetta i requisiti");return}
    if($("rP").value!==$("rP2").value){er.textContent=T("Le due password non coincidono");return}
  }
  var n1=nazionale($("t1")),n2=nazionale($("t2")),t1,t2="";
  if(!telOk($("pf1"),n1)){er.textContent=T("Numero di telefono non valido");return}
  t1="+"+$("pf1").value+n1;
  if(n2){if(!telOk($("pf2"),n2)){er.textContent=T("Secondo numero di telefono non valido");return}t2="+"+$("pf2").value+n2}
  if(!$("cR").checked){er.textContent=T("Devi accettare il regolamento");return}
  if(!$("cP").checked){er.textContent=T("Devi confermare di aver letto l'informativa privacy");return}
  var body={nome:nome,cognome:cog,tel1:t1,tel2:t2,reg:true,priv:true,msg:$("cM").checked};
  if(!COMPLETA){body.password=$("rP").value;body.token=tok;body.email=mail}
  $("bR").disabled=true;
  fetch(COMPLETA?"/api/profilo":"/api/invito",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)})
  .then(function(r){return r.json()}).then(function(r){
    $("bR").disabled=false;
    if(r.ok)location.href="/";else er.textContent=T(r.errore||"Errore")})
  .catch(function(){$("bR").disabled=false;er.textContent=T("Errore di rete")});
};
</script>
</body>
</html>`;

// First-run setup: shown until an administrator exists (and the APP_PASSWORD secret is not used).
export const SETUP = String.raw`<!doctype html>
<html lang="it">
<head>
<script>try{var _t=localStorage.getItem("tema");if(_t)document.documentElement.setAttribute("data-t",_t)}catch(e){}</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__TITLE__</title>
<style>
*{box-sizing:border-box}
body{margin:0;font:15px/1.45 system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--tx);display:flex;min-height:100vh;justify-content:center;padding:20px 0}
.card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:22px;width:min(560px,94vw);align-self:flex-start;margin:auto 0}
h1{font-size:18px;margin:0 0 4px}h2{font-size:14px;margin:14px 0 6px}
.sub{color:var(--mut);font-size:13px;margin-bottom:10px}
form{display:flex;flex-direction:column;gap:10px}
label{font-size:13px;color:var(--mut);display:flex;flex-direction:column;gap:3px}
input,select,button{font:inherit;padding:9px 10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--tx);min-width:0}
.riga{display:flex;gap:8px}.riga>label{flex:1;min-width:0}label input{width:100%}
.err{color:var(--err);min-height:1.2em;font-size:13px}.okm{color:var(--ok);font-size:13px}
pre{white-space:pre-wrap;font-size:12px;max-height:140px;overflow:auto;border:1px solid var(--line);border-radius:6px;padding:6px}
.hide{display:none!important}
</style>
</head>
<body>
<div class="card">
  <select class="lingua lingua-p" id="bLang" aria-label="Lingua / Language"></select>
  <div class="marca"><span class="logo" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg></span><h1>Prima configurazione <span class="ver">__VERSION__</span></h1></div>
  <div class="sub">Crea l'amministratore e indica la colonnina. Tutto si può cambiare dopo dalla scheda Impostazioni.</div>
  <form id="f">
    <h2>Amministratore</h2>
    <div class="riga"><label>Nome utente<input id="s_nome" value="admin" autocomplete="username" required></label></div>
    <div class="riga"><label>Password<input id="s_pw" type="password" autocomplete="new-password" required></label><label>Ripeti la password<input id="s_pw2" type="password" autocomplete="new-password" required></label></div>
    <div class="sub">Almeno 12 caratteri con minuscola, maiuscola, numero e carattere speciale.</div>
    <div class="riga hide" id="codeBox"><label>Codice di configurazione (SETUP_CODE)<input id="s_code" autocomplete="off"></label></div>
    <h2>Colonnina</h2>
    <div class="riga"><label>Indirizzo (http:// o https://, con la porta se serve)<input id="cf_url" placeholder="http://colonnina.esempio.it:81" autocomplete="off"></label></div>
    <div class="riga"><label>Utente (se la colonnina chiede una password)<input id="cf_user" autocomplete="off"></label><label>Password<input id="cf_password" type="password" autocomplete="new-password"></label></div>
    <h2>Sito</h2>
    <div class="riga"><label>Titolo del sito<input id="cf_title" value="EV Charger"></label></div>
    <div class="riga"><label>Fuso orario<input id="cf_tz" value="Europe/Rome"></label><label>Valuta<input id="cf_currency" value="&euro;"></label></div>
    <h2>Mail (facoltativo, Resend)</h2>
    <div class="riga"><label>Chiave API Resend<input id="cf_resend_key" type="password" autocomplete="new-password"></label><label>Mittente<input id="cf_mail_from" placeholder="Colonnina &lt;ricariche@esempio.it&gt;"></label></div>
    <div class="riga"><button type="button" id="bProva">Prova il collegamento</button><button type="submit" class="p" id="bOk" style="background:var(--acc);color:var(--btx);border-color:var(--acc)">Salva e inizia</button></div>
    <div class="err" id="er"></div><div id="prova"></div>
  </form>
</div>
<script>
var LANG="__LANG__",I18N=__I18N_setup__,D=I18N.d;
function rp(s,re,r){return s.replace(re,function(){var g=arguments;return r.replace(/\$(T?)(\d)/g,function(x,t,i){var v=g[+i];if(typeof v!=="string")v="";return t?T(v):v})})}
// language menu: the choice goes in a cookie (the server puts the right dictionary in the page) and survives the reload
function cambiaLingua(l){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax"+(location.protocol==="https:"?";secure":"");try{localStorage.setItem("lang",l)}catch(e){}location.reload()}
function selLingua(){var e=document.getElementById("bLang"),h="";if(!e)return;for(var k in I18N.lingue)h+='<option value="'+k+'"'+(k===LANG?" selected":"")+">"+I18N.lingue[k]+"</option>";e.innerHTML=h;e.onchange=function(){cambiaLingua(e.value)}}
// language chosen before v2.20 (kept in the browser only): moved to the cookie once
(function(){try{var l=localStorage.getItem("lang"),c=/(^|;\s*)lang=/;if(l&&l!==LANG&&I18N.lingue[l]&&!c.test(document.cookie)){document.cookie="lang="+l+";path=/;max-age=31536000;samesite=lax";if(c.test(document.cookie))location.reload()}}catch(e){}})();
function T(s){return(LANG!=="it"&&D.hasOwnProperty(s))?D[s]:s}
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
(function(){if(LANG==="it")return;document.documentElement.lang=LANG;var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n,L=[];while(n=w.nextNode())L.push(n);L.forEach(function(x){var v=x.nodeValue,k=v.trim();if(k&&D.hasOwnProperty(k))x.nodeValue=v.replace(k,D[k])})})();
function pwUguali(a,b){var i=$(b),d=document.createElement("div");d.className="pwm";var dopo=i.closest("label")||(i.nextElementSibling&&i.nextElementSibling.className==="occhio"?i.nextElementSibling:i);dopo.insertAdjacentElement("afterend",d);function c(){var x=$(a).value,y=i.value;d.className="pwm"+(y?(x===y?" ok":" no"):"");d.textContent=y?T(x===y?"Le due password coincidono":"Le due password non coincidono"):""}i.addEventListener("input",c);$(a).addEventListener("input",c)}
function occhi(){document.querySelectorAll('input[type="password"]').forEach(function(i){if(i.nextElementSibling&&i.nextElementSibling.className==="occhio")return;var b=document.createElement("button");b.type="button";b.className="occhio";b.textContent=T("mostra");b.onclick=function(){var v=i.type==="password";i.type=v?"text":"password";b.textContent=T(v?"nascondi":"mostra")};i.insertAdjacentElement("afterend",b)})}
occhi();pwUguali("s_pw","s_pw2");selLingua();
var IDS=["url","user","password","title","tz","currency","resend_key","mail_from"];
function dati(){var o={};IDS.forEach(function(k){o[k]=$("cf_"+k).value});o.code=$("s_code").value;return o}
function post(p,b){return fetch(p,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(b)}).then(function(r){return r.json()})}
fetch("/api/setup").then(function(r){return r.json()}).then(function(r){if(r.done){location.href="/";return}$("codeBox").classList.toggle("hide",!r.code_required)});
function blocco(nome,x){if(!x)return "";var h="<h2>"+esc(nome)+": "+(x.ok?T("ok"):T("errore"))+" <span class=\"sub\">("+x.ms+" ms)</span></h2>";if(x.errore)h+='<div class="err">'+esc(x.errore)+"</div>";if(x.righe!==undefined)h+='<div class="sub">'+T("Righe lette: ")+x.righe+"</div>";if(x.sample)h+="<pre>"+esc(x.sample)+"</pre>";return h}
$("bProva").onclick=function(){$("er").textContent="";$("prova").innerHTML='<div class="sub">'+T("Provo la connessione...")+"</div>";
  post("/api/setup/test",dati()).then(function(r){if(r.errore){$("prova").innerHTML="";$("er").textContent=T(r.errore);return}$("prova").innerHTML=blocco(T("Storico"),r.history)+blocco(T("Elenco tessere"),r.tags)})};
$("f").onsubmit=function(e){e.preventDefault();$("er").textContent="";
  if($("s_pw").value!==$("s_pw2").value){$("er").textContent=T("Le password non coincidono");return}
  var d=dati();d.nome=$("s_nome").value;d.password_admin=$("s_pw").value;
  $("bOk").disabled=true;
  post("/api/setup",d).then(function(r){$("bOk").disabled=false;if(r.errore){$("er").textContent=T(r.errore);return}location.href="/"});
};
</script>
</body>
</html>`;
