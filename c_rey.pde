
 class Rey{
  //x,y,tam,vel,dir 

  constructor(){
    this.tam=80;
    this.x=random(this.tam,width-this.tam);
    this.y=random(this.tam,height-this.tam);
    this.vel=7;
    this.dir=random(TWO_PI);
    }
function preload() {
  sonidoColision = loadSound("crowd_laughingwav-14578.mp3"); // Reemplaza 'sonido_colision.mp3' con la ruta de tu archivo de sonido
}

actualizar(){
  this.mover();
  this.dibujar();
}

  mover(){
    let despX= cos(this.dir)*this.vel;
    let despY= sin(this.dir)*this.vel;
    this.x= despX;
    this.y= despY;
    if(this.x+this.tam>width|| this.x-this.tam<0){
      despX*=1;
    }
    this.dir= atan2(despY,despX);
  }

dibujar(){
  push();
  fill(0,255,255);
  ellipseMode(CENTER);
  ellipse(x,y,this.tam,this.tam);
  pop();
}

colision(x_,y_,tam_){
  if(dist(this.x,this.y,x_,y_) < this.tam+tam_){
    sonidoColision.play();
    return true;
     }else{
       return false;
     }
    
}
  
  reiniciar(){
    this.x=random(this.tam,width-this.tam);
    this.y=random(this.tam,height-this.tam);
    this.dir=random(TWO_PI);
    this.vel=7;
  }

}
}
