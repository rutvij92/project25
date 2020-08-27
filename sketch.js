
var ground,papper;
var wall1,wall3,wall2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	 

	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1= new dustbind(980,670,200,250);
	 wall2= new dustbin(885,540,20,250);
	 wall3= new dustbin(1085,540,20,250);

	 papper= new paper(40,100,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
 
papper.display();
wall1.display();
// wall2.display();
// wall3.display();


  drawSprites();
 
}

 function keyPressed() {
 if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(papper.body,papper.position,{x:85,y:-85});
	 

  }
 }



