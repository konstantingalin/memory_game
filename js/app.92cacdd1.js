!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);console.log("webpack starterkit"),$((function(){const e=document.querySelectorAll(".memory-card");let t,r,n=!1,o=!1;function i(){if(!o&&this!==t){if(this.classList.toggle("flip"),!n)return n=!0,void(t=this);r=this,t.dataset.framework===r.dataset.framework?(t.removeEventListener("click",i),r.removeEventListener("click",i),l()):(o=!0,setTimeout(()=>{t.classList.remove("flip"),r.classList.remove("flip"),l()},1500))}}function l(){[n,o]=[!1,!1],[t,r]=[null,null]}e.forEach(e=>{let t=Math.floor(12*Math.random());e.style.order=t}),e.forEach(e=>e.addEventListener("click",i))}))},function(e,t,r){}]);
//# sourceMappingURL=app.92cacdd1.js.map