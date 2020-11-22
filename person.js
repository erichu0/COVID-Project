const colors = [[141, 85, 36],[198, 134, 66],[224, 172, 105],[255, 219, 172]];

class person {
    //makes a "person" circle with a random color
    constructor(x, y, r) {
        this.body = Bodies.circle(x, y, r, { isStatic: false });
        World.add(world, this.body);
        
        this.color = colors[Math.floor(Math.random()*4)]
        console.log(this.color)
    }
    
    //spawn the thing
    show = () => {
        let pos = this.body.position;
        fill(this.color[0], this.color[1], this.color[2]);
        circle(pos.x, pos.y, this.body.circleRadius*2);
    };
}