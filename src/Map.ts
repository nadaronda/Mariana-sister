
import { Actor, IActor } from "./types/Actor";
const esc = require("../img/fondo_mario.jpg")

export class Map extends Actor implements IActor {
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const background = new Image();
    background.src = esc;

    ctx.drawImage(background, 0, 80);
  }
  update(delta: number): void { }
  keyboard_event() { }
}

