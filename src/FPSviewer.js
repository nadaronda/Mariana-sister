class FPSviewer {
  constructor(position) {
    this.position = position;
  
  }
  update() {}
  keyboard_event() {}
  draw(delta, ctx) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = "18px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
  }
}