import { Actor, IActor } from "./types/Actor";
import { Point } from "./types/Point";
import { FPSviewer } from "./FPSviewer";
import { Mariana } from "./Mariana";
import { actorEvil } from "./actorEvil";
window.onload = () => {


    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    let fps = new FPSviewer({ x: 5, y: 15 }, "black");
    let mariana = new Mariana({ initialPos: { x: 1, y: 490 }, color: "purple", speed: 10 });//Mariana

    let actors: Array<IActor> = [
        fps,
        mariana,//Mariana 
        new actorEvil({ x: 500, y: 490 }, "red", mariana),// malo
        new actorEvil({ x: 500, y: 490 }, "blue", mariana),// malo
        //new actorEvil({ x: 500, y: 490 }, "grey", speed = 0.5, mariana),// malo
    ];
    //actors.forEach((a) => a.initialize && a.initialize());//para los sprites
    //tengo que crear un array de actores evil donde les meto el actor mariana 
    let lastFrame = 0;
    const render = (time: number) => {

        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach(e => e.update(delta));
        ctx.clearRect(0, 0, 500, 500);
        actors.forEach((e) => {
            e.draw(delta, ctx);
        });

        window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => { actor.keyboard_event(e.key) });
    });

}
