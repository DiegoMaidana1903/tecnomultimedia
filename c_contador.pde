class Contador {
  constructor() {
    this.tiempoInicial = 120;
    this.tiempoRestante = this.tiempoInicial;
    this.intervalo = null;
    this.finalizado = false;
  }

  iniciar() {
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.finalizado = true;
        clearInterval(this.intervalo);
      }
    }, 1000);
  }

  detener() {
    clearInterval(this.intervalo);
    this.finalizado = true;
  }

  reiniciar() {
    clearInterval(this.intervalo);
    this.tiempoRestante = this.tiempoInicial;
    this.finalizado = false;
    this.iniciar();
  }
