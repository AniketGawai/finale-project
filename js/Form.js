class Form {
  constructor() {
    this.background = createSprite(windowWidth/2 ,windowHeight/2)
    this.backgroundImg = loadImage("assets/BG.png");
    

    this.playButton = createSprite(windowWidth/2+200 ,windowHeight/2)
    this.playButtonImg = loadImage("assets/PlayButton.png"); 
    console.log("background and play created")

    this.playButton.addImage(this.playButtonImg)
    this.background.addImage(this.backgroundImg)
    this.background.scale = 0.25;
    this.playButton.scale = 0.2;
  }

  

  hide() {
    this.background.visible = false;
    this.playButton.visible = false;
  //  this.input.hide();
  }

  
}