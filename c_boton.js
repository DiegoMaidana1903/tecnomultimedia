class Boton {
  constructor(x, y, ancho, alto, label, col){ 
    this.x=x;
    this.y=y;
    this.ancho=ancho;
    this.alto=alto;
    this.label=label;
    this.col=col;
   }
    
    draw(){
      fill(this.col);
      rect(this.x,this.y,this.width,this.height);
      
      fill(0);
      textAlign(CENTER,CENTER);
      textSize(30);
      text(this.label,this.x+ this.width/2, this.y + this.height/2);
      
    }
    
    clicked(mouseX_,mouseY_){
      return mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height;
      
    }
    
    
  
}
