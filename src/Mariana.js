class actor {
    constructor() {
        this.origin = {
            x: 0,
            y: 490,
        }
    }
    update() {

        this.origin = { x: + 10, y: 490 }
    }
    draw(ctx) {
        let origin = this.origin;
        ctx.fillStyle = 'purple';
        ctx.fillRect(origin.x, origin.y, 10, 10);
    }
}
