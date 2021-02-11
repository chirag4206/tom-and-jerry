var cat, mouse;
var catAni,catsit,catsit2;
var mouseWchees,mouseAni,mousesta;
var bg, bgIm;


function preload(){
    //load the images here
   catAni=loadAnimation("images/cat2.png","images/cat3.png");
   catsit = loadImage("images/cat1.png");
  mouseWchees = loadImage("images/mouse1.png");
  mouseAni=loadAnimation("images/mouse2.png","images/mouse3.png");
  bgIm = loadImage("images/garden.png");
  mousesta = loadAnimation("images/mouse4.png");
  catsit2=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,1000,800);
    bg.addImage(bgIm);

    cat = createSprite(800,700,20,20);
    cat.addImage(catsit);
    cat.addAnimation("moving",catAni);
    cat.addAnimation("sitting",catsit2);
    cat.scale = 0.1;
    
    mouse = createSprite(200,700,20,20);
    mouse.addImage(mouseWchees);
    mouse.addAnimation("dancing",mouseAni);
    mouse.addAnimation("standing",mousesta);
    mouse.scale = 0.1;
   
}

function draw() {
     background(255);
    //Write condition here to evalute if tom and jerry collide
  if(cat.isTouching(mouse)){
    cat.velocityX = 0;
    mouse.changeAnimation("standing",mousesta);
    cat.changeAnimation("sitting",catsit2);
  }
    drawSprites();
}


function keyPressed(){
if (keyCode===UP_ARROW){
  cat.velocityX=-4;
  cat.changeAnimation("moving",catAni);
  mouse.changeAnimation("dancing",mouseAni);
}
  //For moving and changing animation write code here


}
