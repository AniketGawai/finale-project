class LevelsPage{
    constructor() {
      this.Level1 = createSprite(windowWidth/2,windowHeight/ 2-200)
      this.Level1.scale = 0.2
      this.Level2 = createSprite(windowWidth/2,windowHeight/ 2)
      this.Level2.scale = 0.2
      this.Level3 = createSprite(windowWidth/2,windowHeight/ 2+200)  
      this.Level3.scale = 0.2

      this.Level1Img = loadImage("assets/Level1Button.png");
      this.Level2Img = loadImage("assets/Level2Button.png");
      this.Level3Img = loadImage("assets/Level3Button.png");
      
      this.Level1.addImage(this.Level1Img)
      this.Level2.addImage(this.Level2Img)
      this.Level3.addImage(this.Level3Img)
  
    }
  
    
  
    hide() {
     
      this.Level1.visible = false;
      this.Level2.visible = false;
      this.Level3.visible = false;
    //  this.input.hide();
    }

    display(){
        
      this.Level1.visible = true;
      this.Level2.visible = true;
      this.Level3.visible = true;

    }
  
    
  }