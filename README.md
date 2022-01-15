# Mi primer proyecto de [Core Code School](https://www.corecode.school/)
# Indice:
- [Mi primer proyecto de Core Code School](#mi-primer-proyecto-de-core-code-school)
- [Indice:](#indice)
  - [1. Título del Juego:](#1-título-del-juego)
  - [2. Imágenes y vídeos:](#2-imágenes-y-vídeos)
  - [3. Motivación del proyecto:](#3-motivación-del-proyecto)
  - [4. Acceso directo al juego:](#4-acceso-directo-al-juego)
  - [5. Tabla de contenidos o índice:](#5-tabla-de-contenidos-o-índice)
  - [6. Manual de instalación y deployment:](#6-manual-de-instalación-y-deployment)
  - [7. Ejemplos de código:](#7-ejemplos-de-código)
  - [8. Entornos de ejecución:](#8-entornos-de-ejecución)
  - [9. Listado de paquetes y dependencias:](#9-listado-de-paquetes-y-dependencias)
  - [10. Agradecimientos:](#10-agradecimientos)
  - [11. Otras consideraciones:](#11-otras-consideraciones)


## 1. Título del Juego:
Mariana Sister

## 2. Imágenes y vídeos:
![Lo tradicional llama ](./img/super-mario-bros.jpg)
## 3. Motivación del proyecto:
La motivación vienen dada del tradicional juego de Super Mario Bros,
siempre que he recordado un videojuego, me ha venido a la cabeza Mario Bross, he jugado bastante
de pequeña y me trae bastantes buenos recuerdos. Ver que es posible poder crearlo desde cero, para mi sería un gran reto.

Va a merecer la pena poder emplearle tiempo, dedicación y esfuerzo!!
## 4. Acceso directo al juego:
[Pincha aquí para poder acceder](https://nadaronda.github.io/Mariana-sister/)

## 5. Tabla de contenidos o índice:
Personajes:
* Mariana 
* Goomba
* Tortuga
## 6. Manual de instalación y deployment:
```
Clone the repository:
    git clone https://github.com/nadaronda/Mariana-sister

Initiate npm:
    npm init

Or use this instead:
    npm init -y

Install dependencies:
    npm install

Execute the project:
    npm run dev

``` 
## 7. Ejemplos de código:
Para detectar las teclas que quieres utilizar y no sabes como las describe tu teclado copia esto en tu script, y en el html que se oberva al inspecionar la consola se vera con los console.log la tecla que estas pulsando y el nombre que contiene la tecla que pulsas:
```js
document.body.addEventListener("keydown", (e) => {
console.log(e.key)
});

```
He metido un condicional  switch para detectar las teclas de interes y que me devuelva con un console.log por la consola, lo que me interesa. 

```js
document.body.addEventListener("keydown", (e) => {
console.log(e.key)
 switch (e.key) {
 case "ArrowRight":
console.log("right");
 break;
 case "ArrowLeft":
console.log("left");
 break;
 case "ArrowUp":
 console.log("Up");
 break;
 case "ArrowDown":
 console.log("Down");
 break;
 case " ":
console.log("salta");
 break;
 } 
 });
```

## 8. Entornos de ejecución:
* [Visual Studio Code](https://code.visualstudio.com/Download)
  
## 9. Listado de paquetes y dependencias:
* Node package manager: [npm](https://www.npmjs.com/)
* To run the HTML: [parcel](https://www.npmjs.com/package/parcel ), [más información](https://parceljs.org/languages/javascript/#classic-scripts)

*  Lenguajes de programación: [typescript](https://www.npmjs.com/package/typescript)
*  Otros paquetes de Node: [rimraf](https://www.npmjs.com/package/rimraf), [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
* MDN [Api Canvas](https://developer.mozilla.org/es/docs/Web/API/Canvas_API)
* Css [Información sobre el Modelo de cajas Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  [Juego](https://flexboxfroggy.com/)
* [Sprite personalizados](https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/#?body=Humanlike_white)

## 10. Agradecimientos:
- En primer lugar agradecer a Core Code School por darme la oportunidad, a mis profesores : [Alvaro](https://github.com/Alvaro-Lucas), [Marc](https://github.com/boyander), [Marcos](https://github.com/amargopastor) en especial por la gran dedicación y esfuerzo que nos dedica cada día.
- A mis compañeros por la ayuda recibida.
- A mi gran amiga [Monica](https://github.com/MonicaMerino), que hizo todo lo posible para que me iniciara en este mundillo.
- A mis compañeras de trabajo que me ayudaron a meterme en Core Code School: [Ana](https://github.com/anadiamaq), [Silvia](https://github.com/silconari)
## 11. Otras consideraciones:
Frases motivadoras:
- Tu esfuerzo valio, vale y valdrá la pena. Nunca pares, nunca te conformes. Hata que lo bueno sea lo mejor y lo mejor sea lo excelente.
- El exito es la suma de pequeños esfuerzos repetidos día tras dias.
