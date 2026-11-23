(()=>{
'use strict';
const lang=document.documentElement.lang==='de'?'de':'en';
const DATA_LABELS={"en":{"overview":"Overview","pricing":"Pricing Calculator","roi":"ROI Calculator","resource":"Customer Resources","internal":"CUSTOMER ROI MODEL","title":"Three value levers.<br><em>One clear ROI.</em>","lead":"See exactly where the value comes from: automated CRM administration, agent workflows, and AI coaching. Adjust every assumption and share a transparent calculation.","preset":"Choose team scenario","blank":"Start from zero","intro":"Build your business case","introText":"Each section calculates its contribution separately. Coaching upside is shown as a scenario, not included in the time-value ROI.","source":"VALUE SOURCES","crmMetric":"CRM ADMIN SAVINGS","agentMetric":"AI AGENTS & AUTOMATIONS","coachMetric":"AI COACHING · EXTRA ARR","multipleMetric":"TIME-VALUE / INVESTMENT","value":"annual capacity value","arr":"additional booked ARR (scenario)","multiple":"time-value ROI multiple","assumptions":"Illustrative inputs","sectionCRM":"CRM notes & synchronization","crmDesc":"Manual meeting notes and CRM updates automated by Kickscale. This time saving is included in the platform license.","included":"INCLUDED IN LICENSE","calls":"Sales / CS calls per month","minutesCall":"Minutes saved per call","hourly":"Value of time per hour (€)","crmValue":"Annual CRM administration capacity value","crmHours":"hours freed per year","crmFormula":"(Meetings × 15 min + Calls × 3 min, or your edited values) × 12 ÷ 60 × hourly value.","sectionAgent":"AI Agents & Automations","agentDesc":"Build your own agent savings model below. Add each workflow and its volume; all time savings and run costs are calculated directly on this page.","paid":"€0.90 PER COMPLETED RUN","workflows":"Agent workflows","workflowDesc":"Specify the annual number of completed runs and unique minutes saved beyond CRM administration.","newWorkflow":"Add a workflow","workflowName":"Workflow name","yearlyRuns":"Completed runs / year","minutesRun":"Minutes saved / run","hours":"Hours saved / year","annualValue":"Annual value","remove":"Remove workflow","workflowBase":"Existing agent automations","workflowNew":"Custom agent / automation","workflowSDR":"SDR → AE handover","workflowCS":"Sales → CS handover","workflowResearch":"Account research and preparation","runCost":"Annual agent-run spend","workflowRuns":"Completed runs / year","workflowTime":"Annual hours saved","workflowValue":"Annual time capacity value","workflowCostNote":"Cost of every completed run: €0.90. Agents should represent distinct work, not time already counted in CRM notes/sync.","overlap":"No double counting: only include time saved by automations beyond the CRM administration work in section 01.","sectionCoach":"AI Coaching · closing uplift","coachDesc":"Optional revenue scenario based on a relative improvement in booked wins. Coaching benefits are intentionally excluded from the time-value multiple.","scenario":"OPTIONAL REVENUE SCENARIO","closingReps":"Closing sales reps","winsRep":"Wins per rep / month (baseline)","perWin":"Annual recurring revenue per win (€)","winUplift":"Relative win uplift (%)","coachValue":"Potential additional booked ARR","coachNote":"Scenario: 10% relative uplift in monthly wins, multiplied by reps and annual recurring value per win. This is illustrative, not guaranteed.","sectionInvestment":"Annual investment","investmentDesc":"Platform license investment plus all completed AI Agent runs. Costs are calculated separately from time capacity.","investmentTag":"COSTS","platform":"Annual platform licenses (€)","agentRunPrice":"Price per completed AI Agent run","totalInvestment":"Total annual investment","summary":"ROI at a glance","summaryHelp":"Editable assumptions · annualized; not guaranteed","timeValue":"Annual time capacity value","crmPart":"CRM administration","agentPart":"AI Agents & Automations","platformPart":"Platform licenses","runPart":"Agent run costs","annualCost":"Total annual investment","timeMultiple":"Time-value / investment","coachingARR":"AI Coaching · additional ARR","netCapacity":"Capacity value minus investment","copy":"Copy results","copied":"Copied!","print":"Print model","bars":"Value contribution vs. investment","method":"How this calculation works","mCRM":"Included CRM administration","mCRMText":"(Meetings/month × minutes saved/meeting + calls/month × minutes saved/call) × 12 ÷ 60 × hourly value.","mAgent":"Agent workflow capacity","mAgentText":"For each workflow: completed runs/year × unique minutes saved/run ÷ 60 × hourly value.","mCost":"Total investment","mCostText":"Annual platform licenses + completed agent runs/year × €0.90.","mCoach":"Coaching opportunity","mCoachText":"Closing reps × baseline wins/rep/month × 12 × annual recurring revenue per win × relative uplift.","disclaimer":"Illustrative assumptions only. Saved time is available capacity, not automatically cash savings. Coaching uplift is potential ARR, not realized. Confirm workstreams do not overlap, particularly agent handovers and CRM notes. Activity levels are illustrative, not externally validated benchmarks. Price illustration: €99 per user/month and €0.90 per completed agent run; actual contracting may differ.","footer":"Kickscale · Illustrative ROI model","methodLink":"View methodology","step1":"STEP 1 · CUSTOMER INPUTS","step1Desc":"Choose your team size and activity. Meeting and call volumes represent monthly activity per rep.","users":"Sales / CS users","meetingsPerRep":"Meetings / rep / month","callsPerRep":"Calls / rep / month","meetingsIntensity":"Meeting intensity","callsIntensity":"Call intensity","low":"Low","medium":"Medium","high":"High","veryHigh":"Very high","custom":"Custom","meetingsWeekly":"meetings / rep / week","callsWeekly":"calls / rep / week","totalMeetings":"Total meetings / month","totalCalls":"Total calls / month","step2":"STEP 2 · INCLUDED MODULES","step2Desc":"Choose which capabilities to include in the model. Module prices are intentionally not shown.","modulesNote":"Revenue Intelligence adds decision support; it is not assigned a separate savings figure in this model.","moduleCapture":"Notetaker · Meeting capture","moduleAssistant":"AI Assistant · CRM and follow-ups","moduleCoach":"AI Coaching","moduleIntel":"Intelligence · Deals, insights and forecasts","moduleAgents":"AI Agents & Automations","minutesMeeting":"Minutes saved per meeting","meetings":"Sales / CS meetings per month","annualRunsLinked":"Linked to monthly call/meeting volumes × 12","platformFormula":"Users × €99 / user / month × 12 months","intensityNote":"Activity levels are illustrative planning scenarios for completed customer interactions, not verified industry benchmarks. Four weeks are used per month for the intensity controls.","selectionNone":"Select at least one module to estimate that capability."},"de":{"overview":"Übersicht","pricing":"Pricing Calculator","roi":"ROI-Rechner","resource":"Kundenressourcen","internal":"ROI-MODELL FÜR KUNDEN","title":"Drei Werthebel.<br><em>Ein klarer ROI.</em>","lead":"Sieh genau, wo der Mehrwert entsteht: durch automatisierte CRM-Dokumentation, Agenten-Workflows und KI-Coaching. Alle Annahmen sind editierbar.","preset":"Teamgröße wählen","blank":"Mit Null starten","intro":"Business Case berechnen","introText":"Jeder Bereich zeigt seinen Wertbeitrag getrennt. Coaching wird als mögliches Umsatzszenario dargestellt und nicht in den Zeitwert-ROI eingerechnet.","source":"WERTQUELLEN","crmMetric":"CRM-ADMINISTRATION","agentMetric":"AI AGENTS & AUTOMATIONS","coachMetric":"KI-COACHING · EXTRA ARR","multipleMetric":"ZEITWERT / INVESTMENT","value":"jährlicher Kapazitätswert","arr":"zusätzlich gebuchter ARR (Szenario)","multiple":"Zeitwert-ROI-Multiplikator","assumptions":"Illustrative Annahmen","sectionCRM":"CRM-Notizen und Synchronisierung","crmDesc":"Automatische Meeting-Notizen und CRM-Updates durch Kickscale. Der Zeitgewinn ist in der Plattformlizenz enthalten.","included":"IN LIZENZ ENTHALTEN","calls":"Sales-/CS-Calls pro Monat","minutesCall":"Gesparte Minuten pro Call","hourly":"Wert einer Arbeitsstunde (€)","crmValue":"Jährlicher Kapazitätswert aus CRM-Administration","crmHours":"freigespielte Stunden pro Jahr","crmFormula":"(Meetings × 15 Min. + Calls × 3 Min., jeweils anpassbar) × 12 ÷ 60 × Stundenwert.","sectionAgent":"AI Agents & Automations","agentDesc":"Baue hier deine Agenten-Einsparungen direkt auf. Ergänze die Workflows und ihre Häufigkeit – alle Zeitwerte und Run-Kosten werden auf dieser Seite berechnet.","paid":"€0,90 JE ABGESCHLOSSENEM RUN","workflows":"Agenten-Workflows","workflowDesc":"Gib abgeschlossene Runs pro Jahr und zusätzliche Minuten Ersparnis über die CRM-Administration hinaus an.","newWorkflow":"Workflow hinzufügen","workflowName":"Workflow-Bezeichnung","yearlyRuns":"Abgeschlossene Runs / Jahr","minutesRun":"Gesparte Minuten / Run","hours":"Stunden / Jahr","annualValue":"Jährlicher Zeitwert","remove":"Workflow entfernen","workflowBase":"Bestehende Agenten-Workflows","workflowNew":"Individueller Agent / Automation","workflowSDR":"SDR → AE Übergabe","workflowCS":"Sales → CS Übergabe","workflowResearch":"Account-Recherche & Vorbereitung","runCost":"Jährliche Kosten für Agent Runs","workflowRuns":"Abgeschlossene Runs / Jahr","workflowTime":"Jährlich gesparte Stunden","workflowValue":"Jährlicher Kapazitätswert","workflowCostNote":"Jeder abgeschlossene Run kostet €0,90. Nur eigenständige Zeitersparnisse erfassen, die nicht bereits bei CRM-Notizen/Sync berücksichtigt sind.","overlap":"Keine Doppelzählung: Hier nur Tätigkeiten anrechnen, die zusätzlich zur CRM-Administration in Abschnitt 01 automatisiert werden.","sectionCoach":"KI-Coaching · Abschlusssteigerung","coachDesc":"Optionales Umsatzszenario mit einer relativen Steigerung der gewonnenen Deals. Nicht Bestandteil des Zeitwert-Multiplikators.","scenario":"OPTIONALES UMSATZSZENARIO","closingReps":"Closing-Reps","winsRep":"Abschlüsse pro Rep / Monat (Basis)","perWin":"Jährlicher Vertragswert pro Abschluss (€)","winUplift":"Relative Steigerung der Abschlüsse (%)","coachValue":"Potenziell zusätzlich gebuchter ARR","coachNote":"Szenario: 10 % relative Steigerung der monatlichen Abschlüsse, multipliziert mit Reps und jährlichem Vertragswert je Abschluss. Keine Garantie.","sectionInvestment":"Jährliches Investment","investmentDesc":"Kosten für Plattformlizenzen und alle abgeschlossenen Agent Runs. Die Kosten sind vom Kapazitätswert getrennt.","investmentTag":"KOSTEN","platform":"Jährliche Plattformlizenzen (€)","agentRunPrice":"Preis pro abgeschlossenem Agent Run","totalInvestment":"Gesamtes Jahresinvestment","summary":"ROI auf einen Blick","summaryHelp":"Anpassbare Annahmen · jährlich; keine Garantie","timeValue":"Jährlicher Kapazitätswert","crmPart":"CRM-Administration","agentPart":"AI Agents & Automations","platformPart":"Plattformlizenzen","runPart":"Agent-Run-Kosten","annualCost":"Gesamtes Jahresinvestment","timeMultiple":"Zeitwert / Investment","coachingARR":"KI-Coaching · zusätzlicher ARR","netCapacity":"Kapazitätswert abzüglich Investment","copy":"Ergebnis kopieren","copied":"Kopiert!","print":"Modell drucken","bars":"Wertbeiträge und Investment","method":"So berechnen wir den ROI","mCRM":"CRM-Administration (inkludiert)","mCRMText":"(Meetings/Monat × Minuten/Meeting + Calls/Monat × Minuten/Call) × 12 ÷ 60 × Stundenwert.","mAgent":"Agenten-Kapazitätswert","mAgentText":"Pro Workflow: abgeschlossene Runs/Jahr × zusätzliche Minuten/Run ÷ 60 × Wert pro Stunde.","mCost":"Gesamtes Investment","mCostText":"Jahreslizenzen + abgeschlossene Agent Runs/Jahr × €0,90.","mCoach":"Coaching-Umsatzchance","mCoachText":"Closing-Reps × Abschlüsse/Rep/Monat × 12 × Jahresumsatz pro Abschluss × relativer Uplift.","disclaimer":"Nur illustrative Annahmen. Gesparte Zeit bedeutet verfügbare Kapazität und nicht automatisch Cash-Ersparnis. Coaching-Uplift ist potenzieller ARR, kein realisierter Umsatz. Doppelte Erfassung von Zeitersparnissen vermeiden, besonders bei Agentenübergaben und CRM-Notizen. Aktivitätsstufen sind Beispiele, keine extern validierten Benchmarks. Preisannahme: €99 pro User/Monat und €0,90 je abgeschlossenem Agent Run; der tatsächliche Vertrag kann abweichen.","footer":"Kickscale · Beispielhafte ROI-Berechnung","methodLink":"Berechnung ansehen","step1":"SCHRITT 1 · KUNDENANGABEN","step1Desc":"Teamgröße und Aktivität wählen. Meetings und Calls sind monatliche Mengen pro Rep.","users":"Sales-/CS-Mitarbeitende","meetingsPerRep":"Meetings / Rep / Monat","callsPerRep":"Calls / Rep / Monat","meetingsIntensity":"Meeting-Intensität","callsIntensity":"Call-Intensität","low":"Niedrig","medium":"Mittel","high":"Hoch","veryHigh":"Sehr hoch","custom":"Individuell","meetingsWeekly":"Meetings / Rep / Woche","callsWeekly":"Calls / Rep / Woche","totalMeetings":"Sales-/CS-Meetings pro Monat","totalCalls":"Sales-/CS-Calls pro Monat","step2":"SCHRITT 2 · GEWÄHLTE MODULE","step2Desc":"Wähle die Module, deren Nutzen berücksichtigt werden soll. Einzelpreise werden nicht angezeigt.","modulesNote":"Revenue Intelligence liefert zusätzliche Entscheidungsunterstützung; ein separater monetärer Wert ist hier nicht angesetzt.","moduleCapture":"Notetaker · Meeting-Erfassung","moduleAssistant":"KI-Assistent · CRM & Follow-ups","moduleCoach":"KI-Coaching","moduleIntel":"Intelligence · Deals, Insights & Forecasts","moduleAgents":"KI-Agenten & Automationen","minutesMeeting":"Gesparte Minuten pro Meeting","meetings":"Sales-/CS-Meetings pro Monat","annualRunsLinked":"Automatisch: Calls/Meetings pro Monat × 12","platformFormula":"Mitarbeitende × €99 pro User / Monat × 12 Monate","intensityNote":"Aktivitätsstufen sind illustrative Planungsannahmen für tatsächliche Kundengespräche, keine verifizierten Branchenbenchmarks. Für die Intensitätsstufen werden vier Wochen pro Monat angesetzt.","selectionNone":"Bitte mindestens ein Modul auswählen, um dessen Nutzen zu berechnen."}};
const t=DATA_LABELS[lang];
const formatMoney=new Intl.NumberFormat(lang==='de'?'de-AT':'en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0});
const formatExact=new Intl.NumberFormat(lang==='de'?'de-AT':'en-IE',{style:'currency',currency:'EUR',minimumFractionDigits:2,maximumFractionDigits:2});
const formatInt=new Intl.NumberFormat(lang==='de'?'de-AT':'en-IE',{maximumFractionDigits:0});
const money=x=>formatMoney.format(Number.isFinite(x)?x:0);
const exact=x=>formatExact.format(Number.isFinite(x)?x:0);
const integer=x=>formatInt.format(Number.isFinite(x)?x:0);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const val=x=>Math.min(10000000000,Math.max(0,Number(x)||0));
let seq=10;
const MEETING_LEVELS=[5,10,20,40];
const CALL_LEVELS=[10,20,40,80];
const levelLabel=n=>[t.low,t.medium,t.high,t.veryHigh][n-1]||t.custom;
const makeState=(users=50,blank=false)=>({
 users,meetingsLevel:blank?0:2,callsLevel:blank?0:2,
 meetingsPerUser:blank?0:40,callsPerUser:blank?0:80,
 meetings:users*(blank?0:40),calls:users*(blank?0:80),
 minutesMeeting:15,minutesCall:3,hourly:40,closers:users,
 winsRep:blank?0:3,perWin:blank?0:5000,winUplift:10,
 platform:users*99*12,
 modules:{capture:true,assistant:true,coach:true,intelligence:true,agents:true},
 workflows:[
 {id:2,name:t.workflowSDR,kind:'calls',runs:users*(blank?0:80)*12,minutes:10},
 {id:3,name:t.workflowCS,kind:'meetings',runs:users*(blank?0:40)*12,minutes:20}
 ]
});
const initial=()=>makeState(50);
const zero=()=>makeState(0,true);
let state=initial();
function syncDependent(){
 state.users=val(state.users);
 state.meetings=val(state.users)*val(state.meetingsPerUser);
 state.calls=val(state.users)*val(state.callsPerUser);
 state.closers=state.users;
 state.platform=state.users*99*12;
 state.workflows.forEach(w=>{if(w.kind==='calls')w.runs=state.calls*12;if(w.kind==='meetings')w.runs=state.meetings*12});
}
const url=k=>'/'+lang+'/'+(k==='overview'?'':k==='pricing'?'pricing-calculator/':'roi-calculator/');
function nav(){
return '<header class="site-header"><div class="shell header-row"><a class="wordmark" href="/'+lang+'/"><img src="/assets/logos/kickscale-white.svg" alt="Kickscale"><span>RESOURCES</span></a><nav id="nav" class="nav buyer-global-nav" aria-label="Site navigation"></nav><div class="locale"><a href="/en/roi-calculator/"'+(lang==='en'?' aria-current="true"':'')+'>EN</a><a href="/de/roi-calculator/"'+(lang==='de'?' aria-current="true"':'')+'>DE</a></div></div></header>'
}

function input(key,label,step='1',extra=''){const id='input-'+key;return '<div class="field"><label for="'+id+'">'+label+'</label><input id="'+id+'" data-field="'+key+'" type="number" min="0" step="'+step+'" value="'+state[key]+'">'+(extra?'<small>'+extra+'</small>':'')+'</div>'}
function sectionStart(id,number,title,desc,tag,klass){return '<section class="section '+klass+'" id="'+id+'"><div class="section-inner"><div class="section-heading"><span class="step">'+number+'</span><div><h3>'+title+'</h3><p>'+desc+'</p></div><span class="mini-tag">'+tag+'</span></div>'}

function initHoverRoi(){
 const menus=[...document.querySelectorAll('.hq-roi-group')],hover=()=>window.matchMedia('(hover:hover) and (pointer:fine)').matches;
 for(const m of menus){
 m.addEventListener('pointerenter',()=>{if(!hover())return;menus.forEach(other=>{if(other!==m)other.open=false});m.open=true});
 m.addEventListener('pointerleave',()=>{if(hover())m.open=false});
 m.querySelector('summary')?.addEventListener('click',e=>{if(hover()&&e.detail>0)e.preventDefault()});
 m.addEventListener('focusout',e=>{if(!m.contains(e.relatedTarget))m.open=false});
 }
 document.addEventListener('keydown',e=>{if(e.key==='Escape')menus.forEach(x=>x.open=false)});
 document.addEventListener('pointerdown',e=>{if(!e.target.closest('.hq-roi-group'))menus.forEach(x=>x.open=false)});
}

function renderShell(){
document.getElementById('roiApp').innerHTML=nav()+
'<div class="hero"><div class="shell hero-content"><div><p class="eyebrow">✦ &nbsp; '+t.internal+'</p><h1>'+t.title+'</h1><p class="lead">'+t.lead+'</p></div><div class="hero-actions"><button class="btn btn-primary" data-action="preset">'+t.preset+'</button><button class="btn btn-secondary" data-action="blank">'+t.blank+'</button></div></div></div>'+
'<main class="shell main"><div class="top-metrics" aria-label="'+t.source+'">'+
'<div class="metric teal"><small>'+t.crmMetric+'</small><strong id="metricCRM">—</strong><span>'+t.value+'</span></div>'+
'<div class="metric yellow"><small>'+t.agentMetric+'</small><strong id="metricAgent">—</strong><span>'+t.value+'</span></div>'+
'<div class="metric pink"><small>'+t.coachMetric+'</small><strong id="metricCoach">—</strong><span>'+t.arr+'</span></div>'+
'<div class="metric dark"><small>'+t.multipleMetric+'</small><strong id="metricMultiple">—</strong><span>'+t.multiple+'</span></div></div>'+
'<div class="intro-bar"><div><p class="eyebrow">'+t.source+'</p><h2>'+t.intro+'</h2><p>'+t.introText+'</p></div><span class="pill">✓ '+t.assumptions+'</span></div>'+
'<div class="working-grid"><div class="work-left">'+
sectionStart('crm', '01',t.sectionCRM,t.crmDesc,t.included,'crm')+
'<div class="field-grid">'+input('calls',t.calls)+input('minutesCall',t.minutesCall,'0.25')+input('hourly',t.hourly,'0.5')+'</div>'+
'<div class="calc-inline"><span>'+t.crmValue+'<br><small id="crm-hours">—</small></span><strong id="crm-value">—</strong></div><p class="formula">'+t.crmFormula+'</p></div></section>'+
sectionStart('agents','02',t.sectionAgent,t.agentDesc,t.paid,'agents')+
'<div class="workflow-header"><div><h4>'+t.workflows+'</h4><p>'+t.workflowDesc+'</p></div><button class="btn btn-add" data-action="add">＋ '+t.newWorkflow+'</button></div>'+
'<div class="workflow-scroll"><table class="workflow-table"><colgroup><col style="width:30%"><col style="width:19%"><col style="width:17%"><col style="width:15%"><col style="width:14%"><col style="width:5%"></colgroup><thead><tr><th>'+t.workflowName+'</th><th>'+t.yearlyRuns+'</th><th>'+t.minutesRun+'</th><th>'+t.hours+'</th><th>'+t.annualValue+'</th><th></th></tr></thead><tbody id="workflow-rows"></tbody></table></div>'+
'<div class="workflow-bottom"><span class="workflow-cost">'+t.workflowCostNote+'</span></div>'+
'<div class="workflow-total"><div><small>'+t.workflowRuns+'</small><strong id="runs-total">—</strong></div><div><small>'+t.workflowTime+'</small><strong id="agent-hours-total">—</strong></div><div><small>'+t.workflowValue+'</small><strong id="agent-value-total">—</strong></div></div>'+
'<div class="calc-inline yellow"><span>'+t.runCost+'</span><strong id="agent-spend">—</strong></div><p class="warning">⚠ '+t.overlap+'</p></div></section>'+
sectionStart('coaching','03',t.sectionCoach,t.coachDesc,t.scenario,'coaching')+
'<div class="field-grid four">'+input('closers',t.closingReps)+input('winsRep',t.winsRep)+input('perWin',t.perWin)+input('winUplift',t.winUplift,'0.1')+'</div>'+
'<div class="calc-inline pink"><span>'+t.coachValue+'</span><strong id="coach-value">—</strong></div><p class="coaching-note">'+t.coachNote+'</p></div></section>'+
sectionStart('investment','04',t.sectionInvestment,t.investmentDesc,t.investmentTag,'investment')+
'<div class="field-grid two">'+input('platform',t.platform)+
'<div class="field"><label>'+t.agentRunPrice+'</label><input value="'+exact(.9)+'" readonly aria-readonly="true"></div></div>'+
'<div class="calc-inline"><span>'+t.totalInvestment+'</span><strong id="investment-total">—</strong></div></div></section>'+
'</div>'+
'<aside class="summary"><div class="summary-inner"><small class="over">'+t.internal+'</small><h3>'+t.summary+'</h3><p class="summary-help">'+t.summaryHelp+'</p>'+
'<div class="summary-total"><div class="big" id="summary-value">—</div><span>'+t.timeValue+'</span></div>'+
'<div class="summary-row"><span><i class="dot"></i>'+t.crmPart+'</span><strong id="sum-crm">—</strong></div>'+
'<div class="summary-row agents"><span><i class="dot"></i>'+t.agentPart+'</span><strong id="sum-agents">—</strong></div>'+
'<div class="bar-block"><p>'+t.bars+'</p>'+
'<div class="bar-row"><div class="bar-caption"><span>'+t.crmPart+'</span><span id="bar-crm-label">—</span></div><div class="bar-track"><div class="bar-fill crm" id="bar-crm"></div></div></div>'+
'<div class="bar-row"><div class="bar-caption"><span>'+t.agentPart+'</span><span id="bar-agent-label">—</span></div><div class="bar-track"><div class="bar-fill agents" id="bar-agent"></div></div></div>'+
'<div class="bar-row"><div class="bar-caption"><span>'+t.annualCost+'</span><span id="bar-invest-label">—</span></div><div class="bar-track"><div class="bar-fill invest" id="bar-invest"></div></div></div></div>'+
'<div class="summary-invest"><span>'+t.annualCost+'</span><strong id="sum-invest">—</strong></div>'+
'<div class="summary-row invest"><span><i class="dot"></i>'+t.platformPart+'</span><strong id="sum-platform">—</strong></div>'+
'<div class="summary-row invest"><span><i class="dot"></i>'+t.runPart+'</span><strong id="sum-runcost">—</strong></div>'+
'<div class="summary-multiple"><strong id="sum-multiple">—</strong><span>'+t.timeMultiple+'</span></div>'+
'<div class="summary-coaching"><strong id="sum-coach">—</strong><span>'+t.coachingARR+' · '+t.scenario+'</span></div>'+
'<div class="summary-row"><span>'+t.netCapacity+'</span><strong id="sum-net">—</strong></div>'+
'<div class="summary-actions"><button class="btn btn-primary" data-action="copy">'+t.copy+'</button><button class="btn btn-secondary" data-action="print">'+t.print+'</button></div></div></aside></div>'+
'<section class="methodology" id="method"><h3>'+t.method+'</h3><div class="method-grid"><div class="method-cell"><strong>01 · '+t.mCRM+'</strong>'+t.mCRMText+'</div><div class="method-cell"><strong>02 · '+t.mAgent+'</strong>'+t.mAgentText+'</div><div class="method-cell"><strong>03 · '+t.mCoach+'</strong>'+t.mCoachText+'</div><div class="method-cell"><strong>04 · '+t.mCost+'</strong>'+t.mCostText+'</div></div><p class="method-note">'+t.disclaimer+'</p></section></main>'+
'<footer class="footer"><div class="shell footer-inner"><span>'+t.footer+'</span><a href="https://resources.kickscale.si/'+lang+'/" target="_blank" rel="noopener noreferrer">'+t.resource+' ↗</a></div></footer>';
renderRows();
renderResults();
initHoverRoi();
}
function workflowRow(w){
const rid=String(w.id);
return '<tr data-row="'+rid+'"><td><input type="text" maxlength="90" data-agent-id="'+rid+'" data-prop="name" value="'+safe(w.name)+'" aria-label="'+t.workflowName+'"></td>'+
'<td><input type="number" min="0" step="1" data-agent-id="'+rid+'" data-prop="runs" value="'+w.runs+'" aria-label="'+t.yearlyRuns+'"></td>'+
'<td><input type="number" min="0" step="0.25" data-agent-id="'+rid+'" data-prop="minutes" value="'+w.minutes+'" aria-label="'+t.minutesRun+'"></td>'+
'<td class="workflow-hours" id="row-hours-'+rid+'">—</td>'+
'<td class="workflow-value" id="row-value-'+rid+'">—</td>'+
'<td><button class="btn-remove" data-action="remove" data-id="'+rid+'" title="'+t.remove+'" aria-label="'+t.remove+'">×</button></td></tr>';
}
function renderRows(){document.getElementById('workflow-rows').innerHTML=state.workflows.map(workflowRow).join('')}
function estimate(){
const crmHours=state.calls*state.minutesCall*12/60;
const crm=crmHours*state.hourly;
let annualRuns=0,agentHours=0;
for(const wf of state.workflows){annualRuns+=val(wf.runs);agentHours+=val(wf.runs)*val(wf.minutes)/60}
const agents=agentHours*state.hourly;
const agentCost=annualRuns*.90;
const investment=agentCost+state.platform;
const timeValue=crm+agents;
const multiple=investment>0?timeValue/investment:null;
const coach=state.closers*state.winsRep*12*state.perWin*state.winUplift/100;
return {crmHours,crm,annualRuns,agentHours,agents,agentCost,investment,timeValue,multiple,coach};
}
function setText(id,value){const el=document.getElementById(id);if(el)el.textContent=value}
function renderResults(){
const e=estimate(),xVal=x=>money(x);
setText('metricCRM',xVal(e.crm));setText('metricAgent',xVal(e.agents));setText('metricCoach',xVal(e.coach));setText('metricMultiple',e.multiple===null?'—':e.multiple.toFixed(2)+'×');
setText('crm-hours',integer(e.crmHours)+' '+t.crmHours);
setText('crm-value',xVal(e.crm));setText('runs-total',integer(e.annualRuns));setText('agent-hours-total',integer(e.agentHours)+' h');setText('agent-value-total',xVal(e.agents));setText('agent-spend',xVal(e.agentCost));setText('coach-value',xVal(e.coach));setText('investment-total',xVal(e.investment));
setText('summary-value',xVal(e.timeValue));setText('sum-crm',xVal(e.crm));setText('sum-agents',xVal(e.agents));setText('sum-invest',xVal(e.investment));setText('sum-platform',xVal(state.platform));setText('sum-runcost',xVal(e.agentCost));setText('sum-multiple',e.multiple===null?'—':e.multiple.toFixed(2)+'×');setText('sum-coach',xVal(e.coach));setText('sum-net',xVal(e.timeValue-e.investment));
for(const w of state.workflows){setText('row-hours-'+w.id,integer(w.runs*w.minutes/60)+' h');setText('row-value-'+w.id,xVal(w.runs*w.minutes/60*state.hourly))}
const max=Math.max(1,e.crm,e.agents,e.investment);
for(const [key,value] of [['crm',e.crm],['agent',e.agents],['invest',e.investment]]){setText('bar-'+key+'-label',xVal(value));const bar=document.getElementById('bar-'+key);if(bar)bar.style.width=Math.max(0,Math.min(100,value/max*100))+'%'}
window.kickscaleRoi=()=>estimate();
}
function currentSummary(){
const e=estimate(),rows=[t.sectionCRM+': '+exact(e.crm),t.sectionAgent+': '+exact(e.agents),t.workflowTime+': '+integer(e.agentHours),t.workflowRuns+': '+integer(e.annualRuns),t.runCost+': '+exact(e.agentCost),t.platform+': '+exact(state.platform),t.annualCost+': '+exact(e.investment),t.timeValue+': '+exact(e.timeValue),t.timeMultiple+': '+(e.multiple===null?'—':e.multiple.toFixed(2)+'×'),t.coachingARR+': '+exact(e.coach)];
return 'KICKSCALE ROI CALCULATOR\n'+rows.join('\n')+'\n\n'+state.workflows.map(w=>w.name+': '+integer(w.runs)+' runs/year × '+w.minutes+' min/run').join('\n')+'\n\n'+t.disclaimer;
}
function getFormField(key){const el=document.getElementById('input-'+key);return el?val(el.value):0}
function updateField(el){
const field=el.dataset.field;
if(field){state[field]=val(el.value);renderResults();return}
const wid=el.dataset.agentId,prop=el.dataset.prop;if(!wid||!prop)return;
const w=state.workflows.find(w=>String(w.id)===wid);if(!w)return;
w[prop]=prop==='name'?el.value:val(el.value);renderResults();
}
const app=document.getElementById('roiApp');
app.addEventListener('input',event=>{const el=event.target.closest('[data-field],[data-agent-id]');if(el)updateField(el)});
app.addEventListener('click',async event=>{const btn=event.target.closest('[data-action]');if(!btn)return;const action=btn.dataset.action;
if(action==='preset'||action==='blank'){state=action==='preset'?initial():zero();renderShell();return}
if(action==='add'){seq++;const w={id:seq,name:t.workflowNew,runs:0,minutes:5};state.workflows.push(w);renderRows();renderResults();const nameInput=app.querySelector('input[data-agent-id="'+seq+'"][data-prop="name"]');if(nameInput){nameInput.focus();nameInput.select()}return}
if(action==='remove'){state.workflows=state.workflows.filter(w=>String(w.id)!==btn.dataset.id);renderRows();renderResults();return}
if(action==='print'){window.print();return}
if(action==='copy'){try{await navigator.clipboard.writeText(currentSummary());btn.textContent=t.copied;setTimeout(()=>{if(btn.isConnected)btn.textContent=t.copy},1700)}catch{window.prompt(t.copy,currentSummary())}}
});
renderShell();
})();