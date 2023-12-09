let juego;
let boton1,boton2; 
let aven;
let pantalla;
function setup() {
  createCanvas(400, 200);
  juego= new Juego();
  aven = new Aventura();
  boton1 = new Boton(50, 100, 100, 40, "Boton 1", color(0, 150, 200));
  boton2 = new Boton(200, 100, 100, 40, "Boton 2", color(200, 0, 150)); 
  pantalla= new Pantalla();
  pantalla.loadImage("fondos 0.jpg");
}

function draw() {
  background(220);
  boton.draw();
  pantalla.display();
}

function mousePressed() {
  if (boton1.clicked(mouseX, mouseY)) {
    console.log("Boton 1 clicado!");
  } else if (boton2.clicked(mouseX, mouseY)) {
    console.log("Boton 2 clicado!");
  }
}
