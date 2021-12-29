class actorEvil {
    constructor(initialPos, color = "red", speed = 10) {
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = speed;

    }
    update() {
        this.origin.x -= this.speed
        this.origin.y = 490
    }
    keyboard_event() { }
    draw(delta, ctx) {
        let origin = this.origin;//add salto
        ctx.fillStyle = this.color;
        ctx.fillRect(origin.x, origin.y, 10, 10);
        // Controlamos la dirección del Mariana
        //let direction = 0;
        //if (this.speed.x != 0 && this.speed.x < 0) {direction = 180}
    }
}