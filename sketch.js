//Name aliasing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myWorld,myEngine;
var ground,ball;

function setup() {
  createCanvas(400,400);

  myEngine= Engine.create();
  myWorld=myEngine.world;
  
  var balloptions={
    restitution:1,
    density:0.05
  }

  ball=Bodies.circle(100,100,20,balloptions);
  World.add(myWorld,ball)
 
  //ground Body 
  ground= Bodies.rectangle(200,380,400,10,{isStatic:true});
  World.add(myWorld,ground);
  console.log(ground)
  
}
function draw() {
  background("black");  
  Engine.update(myEngine);
   rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  
  ellipseMode(RADIUS)
  circle(ball.position.x,ball.position.y,20);
}