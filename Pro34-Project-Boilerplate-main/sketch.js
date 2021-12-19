
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wollon,wollonImg
var mew,mewImg,mewFalling
var backgroundImg,ground,poison,poison1,poisonattack
var isHit

function preload() {
  backgroundImg=loadImage("assests/beach.png")
  mewhit = loadAnimation("assests/mew1.png","assests/mew.png")
  wollonImg=loadImage("assests/wollon.png")
  poisonattack=loadAnimation("assets/poison1.png","assests/poison.png","assests/slash.png")
  mewImg=loadAnimation("assests/mew1.png")
}

function setup() {
  createCanvas(400,400);
   
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(100,390,600,20);

  wollon = createSprite(90,360,100,100);
  wollon.scale = 0.1;
  wollon.addImage(wollonImg)

  button = createImg('button.png');
  button.position(350,30);
  button.size(50,50);
  button.mouseClicked(jump);

  mew=createSprite(190,320,100,100)
  mew.scale = 0.1;
  mew.addImage(mewImg)

}



function draw() 
{

  background(51);
  image(backgroundImg,0,0,400,400);
  Engine.update(engine);
  
  if(keyPressed("space")){
    wollon.y=wollon.y+0.59
  }
  

  drawSprites()
}

function jump() {
wollon.y=wollon.y-0.59
  
}



function collisionwithmew(params) {
  if (poison!== undefined && mew !== undefined) {
    var collision = Matter.SAT.collides(poison.body, mew.body);

    if (collision.collided) {
      score+=5
      mew.addAnimation(mewhit)
        mew.position.x=220
        mew.position.y=150
      if(mew.position.x=220,mew.position.y=150){
        mew.changeAnimation(mewImg)
      }
      Matter.World.remove(world, poison.body);
      delete poison;
    }
  }
}


function keyPressed() {
if (keyCode === DOWN_ARROW) {
  var poison= new Poisonball(cannon.x, cannon.y);
  balls.push(cannonBall);
}
}

function showPoison(poison, index) {
if (poison) {
  poison.display();
  poison.animate();
  if (poison.body.position.x >= width || poison.body.position.y >= height - 50) {
     
    if(!poison.isHit){

      ball.remove(index);
    }
  }
}
}

