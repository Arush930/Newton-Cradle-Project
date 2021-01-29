
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   roof=new Roof(400,200,400,50)
bob1 = new Bob(240,500,35,35)
bob2 = new Bob(320,500,35,35)
bob3 = new Bob(400,500,35,35)
bob4 = new Bob(480,500,35,35)
bob5 = new Bob(560,500,35,35)
rope1 = new Chain(bob1.body,{x:240,y:200})
rope2 = new Chain(bob2.body,{x:320,y:200})
rope3 = new Chain(bob3.body,{x:400,y:200})
rope4 = new Chain(bob4.body,{x:480,y:200})
rope5 = new Chain(bob5.body,{x:560,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}

function keyPressed() {
  if (keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:50})
  }
}

