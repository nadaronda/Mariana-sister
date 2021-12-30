window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    let fps = new FPSviewer({ x: 5, y: 15 }, "black");
    let mariana = new actor({ x: 0, y: 490 }, "purple", speed = 10);//Mariana

    let actors = [
        fps,
        mariana,//Mariana
        new actorEvil({ x: 500, y: 490 }, "red", speed = 0.9, mariana),// malo
        new actorEvil({ x: 500, y: 490 }, "blue", speed = 0.5, mariana),// malo
        new actorEvil({ x: 500, y: 490 }, "grey", speed = 0.3, mariana),// malo
    ];

    let lastFrame = 0;
    const render = (time) => {

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
