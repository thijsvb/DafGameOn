var pw;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.input(typing);

  background(0);
  stroke(255);
  strokeWeight(5);
  fill(255);
  for(var i=0; i!=10; ++i) {
    var a = createVector(random(width), random(height));
    var b = createVector(random(width), random(height));
    var dy = abs(a.y - b.y) * ((a.x - b.x)/abs(a.x - b.x));
    line(a.x, a.y, b.x - dy, a.y);
    line(b.x - dy, a.y, b.x, b.y);
    ellipse(a.x, a.y, 10, 10);
    ellipse(b.x, b.y, 10, 10);
  }
}

function draw() {

}

function typing() {
  background(255, 0, 0);
  if(pw.value() == "test") {
    background(0, 255, 0);
    pw.remove();
    var link = createA("http://google.com", "Het wachtwoord zit onder de tafel");
    link.style("color", "white").style("text-decoration", "none");
    var button = createButton('');
    button.child(link).style("background-color", "#7f7f7f").position(width/2, height/2);
  }
}
