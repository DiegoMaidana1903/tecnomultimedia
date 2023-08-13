
void setup() {
  size(800, 400);
}


void draw() {
  background(255);
  for ( int i=0; i<18; i++) {
    rectMode(CENTER);
    float tam= map(i, 0, 17, 180, 0);
    fill(i%2*255);
    rect(100, 100, tam, tam);

    for ( int j=0; j<18; j++) {
      rectMode(CENTER);
      map(j, 0, 17, 180, 0);
      fill(j%2*255);
      rect(290, 290, tam, tam);
    }

    for ( int k=0; k<18; k++) {
      rectMode(CENTER);
      map(k, 0, 17, 180, 0);
      fill(k%2*255);
      rect(290, 100, tam, tam);
    }

    for ( int m=0; m<18; m++) {
      rectMode(CENTER);
      map(m, 0, 17, 180, 0);
      fill(m%2*255);
      rect(100, 290, tam, tam);
    }
  }
}
