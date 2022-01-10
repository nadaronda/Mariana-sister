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
    goomba_img: HTMLImageElement;
    frame_count = 0;
    constructor(initialPos: Point, color: string, actor: any/*cambiar el any*/) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = 1;
        this.actor = actor;
        this.saltando = false;
        this.goomba_img = new Image();
        this.goomba_img.src = goomba_sprites;
    }
    update() {
        this.origin.x -= this.speed
        this.origin.y = 410//tocar para cambiar altura de goomba
        let actorPos = this.actor.origin;


        let myPos = this.origin;
        let distance = Math.sqrt(Math.pow(myPos.x - this.actor.origin.x, 2) + Math.pow(myPos.y - this.actor.origin.y, 2));

        if (distance <= 26) {
            alert(`GAME OVER! Pulsa "Aceptar" para volver a empezar.`);
            location.reload();
        }//distancia que chocan 26
    }
    keyboard_event() { }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        const goomba_frames = [
            //Movimiento Andar a la derecho
            { origin: { x: 0, y: 5 }, size: { x: 60, y: 50 } },// 1ºPOSICION
            { origin: { x: 66, y: 5 }, size: { x: 60, y: 50 } },//2ºPOSICION

            //{ origin: { x: 128, y: 5 }, size: { x: 60, y: 50 } },//3ºPOSICION goomba aplastrado

        ];
        if (this.origin.x > 0 || this.origin.x < 500) {
            let i = Math.floor(this.frame_count * 5);
            let frame = goomba_frames[i % goomba_frames.length];
            let scale = 1 / 2;
            ctx.drawImage(
                this.goomba_img,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,
                frame.size.y,
                this.origin.x,//variable x
                this.origin.y,// variable de la y 
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
                this.goomba_img,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,//
                frame.size.y,
                this.origin.x,//variable x
                this.origin.y,//variable Y 
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
}
