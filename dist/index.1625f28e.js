window.onload = ()=>{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    let fps = new FPSviewer({
        x: 5,
        y: 15
    }, "black");
    let mariana = new actor({
        x: 1,
        y: 490
    }, "purple", speed = 10); //Mariana
    let actors = [
        fps,
        mariana,
        new actorEvil({
            x: 500,
            y: 490
        }, "red", speed = 1, mariana),
        new actorEvil({
            x: 500,
            y: 490
        }, "blue", speed = 0.7, mariana)
    ];
    actors.forEach((a)=>a.initialize && a.initialize()
    ); //para los sprites
    //tengo que crear un array de actores evil donde les meto el actor mariana 
    let lastFrame = 0;
    const render = (time)=>{
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach((e)=>e.update(delta)
        );
        ctx.clearRect(0, 0, 500, 500);
        actors.forEach((e)=>{
            e.draw(delta, ctx);
        });
        window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
    document.body.addEventListener("keydown", (e)=>{
        actors.forEach((actor)=>{
            actor.keyboard_event(e.key);
        });
    });
};

//# sourceMappingURL=index.1625f28e.js.map
