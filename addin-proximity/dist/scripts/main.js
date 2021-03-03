"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function _asyncToGenerator(c){return function(){var e=this,o=arguments;return new Promise(function(t,n){var r=c.apply(e,o);function a(e){asyncGeneratorStep(r,t,n,a,i,"next",e)}function i(e){asyncGeneratorStep(r,t,n,a,i,"throw",e)}a(void 0)})}}geotab.addin.proximity=function(){var x,l,T,d,I,m,k,f,p,y,h,g,v,D,b,w,E,M,S,B,t,R=250,A={},C=[],G=!0,_=!1,O=["DeviceID, Date, Time, Latitude, Longitude\n"],P=function(e){b.innerHTML=e},N=function(e){clearTimeout(t),e?(E.disabled=!0,w.style.display="block",M.textContent="Cancel",k.disabled=!0,f.disabled=!0,p.disabled=!0,y.disabled=!0,h.disabled=!0,v.disabled=!0,D.disabled=!0,S.hidden=!0):t=setTimeout(function(){w.style.display="none",M.textContent="Run",k.disabled=!1,f.disabled=!1,p.disabled=!1,y.disabled=!1,h.disabled=!1,v.disabled=!1,D.disabled=!1,S.hidden=!1},600)},F=function(e){return e*(G?1:1.09361)},j=function(e){var t,n=new L.LatLng(e.latitude,e.longitude),r=e.distance,a=(t=n,new L.Marker(t,{icon:new L.DivIcon({className:"map-icon",iconSize:[16,16]})})),i=new Date(e.dateTime);a.bindTooltip("".concat(A[e.device.id].name," was ").concat(Math.floor(F(r))," ").concat(G?" m":" yd"," away on ").concat(i.toDateString()," at ").concat(i.toTimeString())),d.addLayer(a)},z=function(){d.clearLayers(),I.clearLayers()},H=function(e){var t=e.split("T");return[t[0],t[1].split(".")[0]]},Z=function(){_=!1,O=["DeviceID, Date, Time, Latitude, Longitude\n"],z();var e=new Date(v.value+":00Z"),b=new Date(e.setMinutes(e.getMinutes()+(new Date).getTimezoneOffset())).toISOString(),t=new Date(D.value+":00Z"),w=new Date(t.setMinutes(t.getMinutes()+(new Date).getTimezoneOffset())).toISOString();N(!0);var n,r,a=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,u,r,a,i,o,c,s,l,d,m,f,p,y,h,g,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||t.length<1||!t[0])return N(!1),P("Could not find the address"),e.abrupt("return");e.next=4;break;case 4:return n=function(e){return e.forEach(function(e){j(e);var t=_slicedToArray(H(e.dateTime),2),n=t[0],r=t[1];O.push("".concat(A[e.device.id].name,", ").concat(n,", ").concat(r,", ").concat(e.latitude,", ").concat(e.longitude,"\n"))}),e.length},u=function(e,t,n){return["Get",{typeName:"LogRecord",search:{deviceSearch:{id:e},fromDate:t,toDate:n},resultsLimit:5e4}]},a=(r=function(e,t,n,r,a){return new L.Circle([t,e],n,{stroke:!1,fillColor:r,fillOpacity:a})})(t[0].x,t[0].y,1*R,"#ff4444",.3),i=r(t[0].x,t[0].y,2*R,"#ff8800",.3),o=r(t[0].x,t[0].y,3*R,"#ff8800",.3),c=r(t[0].x,t[0].y,4*R,"#99cc00",.3),s=r(t[0].x,t[0].y,5*R,"#33b5e5",.3),l={latitude:t[0].y,longitude:t[0].x},window.geotabHeatMap=window.geotabHeatMap||{},window.geotabHeatMap.center=l,T.setView(new L.LatLng(l.latitude,l.longitude),14),I.addLayer(a),I.addLayer(i),I.addLayer(o),I.addLayer(c),I.addLayer(s),d=C.map(function(e){return A[e]}),m=[],f=function(t){return new Promise(function(e){5e4===t.length&&m.push(U(device.name));var params={array:t,center:l,radiusFactor:R,aggregate:!0,maxThreads:navigator.hardwareConcurrency||1};hamsters.promise(params,function(){var i=params.center,o=5*params.radiusFactor,c=function(e){return e*(Math.PI/180)};params.array.forEach(function(e){if(e.id){var t=c(i.latitude-e.latitude),n=c(i.longitude-e.longitude),r=Math.sin(t/2)*Math.sin(t/2)+Math.cos(c(e.latitude))*Math.cos(c(i.latitude))*Math.sin(n/2)*Math.sin(n/2),a=2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r));e.distance=6371e3*a,e.distance<o&&rtn.data.push(e)}})}).then(function(rtn){return rtn.data[0]}).then(n).then(e)})},p=function(e){return new Promise(function(a,t){_?a():x.multiCall(e,function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=n=0;case 2:if(r<t.length)return e.t0=n,e.next=6,f(t[r]);e.next=10;break;case 6:n=e.t0+=e.sent;case 7:r++,e.next=2;break;case 10:a(n);case 11:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),function(e){N(!1),P(e),t(e)})})},y=function(c){return new Promise(function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=[],i=a=0;i<c.length;i++)r.push(u(c[i].id,b,w)),400==r.length&&(n.push(r),r=[]);n.push(r),o=0;case 6:if(o<n.length)return e.t0=a,e.next=10,p(n[o]);e.next=14;break;case 10:a=e.t0+=e.sent;case 11:o++,e.next=6;break;case 14:t(a);case 15:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())},h=0,e.next=25,y(d);case 25:g=e.sent,h=g,isNaN(g)&&(z(),h=-1),v=0===m.length?"":"<p>* ".concat(m.join(",")," was limited to ").concat(5e4," GPS positions, try narrowing date range to see all positions.</p>"),P(0<h?"<p>There were ".concat(h," locations recorded nearby to ").concat(k.value,". <br><br> Press Deselect All button to start new search.</p>").concat(v):0==h?"<p>There was no one near this area during this time frame. <br><br> Press Deselect All button to start new search.</p>".concat(v):"<p>The operation was cancelled. <br><br> Press Deselect All button to start new search.</p>".concat(v)),E.disabled=!1,N(!1);case 32:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),i=(n=k.value,2===(r=n.split(",")).length&&parseFloat(r[0])&&parseFloat(r[1])?[{x:parseFloat(r[1]),y:parseFloat(r[0])}]:[]);i.length?a(i):x.call("GetCoordinates",{addresses:[k.value]},function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a(t);case 1:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),function(e){P(e),N(!1)})},a=function(a,e){var t=function(e){var t,n,r=F(5*e);R=e,n=a&&1e3<=r?(t=Number(Math.round(r/1e3+"e1")+"e-1"),"km"):!a&&1760<=r?(t=Number(Math.round(r/1760+"e1")+"e-1"),"mi"):(t=Math.round(r),a?" m":" yd"),document.getElementById("proximity-size-label").innerHTML="("+t+" "+n+")"};G=a,T=new L.Map("proximity-map",{center:new L.LatLng(e.latitude,e.longitude),zoom:9}),L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvdGFiIiwiYSI6ImNpd2NlaW02MjAxc28yeW9idTR3dmRxdTMifQ.ZH0koA2g2YMMBOcx6EYbwQ").addTo(T),d=L.markerClusterGroup({spiderfyOnMaxZoom:!1,disableClusteringAtZoom:18}).addTo(T),I=L.layerGroup().addTo(T),k=document.getElementById("proximity-address"),f=document.getElementById("proximity-size"),p=document.getElementById("proximity-select-all"),y=document.getElementById("proximity-deselect-all"),h=document.getElementById("proximity-vehicles"),v=document.getElementById("proximity-from"),D=document.getElementById("proximity-to"),b=document.getElementById("proximity-error"),w=document.getElementById("proximity-loading"),g=document.getElementById("proximity-div-vehicles"),E=document.getElementById("proximity-run-report"),M=document.getElementById("proximity-run-cancel"),S=document.getElementById("proximity-userInput"),B=document.getElementById("proximity-vehicleTotalMessage");var n,r,i,o=new Date,c=o.getDate(),u=o.getMonth()+1,s=o.getFullYear();c<10&&(c="0"+c),u<10&&(u="0"+u),v.value=s+"-"+u+"-"+c+"T00:00",D.value=s+"-"+u+"-"+c+"T23:59",t(300),m=new Choices(h,{removeItemButton:!0,duplicateItemsAllowed:!1,searchResultLimit:1e3,noChoicesText:"Start typing to search for vehicles"}),g.addEventListener("keyup",(n=function(e){m.clearChoices();var t="%"+e.target.value+"%",r=[];console.log("manualSearch: ",t),"%%"!==t&&x.call("Get",{typeName:"Device",search:{fromDate:(new Date).toISOString(),groups:l.getGroupFilter(),name:t}},function(e){if(e&&!(e.length<1)){for(var t=0;t<e.length;t++)C.includes(e[t].id)||r.push(e[t]);var n=r.map(function(e){return{value:(A[e.id]=e).id,label:U(e.name)}});m=m.setChoices(n,"value","label",!0),N(!1)}},function(e){P(e),N(!1)})},r=1e3,function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){n.apply(e,t)},r)}));p.addEventListener("click",_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!0),P(""),0===C.length)return e.next=5,new Promise(function(t){x.call("Get",{typeName:"Device",search:{fromDate:(new Date).toISOString(),groups:l.getGroupFilter()}},function(e){t(e)})});e.next=13;break;case 5:for(t=e.sent,n=[],g.hidden=!0,B.hidden=!1,B.value=t.length+" vehicles have been selected.",r=0;r<t.length;r++)n.push(t[r]),C.push(t[r].id),A[t[r].id]=t[r];e.next=26;break;case 13:a=[],e.t0=regeneratorRuntime.keys(A);case 15:if((e.t1=e.t0()).done){e.next=25;break}if(i=e.t1.value,C.includes(i))return e.abrupt("continue",15);e.next=21;break;case 21:C.push(i),a.push({value:i,label:A[i].name});case 23:e.next=15;break;case 25:m.setValue(a);case 26:m.clearInput(),m.clearChoices(),N(!1);case 29:case"end":return e.stop()}},e)}))),y.addEventListener("click",function(){m.clearStore(),m.enable(),g.hidden=!1,B.hidden=!0,z(),P(""),C=[],A={}}),m.passedElement.element.addEventListener("change",function(){C=m.getValue().map(function(e){return e.value})}),M.addEventListener("click",function(){"Run"==M.innerText?function(){var e="",t=1;P(""),""===k.value&&(e+="Please input an address <br>",t=0);0===C.length&&(e+="Select at least one vehicle to display <br>",t=0);var n=new Date(v.value+":00Z"),r=new Date(D.value+":00Z");r<n&&(e+="From date cannot be more than To date <br>",t=0);return P(e),t}()&&Z():(M.textContent="Canceling...",_=!0)}),E.addEventListener("click",function(){var e=_slicedToArray(H((new Date).toISOString()),2),t=e[0],n=e[1];!function(e,t){if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),r=URL.createObjectURL(e);n.href=r,n.download=t,document.body.appendChild(n),n.click(),setTimeout(function(){document.body.removeChild(n),window.URL.revokeObjectURL(r)},0)}}(O=O.size?O:new Blob(O),"ProximityReport-".concat(t,"-").concat(n.replace(/\:/g,"."),".csv"))}),f.addEventListener("change",function(e){t(e.target.value)}),v.addEventListener("change",function(e){e.preventDefault()}),D.addEventListener("change",function(e){e.preventDefault()})},U=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")};return{initialize:function(e,t,r){l=t,(x=e).getSession(function(e){"g560"===e.database?(document.getElementById("proximity-accessDenied").hidden=!0,document.getElementById("proximity-accessGranted").hidden=!1,hamsters.init&&hamsters.init({debug:"verbose"}),function(t){if(!t)throw new Error('"callback" is null or undefined');x.getSession(function(e){x.call("Get",{typeName:"User",search:{name:e.userName}},function(e){t(0<e.length&&!!e[0].isMetric)},function(){t(!1)})},!1)}(function(t){var n={longitude:-79.709441,latitude:43.434497};"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(e){a(t,e.coords),r()},function(e){a(t,n),r()},{timeout:5e3}):(a(t,n),r())})):(document.getElementById("proximity-accessDenied").hidden=!1,document.getElementById("proximity-accessGranted").hidden=!0)},!1)},focus:function(e,t){x=e,l=t,_=!0,N(!(A={}))},blur:function(){A&&(A={}),_=!0}}};