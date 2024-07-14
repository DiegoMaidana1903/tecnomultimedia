//tp3
// Diego Ezequiel Maidana 44699939
// com 3
boolean animacionActivada = false; // Variable para controlar el estado de la animación

void setup() {
  size(800, 400);
}

void draw() {
  background(255);

  // Tamaño del cuadrado más grande
  float mod = 400 / 2;

  // Dibuja los cuadrados en las esquinas
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      float x = 400 + mod * i + mod / 2;
      float y = mod * j + mod / 2;
      dibujaCuadradosConcentricos(x, y, mod, 4);
    }
  }
  
  // Dibuja el cuadrado un poco más a la izquierda del centro del lado derecho
  float xDerecha = width - mod / 2 - 100; // Ajusta 100 píxeles hacia la izquierda
  float yDerecha = height / 2;
  dibujaCuadradosConcentricos(xDerecha, yDerecha, mod, 4);
}

void dibujaCuadradosConcentricos(float x_, float y_, float tam_, int cant_) {
  push();
  translate(x_, y_);
  rectMode(CENTER);
  
  // Calcula el ángulo de rotación inicial basado en la posición del cuadrado
  float anguloInicial = atan2(y_ - height / 2, x_ - width / 2);
  
  for (int i = 0; i < cant_; i++) {
    fill((i % 2) * 255);
    float lado = map(i, 0, cant_, tam_, 0);
    
    // Aplica la rotación inicial y la rotación animada si la animación está activada
    if (animacionActivada) {
      rotate(anguloInicial); // Rotación inicial
      rotate(sin(frameCount * 0.1)); // Rotación animada
    }
    
    rect(0, 0, lado, lado);
  }
  pop();
}

// Función que se ejecuta cuando se presiona el mouse
void mousePressed() {
  animacionActivada = !animacionActivada; // Cambia el estado de la animación al hacer clic
}
