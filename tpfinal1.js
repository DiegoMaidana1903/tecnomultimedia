let estado = 0;
let cantPantallas = 47;
let fondosG = [];
let textos = [];
let botones = [];

function preload() {
  // Cargar los textos y los fondos
  textos = loadStrings('data/textos.txt');
  for (let i = 0; i < cantPantallas; i++) {
    fondosG[i] = loadImage("data/fondosG" + i + ".jpg");
  }
}

function setup() {
  createCanvas(800, 600);
  print(textos[0]);
  print(textos[46]);
}

function draw() {
  background(220);

  // Verificar el estado y mostrar la pantalla correspondiente
  if (estado === 0) {
    dibujaPantalla(fondos[0], textos[0]);
  } else if (estado === 1) {
    dibujaPantalla(fondos[1], textos[1]);
  } else if (estado === 2) {
    dibujaPantalla(fondos[1], textos[2]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 3) {
    dibujaPantalla(fondos[1], textos[3]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 4) {
    dibujaPantalla(fondos[2], textos[4]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 5) {
    dibujaPantalla(fondos[2], textos[5]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 6) {
    dibujaPantalla(fondos[1], textos[6]);
  } else if (estado === 7) {
    dibujaPantalla(fondos[1], textos[7]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 8) {
    dibujaPantalla(fondos[1], textos[8]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 9) {
    dibujaPantalla(fondos[2], textos[9]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 10) {
    dibujaPantalla(fondos[2], textos[10]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  }else if (estado === 11) {
    dibujaPantalla(fondos[1], textos[11]);
  } else if (estado === 12) {
    dibujaPantalla(fondos[1], textos[12]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 13) {
    dibujaPantalla(fondos[1], textos[13]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 14) {
    dibujaPantalla(fondos[2], textos[14]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 15) {
    dibujaPantalla(fondos[2], textos[15]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 16) {
    dibujaPantalla(fondos[1], textos[16]);
  } else if (estado === 17) {
    dibujaPantalla(fondos[1], textos[17]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 18) {
    dibujaPantalla(fondos[1], textos[18]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 19) {
    dibujaPantalla(fondos[2], textos[19]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 20) {
    dibujaPantalla(fondos[2], textos[20]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 21) {
    dibujaPantalla(fondos[1], textos[21]);
  } else if (estado === 22) {
    dibujaPantalla(fondos[1], textos[22]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 23) {
    dibujaPantalla(fondos[1], textos[23]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "LA MAQUINA SE DEFIENDE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "LA MAQUINA NO SE DEFIENDE", -1);
  } else if (estado === 24) {
    dibujaPantalla(fondos[2], textos[24]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 25) {
    dibujaPantalla(fondos[2], textos[25]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 26) {
    dibujaPantalla(fondos[1], textos[26]);
    ibujaPantalla(fondos[1], textos[27]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "lOS EXPLOSIVOS FUNCIONAN", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "LOS EXPLOSIVOS NO FUNCIONAN", -1);
  } else if (estado === 27) {
    dibujaPantalla(fondos[1], textos[27]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 28) {
    dibujaPantalla(fondos[1], textos[28]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 29) {
    dibujaPantalla(fondos[2], textos[29]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 30) {
    dibujaPantalla(fondos[2], textos[30]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  }else if (estado === 31) {
    dibujaPantalla(fondos[1], textos[31]);
  } else if (estado === 32) {
    dibujaPantalla(fondos[1], textos[32]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 33) {
    dibujaPantalla(fondos[1], textos[33]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 34) {
    dibujaPantalla(fondos[2], textos[34]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "AMURO LOGRA DESVIARLO Y DESAPARECE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "AMURO LOGRA DESVIARLO Y NO DESAPARECE", -1);
  } else if (estado === 35) {
    dibujaPantalla(fondos[2], textos[35]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 36) {
    dibujaPantalla(fondos[1], textos[36]);
  } else if (estado === 37) {
    dibujaPantalla(fondos[1], textos[37]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 38) {
    dibujaPantalla(fondos[1], textos[38]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 39) {
    dibujaPantalla(fondos[2], textos[39]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 40) {
    dibujaPantalla(fondos[2], textos[40]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  }else if (estado === 41) {
    dibujaPantalla(fondos[1], textos[41]);
  } else if (estado === 42) {
    dibujaPantalla(fondos[1], textos[42]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 43) {
    dibujaPantalla(fondos[1], textos[43]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 44) {
    dibujaPantalla(fondos[2], textos[44]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  } else if (estado === 45) {
    dibujaPantalla(fondos[2], textos[45]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  }else if (estado === 46) {
    dibujaPantalla(fondos[2], textos[46]);
    dibujaBoton(width / 4 * 3, height / 3, 120, 80, "SIGUIENTE", 1);
    dibujaBoton(width / 4, height / 3, 120, 80, "ANTERIOR", -1);
  }

}

function dibujaPantalla(fondo, texto) {
  image(fondo, 0, 0, width, height);
  textSize(24);
  fill(0);
  text(texto, 20, 40);
}

function dibujaBoton(x, y, ancho, alto, texto, cambioEstado) {
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
  if (mouseIsPressed && mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    estado += cambioEstado;
    estado = constrain(estado, 0, cantPantallas - 1);  // Limitar el rango de estados
  }
}

function actualizar() {
  background(250, 250, 0);
  dibujaPantalla(fondos[estado], textos[estado]);
}
