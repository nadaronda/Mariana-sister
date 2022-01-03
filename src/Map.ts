import { Actor, IActor } from "./types/Actor";
const esc = require("../img/escenario.jpg")

export class Map extends Actor implements IActor {
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    const background = new Image();
    background.src = esc;
    ctx.drawImage(background, 0, 0, 500, 500);
  }
  update(delta: number): void { }
  keyboard_event() { }
}
