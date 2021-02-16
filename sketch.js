var rect1;

function preload(){
  bgImage=loadImage("images/road.jpg");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");

  rightcarImg1 = loadImage("images/rightcar1.png");
  rightcarImg2 = loadImage("images/rightcar2.png");
  rightcarImg3 = loadImage("images/rightcar3.png");
  rightcarImg4 = loadImage("images/rightcar4.png");

  topcarImg1 = loadImage("images/topcar1.png");
  topcarImg2 = loadImage("images/topcar2.png");
  topcarImg3 = loadImage("images/topcar3.png");
  topcarImg4 = loadImage("images/topcar4.png");

  bottomcarImg1 = loadImage("images/bottomcar1.png");
  bottomcarImg2 = loadImage("images/bottomcar2.png");
  bottomcarImg3 = loadImage("images/bottomcar3.png");
  bottomcarImg4 = loadImage("images/bottomcar4.png");
 
}




function setup() {
  createCanvas(displayWidth-10,displayHeight-120);
  rect1=new TrafficLight(500,30,40,0);
  rect2=new TrafficLight(985,170,40,90); 
  rect3=new TrafficLight(850,610,40,180);
  rect4=new TrafficLight(365,470,40,270); 

}

function draw() {
  background(bgImage);

  //setInterval(function(){
    /*
    setTimeout(function(){
      rect1.color="orange";
    },2000)
    */
    setTimeout(function(){
      rect1.color="green";
      rect2.color="red";
      rect3.color="red";
      rect4.color="red";
    },6000)

    setTimeout(function(){
      rect1.color="red";
      rect2.color="green";
      rect3.color="red";
      rect4.color="red";
    },6000);

    setTimeout(function(){
      rect1.color="red";
      rect2.color="red";
      rect3.color="green";
      rect4.color="red";
    },6000);

    setTimeout(function(){
      rect1.color="red";
      rect2.color="red";
      rect3.color="red";
      rect4.color="green";
    },6000);

    
  //}, 10000);
  
 rect1.display();
 rect2.display();
 rect3.display();
 rect4.display();
  spawnFromLeft();
  spawnFromRight();
  spawnFromTop();
  spawnFromBottom();

  drawSprites();
}

function spawnFromLeft(){
  if(frameCount%100===0){
    leftcar=createSprite(0,275,20,20);
    leftcar.velocityX=3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:leftcar.addImage(carImg1);
      break;
      case 2:leftcar.addImage(carImg2);
      break;
      case 3:leftcar.addImage(carImg3);
      break;
      case 4:leftcar.addImage(carImg4);
      break;
    }
    //leftGroup.add(leftcar)
  }
}


function spawnFromRight(){
  if(frameCount%100===0){
    rightcar=createSprite(1300,350,20,20);
    rightcar.velocityX=-3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:rightcar.addImage(rightcarImg1);
      break;
      case 2:rightcar.addImage(rightcarImg2);
      break;
      case 3:rightcar.addImage(rightcarImg3);
      break;
      case 4:rightcar.addImage(rightcarImg4);
      break;
    }
   
  }
}


function spawnFromTop(){
  if(frameCount%100===0){
    topcar=createSprite(720,0,20,20);
    topcar.velocityY=3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:topcar.addImage(topcarImg1);
      break;
      case 2:topcar.addImage(topcarImg2);
      break;
      case 3:topcar.addImage(topcarImg3);
      break;
      case 4:topcar.addImage(topcarImg4);
      break;
    }
   
  }
}


function spawnFromBottom(){
  if(frameCount%100===0){
    bottomcar=createSprite(650,600,20,20);
    bottomcar.velocityY=-3;
    var num=Math.round(random(1,4))
    switch(num){
      case 1:bottomcar.addImage(bottomcarImg1);
      break;
      case 2:bottomcar.addImage(bottomcarImg2);
      break;
      case 3:bottomcar.addImage(bottomcarImg3);
      break;
      case 4:bottomcar.addImage(bottomcarImg4);
      break;
    }
   
  }
}
