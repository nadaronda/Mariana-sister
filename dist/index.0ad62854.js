class actorEvil {
    constructor(initialPos, color = "red", speed = 10, actor){
        this.origin = {
            x: initialPos.x,
            y: initialPos.y
        };
        this.color = color;
        this.speed = speed;
        this.actor = actor; //add  this.origin = { x: initialPos.x, y: initialPos.y };de mi actor mariana
    }
    update() {
        this.origin.x -= this.speed;
        this.origin.y = 490;
        let actorPos = this.actor.origin;
        let myPos = this.origin;
        let distance = Math.sqrt(Math.pow(myPos.x - this.actor.origin.x, 2) + Math.pow(myPos.y - this.actor.origin.y, 2));
        //console.log(distance);
        if (distance <= 5 && this.actor.origin.y >= 490) alert(" Game Over ");
    }
    keyboard_event() {
    }
    draw(delta, ctx) {
        let origin = this.origin; //add salto
        ctx.fillStyle = this.color;
        ctx.fillRect(origin.x, origin.y, 10, 10);
    // Controlamos la dirección del Mariana
    //let direction = 0;
    //if (this.speed.x != 0 && this.speed.x < 0) {direction = 180}
    }
}

//# sourceMappingURL=index.0ad62854.js.map
