(()=>{
'use strict';
const lang=document.documentElement.lang==='de'?'de':'en';
const isDe=lang==='de';
const product=isDe?'/de/produkt/':'/en/product/';
const presentations='/'+lang+'/presentations/';
const roi='/'+lang+'/roi-calculator/';
const legal=isDe?'https://www.kickscale.com/legal':'https://www.kickscale.com/en/legal';
const home='/'+lang+'/';
function opposite(){
 const path=location.pathname;
 if(/\/(?:en|de)\/(?:product|produkt)\/?/.test(path))return isDe?'/en/product/':'/de/produkt/';
 if(/\/(?:en|de)\/presentations/.test(path))return '/'+(isDe?'en':'de')+'/presentations/';
 if(/\/(?:en|de)\/roi-calculator/.test(path))return '/'+(isDe?'en':'de')+'/roi-calculator/';
 if(/\/(?:en|de)\/roadmap/.test(path))return '/'+(isDe?'en':'de')+'/roadmap/';
 if(/\/(?:en|de)\/support/.test(path))return '/'+(isDe?'en':'de')+'/support/';
 if(/\/(?:en|de)\/onboarding/.test(path))return '/'+(isDe?'en':'de')+'/onboarding/';
 if(/\/(?:en\/customers|de\/erfolgsgeschichten)\/?$/.test(path))return isDe?'/en/customers/':'/de/erfolgsgeschichten/';
 if(/\/(?:en\/trust-center|de\/datenschutz)/.test(path))return isDe?'/en/trust-center/':'/de/datenschutz/';
 const story=path.match(/^\/(?:de\/erfolgsgeschichten|en\/stories)\/([^/]+)/);
 if(story)return isDe?'/en/stories/'+story[1]+'/':'/de/erfolgsgeschichten/'+story[1]+'/';
 return '/'+(isDe?'en':'de')+'/';
}
function markup(includeLocale){
 const site=isDe?'https://www.kickscale.com/':'https://www.kickscale.com/en/';
 const official={
 overview:site+'product',capture:site+'product/capture',assistant:site+'product/assistant',
 coach:site+'product/coach',intelligence:site+'product/intelligence',agents:site+'product/agents',
 integrations:site+'integrations',updates:site+'updates',support:site+'contact',trust:isDe?'https://www.kickscale.com/legal':'https://www.kickscale.com/en/legal',policies:isDe?'https://www.kickscale.com/legal':'https://www.kickscale.com/en/legal'
 };
 const entries=isDe?[
 ['▣','Capture','Jedes Kundengespräch wird zu verwertbarem Wissen.',official.capture],
 ['✦','Assistant','Follow-ups und CRM-Updates automatisieren.',official.assistant],
 ['◉','Coach','Echte Gespräche für Coaching nutzen.',official.coach],
 ['▥','Intelligence','Deals, Risiken und Forecasts verstehen.',official.intelligence],
 ['⚡','Agents & Automations','Vom Gespräch zur nächsten Aktion.',official.agents]
 ]:[
 ['▣','Capture','Make customer conversations usable.',official.capture],
 ['✦','Assistant','Automate follow-ups and CRM updates.',official.assistant],
 ['◉','Coach','Coach with real customer conversations.',official.coach],
 ['▥','Intelligence','Understand deals, risk and forecasts.',official.intelligence],
 ['⚡','Agents & Automations','Move from conversations to action.',official.agents]
 ];
 const quick=isDe?[
 ['Integrationen','CRM, E-Mail & Kalender',official.integrations],
 ['Release Notes','Neue Funktionen & Updates',official.updates],
 ['Support','Hilfe & Anleitungen','https://intercom.help/kickscale-gmbh/de/'],
 ['Trust & Privacy','Sicherheit & Datenschutz',official.trust],
 ['Data Policies','Verträge & Richtlinien',official.policies]
 ]:[
 ['Integrations','CRM, email & calendar',official.integrations],
 ['Release Notes','New features & updates',official.updates],
 ['Support','Help & documentation','https://intercom.help/kickscale-gmbh/en/'],
 ['Trust & Privacy','Security & compliance',official.trust],
 ['Data Policies','Contracts & policies',official.policies]
 ];
 const drop=entries.map(([icon,label,subtitle,url])=>'<a class="buyer-mega-module" href="'+url+'" target="_blank" rel="noopener noreferrer"><span class="buyer-mega-icon">'+icon+'</span><span><strong>'+label+'</strong><small>'+subtitle+'</small></span></a>').join('');
 const shortcut=quick.map(([label,subtitle,url])=>'<a href="'+url+'" target="_blank" rel="noopener noreferrer"><strong>'+label+'</strong><small>'+subtitle+'</small></a>').join('');
 const menu='<div class="buyer-menu-panel buyer-mega-panel"><div class="buyer-mega-main"><div class="buyer-mega-list"><div class="buyer-mega-eyebrow">ONE REVENUE PLATFORM</div>'+drop+'</div>'+
 '<div class="buyer-mega-graphic"><div class="buyer-mega-eyebrow">KICKSCALE REVENUE PLATFORM</div><h3>'+(isDe?'Vom Kundengespräch zu <em>mehr Umsatz.</em>':'From conversations to <em>more revenue.</em>')+'</h3>'+
 '<div class="buyer-mega-flow"><div class="buyer-mega-symbol">K</div><div class="buyer-mega-outcomes"><span>✓ '+(isDe?'Follow-up versendet':'Follow-up sent')+'</span><span>✓ '+(isDe?'CRM aktualisiert':'CRM updated')+'</span><span>✓ '+(isDe?'Deal besser bewertbar':'Deal intelligence ready')+'</span></div></div>'+
 '<div class="buyer-mega-integrations"><span>Microsoft 365</span><span>Google Workspace</span><span>Salesforce</span><span>HubSpot</span><span>Dynamics 365</span></div>'+
 '<a class="buyer-mega-discover" href="'+official.overview+'" target="_blank" rel="noopener noreferrer">'+(isDe?'Plattform entdecken':'Explore platform')+' →</a></div></div><div class="buyer-mega-shortcuts">'+shortcut+'</div></div>';
 return '<details class="buyer-menu-group buyer-mega-group" data-buyer-menu><summary>'+(isDe?'Produktinformationen':'Product Information')+'</summary>'+menu+'</details>'+
 '<a href="'+presentations+'">'+(isDe?'Präsentationen & Demos':'Presentations & Demos')+'</a>'+
 '<a href="/'+lang+'/roadmap/">'+(isDe?'Roadmap':'Roadmap')+'</a>'+
 '<a href="'+roi+'">'+(isDe?'ROI-Rechner':'ROI Calculator')+'</a>'+
 '<a href="'+legal+'" target="_blank" rel="noopener noreferrer">'+(isDe?'Rechtliches & Datenschutz':'Legal & Compliance')+' ↗</a>'+
 (includeLocale?'<span class="buyer-locale"><a href="'+(isDe?opposite():location.pathname)+'"'+(!isDe?' aria-current="true"':'')+'>EN</a><a href="'+(isDe?location.pathname:opposite())+'"'+(isDe?' aria-current="true"':'')+'>DE</a></span>':'');
}
function renderBuyerNav(){
const nav=document.querySelector('header .topbar nav.nav') || document.querySelector('header nav#nav');
if(nav){
 const includeLocale=nav.classList.contains('nav') && !document.querySelector('header .locale');
 nav.classList.add('buyer-global-nav');
 nav.innerHTML=markup(includeLocale);
}
const menus=[...document.querySelectorAll('[data-buyer-menu]')];
for(const menu of menus){
 menu.addEventListener('pointerenter',()=>{if(matchMedia('(hover:hover) and (pointer:fine)').matches){menus.forEach(o=>{if(o!==menu)o.open=false});menu.open=true;}});
 menu.addEventListener('pointerleave',e=>{if(matchMedia('(hover:hover) and (pointer:fine)').matches && !menu.contains(e.relatedTarget))menu.open=false;});
 menu.addEventListener('focusout',e=>{if(!menu.contains(e.relatedTarget))menu.open=false});
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')menus.forEach(m=>m.open=false)});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('[data-buyer-menu]'))menus.forEach(m=>m.open=false)});
const search=document.querySelector('[data-buyer-search]');
if(search){
 const cards=[...document.querySelectorAll('[data-buyer-resource]')];
 const empty=document.querySelector('[data-buyer-empty]');
 const filter=()=>{
  const q=search.value.trim().toLocaleLowerCase();
  let shown=0;
  for(const card of cards){const hay=(card.dataset.keywords+' '+card.textContent).toLocaleLowerCase();const visible=hay.includes(q);card.hidden=!visible;if(visible)shown++}
  if(empty)empty.classList.toggle('visible',shown===0);
 };
 search.addEventListener('input',filter);
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search.focus();}});
 filter();
}
}
window.kickscaleRenderBuyerNav=renderBuyerNav;
renderBuyerNav();
})();