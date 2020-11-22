
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

var ground
var stone
var slingshot
var boy
var tree
var mango1
var mango2
var mango3
function preload()
{
boy = loadImage ("images/boy.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground (width/2,600,width,20)
	stone = new Stone (235,420,30)
	slingshot = new Slingshot (stone.body,{x:235,y:420})
	tree = new Tree (1050,650)
  mango1 = new mango (1050,300,20)
  mango2 = new mango (950,300,20)
  mango3 = new mango (1050,200,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(255);
  image(boy ,200,340,200,300);
  ground.display();
  stone.display();
  slingshot.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  drawSprites();
 
}
function mouseDragged() 
{ Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) }
 function mouseReleased()
{ slingshot.fly();}




function detectcollision (s,m){
var mangoBodyposition = m.body.position
var stoneBodyposition = s.body.position
var distance = dist(stoneBodyposition.x , stoneBodyposition.y , mangoBodyposition.x , mangoBodyposition.y  )
if(distance<=s.r+m.r){
Matter.body.setStatic(m.body , false)
}
}