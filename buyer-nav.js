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
 if(/\/(?:en|de)\/support/.test(path))return '/'+(isDe?'en':'de')+'/support/';
 if(/\/(?:en|de)\/onboarding/.test(path))return '/'+(isDe?'en':'de')+'/onboarding/';
 if(/\/(?:en\/customers|de\/erfolgsgeschichten)\/?$/.test(path))return isDe?'/en/customers/':'/de/erfolgsgeschichten/';
 if(/\/(?:en\/trust-center|de\/datenschutz)/.test(path))return isDe?'/en/trust-center/':'/de/datenschutz/';
 const story=path.match(/^\/(?:de\/erfolgsgeschichten|en\/stories)\/([^/]+)/);
 if(story)return isDe?'/en/stories/'+story[1]+'/':'/de/erfolgsgeschichten/'+story[1]+'/';
 return '/'+(isDe?'en':'de')+'/';
}
function markup(includeLocale){
 const entries=isDe?[
 ['Überblick',product],['Gesprächserfassung',product+'#capture'],['KI-Assistent',product+'#assistant'],['KI-Coaching',product+'#coach'],['Revenue Intelligence',product+'#intelligence'],['KI-Agenten & Automationen',product+'#agents'],['Integrationen & CRM',product+'#integrations'],['Produktdemos',presentations+'#demos'],['Help Center','https://intercom.help/kickscale-gmbh/de/']
 ]:[
 ['Overview',product],['Conversation Capture',product+'#capture'],['AI Assistant',product+'#assistant'],['AI Coaching',product+'#coach'],['Revenue Intelligence',product+'#intelligence'],['AI Agents & Automations',product+'#agents'],['Integrations & CRM',product+'#integrations'],['Product demos',presentations+'#demos'],['Help Center','https://intercom.help/kickscale-gmbh/en/']
 ];
 const drop=entries.map(([label,url])=>'<a href="'+url+'"'+(url.startsWith('http')?' target="_blank" rel="noopener noreferrer"':'')+'>'+label+'</a>').join('');
 return '<details class="buyer-menu-group" data-buyer-menu><summary>'+(isDe?'Produktinformationen':'Product Information')+'</summary><div class="buyer-menu-panel">'+drop+'</div></details>'+
 '<a href="'+presentations+'">'+(isDe?'Präsentationen':'Presentations')+'</a>'+
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