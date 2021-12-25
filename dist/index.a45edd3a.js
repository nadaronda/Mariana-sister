class actor {
    constructor(){
        this.origin = {
            x: 0,
            y: 490
        };
        //this.masxSpeed = maxSpeed;
        //this.speed = maxSpeed;
        this.speed = 10;
    }
    update() {
    //this.origin.x += 1; 
    // this.origin.x = (this.origin.x + this.speed) % 500;
    }
    keyboard_event(key) {
        switch(key){
            case "ArrowRight":
                console.log("right");
                this.origin.x = (this.origin.x + this.speed) % 500;
                break;
            case "ArrowLeft":
                this.origin.x = (this.origin.x - this.speed) % 500;
                console.log("left");
                break;
            case "ArrowUp":
                //MarianaActor.keyboard_event(e.key);
                console.log("Up");
                break;
            case "ArrowDown":
                console.log("Down");
                break;
            case " ":
                console.log("salta");
                break;
        }
    }
    draw(ctx) {
        let origin = this.origin;
        ctx.fillStyle = 'purple';
        ctx.fillRect(origin.x, origin.y, 10, 10);
    }
}

//# sourceMappingURL=index.a45edd3a.js.map
