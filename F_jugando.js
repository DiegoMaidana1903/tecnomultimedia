function pantallaJugando(){
  fill(0,0,255);
  rect(0,0,map(millis()-tiempoInicioJugar,0,15000,width,0),5);
  
  moverObjetivo();
  push();
  fill(0,255,255);
  ellipseMode(CENTER);
  ellipse(objetivoX,objetivoY,tam,tam);
  pop();
  if (millis()-tiempoInicioJugar<4000){
  }
  
  
  if (millis()-tiempoInicioJugar>15000){
    estado=3
  }
  

 

 }
 
 
 function moverObjetivo(){
  
 let despobjetivoX, despobjetivoY;
   despobjetivoX= cos(dir)*vel;
   despobjetivoY= sin(dir)*vel;
   objetivoX+=despobjetivoX;
  objetivoY+=despobjetivoY;
   
    if ( objetivoX+tam/2 > width || objetivoX-tam/2 < 0  ){
    despobjetivoX = -despobjetivoX;
 }
  if ( objetivoY+tam/2 > height ||  objetivoY-tam/2 < 0 ){
    despobjetivoY = -despobjetivoY;
  }
  dir = atan2(despobjetivoY,  despobjetivoX);


 }
