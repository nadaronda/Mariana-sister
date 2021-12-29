window.onload = () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
   
    let fps = new FPSviewer({ x: 5, y: 15 }, "black");


    let actors = [
        fps,
        new actor({ x: 0, y: 490 }, "purple", 10),//Mariana
    ];

    let lastFrame = 0;
    const render = (time) => {

        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach(e => e.update(delta));
        ctx.clearRect(0,0,500,500);
        actors.forEach((e)=> { 
            e.draw( delta,ctx);
        });
       
        window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => { actor.keyboard_event(e.key) });
    });

}
