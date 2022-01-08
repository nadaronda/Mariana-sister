import { Actor, IActor } from "./types/Actor";
import { Point } from "./types/Point";
import { FPSviewer } from "./FPSviewer";
import { Mariana } from "./Mariana";
import { actorEvil } from "./actorEvil";
import { Map } from "../src/Map";
window.onload = () => {


    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    let fps = new FPSviewer({ x: 5, y: 15 }, "black");
    let mariana = new Mariana({ initialPos: { x: 1, y: 384 }, color: "purple", speed: 10 });//Mariana
    let escenario = new Map();


    let actors: Array<IActor> = [
        escenario,
        fps,
        mariana,
        new actorEvil({ x: 500, y: 410 }, "red", mariana),// malo

        //new actorEvil({ x: 500, y: 490 }, "blue", mariana),// malo
        //new actorEvil({ x: 500, y: 490 }, "grey", speed = 0.5, mariana),// malo
    ];
    actors.forEach((a) => a.initialize && a.initialize());//para los sprites
    //tengo que crear un array de actores evil donde les meto el actor mariana 


    //bucle de renderizado
    let lastFrame = 0;
    const render = (time: number) => {

        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach(e => e.update(delta));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        actors.forEach((e) => {
            ctx.save();//add
            e.draw(delta, ctx);
            ctx.restore();//add
        });

        window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);

    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => { actor.keyboard_event(e.key) });
    });

    document.body.addEventListener("keyup", (e) => {
        // console.log(e.key);
        actors.forEach((actor) => {
            if (actor.keyboard_event_up) {
                actor.keyboard_event_up(e.key);
            }
        });
    });

}
