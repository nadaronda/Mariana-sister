function i(i,e,t,o){Object.defineProperty(i,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(i){return i&&i.__esModule?i.default:i}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=t.parcelRequirede8a;null==s&&((s=function(i){if(i in o)return o[i].exports;if(i in r){var e=r[i];delete r[i];var t={id:i,exports:{}};return o[i]=t,e.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(i,e){r[i]=e},t.parcelRequirede8a=s),s.register("bXuNP",(function(e,t){var o,r;i(e.exports,"register",(()=>o),(i=>o=i)),i(e.exports,"resolve",(()=>r),(i=>r=i));var s={};o=function(i){for(var e=Object.keys(i),t=0;t<e.length;t++)s[e[t]]=i[e[t]]},r=function(i){var e=s[i];if(null==e)throw new Error("Could not resolve bundle with id "+i);return e}})),s("bXuNP").register(JSON.parse('{"6qpDd":"index.05e94e63.js","dbgb9":"andar.8f819447.png","llezD":"goomba.81074050.png","2dSkO":"tortuga.47b0632d.png","KA0Rm":"fondo_mario.8f24dba5.jpg"}'));class n{contructor(i){this.origin=i}update(i){}draw(i,e){}keyboard_event(i){}}class a extends n{constructor(i,e){super(),this.position=i,this.color=e}update(){}keyboard_event(){}draw(i,e){const t=(1/i).toFixed(2);e.font="18px Arial",e.fillStyle=this.color,e.fillText(`FPS:${t}`,this.position.x,this.position.y)}}var g;s.register("kPq84",(function(e,t){var o;i(e.exports,"getBundleURL",(()=>o),(i=>o=i));var r={};function s(i){return(""+i).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(i){var e=r[i];return e||(e=function(){try{throw new Error}catch(e){var i=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(i)return s(i[2])}return"/"}(),r[i]=e),e}})),g=s("kPq84").getBundleURL("6qpDd")+s("bXuNP").resolve("dbgb9");class l extends n{constructor({initialPos:i,color:t="purple",speed:o=10}){super(),this.frame_count=0,this.origin={x:i.x,y:i.y},this.color=t,this.speed=o,this.saltando=!1,this.altura=330,this.frame_count=0,this.mariana_img=new Image,this.mariana_img.src=e(g)}update(i){this.origin.x;let e=this.origin.y;if(e>=540&&(this.saltando=!1,e=540,this.speed=0),this.saltando&&(this.origin.y-=1),this.origin.y==this.altura&&1==this.saltando){for(let i=this.altura;i<=470;i++)this.origin.y=i;this.origin.y=470,this.saltando=!1,this.origin.y=384}}initialize(){}draw(i,e){const t=[{origin:{x:0,y:199},size:{x:60,y:50}},{origin:{x:66,y:199},size:{x:60,y:50}},{origin:{x:128,y:199},size:{x:60,y:50}},{origin:{x:193,y:199},size:{x:60,y:50}},{origin:{x:256,y:199},size:{x:60,y:50}},{origin:{x:320,y:199},size:{x:60,y:50}},{origin:{x:386,y:199},size:{x:60,y:50}},{origin:{x:450,y:199},size:{x:60,y:50}}],o=[{origin:{x:0,y:71},size:{x:60,y:50}},{origin:{x:66,y:71},size:{x:60,y:50}},{origin:{x:128,y:71},size:{x:60,y:50}},{origin:{x:193,y:71},size:{x:60,y:50}},{origin:{x:256,y:71},size:{x:60,y:50}},{origin:{x:320,y:71},size:{x:60,y:50}},{origin:{x:386,y:71},size:{x:60,y:50}},{origin:{x:450,y:71},size:{x:60,y:50}}];if(this.speed>=10){let o=t[Math.floor(5*this.frame_count)%t.length],r=1;e.drawImage(this.mariana_img,o.origin.x,o.origin.y,o.size.x,o.size.y,this.origin.x,this.origin.y,o.size.x*r,o.size.y*r),e.restore(),this.frame_count+=i}else if(this.speed<0){console.log("hols adwde");let t=1,r=o[Math.floor(5*this.frame_count)%o.length];e.drawImage(this.mariana_img,r.origin.x,r.origin.y,r.size.x,r.size.y,this.origin.x,this.origin.y,r.size.x*t,r.size.y*t),e.restore(),this.frame_count+=i}}keyboard_event(i){"ArrowRight"==i?(console.log("right"),this.speed=10,this.origin.x=this.origin.x+this.speed):"ArrowLeft"==i?(console.log("left"),this.speed=-10,this.origin.x=this.origin.x+this.speed):"ArrowUp"==i&&0==this.saltando?(console.log("Up"),this.origin.y=350,this.saltando=!0):"ArrowDown"==i?console.log("Down"):" "==i&&(console.log("salta, hollaaaaa"),this.origin.y=this.origin.y-this.speed,this.saltando=!0)}keyboard_event_up(i){if(" "===i)console.log("saltando")}}var h;h=s("kPq84").getBundleURL("6qpDd")+s("bXuNP").resolve("llezD");class d extends n{constructor(i,t,o){super(),this.frame_count=0,this.origin={x:i.x,y:i.y},this.color=t,this.speed=1,this.actor=o,this.saltando=!1,this.goomba_img=new Image,this.goomba_img.src=e(h)}update(){this.origin.x-=this.speed,this.origin.y=410;this.actor.origin;let i=this.origin;Math.sqrt(Math.pow(i.x-this.actor.origin.x,2)+Math.pow(i.y-this.actor.origin.y,2))<=26&&(alert('GAME OVER! Pulsa "Aceptar" para volver a empezar.'),location.reload())}keyboard_event(){}draw(i,e){const t=[{origin:{x:0,y:5},size:{x:60,y:50}},{origin:{x:66,y:5},size:{x:60,y:50}}];if(this.origin.x>0||this.origin.x<500){let i=t[Math.floor(5*this.frame_count)%t.length],o=.5;e.drawImage(this.goomba_img,i.origin.x,i.origin.y,i.size.x,i.size.y,this.origin.x,this.origin.y,i.size.x*o,i.size.y*o)}if(this.goomba_img){let i=t[Math.floor(5*this.frame_count)%t.length],o=.5;e.drawImage(this.goomba_img,i.origin.x,i.origin.y,i.size.x,i.size.y,this.origin.x,this.origin.y,i.size.x*o,i.size.y*o)}else e.fillStyle="red",e.fillRect(0,0,10,10);e.restore(),this.frame_count+=i}}var y;y=s("kPq84").getBundleURL("6qpDd")+s("bXuNP").resolve("2dSkO");class x extends n{constructor(i,t,o){super(),this.frame_count=0,this.origin={x:i.x,y:i.y},this.color=t,this.speed=1,this.actor=o,this.saltando=!1,this.tortuga_img=new Image,this.tortuga_img.src=e(y)}update(){this.origin.x+=this.speed,this.origin.y=410;this.actor.origin;let i=this.origin;Math.sqrt(Math.pow(i.x-this.actor.origin.x,2)+Math.pow(i.y-this.actor.origin.y,2))<=26&&(alert('GAME OVER! Pulsa "Aceptar" para volver a empezar.'),location.reload())}keyboard_event(){}draw(i,e){const t=[{origin:{x:0,y:0},size:{x:20,y:30}},{origin:{x:72,y:0},size:{x:20,y:30}}];if(this.origin.x>0||this.origin.x<500){let i=t[Math.floor(5*this.frame_count)%t.length],o=1;e.drawImage(this.tortuga_img,i.origin.x,i.origin.y,i.size.x,i.size.y,this.origin.x,this.origin.y,i.size.x*o,i.size.y*o)}if(this.tortuga_img){let i=t[Math.floor(5*this.frame_count)%t.length],o=1;e.drawImage(this.tortuga_img,i.origin.x,i.origin.y,i.size.x,i.size.y,this.origin.x,this.origin.y,i.size.x*o,i.size.y*o)}else e.fillStyle="red",e.fillRect(0,0,10,10);e.restore(),this.frame_count+=i}}var c;c=s("kPq84").getBundleURL("6qpDd")+s("bXuNP").resolve("KA0Rm");class u extends n{draw(i,e){const t=new Image;t.src=c,e.drawImage(t,0,80)}update(i){}keyboard_event(){}}window.onload=()=>{var i=document.getElementById("canvas"),e=i.getContext("2d");let t=new a({x:5,y:15},"black"),o=new l({initialPos:{x:1,y:384},color:"purple",speed:10}),r=[new u,t,o,new d({x:500,y:410},"red",o),new x({x:-150,y:410},"red",o),new d({x:410,y:490},"blue",o),new x({x:-700,y:410},"red",o)];r.forEach((i=>i.initialize&&i.initialize()));let s=0;const n=t=>{let o=(t-s)/1e3;s=t,r.forEach((i=>i.update(o))),e.clearRect(0,0,i.width,i.height),r.forEach((i=>{e.save(),i.draw(o,e),e.restore()})),window.requestAnimationFrame(n)};window.requestAnimationFrame(n),document.body.addEventListener("keydown",(i=>{r.forEach((e=>{e.keyboard_event(i.key)}))})),document.body.addEventListener("keyup",(i=>{r.forEach((e=>{e.keyboard_event_up&&e.keyboard_event_up(i.key)}))}))};
//# sourceMappingURL=index.05e94e63.js.map
