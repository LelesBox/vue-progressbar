/*eslint-disable*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueAccordion=e():t.VueAccordion=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}([function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t){var e=0;if(!t.http)throw Error("this plugin need use vue-resource before");t.http.interceptors.push(function(t,o){u["default"].emit("start"),e++,o(function(t){e--,0===e&&u["default"].emit("end")})})}Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),u=n(i),d=o(5),s=n(d),l=function(){};l.install=function(t,e){t.component("progress-bar",s["default"]),r(t)},e["default"]=l,"undefined"!=typeof window&&window.Vue&&window.Vue.use(l)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};e["default"]={on:function(t,e){o[t]||(o[t]=[]),o[t].push(e)},emit:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];o[t]&&0!==o[t].length&&o[t].forEach(function(t){t.apply(null,n)})}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),i=n(r);e["default"]={props:{background:{type:String,"default":"skyblue"}},data:function(){return{width:0,opacity:1,interval:null,tmot:null,normalSpeed:1,lowSpeed:.1}},ready:function(){var t=this;i["default"].on("start",function(){t.$el.style.display="block",t.opacity=1,t.width=0,t.progress()}),i["default"].on("end",function(){t.width=100,t.tmot=setTimeout(function(){t.opacity=0,t.width=0,t.$el.style.display="none"},500)})},methods:{progress:function(){var t=this;clearInterval(this.interval),clearTimeout(this.tmot),this.interval=setInterval(function(){t.width>=70&&t.width<96?t.width+=t.lowSpeed:t.width>=96?clearInterval(t.interval):t.width+=t.normalSpeed},100)}}}},function(t,e){},function(t,e){t.exports=" <div class=progress-bar :style=\"{'width':width + '%','background-color':background,'opacity':opacity}\" _v-8640edde=\"\"> </div> "},function(t,e,o){var n,r;o(3),n=o(2),r=o(4),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});
//# sourceMappingURL=vue-progressbar.js.map