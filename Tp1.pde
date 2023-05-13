//Diego Maidana(88102/2)
//comision 3
//Tp 1= variables y condicionales

String estado= "inicio";
PImage imagen
int cuentaFotograma= 0;

void setup(){
  size(640,480);
  frameRate(30);
  imagen= loadImage("data/el jardin de las historias. jpg");
}
 void draw(){
   background(255);
   
   if(estado.equals("inicio") ){
   //pantalla de inicio
   fill(0);
   textAlign(CENTER);
   textSize(60);
   text("click para empezar",width/2,height/2);
   cuentaFotograma++;
  if( cuentaFotograma>= 150){
    estado= "pantalla 1";
      cuentaFotograma= 0; 
  }
   }
 else if(estado.equals("pantalla 1") ){
   //pantalla 1
   fill(0);
   textAlign(CENTER);
   textSize(60);
   text("El jardin de las historias",width/2,cuentaFotograma);
   
   cuentaFotograma++;
  if( cuentaFotograma>= 150){
    estado= "pantalla 2";
      cuentaFotograma= 0; 
  }
   //pantalla 2
   else if(estado.equals("pantalla 2")){
   fill(0);
   textAlign(CENTER);
   textSize(60);
   text("Autor/es: Grupo de arte interactivo Biopus",width/2,cuentaFotograma);
    textAlign(30);
   textSize(60);
   text("Año: 2012",width/2,cuentaFotograma);
   cuentaFotograma++;
  if( cuentaFotograma>= 150){
    estado= "pantalla 3";
      cuentaFotograma= 0; 
   }
   //pantalla 3
    else if(estado.equals("pantalla 3")){
  image(imagen,0,0,40,40);
  
   cuentaFotograma++;
  if( cuentaFotograma>= 150){
    estado= "pantalla 4";
     cuentaFotograma= 0; 
   }
    else if(estado.equals("pantalla 4") ){
   //pantalla 4
   fill(0);
   textAlign(CENTER);
   textSize(60);
   text("Fin",width/2,cuentaFotograma);
   ellipse(60,100,80,80);
   
   cuentaFotograma++;
  if( cuentaFotograma>= 150){
    estado= "inicio";
    cuentaFotograma= 0; 
  }
    
   }
   
   void mousePressed() { 
   if(estado.equals("inicio") ){
     estado="pantalla 1";
     cuentaFotograma= 0; 
     }
     else if(estado.equals("pantalla 1") ){
       estado="pantalla 2";
       cuentaFotograma= 0;
     }
     else if(estado.equals("pantalla 2") ){
       estado="pantalla 3";
       cuentaFotograma= 0;
     }
      else if(estado.equals("pantalla 3") ){
       estado="pantalla 4";
       cuentaFotograma= 0;
     }
     else if(estado.equals("pantalla 4") ){
       estado="inicio";
       
       if (dist (mouseX,mouseY,320,320)<80){
         println("click en el circulo");
       }
    }
