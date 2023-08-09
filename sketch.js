
var trex ,trex_running;
var ground;
function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup()
{
  createCanvas(600,200);
  
  //creating sprites and setting properties 
 trex = createSprite(30,150,20,40);
 trex.scale = 0.5;
 trex.addAnimation("running",trex_running);
 ground = createSprite(120,180,1000,50);
}

function draw()
{
  background("cyan");
  if (keyDown("space"))
  {
    trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY+0.5;
  trex.collide(ground);
  drawSprites();
}
