import { IActor, Actor, Size } from "./types/Actor";
import { Point } from "./types/Point";
import { Mariana } from "./Mariana";
export class actorEvil extends Actor implements IActor {
    origin: Point;
    color: string;
    speed: number;
    saltando: boolean;
    altura: number;
    actor: any;// definir que es
    constructor(initialPos: Point, color: string, actor: any/*cambiar el any*/) {
        super();
        this.origin = { x: initialPos.x, y: initialPos.y };
        this.color = color;
        this.speed = 1;
        this.actor = actor;//add  this.origin = { x: initialPos.x, y: initialPos.y };de mi actor mariana
        this.saltando = false;
        this.altura = 450;
    }
    update() {
        this.origin.x -= this.speed
        this.origin.y = 490
        let actorPos = this.actor.origin;


        let myPos = this.origin;
        let distance = Math.sqrt(Math.pow(myPos.x - this.actor.origin.x, 2) + Math.pow(myPos.y - this.actor.origin.y, 2));
        //console.log(distance);
        if (distance <= 5 && this.actor.origin.y >= 490) { alert(" Game Over ") }
    }
    keyboard_event() { }
    draw(delta: number, ctx: CanvasRenderingContext2D) {
        let origin = this.origin;//add salto
        ctx.fillStyle = this.color;
        ctx.fillRect(origin.x, origin.y, 10, 10);
        // Controlamos la dirección del Mariana
        //let direction = 0;
        //if (this.speed.x != 0 && this.speed.x < 0) {direction = 180}
    }
}