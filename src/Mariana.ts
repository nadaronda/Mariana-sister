import { IActor, Actor, Size } from "./types/Actor";
import { Point } from "./types/Point"

export class Mariana extends Actor implements IActor {
    origin: Point;
    color: string;
    speed: number;
    saltando: boolean;
    altura: number;
    constructor({ initialPos, color = "purple", speed = 10 }: { initialPos: Point; color?: string; speed?: number; }) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = speed;
        this.saltando = false;//estado espacio falso no pulsado
        this.altura = 420;
    }
    //add funcion
    /*initialize() {
        let marianaSister_png = new image();
        marianaSister_png.src = marina_spritesheet;
        marianaSister_png.onload = () => { console.log("imagen cargada") };
    }*/
    update(delta: number) {
        /*let newPosX = this.origin.x - this.speed.x;
        let newPosY = 0;
        if (newPosX < 500 && newPosX >= 0) {
            this.origin.x = newPosX;

        }*/

        if (this.saltando) {
            this.origin.y -= 1
        }

        if (this.origin.y == this.altura && this.saltando == true) {
            for (let i = this.altura; i <= 490; i++) {
                this.origin.y = i;
            }
            // this.origin.y += 1
            this.origin.y = 490
            this.saltando = false
        }


    }

    keyboard_event(key: string) {
        switch (key) {
            case "ArrowRight":
                console.log("right");
                this.origin.x = (this.origin.x + this.speed) % 500;


                break;
            case "ArrowLeft":
                //(this.origin.x > 0 && this.origin.x <= 500) = this.origin.x - this.speed
                //tengo que conseguir que solo se mueva en el canvas de 0-500 eje x
                this.origin.x = (this.origin.x - this.speed);
                console.log("left");
                break;
            case "ArrowUp":
                // this.origin.y = (this.origin.y - this.speed) % 500;
                console.log("Up");
                break;
            case "ArrowDown":
                console.log("Down");
                //this.origin.y = (this.origin.y + this.speed) % 500;    
                break;
            case " ":
                console.log("salta");
                this.origin.y = (this.origin.y - this.speed);
                this.saltando = true;
                break;
        }
    }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        let origin = this.origin;//add salto
        ctx.fillStyle = 'purple';
        ctx.fillRect(origin.x, origin.y, 10, 10);
        // Controlamos la dirección del Mariana
        let direction = 0;
        /* if (this.speed.x != 0 && this.speed.x < 0) {
             direction = 180
         }*/
    }
}
