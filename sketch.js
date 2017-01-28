var pw;

function setup() {
  fullscreen(true);
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.input(typing);
}

function draw() {
  background(0);
}

function typing() {
  background(255, 0, 0);
}
