
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof;
var rope1, rope2;
var rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof=new Roof(200, 50, 500, 40);
  bobObject1= new Bob(95,400);
  bobObject2= new Bob(175,400);
  bobObject3= new Bob(255,400);
  bobObject4= new Bob(335,400);
  bobObject5= new Bob(415,400);
  
    rope1= new Rope(0,bobObject1.body,roof.body,100*2,0);
    rope2= new Rope(72,bobObject2.body,roof.body,100*2,0);
    rope3= new Rope(154,bobObject3.body,roof.body,100*2,0);
    rope4= new Rope(238,bobObject4.body,roof.body,100*2,0);
    rope5= new Rope(320,bobObject5.body,roof.body,100*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
  drawSprites();
 
}

 function keyPressed(){
	if(keyCode===32){
console.log("space key pressed");
Matter.Body.setStatic(bobObject1.body,false);


    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-169,y:-300});
    
    //wait(500);
Matter.Body.setStatic(bobObject2.body,false);
Matter.Body.setStatic(bobObject3.body,false);
Matter.Body.setStatic(bobObject4.body,false);
Matter.Body.setStatic(bobObject5.body,false);
		//x:155,y:-130
	}
}


