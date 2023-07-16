// Diego Ezequiel Maidana
//88102/2
//comision 3
//tp 3: Aventura Gráfica



PImage[] fondos;
String[] textos;
int cantImagenes = 7;
int estado;


void setup() {
  size(600, 600);

  
  fondos = new PImage[20];
  //ahora con un for cargo las imagenes:
  for ( int i=0; i<cantImagenes; i++ ) {
    fondos[i] = loadImage("fondos/fondo"+nf(i, 2),"jpg");

    
  }

 
  textos = new String[70];
  
  textos[0] = "Hacia muchos años vivia un emperador tan aficionado a los trajes nuevos que gastaba todo su dinero en vestir con maxima elegancia";
  textos[1] = "Un dia se presentaron dos picaros que se hacian pasar por tejedores, decian a todos que eran capaces de tejer las telas mas esplendidas que pudiera imaginarse";
  textos[2] = "La noticia no tardo en llegar a la corte";
  textos[3] = "El emperador penso: deben ser trajes magnificos, si los llevase podria averiguar que funcionarios del reino son indignos del cargo que desempeñan";
  textos[4] = "Podria distinguir a los listos de los tontos, si debo encargar inmediatamente que me hagan un traje, y entrego mucho dinero a los estafadores para comenzar con su trabajo";
  textos[5] = "Los picaros instalaron dos telares y simularon que trabajaban en ellos aunque estaban totalmente vacíos";
  textos[6] = "Con toda urgencia, exigieron las sedas más finas y el hilo de oro de la mejor calidad";
  textos[7] = " Guardaron en sus alforjas todo esto y trabajaron en los telares vacíos hasta muy entrada la noche";
  textos[8] = "Me gustaría saber lo que han avanzado con la tela, pensaba el Emperador, pero se encontraba un poco confuso en su interior al pensar que el que fuese tonto o indigno de su cargo no podría ver lo que estaban tejiendo";
  textos[9] = "Enviaré a mi viejo ministro a que visite a los tejedores, pensó el Emperador.";
  textos[10] = "El viejo y digno ministro se presentó, pues, en la sala ocupada por los dos pícaros, que seguían trabajando en los telares vacíos";
  textos[11] = "El viejo ministro pensando ¿Seré tonto acaso? ¿Es posible que sea inútil para el cargo? No debo decir a nadie que no he visto la tela ";
  textos[12] = "Fingiendo y diciendo a los picaros que era un traje maravilloso salio de ahi y  tuvo buen cuidado de quedarse las explicaciones en la memoria para poder repetirlas al Emperador, y así lo hizo";
  textos[13] = "Los estafadores volvieron a pedir más dinero, más seda y más oro, ya que lo necesitaban para seguir tejiendo";
  textos[14] = " Lo almacenaron todo en sus alforjas, pues ni una hebra se empleó en el telar, y ellos continuaron, como antes, trabajando en el telar vacío";
  textos[15] = " Poco después el Emperador envió a otro funcionario de confianza a inspeccionar el estado del tejido";
  textos[16] = "Al segundo le ocurrió lo que al primero; miró y remiró pero, como en el telar no había nada, nada pudo ver";
  textos[17] = "Yo no soy tonto, pensó el funcionario. Luego, ¿será mi alto cargo el que no me merezco? ¡Qué cosa más extraña! No diré nada a nadie. Es preciso que nadie se dé cuenta";
  textos[18] = "Así es que elogió la tela que no veía, y les expresó su satisfacción por aquellos hermosos colores y aquel precioso dibujo";
  textos[19] = "El emperador penso: deben ser trajes magnificos, si los llevase podria averiguar que funcionarios del reino son indignos del cargo que desempeñanAl día siguiente, se presentó ante el Emperador y le informó: —¡El tejido es digno de admiración!";
  textos[20] = "Todos en la ciudad hablaban de la espléndida tela como si la hubiesen visto. El Emperador, entonces, también quiso verla antes de que la sacasen del telar.";
  textos[21] = "Seguido de una multitud de personajes distinguidos, entre los cuales figuraban los dos viejos y buenos funcionarios que habían ido antes, se encaminó a la sala donde se encontraban los pícaros, los cuales continuaban tejiendo afanosamente, aunque sin hebra de hilo.";
  textos[22] = "¿Qué es esto?, pensó el Emperador. ¡Yo no veo nada! ¡Esto es terrible! ¿Seré tonto? ¿O es que no merezco ser emperador? ¡Resultaría espantoso que fuese así!";
  textos[23] = " ¡Oh, es bellísima! –dijo en voz alta–. Tiene mi real aprobación. –Y con un gesto de agrado miraba el telar vacío, sin decir ni una palabra de que no veía nada.";
  textos[24] = "Durante toda la noche que precedió al día de la fiesta, los dos embaucadores estuvieron levantados, con más de dieciséis lámparas encendidas. La gente pudo ver que trabajaban activamente en la confección del nuevo traje del Emperador";
  textos[25] = "Simularon quitar la tela del telar, cortaron el aire con grandes tijeras y cosieron con agujas sin hebra de hilo; hasta que al fin, gritaron:—¡Mirad, el traje está listo!";
  textos[26] = "A la mañana siguiente, llegó el Emperador en compañía de sus caballeros más distinguidos, y los dos truhanes, levantando los brazos como si sostuviesen algo, dijeron: —¡Estos son los pantalones! ¡La casaca! ¡El manto! Y así fueron nombrando todas las piezas del traje.";
  textos[27] = "El Emperador se despojó de todas sus prendas, y los pícaros simularon entregarle las diversas piezas del vestido nuevo, que pretendían haber terminado poco antes. Luego hicieron como si atasen algo a la cintura del Emperador: era la cola y el Monarca se movía y contorneaba ante el espejo. ";
  textos[28] = "—¡Dios, y qué bien le sienta, le va estupendamente! –exclamaron todos–. ¡Qué dibujos! ¡Qué colores! ¡Es un traje precioso! —El palio para el desfile os espera ya en la calle, Majestad –anunció el maestro deceremonias.";
  textos[29] = "—¡Sí, estoy preparado! –dijo el Emperador–. ¿Verdad que me sienta bien? –Y de nuevo se miró al espejo, haciendo como si estuviera contemplando sus vestidos.";
  textos[30] = " Los chambelanes encargados de llevar la cola bajaron las manos al suelo para levantarla, y siguieron con las manos en alto como si estuvieran sosteniendo algo en el aire; por nada del mundo hubieran confesado que no veían nada.";
  textos[31] = "Y de ese modo marchó el Emperador bajo el espléndido palio, mientras que todas las gentes, en la calle y en las ventanas, decían:";
  textos[32] = "—¡Qué precioso es el nuevo traje del Emperador! ¡Qué magnífica cola! ¡Qué bien le sienta! Nadie permitía que los demás se dieran cuenta de que no veían nada, porque eso hubiera significado que eran indignos de su cargo o que eran tontos de remate.";
 textos[33] = "Ningún traje del Emperador había tenido tanto éxito como aquel. —¡Pero si no lleva nada! –exclamó de pronto un niño.";
  textos[34] = "—¡Dios mío, escuchad la voz de la inocencia! –dijo su padre. Y todo el mundo empezó a cuchichear sobre lo que acababa de decir el pequeño. —¡Pero si no lleva nada puesto! ¡Es un niño el que dice que no lleva nada puesto! —¡No lleva traje! –gritó, al fin, todo el pueblo.";
  textos[35] = "Aquello inquietó al Emperador, porque pensaba que el pueblo tenía razón; pero se dijo: Hay que seguir en la procesión hasta el final.";
  textos[36] = "Y se irguió aún con mayor arrogancia que antes; y los chambelanes continuaron portando la inexistente cola.";
  textos[37] = "FIN";
  textos[38] = "El viejo ministro le informo al emperador la verdad que habia descubierto sobre los estafadores y los encerraron en la carcel por el resto de sus vidas";
  textos[39] = "FIN";
  textos[40] = "El emperador uso un traje que le gusto más y que pensó que seria mejor para la ocasión y dejo el traje nuevo para una ocasión especial.";
  textos[41] = "Y así el emperador marchó mientras todo el pueblo lo admiraba y decía cumplidos sobre su traje";
  textos[42] = "FIN";
  textos[43] = "El emperador al darse cuenta que fue un tonto y que no merecía su cargo decidió irse del pueblo y dejando todo atrás sin nuevo traje y sin ropa ";
  textos[44] = "Y así el emperador siguió marchando sin parar lejos de todo solo, sin sus súbditos y sin sus sirvientes, diciendo que era un tonto";
  textos[45] = "FIN";
}

void draw() {
  if ( estado == 0 ) {
    dibujaPantalla( fondos[0], textos[0] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
  } else  if ( estado == 1 ) {
    dibujaPantalla( fondos[1], textos[1] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 2 ) {
    dibujaPantalla( fondos[1], textos[2] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 3 ) {
    dibujaPantalla( fondos[1], textos[3] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 4 ) {
    dibujaPantalla( fondos[2], textos[4] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 5 ) {
    dibujaPantalla( fondos[2], textos[5] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 6 ) {
    dibujaPantalla( fondos[2], textos[6] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 7 ) {
    dibujaPantalla( fondos[2], textos[7] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 8 ) {
    dibujaPantalla( fondos[2], textos[8] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 9 ) {
    dibujaPantalla( fondos[3], textos[9] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 10 ) {
    dibujaPantalla( fondos[3], textos[10] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 11 ) {
    dibujaPantalla( fondos[3], textos[11] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 12 ) {
    dibujaPantalla( fondos[3], textos[12] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 13 ) {
    dibujaPantalla( fondos[3], textos[13] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 14 ) {
    dibujaPantalla( fondos[4], textos[14] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 15 ) {
    dibujaPantalla( fondos[4], textos[15] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 16 ) {
    dibujaPantalla( fondos[4], textos[16] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 17 ) {
    dibujaPantalla( fondos[4], textos[17] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 18 ) {
    dibujaPantalla( fondos[4], textos[18] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 19 ) {
    dibujaPantalla( fondos[4], textos[19] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 20 ) {
    dibujaPantalla( fondos[4], textos[20] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 21 ) {
    dibujaPantalla( fondos[4], textos[21] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 22 ) {
    dibujaPantalla( fondos[4], textos[22] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 23 ) {
    dibujaPantalla( fondos[5], textos[23] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 24 ) {
    dibujaPantalla( fondos[5], textos[24] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 25 ) {
    dibujaPantalla( fondos[5], textos[25] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 26 ) {
    dibujaPantalla( fondos[5], textos[26] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 27 ) {
    dibujaPantalla( fondos[5], textos[27] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 28 ) {
    dibujaPantalla( fondos[5], textos[28] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 29 ) {
    dibujaPantalla( fondos[5], textos[29] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 30 ) {
    dibujaPantalla( fondos[5], textos[30] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 31 ) {
    dibujaPantalla( fondos[5], textos[31] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 32 ) {
    dibujaPantalla( fondos[5], textos[32] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 33 ) {
    dibujaPantalla( fondos[5], textos[33] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 34 ) {
    dibujaPantalla( fondos[5], textos[34] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 35 ) {
    dibujaPantalla( fondos[6], textos[35] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  } else  if ( estado == 36 ) {
    dibujaPantalla( fondos[6], textos[36] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }else  if ( estado == 37 ) {
    dibujaPantalla( fondos[6], textos[37] );
    dibujaBotonRectangular( width/4*3, height/3, 120, 80, "SIGUIENTE");
    dibujaBotonRectangular( width/4, height/3, 120, 80, "ANTERIOR");
  }
}
