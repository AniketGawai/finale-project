var canvas;
var car,background;
var angle = 0,coneGroup;
var collided =false;
var line1,line2;
var InvisibleLine;
var gameState = " ";
var nextLevel,menu;


function preload() {
carImage = loadImage("assets/car1.png");
menuImg = loadImage("assets/HomeIcon.png")
coneImage = loadImage("assets/cone.png")
playButtonImg = loadImage("assets/PlayButton.png")

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
 line1 =  createSprite(windowWidth - 100,130,220,10)
 
 line2 =  createSprite(windowWidth - 100,260,220,10)
 InvisibleLine = createSprite(windowWidth -100,200,100,50)


 menu = createSprite(80,50,20,20)
 menu.addImage(menuImg)
 menu.scale = 0.5
 menu.visible = false

  car = createSprite(120,550,50,50);
  car.addImage(carImage)
  car.setCollider("RECTANGLE",0,0,800,1200)
  car.debug = true;
  car.scale = 0.15;
  coneGroup = new Group();

nextLevel = createSprite(windowWidth/2 -100,windowHeight/2 + 200)
nextLevel.addImage(playButtonImg)
nextLevel.scale = 0.3;
nextLevel.visible = false;

line1.visible = false
line2.visible = false
car.visible = false
InvisibleLine.visible = false
  
  form = new Form() 
  levelPage = new LevelsPage()
  levelPage.hide();


}

function draw() {
  background("WHITE");
  text(mouseX + ',' + mouseY, mouseX, mouseY)

  
  if(mousePressedOver(form.playButton)){
    gameState = "LevelPage"
    console.log("gameState")
    
  }

  if(mousePressedOver(menu)){
    gameState = "LevelPage"
    coneGroup.destroyEach();
    car.visible = line1.visible = line2.visible = InvisibleLine.visible = false
  }
  if(gameState === "LevelPage"){
    form.hide();
    levelPage.display();
    menu.visible = false

    

    if(mousePressedOver(levelPage.Level1)){
      gameState = "level1"
      line1.visible = true
    line2.visible = true
    car.visible = true
    InvisibleLine.visible = true
    menu.visible = true
    }
    if(mousePressedOver(levelPage.Level2)){
      gameState = "level2"
      line1.visible = true
    line2.visible = true
    car.visible = true
    InvisibleLine.visible = true
    menu.visible = true
    }

  }
  
  else if(gameState === "level1"){

  //  form.hide();
    levelPage.hide();
  obstacleRow(300,100,300,8)
  obstacleColumn(50,250,100,4)

  gameState = " "  
  }

  else if(gameState === "level2"){

  //  form.hide();
    levelPage.hide();
  obstacleRow(300,100,300,5)
  obstacleColumn(50,250,100,5)
  obstacleColumn(1000,1300,95,5)

  gameState = " "

  line1.x = windowWidth -300
  line1.y = windowHeight - 100
  line1.width = line2.width = 10;
  line1.height = line2.height = 200;
  InvisibleLine.x = windowWidth-200
  InvisibleLine.y = windowHeight-100

  line2.x = windowWidth - 100
  line2.y = windowHeight - 100

  car.x = 120;
  car.y = 550;
  angle = 0
  car.rotation = angle;


  }


  if(collided === false){
    handlePlayerControls()
 
  }

if(car.isTouching (coneGroup)){
  console.log("collided")
  collided = true;

}

if(car.isTouching (InvisibleLine)){
  InvisibleLine.x = InvisibleLine.y = 0;
  InvisibleLine.visible = false;
  gameState = "endOfLevels"
 

}
if(gameState === "endOfLevels"){
  textSize(50)
  fill("DARKBLUE")
text("CONGRATULATION",windowWidth/2 - 300,windowHeight/2)
text("PROCEED TO NEXT LEVEL",windowWidth/2 -300,windowHeight/2 + 100)
nextLevel.visible = true


}

if (mousePressedOver(nextLevel)){
  gameState = "level2"
  nextLevel.visible = false;
  coneGroup.destroyEach();


}

  drawSprites()

  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function handlePlayerControls (){
  if(keyDown(UP_ARROW)){
    console.log(angle);
    handleUpMovementOfCar();
  
}
  if(keyDown(DOWN_ARROW)){
    car.y = car.y+10
  }
 
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-2
    angle = angle-3
    car.rotation = angle;
  
  }

  if(keyDown(RIGHT_ARROW)){
    car.x = car.x+2
    angle = angle+3
    car.rotation = angle;
   // car.rotateToDirection = true;
}
}





function handleUpMovementOfCar(){
    if(angle >=0 && angle<=105){
     //   console.log("in first if")
         for(var i = 0, j = 30, k =0.5; i<90; i=i+20,j=j+20,k=k+1){
       
          if (angle >=0 && angle <=5){
            car.y = car.y -1.5;
         //   console.log(angle);
          }
          else if(angle>=i && angle<j && angle<=85 ){
        
            car.x = car.x +k
            car.y = car.y -1.5
          }
        
          else if(angle>85 && angle<105 ){
            car.x =car.x +1.5
            k=1
            
       }
       
         }
        }
        else if(angle >=105 && angle<=190){
      
         for(var i=105,j=120,k=0.5; i<180;i=i+30,j=j+30,k=k+1){
      
          if(angle>=105 && angle <=170){
            car.x = car.x +1.5
            car.y = car.y +k
          }
          else if(angle>170 && angle <190){
            car.y = car.y +1.5
          }
         }
      
      
        }  
        if (angle <0 && angle>=-105){
      
          for(var i = 0, j = -30, k =0.5; i>=-90; i=i-20,j=j-20,k=k+1){
              if (angle <=0 && angle >=-5){
                  car.y = car.y -1.5;
               //   console.log(angle);
                }
                else if(angle<=i && angle>=j && angle>=-85 ){
              
                  car.x = car.x -k
                  car.y = car.y -1.5
                }
              
                else if(angle<-85 && angle>-105 ){
                  car.x =car.x -1.5
                  k=1
                  
             }
         
       }
      }
      else if(angle <-105 && angle >-190)
      {
     //     console.log("within negative if else ", angle)
          for(var i=-105,j=-130,k=0.5; i>=-190;i=i-20,j=j-30,k=k+1){
         //     console.log("i:",i)
         //     console.log("j:",j)
      
              if(angle<=i && angle >=j && angle >=-170){
                car.x = car.x -1.5
                car.y = car.y +k
              }
              else if(angle<-170 && angle >-190){
                car.y = car.y +1.5
              }
             }
      }
      
}

function obstacleRow(x,y1,y2,num){

    for(var i=0; i< num;i++,x=x+150){
   
    cone1=createSprite(x,y1,width,height)
    cone1.addImage(coneImage)
    cone1.scale=0.02
    cone1.debug = true;
    cone2 = createSprite(x,y2,width,height)
    cone2.addImage(coneImage)
    cone2.scale=0.02
    coneGroup.add(cone1)
    coneGroup.add(cone2)

    cone1.setCollider("RECTANGLE",0,0,40,50)
    
    cone2.setCollider("RECTANGLE",0,0,40,50)
  //  console.log("x:",x)
    }

}


function obstacleColumn(x1,x2,y,num){

    for(var i=0; i< num;i++,y=y+200){
   
    cone1=createSprite(x1,y,width,height)
    cone1.addImage(coneImage)
    cone1.scale=0.02
    cone1.debug = true;
    cone2 = createSprite(x2,y,width,height)
    cone2.addImage(coneImage)
    cone2.scale=0.02
    coneGroup.add(cone1)
    coneGroup.add(cone2)
    
    cone1.setCollider("RECTANGLE",0,0,40,50)
    cone2.setCollider("RECTANGLE",0,0,40,50)
   
    }

}