import { IActor, Actor, Size } from "./types/Actor";
import { Point } from "./types/Point"
import Mariana_sprites_derecha from "../img/andar_derc.png";
export class Mariana extends Actor implements IActor {
    origin: Point;
    color: string;
    speed: number;
    saltando: boolean;
    altura: number;
    mariana_img_derc: HTMLImageElement;//preguntar public
    frame_count = 0;
    constructor({ initialPos, color = "purple", speed = 10 }: { initialPos: Point; color?: string; speed?: number; }) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = speed;
        this.saltando = false;//estado espacio falso no pulsado
        this.altura = 330;// la altura linea suelo es 384 y
        this.frame_count = 0;
        this.mariana_img_derc = new Image();
        this.mariana_img_derc.src = Mariana_sprites_derecha;

    }
    update(delta: number) {
        let newPosX = this.origin.x;
        if (newPosX < 490 && newPosX > 10) {
            this.speed = 10;

        }
        let newPosY = this.origin.y;

        if (newPosY >= 540) {
            this.saltando = false;
            newPosY = 540;
            this.speed = 0;
        }
        if (this.saltando) {
            this.origin.y -= 1
        }
        if (this.origin.y == this.altura && this.saltando == true) {
            for (let i = this.altura; i <= 470; i++) {
                this.origin.y = i;
            }
            // this.origin.y += 1
            this.origin.y = 470
            this.saltando = false
            this.origin.y = 384// altura a la que se situa la linea del suelo
        }// funciona no borrar*/


    }
    /*initialize() {
        //creamos una imagen

        this.mariana_img.onload = () => { console.log("imagen cargada") }
    }*/


    draw(delta: number, ctx: CanvasRenderingContext2D) {
        //let origin = this.origin;//add salto
        const Mariana_frames_andar_derc = [
            //Movimiento Andar a la derecho
            { origin: { x: 0, y: 5 }, size: { x: 60, y: 50 } },// 1ºPOSICION
            { origin: { x: 66, y: 5 }, size: { x: 60, y: 50 } },//2ºPOSICION
            { origin: { x: 128, y: 5 }, size: { x: 60, y: 50 } },//3ºPOSICION
            { origin: { x: 193, y: 5 }, size: { x: 60, y: 50 } },//4ºPOSICION
            { origin: { x: 256, y: 5 }, size: { x: 60, y: 50 } },//5ºPOSICION
            { origin: { x: 320, y: 5 }, size: { x: 60, y: 50 } },//6ºPOSICION
            { origin: { x: 386, y: 5 }, size: { x: 60, y: 50 } },//7ºPOSICION
            { origin: { x: 450, y: 5 }, size: { x: 60, y: 50 } },//8ºPOSICION
            //-------------

            //{ src_origin: { x: 450, y: 5 }, size: { x: 60, y: 50 } },
        ];
        if (this.origin.x > 0 || this.origin.x < 500) {
            let i = Math.floor(this.frame_count * 5);
            let frame = Mariana_frames_andar_derc[i % Mariana_frames_andar_derc.length];
            let scale = 1;
            ctx.drawImage(
                this.mariana_img_derc,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,
                frame.size.y,
                this.origin.x,//variable x
                this.origin.y,// variable de la y para mover a Mariana al dsuelo
                frame.size.x * scale,
                frame.size.y * scale
            );
        }
        if (this.mariana_img_derc) {
            // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
            let i = Math.floor(this.frame_count * 5);
            let frame = Mariana_frames_andar_derc[i % Mariana_frames_andar_derc.length];
            let scale = 1;
            ctx.drawImage(
                this.mariana_img_derc,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,
                frame.size.y,
                this.origin.x,//variable x
                this.origin.y,//variable Y mirar posicion que  le pongo en el map
                frame.size.x * scale,
                frame.size.y * scale
            );
        } else {
            // Draw the super mario actor
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, 10, 10);
        }
        ctx.restore();
        this.frame_count += delta;// se ve a maraiana anda
    }
    keyboard_event(key: string) {

        if (key == "ArrowRight") {
            console.log("right");
            this.origin.x = (this.origin.x + this.speed);
        } else if (key == "ArrowLeft") {
            console.log("left");
            this.origin.x = (this.origin.x - this.speed);
        } else if (key == "ArrowUp" && this.saltando == false) {
            console.log("Up");
            this.origin.y = 350
            this.saltando = true;
        } else if (key == "ArrowDown") {
            console.log("Down");
        } else if (key == " ") {
            console.log("salta, hollaaaaa");
            this.origin.y = (this.origin.y - this.speed);
            this.saltando = true
        }
    }
    keyboard_event_up(key: string) {//add
        switch (key) {
            case " ":
                console.log("saltando");
                break;
        }
    }
}


