class Ball{
    constructor(x,y,radius){
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 0.05
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        noStroke()
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}