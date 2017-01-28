var pw;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.changed(typing);
}

function draw() {
  background(0);
}

function typing() {
  background(255, 0, 0);
}
