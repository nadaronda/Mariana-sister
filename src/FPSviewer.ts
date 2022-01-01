import { Point } from "./types/Point";
import { Actor } from "./types/Actor";


export class FPSviewer extends Actor {
  position: Point;
  color: string;
  constructor(position, color) {
    super();
    this.position = position;
    this.color = color;

  }

  update() { }
  keyboard_event() { }
  draw(delta, ctx) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = "18px Arial";
    ctx.fillStyle = this.color;
    ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
  }
}