var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.scale = 0.3
  ghost.addImage("ghost",ghostImg)
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

if (keyDown("left_arrow")){
  ghost.x = ghost.x -5
}

if (keyDown("right_arrow")){
  ghost.x = ghost.x +5



}


    
    drawSprites();
}


