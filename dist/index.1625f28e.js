window.onload = ()=>{
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let MarianaActor = new actor(ctx);
    MarianaActor.draw(ctx);
    let lastFrame = 0;
    const render = (time)=>{
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        MarianaActor.update();
        ctx.clearRect(0, 0, 500, 500);
        // MarianaActor.saltar();
        // MarianaActor.mgravedad();
        MarianaActor.draw(ctx);
        window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
    document.body.addEventListener("keydown", (e)=>{
        //console.log(e.key)Detecto todas las teclas del teclado
        MarianaActor.keyboard_event(e.key);
    });
};

//# sourceMappingURL=index.1625f28e.js.map
