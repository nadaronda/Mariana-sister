class actor {
    constructor() {
        this.origin = { x: 0, y: 490 };
        this.vy = { y: 0, x: this.origin.x };
        this.gravedad = { y: 2, x: this.origin.x };
        this.salto = { y: 28, x: this.origin.x };
        this.vymax = { y: 9, x: this.origin.x };
        this.saltando = false;
        //this.masxSpeed = maxSpeed;
        //this.speed = maxSpeed;
        this.speed = 10;

    }
    update() {
        //this.origin.x += 1;
        // this.origin.x = (this.origin.x + this.speed) % 500;
    }
    saltar() {//add salto
        this.saltando = true;
        this.vy = this.salto;//lo q va saltar

    }
    mgravedad() {//debo comprobar si esta saltando
        if (this.saltando == true) {//esta saltando, me tiene que restar la velocidad


            if (this.origin.y > 490) {
                this.saltando = false;
                this.vy = 0;
                this.origin.y = 490;
            } else {
                this.vy -= this.gravedad
                this.y -= this.vy;
            }


        }

    }
    keyboard_event(key) {
        switch (key) {
            case "ArrowRight":
                console.log("right");
                this.origin.x = (this.origin.x + this.speed) % 500;
                break;
            case "ArrowLeft":
                this.origin.x = (this.origin.x - this.speed) % 500;
                console.log("left");
                break;
            case "ArrowUp":
                // this.origin.y = (this.origin.y - this.speed) % 500;
                //MarianaActor.keyboard_event(e.key);
                console.log("Up");
                break;
            case "ArrowDown":
                console.log("Down");
                //this.origin.y = (this.origin.y + this.speed) % 500;    
                break;
            case " ":
                console.log("salta");
                this.saltar();
                break;
            //detecto con el switch las teclas de interes
        }
    }
    draw(ctx) {
        let origin = this.origin;//add salto
        ctx.fillStyle = 'purple';
        ctx.fillRect(origin.x, origin.y, 10, 10);
    }
}
