// tp 2
// Diego Ezequiel Maidana
// com 3
int screen = 0; // Índice de la pantalla actual
int totalScreens = 3; // Número total de pantallas (sin contar la pantalla de reinicio)
int changeInterval = 2000; // Intervalo de tiempo para cambiar de pantalla (en milisegundos)
int fadeDuration = 1000; // Duración de la animación de fade (en milisegundos)
int lastChangeTime = 0; // Almacena el tiempo del último cambio de pantalla

void setup() {
  size(640, 480);
  lastChangeTime = millis(); // Inicializa el tiempo del último cambio
}

void draw() {
  background(0);
  int elapsedTime = millis() - lastChangeTime;
  
  if (screen < totalScreens && elapsedTime > changeInterval) {
    screen++; // Cambia a la siguiente pantalla
    lastChangeTime = millis(); // Actualiza el tiempo del último cambio
  }
  
  if (screen < totalScreens) {
    float alpha;
    if (elapsedTime < fadeDuration) {
      alpha = map(elapsedTime, 0, fadeDuration, 0, 255); // Fade in
    } else if (elapsedTime > changeInterval - fadeDuration) {
      alpha = map(elapsedTime, changeInterval - fadeDuration, changeInterval, 255, 0); // Fade out
    } else {
      alpha = 255; // Pantalla completamente visible
    }
    
    fill(255, alpha);
    textSize(32);
    textAlign(CENTER, CENTER);
    
    switch(screen) {
      case 0:
        text("El jardín de las Historias", width / 2, height / 2);
        text("Autores: grupo Biopus", 314, 265);

        break;
      case 1:
      textSize(20);
        text("Se trata de una instalación interactiva con una gran pantalla y", width / 2, height / 2);
        text(" la proyección de un bosque virtual, cuyos árboles se componen de frases", 314, 265);
        text(" cuyos árboles se componen de frases", 314, 290);

        break;
      case 2:
       textSize(20);
       text("Cada árbol y cada rama representan un relato", width / 2, height / 2);
       text("construyéndo una historia con la participación de diferentes personas", 314, 265);

        break;
    }
  } else {
    showRestartScreen();
  }
}

void showRestartScreen() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Fin", width / 2, height / 2 - 20);
  
  fill(255);
  rect(width / 2 - 50, height / 2 + 20, 100, 50);
  fill(0);
  textSize(20);
  text("Reiniciar", width / 2, height / 2 + 45);
}

void mousePressed() {
  if (screen >= totalScreens) {
    if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 + 20 && mouseY < height / 2 + 70) {
      screen = 0;
      lastChangeTime = millis();
    }
  }
}
