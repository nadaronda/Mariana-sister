import { IActor, Actor, Size } from "./types/Actor";
import { Point } from "./types/Point"
import { checkLimits } from "./types/checkLimits";//buscar para que vale
import Mariana_sprites from "../img/andar.png";
//import Mariana_sprites_izquierda from "../img/andar_izq.png";
export class Mariana extends Actor implements IActor {
    origin: Point;
    color: string;
    speed: number;
    saltando: boolean;
    altura: number;
    mariana_img: HTMLImageElement;//preguntar public
    //mariana_img_izq: HTMLImageElement;
    frame_count = 0;
    constructor({ initialPos, color = "purple", speed = 10 }: { initialPos: Point; color?: string; speed?: number; }) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = speed;
        this.saltando = false;//estado espacio falso no pulsado
        this.altura = 330;// la altura linea suelo es 384 y
        this.frame_count = 0;
        this.mariana_img = new Image();
        this.mariana_img.src = Mariana_sprites;
        //this.mariana_img_izq = new Image();
        //this.mariana_img_izq.src = Mariana_sprites_izquierda;

    }
    update(delta: number) {
        let newPosX = this.origin.x;
        if (newPosX < 490 && newPosX > 10) {
            // this.speed = 10;

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
        }

    }
    initialize() {
    }


    draw(delta: number, ctx: CanvasRenderingContext2D) {

        const Mariana_frames_andar_derc = [
            { origin: { x: 0, y: 199 }, size: { x: 60, y: 50 } },// 1ºPOSICION
            { origin: { x: 66, y: 199 }, size: { x: 60, y: 50 } },//2ºPOSICION
            { origin: { x: 128, y: 199 }, size: { x: 60, y: 50 } },//3ºPOSICION
            { origin: { x: 193, y: 199 }, size: { x: 60, y: 50 } },//4ºPOSICION
            { origin: { x: 256, y: 199 }, size: { x: 60, y: 50 } },//5ºPOSICION
            { origin: { x: 320, y: 199 }, size: { x: 60, y: 50 } },//6ºPOSICION
            { origin: { x: 386, y: 199 }, size: { x: 60, y: 50 } },//7ºPOSICION
            { origin: { x: 450, y: 199 }, size: { x: 60, y: 50 } },//8ºPOSICION

        ];
        const Mariana_frames_andar_izq = [
            { origin: { x: 0, y: 71 }, size: { x: 60, y: 50 } },// 1ºPOSICION
            { origin: { x: 66, y: 71 }, size: { x: 60, y: 50 } },//2ºPOSICION
            { origin: { x: 128, y: 71 }, size: { x: 60, y: 50 } },//3ºPOSICION
            { origin: { x: 193, y: 71 }, size: { x: 60, y: 50 } },//4ºPOSICION
            { origin: { x: 256, y: 71 }, size: { x: 60, y: 50 } },//5ºPOSICION
            { origin: { x: 320, y: 71 }, size: { x: 60, y: 50 } },//6ºPOSICION
            { origin: { x: 386, y: 71 }, size: { x: 60, y: 50 } },//7ºPOSICION
            { origin: { x: 450, y: 71 }, size: { x: 60, y: 50 } },//8ºPOSICION

        ];


        if (this.speed >= 10) {
            let i = Math.floor(this.frame_count * 5);
            let frame = Mariana_frames_andar_derc[i % Mariana_frames_andar_derc.length];
            let scale = 1;
            ctx.drawImage(
                this.mariana_img,//.mariana_img_izq,//
                frame.origin.x,
                frame.origin.y,
                frame.size.x,
                frame.size.y,
                this.origin.x,//variable x
                this.origin.y,// variable de la y para mover a Mariana al dsuelo
                frame.size.x * scale,
                frame.size.y * scale
            );
            ctx.restore();
            this.frame_count += delta;

        } else if (this.speed < 0) {
            console.log("hols adwde");
            let scale = 1;
            let i = Math.floor(this.frame_count * 5);
            let frame = Mariana_frames_andar_izq[i % Mariana_frames_andar_izq.length]
            ctx.drawImage(
                this.mariana_img,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,//
                frame.size.y,
                this.origin.x,//variable x
                this.origin.y,//variable Y mirar posicion que  le pongo en el map
                frame.size.x * scale,
                frame.size.y * scale,
            )
            ctx.restore();
            this.frame_count += delta;

        }
        /*if (this.mariana_img) {
            // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
            let i = Math.floor(this.frame_count * 5);
            let frame = Mariana_frames_andar_izq[i % Mariana_frames_andar_izq.length];
            let scale = 1;
            ctx.drawImage(
                this.mariana_img,//this.mariana_img_izq,//
                frame.origin.x,
                frame.origin.y,
                frame.size.x,//
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
        this.frame_count += delta;// se ve a maraiana anda*/
        //let direction = 0;
        // if (this.speed != 0 && this.speed < 0) { direction = 180 }*/
    }
    keyboard_event(key: string) {

        if (key == "ArrowRight") {
            console.log("right");
            this.speed = 10;
            this.origin.x = (this.origin.x + this.speed);
        } else if (key == "ArrowLeft") {
            console.log("left");
            this.speed = (-10);
            this.origin.x = (this.origin.x + this.speed);
        } else if (key == "ArrowUp" && this.saltando == false) {
            console.log("Up");
            this.origin.y = 350
            this.saltando = true;
        } else if (key == "ArrowDown") {
            console.log("Down");
        } else if (key == " ") {
            console.log("salta, hollaaaaa");
            // this.speed = (-10);
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

