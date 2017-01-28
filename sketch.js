var pw;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.changed(typing);
    background(0);
}

function draw() {
}

function typing() {
  background(255, 0, 0);
}
