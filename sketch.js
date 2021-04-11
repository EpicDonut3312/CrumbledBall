var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	


	engine = Engine.create();
	world = engine.world;

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1=new Box(300,600,20,100)
	 box2=new Box(400,630,200,20)
	 box3=new Box(500,600,20,100)
	
	 paper=new Paper(100,600,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
	box1.display();
	box2.display();
	box3.display();
	paper.display();
	drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})
    
  }
}



