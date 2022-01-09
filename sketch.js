// so guy's today i am going to make a simple game in sketch js so like the vedio 


var player,playerImg;

var ground;

var b1;

//let's create a background
var bg,bgImage;


// so guy's this is a function for uploading image 
function preload () {

  // there i loaded the image  
  playerImg = loadImage("trex1.png");
  // let's loadImage
  bgImage = loadImage("background.jpg");
}


// this is function setup fr setup the canvas 
function setup () {
  
  //creating canvas
  createCanvas(400,400);
//making background
  bg = createSprite(200,200);
  bg.addImage(bgImage);
  bg.scale=2.5;
 //making ground where our trex run 
 ground = createSprite(250,350,1000,10);

  b1 = createSprite(385,200,10,1000);

  
 
 
  // creating player
  player = createSprite(200,320);
  
  // for adding the image 
  player.addImage(playerImg)


  //making player smaller 
  player.scale=0.5;
}

function draw() {
  
  //making the boundary invisible 
   b1.visible=false;

  //background
  background(25);
 // this for drawing sprites 
  drawSprites();

  //making or trex move with a means left side d means right side
  if (keyDown("a")) {
      player.x = player.x-5;
  }

//making our player move right
if (keyDown("d")) {
  player.x = player.x+5;
}

//adding player into new stage 
if (player.isTouching(b1)) {
 //making old player destroy before new player create 
 player.destroy();
  

  // creating player
  player = createSprite(25,320);
  
  // for adding the image 
  player.addImage(playerImg)


  //making player smaller 
  player.scale=0.5;

}


// tracking playerXaxis 
//console.log(player.x);
}

//so guy's if need this libraries then i am giving a link go and download

//let's check the output 

//so our trex is running 

//so ya guy's it is very funny 

//so guy's i hope you liked it if you liked it then press subscribe button please
