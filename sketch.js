var board, boardImg;
var angle = 0;
var engine, world;
var ball1;
var bowl, bowlImg;
var stick1;
var score;
var i = 0.1;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var stickAngle;


function preload() {
  boardImg = loadImage("images/board.png");
  bowlImg = loadImage("images/bowl.png");
}
function setup() {

  createCanvas(1000, 500);

  engine = Engine.create();
  world = engine.world;

  stickAngle = PI;

  // board = createSprite(470, 300, 50, 50);
  // board.addImage(boardImg);

  bowl = createSprite(500, 550, 50, 50);
  bowl.addImage(bowlImg);

  stick1 = new Horizontalstick(500, 300, 200, 24);
  ball1 = new Ball(550, 0);

  var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
  Matter.Render.run(render);

}

function draw() {
  background(255);



  Engine.update(engine);







  stick1.display();
  ball1.display();
  
  drawSprites();





}

function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    //Matter.Body.rotate(stick1.body, 0.05);
    Matter.Body.setAngle(stick1.body,10)
}

}