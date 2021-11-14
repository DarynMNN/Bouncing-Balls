const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2, ball3, ball4, ball5, ball6;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,790,2000,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,40, ball_options);
    World.add(world,ball);

    var ball2_options ={
        restitution: 1.5
    }

    ball2 = Bodies.circle(300,100,40, ball2_options);
    World.add(world,ball2);
    var ball3_options ={
        restitution: 1.6
    }

    ball3 = Bodies.circle(400,100,40, ball3_options);
    World.add(world,ball3);
    var ball4_options ={
        restitution: 0.9
    }

    ball4 = Bodies.circle(500,100,40, ball4_options);
    World.add(world,ball4);

    var ball5_options ={
        restitution: 0.7
    }

    ball5 = Bodies.circle(600,100,40, ball5_options);
    World.add(world,ball5);

    var ball6_options ={
        restitution: 1.1
    }

    ball6 = Bodies.circle(700,100,40, ball6_options);
    World.add(world,ball6);

    console.log(ground);
    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    fill("white");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 40, 40);
    fill("green");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x, ball2.position.y, 40, 40);
    fill("pink");
    ellipseMode(RADIUS);
    ellipse(ball3.position.x, ball3.position.y, 40, 40);
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(ball4.position.x, ball4.position.y, 40, 40);
    fill("purple");
    ellipseMode(RADIUS);
    ellipse(ball5.position.x, ball5.position.y, 40, 40);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball6.position.x, ball6.position.y, 40, 40);
}