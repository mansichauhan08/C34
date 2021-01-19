class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 250
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA;
            var pointB = this.pointB;
            push();
            stroke("black");
            strokeWeight(4);
            fill("black")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    attach(body){
        this.rope.bodyA = body;
    }
    fly(){
        this.rope.bodyA = null;
    }
}