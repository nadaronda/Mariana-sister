window.onload = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let MarianaActor = new actor(ctx);
    MarianaActor.draw(ctx);
    //add  refactorizando el codigo let actors =[new actor({ x: 0, y: 490 })//Mariana];

    //setInterval cambiar 
    /* setInterval(() => {
           MarianaActor.update();
           ctx.clearRect(0, 0, 500, 500);//limpiar mi canvas
           MarianaActor.draw(ctx);
       }, 1000) */
    let lastFrame = 0;
    const render = (time) => {
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        MarianaActor.update();
        ctx.clearRect(0, 0, 500, 500);
        MarianaActor.saltar();
        MarianaActor.mgravedad();
        MarianaActor.draw(ctx);
        window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render);


    document.body.addEventListener("keydown", (e) => {
        //console.log(e.key)Detecto todas las teclas del teclado
        MarianaActor.keyboard_event(e.key);
    });

}
