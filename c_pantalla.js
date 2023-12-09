class Pantalla{
  constructor(x,y,ancho,alto,label, backButtonLabel, nextButtonLabel){
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;
    this.image=null;
    this.label = label;
    this.backButtonLabel = backButtonLabel;
    this.nextButtonLabel = nextButtonLabel;
    this.backButton = new Button(50, height - 50, 80, 30, backButtonLabel, color(0, 150, 200));
    this.nextButton = new Button(width - 130, height - 50, 80, 30, nextButtonLabel, color(0, 150, 200));
    }
    
    actualizar( fondos, textos){
     push();
     imageMode(CENTER);
     image(fondos,0,0,ancho,alto);
     
     fill(121,121,121);
     rect(0,0,alto,ancho*0.3);
     
     fill(0);
     textSize(30);
     textAlign(CENTER,CENTER);
     
      textSize(24);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.label, width / 2, height / 2);
    this.backButton.draw();
    this.nextButton.draw();
     
     pop();
    }
    
    
    loadImage(imagePath){
      this.image= loadImage(imagePath);
       }
  
  display(){
    if(this.image){
      image(this.image,this.x,this.y,this.ancho,this.alto);
      }
      
    
  }
  
 handleMousePressed() {
    if (this.backButton.clicked(mouseX, mouseY)) {
      return "back";
    } else if (this.nextButton.clicked(mouseX, mouseY)) {
      return "next";
    }
    return null;
  }



}
