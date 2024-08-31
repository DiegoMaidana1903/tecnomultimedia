let animacionActivada = false;

function setup() {
  size(800, 400);

}


function draw() {
  background(255);
  
  let mod = 400 / 2;

  // Dibuja los cuadrados en las esquinas
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let x = 400 + mod * i + mod / 2;
      let y = mod * j + mod / 2;
      dibujaCuadradosConcentricos(x, y, mod, 4);
    }
  }
  
  // Dibuja el cuadrado un poco más a la izquierda del centro del lado derecho
  let xDerecha = width - mod / 2 - 100; // Ajusta 100 píxeles hacia la izquierda
  let yDerecha = height / 2;
  dibujaCuadradosConcentricos(xDerecha, yDerecha, mod, 4);
}

function dibujaCuadradosConcentricos( x_, y_, tam_,  cant_) {
  push();
  translate(x_, y_);
  rectMode(CENTER);
  
  // Calcula el ángulo de rotación inicial basado en la posición del cuadrado
  let anguloInicial = atan2(y_ - height / 2, x_ - width / 2);
  
  for (let i = 0; i < cant_; i++) {
    fill((i % 2) * 255);
   let lado = map(i, 0, cant_, tam_, 0);
    
    // Aplica la rotación inicial y la rotación animada si la animación está activada
    if (animacionActivada) {
      rotate(anguloInicial); // Rotación inicial
      rotate(sin(frameCount * 0.1)); // Rotación animada
    }
    
    rect(0, 0, lado, lado);
  }
  pop();

}

function mousePressed() {
  animacionActivada = !animacionActivada; // Cambia el estado de la animación al hacer clic
}
