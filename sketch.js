
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rectangleBase;
var rectangleSide1;
var rectangleSide2;
var ground1;
var paper1;
var dustbin1;
var box1;


function preload()
{
	

	
}

function setup() {
	createCanvas(1000, 700);
	

	
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,50);
	ground1 = new Ground(1000/2,650,1000,40);
	//box1 = new Box(400,600,200,20);
	//box2 = new Box(310,600,20,100);
	//box3 = new Box(490,600,20,00);

	ground2=new Ground(800,620,200,20);
	ground3=new Ground(710,580,20,100);
	ground4=new Ground(890,580,20,100);


	


	//Create the Bodies Here.

	
	Engine.run(engine);
	SlingShot = new SlingShot(paper1.body,{x:550, y:300});
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  paper1.display();
  //box1.display();
  //box2.display();
  //box3.display();
  SlingShot.display();
  
  
  drawSprites();
 
}



//function keyPressed(){
//	if (keyCode === UP_ARROW){
//		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:500,y:500})
//	}
//}

function mouseDragged()
{
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    SlingShot.fly();
}

function keyPressed(){
    if (keyCode === 32){
       SlingShot.attach(paper1.body)
    }
}