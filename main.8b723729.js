parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var t=function(t){return document.querySelector(t)};function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"加一":return t+1;case"减一":return t-1;default:return t}}var n=Redux.createStore(e),c=t("#value");function i(){c.innerHTML=n.getState().toString()}i(),n.subscribe(i),t("#addButton").addEventListener("click",function(){n.dispatch({type:"加一"})}),t("#backButton").addEventListener("click",function(){n.dispatch({type:"减一"})}),t("#oddButton").addEventListener("click",function(){n.getState()%2!=0&&n.dispatch({type:"加一"})}),t("#asyncButton").addEventListener("click",function(){setTimeout(function(){n.dispatch({type:"加一"})},2e3)});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.8b723729.js.map