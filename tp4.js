let estado=0;
let tiempoInicioJugar;
let dir, vel, tam;
let objetivoX;
let objetivoY;
let puntaje= 0;
let tiempoRestante=60;
let intervalo;

function setup() {
  createCanvas(600, 600);
  iniciarContador();

  tam=100;
  objetivoX=random(width);
  objetivoY=random(height);
  vel=7;
  dir=random(TWO_PI);
}


function draw() {
  background(255, 0, 0);
  fill(0);
  text("Puntaje:"+ puntaje, width/2-160, height/2-230);

  if (estado==0) {
    pantallaInicio();
  } else if (estado==1) {
    pantallaJugando();
  } else if (estado==2) {
    pantallaGano();
  } else if (estado==3) {
    pantallaPerdio();
  } else if (estado==4) {
    pantallaCreditos();
  }
}

function iniciarContador() {
  intervalo= setInterval(reducirTiempo, 1000);
}

function reducirTiempo() {
  if (tiempoRestante > 0) {
    tiempoRestante--;
  } else {
    clearInterval(intervalo);
    estado=3;
  }
}

function mousePressed() {
  if ( estado==0) {
    estado=1;
    tiempoInicioJugar=millis();
  } else if (estado==1) {
    let distancia= dist(mouseX, mouseY, objetivoX, objetivoY);
    if (distancia<tam/2) {
      objetivoX=random(width);
      objetivoY=random(height);
      puntaje +=10;
    } else {
      if (puntaje >=5) {
        puntaje-=5;
      } else {
        puntaje=0;

        tiempoRestante-= 10;

        estado=3
      }
    }
    if ( estado==2) {
      estado=4;
    } else if (estado==3) {
      estado=4;
    }
    if (estado==4) {
      estado=0;
    }
  }
}
