/*! SublimeVideo loader | (c) 2013 Jilion SA | http://sublimevideo.net
*/(function(){ (function(){var e,n,t,r,o,u,a,i,c,l,d,s,f,m,v,E,h,p,y,g,N,S,b,O,L,T,w,B,C,j,R,V,k,q,I,M,x,A,K,P;return p=document,t="DOMContentLoaded",j="onreadystatechange",P=window,n=0,r=1,e=2,k=[],u=n,g=!1,w="sublime",V="sublime_",C=[],T=!1,document.createElement("video"),document.createElement("source"),c={host:"//cdn.sublimevideo.net",version:"2.6.5",token:"33r2xa49",components:{}},c.components.sa="2.6.5",c.components["33r2xa49"]="2.6.5",f=function(e,n,t){return e===t.token?""+t.host+"/s2/"+e+"."+"js":""+t.host+"/c/"+e+"/"+n+"/"+e+"."+"js"+"?t="+t.token},m=function(e){var n,t,r,o;r=[],t=e.components;for(n in t)o=t[n],r.push(f(n,o,e));return r},q=function(){return l()||d("sublime")},i=function(){var e,n,t,r;for(T=!0,r=[],n=0,t=C.length;t>n;n++)e=C[n],r.push(e());return r},v=function(){var e;return e={},window.sublimevideo=e,e.ready=function(e){return T?e():C.push(e)},e.load=function(){return c.loadForced=!0,O()}},l=function(){return p.getElementsByTagName("video").length>0},d=function(e){var n,t,r,o,u;if(e){if(p.querySelector)return null!=p.querySelector("."+e);if(p.getElementsByClassName)return o=p.getElementsByClassName(e),o&&o.length>0;for(n=RegExp("\\b"+e+"\\b"),r=p.getElementsByTagName("*"),u=0;r.length>u;){if(t=r[u].className,n.test(t))return!0;u++}return!1}return!1},b=function(e){return"function"==typeof e},B=function(e){var n;for(n=0;e.length>n;)e[n](),n++;return e.length=0},L=function(e){var n,t,r,o;for(o=[],t=0,r=e.length;r>t;t++)n=e[t],o.push(a(n));return o},a=function(e){var n,t;return n=p.getElementsByTagName("head")[0]||p.body,t=p.createElement("script"),t.type="text/javascript",t.src=e,t.async=!0,n.appendChild(t)},I=function(e){var n,t;t=0;for(n in e)e.hasOwnProperty(n)&&(t+=1);return t},K={},E=function(n){var t,r,o;if(K[n]=1,I(K)===I(c.components)+1){for(r=0,o=x.length;o>r;r++)t=x[r],P[V].define.apply(this,t);return sublime_.require(["application"],function(n){var t;return t=new n,t.load(c,function(){return u=e,B(k),i()})})}},M=function(){var e;return e?(e=!1,p.addEventListener?(p.removeEventListener(t,y,!1),P.removeEventListener("load",y,!1)):(p.detachEvent(j,y),P.detachEvent("onload",y))):void 0},y=function(e){return!g&&(e||(e=P.event),(p.addEventListener||"complete"===p.readyState||e&&"load"===e.type)&&(M(),g=!0,q()||S))?O():void 0},s=function(){var e,n;if(n=!0,p.addEventListener)return p.addEventListener(t,y,!1),P.addEventListener("load",y,!1);if(p.attachEvent){p.attachEvent(j,y),P.attachEvent("onload",y),e=!1;try{e=!(null!=P.frameElement)}catch(r){}if(p.docElement&&p.docElement.doScroll&&e)return h()}},h=function(){if(!g){try{p.docElement.doScroll("left")}catch(e){return setTimeout(h,1),void 0}return y()}},P.console||(N=function(){},P.console={log:N,warn:N,error:N,debug:N}),S=!1,x=[],O=function(){return u===n?(u=r,L(m(c))):void 0},o=P[w],o&&o.ready&&o.load?console.error("SublimeVideo loader has been installed more than once."):(o=P[w]={},o.ready=function(n){return u===e?n():b(n)&&k.push(n),void 0},o.load=function(){return g?O():S=!0,void 0},R=P[V]={},R.define=function(){return x.push(Array.prototype.slice.apply(arguments))},R.component=E,v(),"complete"===document.readyState?y():(s(),A=P.jQuery,A&&b(A.ready)?A(p).ready(y):void 0))})();;sublime_.component('loader');})();