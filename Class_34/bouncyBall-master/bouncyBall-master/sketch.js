const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;
//var ground, ball;
var slingS;
var ball;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
function setup(){
    var canvas = createCanvas(1000,1500);
    engine = Engine.create();
    world = engine.world;
    b1 = new Block(700,1145,100,100) ; 
    b2 = new Block(700,1045,100,100) ; 
    b3 = new Block(700,945,100,100) ; 
    b4 = new Block(700,845,100,100) ; 
    b5 = new Block(700,745,100,100) ; 
    b6 = new Block(700,645,100,100) ; 
    b7 = new Block(700,545,100,100) ; 
    b8 = new Block(700,445,100,100) ; 
    b9 = new Block(700,345,100,100) ; 
    b10 = new Block(700,245,100,100) ; 

ground = new Ground(500,1200,900,10);
   ball = new Ball(1000,550,50);
   slingS  = new SlingShot(ball.body,{x : 400,y : 150 })
}

function draw(){
    background(255);
    Engine.update(engine);
    rectMode(CENTER);
    
    ground.display();
    ball.display();
    slingS.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();

    ellipseMode(RADIUS);

}