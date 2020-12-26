var fixedRect, movingRect;
var diffX, diffY;

function setup() {
  createCanvas(800, 400);
  movingRect = createSprite(600, 200, 50, 100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}

function draw() {

  background(255, 255, 255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  diffX = movingRect.width / 2 + fixedRect.width / 2;
  console.log(diffX);
  diffY = movingRect.height / 2 + fixedRect.height / 2;
  console.log(diffY);
  if (movingRect.x - fixedRect.x < diffX && fixedRect.x - movingRect.x < diffX && movingRect.y - fixedRect.y < diffY && fixedRect.y - movingRect.y < diffY) {
    movingRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
  }
  drawSprites();
}

function swap() {
  var a = 10;
  var b = 20;
  var c;
  c = a;
  a = b;
  b = c;
}
