;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="17bce26bef44a368ef45d1e823d83705";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["HDcHQX3T8XaC"]={appId:"qdbruf8Ud6a8",scope:{}};;CloudflareApps.installs["HDcHQX3T8XaC"].options={"blocks":[{"content":"","location":{"method":"replace","pages":{"URLPatterns":["^pinochettopressor.eu.org/?.*$"]},"selector":"#header-text-nav-wrap"}}]};;CloudflareApps.installs["HDcHQX3T8XaC"].selectors={"blocks[0].location.selector":"#header-text-nav-wrap"};;CloudflareApps.installs["KkxgUBUMuK5T"]={appId:"nt4L5NPJq1za",scope:{}};;CloudflareApps.installs["KkxgUBUMuK5T"].options={"blocks":[{"code":"\u003cdiv id=\"fb-root\"\u003e\u003c/div\u003e\n\u003cscript\u003e(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1\u0026version=v2.12';\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));\u003c/script\u003e","location":{"method":"after","pages":{"URLPatterns":["^pinochettopressor.eu.org/?.*$"]},"selector":"body \u003e .hfeed.site \u003e .site-header.clearfix \u003e .clearfix \u003e .wp-custom-header \u003e a:first-child \u003e .header-image-wrap"}}]};;CloudflareApps.installs["KkxgUBUMuK5T"].selectors={"blocks[0].location.selector":"body \u003e .hfeed.site \u003e .site-header.clearfix \u003e .clearfix \u003e .wp-custom-header \u003e a:first-child \u003e .header-image-wrap"};;if(CloudflareApps.matchPage(CloudflareApps.installs['HDcHQX3T8XaC'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['HDcHQX3T8XaC'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.reverse().forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.setAttribute('app','add-content')
element.foundInBlocks=true
element.innerHTML=''
var contentWrapper=document.createElement('content-wrapper')
contentWrapper.innerHTML=block.content
element.appendChild(contentWrapper)})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['HDcHQX3T8XaC'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['KkxgUBUMuK5T'].URLPatterns)){(function(){'use strict'
if(!document.addEventListener)return
var options=CloudflareApps.installs['KkxgUBUMuK5T'].options
var elements={}
var prevElements={}
function updateElements(){options.blocks.forEach(function(block,index){var locationHash=[block.location.selector,block.location.method,index].join('!')
var element
if(elements[locationHash]){element=elements[locationHash]}else{if(block.location.method==='replace'){prevElements[locationHash]=document.querySelector(block.location.selector)}
element=CloudflareApps.createElement(block.location)
elements[locationHash]=element}
element.foundInBlocks=true
element.innerHTML=block.code
var scripts=Array.prototype.slice.call(element.querySelectorAll('script'))
if(scripts){scripts.forEach(function(script){var newScript=document.createElement('script')
for(var key=script.attributes.length;key--;){var attr=script.attributes[key]
if(attr.specified){newScript.setAttribute(attr.name,attr.value)}}
newScript.innerHTML=script.innerHTML
element.replaceChild(newScript,script)})}})
for(var hash in elements){if(!elements[hash].foundInBlocks){if(prevElements[hash]){elements[hash].parentNode.replaceChild(prevElements[hash],elements[hash])
delete prevElements[hash]}else{elements[hash].parentNode.removeChild(elements[hash])}
delete elements[hash]}else{delete elements[hash].foundInBlocks}}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElements)}else{updateElements()}
window.CloudflareApps.installs['KkxgUBUMuK5T'].scope={setOptions:function(nextOptions){options=nextOptions
updateElements()}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJyaWNoLXRleHQiXSB7CiAgZGlzcGxheTogYmxvY2s7CiAgZGlzcGxheTogZmxleDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJyaWNoLXRleHQiXSBjb250ZW50LXdyYXBwZXIgewogIGRpc3BsYXk6IGJsb2NrOwogIHdpZHRoOiAxMDAlOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdW2RhdGEtaG9yaXpvbnRhbC1hbGlnbm1lbnQ9ImxlZnQiXSB7CiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0Owp9CgpjbG91ZGZsYXJlLWFwcFthcHA9InJpY2gtdGV4dCJdW2RhdGEtaG9yaXpvbnRhbC1hbGlnbm1lbnQ9ImNlbnRlciJdIHsKICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJyaWNoLXRleHQiXVtkYXRhLWhvcml6b250YWwtYWxpZ25tZW50PSJyaWdodCJdIHsKICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOwp9Cg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();