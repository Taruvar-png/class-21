var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall = createSprite(1150,200,30,80);
  wall.shapeColor="black";
  car = createSprite(50,200,80,30);
  car.velocityX=4;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  if(isTouching(car,wall)){
    car.shapeColor="yellow";
    wall.shapeColor="blue";
  }
  else{
    car.shapeColor="red";
    wall.shapeColor="red";
  }
  



  drawSprites();
}



