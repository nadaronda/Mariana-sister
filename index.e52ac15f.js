function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequirede8a;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequirede8a=o),o.register("bXuNP",(function(t,r){var i,o;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var n={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},o=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("bXuNP").register(JSON.parse('{"6qpDd":"index.e52ac15f.js","1uMkF":"escenario.418fe91d.jpg"}'));class n{contructor(e){this.origin=e}update(e){}draw(e,t){}keyboard_event(e){}}class s extends n{constructor(e,t){super(),this.position=e,this.color=t}update(){}keyboard_event(){}draw(e,t){const r=(1/e).toFixed(2);t.font="18px Arial",t.fillStyle=this.color,t.fillText(`FPS:${r}`,this.position.x,this.position.y)}}class a extends n{constructor({initialPos:e,color:t="purple",speed:r=10}){super(),this.origin={x:e.x,y:e.y},this.color=t,this.speed=r,this.saltando=!1,this.altura=420}update(e){let t=this.origin.x;if(this.speed=t<490&&t>10?10:5,this.saltando&&(this.origin.y-=1),this.origin.y==this.altura&&1==this.saltando){for(let e=this.altura;e<=490;e++)this.origin.y=e;this.origin.y=490,this.saltando=!1}}keyboard_event_up(e){if(" "===e)console.log("saltando")}keyboard_event(e){switch(e){case"ArrowRight":console.log("right"),this.origin.x=this.origin.x+this.speed;break;case"ArrowLeft":this.origin.x=this.origin.x-this.speed,console.log("left");break;case"ArrowUp":console.log("Up");break;case"ArrowDown":console.log("Down");break;case" ":console.log("salta"),this.origin.y=this.origin.y-this.speed,this.saltando=!0}}draw(e,t){let r=this.origin;t.fillStyle="purple",t.fillRect(r.x,r.y,10,10)}}class l extends n{constructor(e,t,r){super(),this.origin={x:e.x,y:e.y},this.color=t,this.speed=1,this.actor=r,this.saltando=!1,this.altura=450}update(){this.origin.x-=this.speed,this.origin.y=490;this.actor.origin;let e=this.origin;Math.sqrt(Math.pow(e.x-this.actor.origin.x,2)+Math.pow(e.y-this.actor.origin.y,2))<=5&&this.actor.origin.y>=490&&alert(" Game Over ")}keyboard_event(){}draw(e,t){let r=this.origin;t.fillStyle=this.color,t.fillRect(r.x,r.y,10,10)}}var d;o.register("kPq84",(function(t,r){var i;e(t.exports,"getBundleURL",(()=>i),(e=>i=e));var o={};function n(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return n(e[2])}return"/"}(),o[e]=t),t}})),d=o("kPq84").getBundleURL("6qpDd")+o("bXuNP").resolve("1uMkF");class c extends n{draw(e,t){const r=new Image;r.src=d,t.drawImage(r,0,0,500,500)}update(e){}keyboard_event(){}}window.onload=()=>{var e=document.getElementById("canvas").getContext("2d");let t=new s({x:5,y:15},"black"),r=new a({initialPos:{x:1,y:490},color:"purple",speed:10}),i=[new c,t,r,new l({x:500,y:490},"red",r),new l({x:500,y:490},"blue",r)],o=0;const n=t=>{let r=(t-o)/1e3;o=t,i.forEach((e=>e.update(r))),e.clearRect(0,0,500,500),i.forEach((t=>{t.draw(r,e)})),window.requestAnimationFrame(n)};window.requestAnimationFrame(n),document.body.addEventListener("keydown",(e=>{i.forEach((t=>{t.keyboard_event(e.key)}))})),document.body.addEventListener("keyup",(e=>{i.forEach((t=>{t.keyboard_event_up&&t.keyboard_event_up(e.key)}))}))};
//# sourceMappingURL=index.e52ac15f.js.map