
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,line2,line3,ball;

function preload(){
	ball.image=loadImage("ball.png")
	line1,line2,line3.image=loadImage("dustbin.png")
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line1=new Dustbin(600,650,10,50);
	line2=new Dustbin(600,660,50,10);
	line3=new Dustbin(650,660,10,50);
	line1,line2,line3.addImage("dustbin",dustbin.png)
	ball=new crumpledBall(50,650);
	ball.addImage("cricketBall",ball.png);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keydown("up")){
	  ball.velocityX=2;
  }
  drawSprites();
 
}



