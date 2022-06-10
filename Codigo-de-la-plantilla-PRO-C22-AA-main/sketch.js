const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground;
var cannon, cannonBase;
var cannonBall;

var cannonBallArray = [ "velas", "pastel", "comida", "regalos", "mesas"];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var angle = 15;
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(80, 75, 170, 170, angle);

  cannonBall = new Cannonball(cannon.x,cannon.y);
  
  for(var i = 0; i < cannonBallArray.length; i++){
    console.log(cannonBallArray[i]);
  }
}

function draw() {
  background(189);
  image(backgroundImg,0,0,1200,600);
  
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  cannon.display();
  cannonBall.display();

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
