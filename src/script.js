window.onload = () => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let MarianaActor = new actor(ctx);
    MarianaActor.draw(ctx);


    setInterval(() => {
        MarianaActor.update();
        ctx.clearRect(0, 0, 500, 500);//limpiar mi canvas
        console.log("setea un intervalo");
        MarianaActor.draw(ctx);
    }, 1000)


}
