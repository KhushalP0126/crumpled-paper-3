const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var box1, box2, box3, box4, img1, img2, slingshot1, ground1, paper1;

function preload()
{
img1 = loadImage("sprites/paper.png")
img2 = loadImage("sprites/dustbingreen.png")
}


function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
box4 =createSprite(775, 500, 0,0)
box4.addImage(img2)
box4.scale=0.7
	//Create the Bodies Here.
	  box1 = new box(680,510,20,250);
	box2 = new box(870,510,20,250);
	box3 = new box(775,623,165,20);
	bin = new box (500, 600, 50, 50);
    ground1 = new Ground(500, 650, 1000, 30);
	paper1 = new paper(100, 580, 20, 20)

	slingshot1 = new slings(paper1.body,{x:200, y:160});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  ground1.display()
  paper1.display()
  slingshot1.display()
 drawSprites()

}
function mouseDragged(){
	Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	slingshot1.fly();
  }
