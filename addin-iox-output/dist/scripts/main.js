"use strict";geotab.addin.ioxOutput=function(){var e=void 0,t=void 0,n=void 0,i=void 0,o=void 0,d=void 0,a=function(e){o.innerHTML=e},u=function s(t){setTimeout(function(){e.call("Get",{typeName:"TextMessage",search:{id:t.split("-")[0]}},function(e){if(e[0].delivered){var n=document.getElementById(t);n.innerHTML+=", Delivered: "+new Date(e[0].delivered)}else s(t)},a)},1e3)},c=function(e){var t=e+"-"+Date.now(),n=document.createElement("h4"),o=document.createTextNode("Sent: "+new Date);n.setAttribute("id",t),n.appendChild(o),i.appendChild(n),u(t)},r=function(){var n=t.value,i=d.options[d.selectedIndex].text;e.call("Add",{typeName:"TextMessage",entity:{device:{id:n},messageContent:{isRelayOn:"On"===i,contentType:"IoxOutput"},isDirectionToVehicle:!0}},c,a)},l=function(e,t){return e=e.name.toLowerCase(),t=t.name.toLowerCase(),e===t?0:e>t?1:-1};return{initialize:function(a,u,c){e=a,t=document.getElementById("ioxoutput-vehicles"),n=document.getElementById("ioxoutput-send"),i=document.getElementById("ioxoutput-history"),o=document.getElementById("ioxoutput-error"),d=document.getElementById("ioxoutput-state"),t.addEventListener("change",function(){n.disabled=!1}),n.addEventListener("click",r),c()},focus:function(i){e=i,e.call("Get",{typeName:"Device",resultsLimit:1e3,search:{fromDate:(new Date).toISOString()}},function(e){if(e&&!(e.length<1)){e.sort(l),t.innerHTML="";for(var i=0;i<e.length;i++){var o=new Option;o.text=e[i].name,o.value=e[i].id,t.add(o)}n.disabled=!1}},a)},blur:function(){n.disabled=!0}}};