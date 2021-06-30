var path,mainCyclist,cyclist2;
var pathImg,mainRacerImg1,mainRacerImg2;
var oppPink1Img,oppPink2Img;
var oppYellow1Img,oppYellow2Img;
var oppRed1Img,oppRed2Img;
var bellSound

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
    oppPink1Img = loadAnimation("opponent1.png","opponent2.png");
  
  oppPink1Img = loadAnimation("opponent3.png");
  
    oppYellow1Img = loadAnimation("opponent4.png","opponent5.png");
    
    oppYellow2Img = loadAnimation("opponent6.png");
  
    oppRed1Img = loadAnimation("opponent7.png","opponent8.png");
  
  oppRed2Img = loadAnimation("opponent9.png");
  
  bellSound = loadSound("sound/bell.mp3")
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  pinkCG = new Group();
  yellowCG = new Group();
  redCG = new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
    if(keyDown("space")){
        bellSound.play();
       }
    
    path.velocityX = -(6+2*distance/150);
    
    distance = distance + Math.round(getFrameRate()/60);
    
    var rand = Math.round(random(1,3))
    if(World.frameCount%150===0){
      if(rand === 1){
       pinkCyclists();
      } else if(rand === 2){
       yellowCyclists(); 
      }else{
       redCyclists();
      }
    }
    
 }
}

function pinkCyclists(){
  player1 =createSprite(1100,Math.round(random(50, 250)));       player1.scale =0.06;
  player1.velocityX= -(6+2*distance/150);
  player1.addAnimation("opponentPlayer1",oppPink1Img);
  player1.setLifetime=170;
  pinkCG.add(player1);
}

function yellowCyclists(){
  player2 =createSprite(1100,Math.round(random(50, 250)));       player2.scale =0.06;
  player2.velocityX= -(6+2*distance/150);
  player2.addAnimation("opponentPlayer2",oppYellow1Img);
  player2.setLifetime=170;
  yellowCG.add(player2);
}

function redCyclists(){
  player3 =createSprite(1100,Math.round(random(50, 250)));    
  player3.scale =0.06;
  player3.velocityX= -(6+2*distance/150);
  player3.addAnimation("opponentPlayer1",oppRed1Img);
  player3.setLifetime=170;
  redCG.add(player3);
}