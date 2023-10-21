let juego;
let contador;
let sonidoColision;

function setup() {
  createCanvas(600, 600);
  juego= new Juego();
}

function draw() {
  juego.actualizar();
}

function mousePressed(){
  juego.mousePressed();
}
