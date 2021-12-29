class actor {
    constructor() {
        this.origin = { x: 0, y: 490 };
        this.salto = { y: 28, x: this.origin.x };//altura del salto 
        this.saltando = false;//estado espacio falso no pulsado
        this.speed = 10;
        this.altura = 410;
        //this.vy = { y: 0, x: this.origin.x };//velocidad y
        //this.gravedad = { y: 2, x: this.origin.x };
        //this.vymax = { y: 9, x: this.origin.x };//velocidad max
        //this.masxSpeed = maxSpeed;
        //this.speed = maxSpeed;
    }
    update() {
        if (this.saltando) {
            this.origin.y -= 1
        }
        if (this.saltando === this.altura) {
            console.log("hola")
            this.origin.y = 1;
        }

        //if ///si pulsan salto this.origin.y -= 1;poner un limite de y, 
        ///se com
        // this.origin.x = (this.origin.x + this.speed) % 500;
    }
    /* saltar() {//add salto
         this.saltando = true;
         this.vy = this.salto;//lo q va saltar
     
     }*/
    /*mgravedad() {//debo comprobar si esta saltando
        if (this.saltando == true) {//esta saltando, me tiene que restar la velocidad


            if (this.origin.y > 490) {
                this.saltando = false;
                this.vy = 0;//velocidad y
                this.origin.y = 490;
            } else {
                this.vy -= this.gravedad
                this.y -= this.vy;
            }

        }

    }*/
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
                //this.origin.y = (this.origin.y - this.speed) % 500;
                this.saltando = true;
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
