var pw;

function setup() {
  fullscreen(true);
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.pos(width/2, height/2);
  pw.input(typing);
}

function draw() {
  background(0);
}

function typing() {
  background(255, 0, 0);
}
