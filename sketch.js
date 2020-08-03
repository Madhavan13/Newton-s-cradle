
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(200,600,50);
	bobObject2 = new bob(300,600,50);
	bobObject3 = new bob(400,600,50);
	bobObject4 = new bob(500,600,50);
	bobObject5 = new bob(600,600,50);
	roof1 = new roof(400,100,500,50);

	rope1 = new rope(bobObject1.body,roof1.body,-100*2,0);
	rope2 = new rope(bobObject2.body,roof1.body,-50*2,0);
	rope3 = new rope(bobObject3.body,roof1.body,0*2,0);
	rope4 = new rope(bobObject4.body,roof1.body,50*2,0);
	rope5 = new rope(bobObject5.body,roof1.body,100*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:75,y:-75});

	}
}



