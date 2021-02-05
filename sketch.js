
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,dustbinImg;	
var world;
var paper1;
var paper; 
var paper1;

function preload () {

	dustbinImg = loadImage("dustbingreen.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject= new ground(width/2,670,width,20);
	dustbinObj= new dustbin(1200,650);
	paper1 = new Paper (400,600,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 
 
  paper1.display();
  groundObject.display();
  dustbinObj.display();
  image(dustbinImg, 1075, 430, 260, 260);
  

}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:1000, y:-1000});
   }

}

