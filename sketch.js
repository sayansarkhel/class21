var fixedRect, movingRect;
var box1,box2;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(800, 400, 50, 80);
  box1.shapeColor = "green";
  box1.velocityX=2;
  box2 = createSprite(900, 400, 50, 80);
  box2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,box2)){
    movingRect.shapeColor = "yellow";
    box2.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "green";
    box2.shapeColor = "green";
  }
  bounceOff(box1,box2)
  drawSprites();
}



