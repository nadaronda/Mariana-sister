window.onload = ()=>{
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let MarianaActor = new actor(ctx);
    MarianaActor.draw(ctx);
    setInterval(()=>{
        MarianaActor.update();
        ctx.clearRect(0, 0, 500, 500); //limpiar mi canvas
        MarianaActor.draw(ctx);
    }, 1000);
    document.body.addEventListener("keydown", (e)=>{
        //console.log(e.key)Detecto todas las teclas del teclado
        MarianaActor.keyboard_event(e.key);
    });
};

//# sourceMappingURL=index.1625f28e.js.map
