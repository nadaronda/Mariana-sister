class actor {
    constructor(initialPos, color = "purple", Speed = 10) {
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        // this.maxSpeed = maxSpeed;
        this.speed = 10;
        //this.speed = { x: maxSpeed, y: 0 };
    }
    /*constructor() {
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
    }*/
    update() {
         //let newPosX = this.origin.x + this.speed.x;
         // let newPosY = 0;
         // if (newPosX < 500 && newPosX >= 0) {
         //    this.origin.x = newPosX;
         //}
        /* if (this.saltando) {
             this.origin.y -= 1
         }
         if (this.saltando === this.altura) {
             console.log("hola")
             this.origin.y = 1;
         }*/
 
         //if ///si pulsan salto this.origin.y -= 1;poner un limite de y, 
         ///se com
         // this.origin.x = (this.origin.x + this.speed) % 500;
     }
    /*saltar() {//add salto
        this.saltando = true;
        this.vy = this.salto;//lo q va saltar

    } */
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
                //this.speed.x = this.maxSpeed;
                this.origin.x = (this.origin.x + this.speed) % 500;
                break;
            case "ArrowLeft":
                //this.speed.x = -this.maxSpeed;
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
                //this.saltando = true;
                break;
            //detecto con el switch las teclas de interes
        }
    }
    draw(delta, ctx) {
        let origin = this.origin;//add salto
        ctx.fillStyle = 'purple';
        ctx.fillRect(origin.x, origin.y, 10, 10);
        // Controlamos la dirección del Mariana
        let direction = 0;
        if (this.speed.x != 0 && this.speed.x < 0) {
            direction = 180
        }
    }
}
