const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21;
var ball;
var rope;

function setup(){
    createCanvas(1200,820);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,810,1200,20);

    //bottom layer
    box1 = new Box(825,775,50,50);
    box2 = new Box(875,775,50,50);
    box3 = new Box(925,775,50,50);

    box4 = new Box(825,725,50,50);
    box5 = new Box(875,725,50,50);
    box6 = new Box(925,725,50,50);

    box7 = new Box(825,675,50,50);
    box8 = new Box(875,675,50,50);
    box9 = new Box(925,675,50,50);

    box10 = new Box(825,625,50,50);
    box11 = new Box(875,625,50,50);
    box12 = new Box(925,625,50,50);

    box13 = new Box(825,575,50,50);
    box14 = new Box(875,575,50,50);
    box15 = new Box(925,575,50,50);

    box16 = new Box(825,525,50,50);
    box17 = new Box(875,525,50,50);
    box18 = new Box(925,525,50,50);

    box19 = new Box(825,575,50,50);
    box20 = new Box(875,575,50,50);
    box21 = new Box(925,575,50,50);

    ball = new Ball(600,660,20);

    rope = new Rope(ball.body,{x:575,y:455});
}

function draw(){
    background("pink")
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    ball.display();

    rope.display();

    ground.display();

    text(mouseX+", "+mouseY,200,200);
}

function mousePressed(){
    
}