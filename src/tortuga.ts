import { IActor, Actor, Size } from "./types/Actor";
import { Point } from "./types/Point";
import { Mariana } from "./Mariana";
import tortuga_sprites from "../img/tortuga.png";
export class tortuga extends Actor implements IActor {
    origin: Point;
    color: string;
    speed: number;
    saltando: boolean;
    altura?: number;
    actor: any;
    tortuga_img: HTMLImageElement;
    frame_count = 0;
    constructor(initialPos: Point, color: string, actor: any/*cambiar el any*/) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = 1;
        this.actor = actor;
        this.saltando = false;
        //this.altura = 500;
        this.tortuga_img = new Image();
        this.tortuga_img.src = tortuga_sprites;
    }
    update() {
        this.origin.x += this.speed
        this.origin.y = 410
        let actorPos = this.actor.origin;


        let myPos = this.origin;
        let distance = Math.sqrt(Math.pow(myPos.x - this.actor.origin.x, 2) + Math.pow(myPos.y - this.actor.origin.y, 2));
        if (distance <= 26 /*&& this.actor.origin.y >= 380*/) {
            alert(`GAME OVER! Pulsa "Aceptar" para volver a empezar.`);
            location.reload();
        }//distancia que chocan 26
    }
    keyboard_event() { }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        const tortuga_frames = [
            //tortuga naranja
            { origin: { x: 0, y: 0 }, size: { x: 20, y: 30 } },
            { origin: { x: 72, y: 0 }, size: { x: 20, y: 30 } },
            //tortuga verde
            /* { origin: { x: 48, y: 0 }, size: { x: 20, y: 30 } },
            { origin: { x: 120, y: 0 }, size: { x: 20, y: 30 } },
          //tortuga azul
          { origin: { x: 24, y: 0 }, size: { x: 20, y: 30 } },
          { origin: { x: 99, y: 0 }, size: { x: 20, y: 30 } },*/
        ];
        if (this.origin.x > 0 || this.origin.x < 500) {
            let i = Math.floor(this.frame_count * 5);
            let frame = tortuga_frames[i % tortuga_frames.length];
            let scale = 1;
            ctx.drawImage(
                this.tortuga_img,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,
                frame.size.y,
                this.origin.x,
                this.origin.y,
                frame.size.x * scale,
                frame.size.y * scale
            );
        }
        if (this.tortuga_img) {
            let i = Math.floor(this.frame_count * 5);
            let frame = tortuga_frames[i % tortuga_frames.length];
            let scale = 1;
            ctx.drawImage(
                this.tortuga_img,
                frame.origin.x,
                frame.origin.y,
                frame.size.x,
                frame.size.y,
                this.origin.x,
                this.origin.y,
                frame.size.x * scale,
                frame.size.y * scale
            );
        } else {
            // Draw the super mario actor
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, 10, 10);
        }
        ctx.restore();
        this.frame_count += delta;
    }
}
