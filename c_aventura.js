class Aventura{
  
 constructor(){
   this.estado=0;
   this.pantalla= new Pantalla;
   this.cantPantallas= 47;
   this.fondos=[];
   this.textos = loadStrings('data/textos.txt');
   print(textos[0]);
   print(textos[45]);
   this.botones=[];
}
  
  for(let i=0; i< this.cantPantallas; i++) {
  this.fondos[i]= loadImage("data/fondos"+ i + "jpg");  
     }
     
     draw(){
        if ( estado == 0 ) {
    dibujaPantalla( fondos[0], textos[0] );
        }else  if ( estado == 1 ) {
    dibujaPantalla( fondos[1], textos[1] );
        }else  if ( estado == 2 ) {
    dibujaPantalla( fondos[1], textos[2] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 3 ) {
    dibujaPantalla( fondos[1], textos[3] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 4 ) {
    dibujaPantalla( fondos[2], textos[4] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 5 ) {
    dibujaPantalla( fondos[2], textos[5] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 6 ) {
    dibujaPantalla( fondos[2], textos[6] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 7 ) {
    dibujaPantalla( fondos[2], textos[7] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 8 ) {
    dibujaPantalla( fondos[2], textos[8] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 9 ) {
    dibujaPantalla( fondos[3], textos[9] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 10 ) {
    dibujaPantalla( fondos[3], textos[10] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 11 ) {
    dibujaPantalla( fondos[3], textos[11] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 12 ) {
    dibujaPantalla( fondos[3], textos[12] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 13 ) {
    dibujaPantalla( fondos[3], textos[13] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 14 ) {
    dibujaPantalla( fondos[4], textos[14] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 15 ) {
    dibujaPantalla( fondos[4], textos[15] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 16 ) {
    dibujaPantalla( fondos[4], textos[16] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 17 ) {
    dibujaPantalla( fondos[4], textos[17] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "DECIR LA VERDAD");
    dibujaBoton2( width/4, height/3, 120, 80, "MENTIR");
  } else  if ( estado == 18 ) {
    dibujaPantalla( fondos[4], textos[38] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 19 ) {
    dibujaPantalla( fondos[4], textos[39] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }  else  if ( estado == 20 ) {
    dibujaPantalla( fondos[4], textos[18] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 21 ) {
    dibujaPantalla( fondos[4], textos[19] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 22 ) {
    dibujaPantalla( fondos[4], textos[20] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 23 ) {
    dibujaPantalla( fondos[4], textos[21] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 24 ) {
    dibujaPantalla( fondos[4], textos[22] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 25 ) {
    dibujaPantalla( fondos[5], textos[23] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 26 ) {
    dibujaPantalla( fondos[5], textos[24] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 27 ) {
    dibujaPantalla( fondos[5], textos[25] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 28 ) {
    dibujaPantalla( fondos[5], textos[26] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 29 ) {
    dibujaPantalla( fondos[5], textos[27] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 30 ) {
    dibujaPantalla( fondos[5], textos[28] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "USAR OTRO TRAJE");
    dibujaBoton2( width/4, height/3, 120, 80, "USAR EL TRAJE NUEVO");
  }else  if ( estado == 31 ) {
    dibujaPantalla( fondos[4], textos[40] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 32 ) {
    dibujaPantalla( fondos[4], textos[41] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 33 ) {
    dibujaPantalla( fondos[4], textos[42] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 34 ) {
    dibujaPantalla( fondos[5], textos[29] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 35 ) {
    dibujaPantalla( fondos[5], textos[30] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 36 ) {
    dibujaPantalla( fondos[5], textos[31] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 37 ) {
    dibujaPantalla( fondos[5], textos[32] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 38 ) {
    dibujaPantalla( fondos[5], textos[33] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 39 ) {
    dibujaPantalla( fondos[5], textos[34] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 40 ) {
    dibujaPantalla( fondos[6], textos[35] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SER ARROGANTE");
    dibujaBoton2( width/4, height/3, 120, 80, "AVERGONZARSE");
  }else  if ( estado == 41 ) {
    dibujaPantalla( fondos[4], textos[43] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 42 ) {
    dibujaPantalla( fondos[4], textos[44] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 43 ) {
    dibujaPantalla( fondos[4], textos[45] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }  else  if ( estado == 44 ) {
    dibujaPantalla( fondos[6], textos[36] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 45 ) {
    dibujaPantalla( fondos[6], textos[37] );
    dibujaBoton1( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBoton2( width/4, height/3, 120, 80, "ANTERIOR");
  }
       
     }
     
     actualizar(){
       background(250,250,0);
       this.pantalla.actualizar(
       this.fondos[ this.estado],
       this.textos[ this.estado]);
     
   }
}
