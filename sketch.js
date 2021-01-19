var cat,catimage,catanimation,catimage2;
var rat,ratimage,ratanimation;
var background1,backgroundimage;
function preload() {
    //load the images here
    catimage = loadImage("images/tomOne.png")
    catimage2 = loadAnimation("images/tomFour.png")
    catanimation = loadAnimation("images/tomThree.png","images/tomTwo.png");

    ratimage4 = loadImage("images/jerryFour.png")
    ratimage = loadImage("images/jerryOne.png");
    ratimage2 = loadImage("images/jerryTwo.png")

    backgroundimage = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background1 = createSprite(500,400);
    background1.addImage(backgroundimage);
    cat = createSprite(750,600);
    cat.addImage(catimage);
    cat.scale = 0.2;
    cat.setCollider("rectangle",0,0,100,60);

    rat = createSprite(200,600);
    rat.addImage(ratimage);
    rat.scale = 0.2;
    



}

function draw() {


    //Write condition here to evalute if tom and jerry collide



    if (cat.isTouching(rat)){
        cat.velocityX=0;
        cat.addAnimation("catsitting",catimage2);
        cat.changeAnimation("catsitting")
        rat.addImage(ratimage4)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX=-4;
      cat.addAnimation("catrunning",catanimation);
      cat.changeAnimation("catrunning")
      rat.addImage(ratimage2);
  }

}
