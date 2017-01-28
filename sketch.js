var pw;
var things = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.input(typing);

  background(0);

  for(var i=0; i!=10; ++i) {
    things[i] = new Thing();
  }
}

function draw() {
  for(var i=0; i!=things.length; ++i) {
    things[i].move();
    things[i].show();
  }
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

function Thing() {
  this.a = createVector(random(width), random(height));
  this.b = createVector(random(width), random(height));
  this.dy = function() {
    return abs(this.a.y - this.b.y) * ((this.a.x - this.b.x)/abs(this.a.x - this.b.x));
  }

  this.show = function() {
    stroke(255);
    strokeWeight(5);
    fill(255);

    line(this.a.x, this.a.y, this.b.x + this.dy(), this.a.y);
    line(this.b.x + this.dy(), this.a.y, this.b.x, this.b.y);
    ellipse(this.a.x, this.a.y, 10, 10);
    ellipse(this.b.x, this.b.y, 10, 10);
  }

  this.move = function() {
    this.a.add(p5.Vector.random2D().mult(3));
    this.b.add(p5.Vector.random2D().mult(3));
  }
}
