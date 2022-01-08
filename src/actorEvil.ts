import { IActor, Actor, Size } from "./types/Actor";
import { Point } from "./types/Point";
import { Mariana } from "./Mariana";
import goomba_sprites from "../img/goomba.png";
export class actorEvil extends Actor implements IActor {
    origin: Point;
    color: string;
    speed: number;
    saltando: boolean;
    altura?: number;
    actor: any;
    goomba_img: HTMLImageElement;// definir que es
    frame_count = 0;
    constructor(initialPos: Point, color: string, actor: any/*cambiar el any*/) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = 1;
        this.actor = actor;//add  this.origin = { x: initialPos.x, y: initialPos.y };de mi actor mariana
        this.saltando = false;
        //this.altura = 500;
        this.goomba_img = new Image();
        this.goomba_img.src = goomba_sprites;
    }
    update() {
        this.origin.x -= this.speed
        this.origin.y = 410//tocar para cambiar altura de goomba
        let actorPos = this.actor.origin;


        let myPos = this.origin;
        let distance = Math.sqrt(Math.pow(myPos.x - this.actor.origin.x, 2) + Math.pow(myPos.y - this.actor.origin.y, 2));
        console.log(distance);
        //console.log(actorPos);
        if (distance <= 26 /*&& this.actor.origin.y >= 380*/) { alert(" Game Over ") }//distancia que chocan 26
    }
    keyboard_event() { }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        const goomba_frames = [
            //Movimiento Andar a la derecho
            { origin: { x: 0, y: 5 }, size: { x: 60, y: 50 } },// 1ºPOSICION
            { origin: { x: 66, y: 5 }, size: { x: 60, y: 50 } },//2ºPOSICION
            //{ origin: { x: 128, y: 5 }, size: { x: 60, y: 50 } },//3ºPOSICION

        ];
        if (this.origin.x > 0 || this.origin.x < 500) {
            let i = Math.floor(this.frame_count * 5);
            let frame = goomba_frames[i % goomba_frames.length];
            let scale = 1 / 2;
            ctx.drawImage(
                this.goomba_img,//.mariana_img_izq,//
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
        if (this.goomba_img) {
            // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
            let i = Math.floor(this.frame_count * 5);
            let frame = goomba_frames[i % goomba_frames.length];
            let scale = 1 / 2;
            ctx.drawImage(
                this.goomba_img,//this.mariana_img_izq,//
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
        this.frame_count += delta;// se ve a maraiana anda
    }

    //---------------------------
    /* let origin = this.origin;//add salto
     ctx.fillStyle = this.color;
     ctx.fillRect(origin.x, origin.y, 10, 10);*/
    // Controlamos la dirección del Mariana
    //let direction = 0;
    //if (this.speed.x != 0 && this.speed.x < 0) {direction = 180}
}
