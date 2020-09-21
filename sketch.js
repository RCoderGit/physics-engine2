const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var object;
var ground;
var ball;
function setup()
{
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
    var object_options={
        isStatic:true
    }
  
   
    var ground_options={
        isStatic:true
    }
    ground=Bodies.rectangle(200,390,200,30,ground_options);
    World.add(world,ground);
    var ball_options={
        restitution:1.0
    }
   
  ball = Bodies.circle(200,200,40, ball_options);
    World.add(world,ball);
    console.log(ball);
}
function draw()
{
    background("black");
    Engine.update(engine);
    rectMode("center");
    
    rect(ground.position.x,ground.position.y,200,30);
    ellipseMode("RADIUS");
    ellipse(ball.position.x, ball.position.y, 40, 40);
   //ellipse(500 ,200, 30, 30);
}
/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}*/