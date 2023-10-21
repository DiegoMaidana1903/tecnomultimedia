class Juego{
  constructor(){
    this.rey= new Rey();
    this.puntaje=0;
    this.estado=1;
    this.contador= new Contador(120);
    
  }

  actualizar(){
    if(this.estado==0){
    }else if(estado==1){
      background(255,255,0);
      this.evaluarColision();
      this.rey.actualizar();
      this.contador.iniciar();
      fill(0);
      text("Puntaje:"+puntaje,width/2-160,height/2-230);
    }else if (this.estado==2){
      //ganas
      background(0,255,0);
      textAlign(CENTER);
      textSize(40);
      fill(0);
      text("Felicitaciones",width/2,height/2);
      textSize(40);
      text("Ganaste",width/2,height/2+40);
    }else if(this.estado==3){
      //perdes
      background(255,0,0);
      textAlign(CENTER);
      textSize(40);
      fill(0);
      text("Perdiste",width/2,height/2);
      textSize(40);
      text("Aunque lo intentaste",width/2,height/2+40);
      
    }
  }




mousePressed(){
  if(this.estado == 1){
    this.rey.mousePressed();
  }
  if  (contador.finalizado) {
    contador.reiniciar();
  }
  
}

    evaluarColision(){
      if(this.rey.colision(this.rey.getX(),this.rey.getY(),this.rey.getTam())){
        this.rey.reiniciar();
        this.puntos++;
      }
    }











}
