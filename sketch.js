var pw;
var things = [];
var locked = true;
var w = 0;
var bins = [];
var s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.input(typing);

  background(0);
  rectMode(CENTER);
  stroke(255);
  strokeWeight(2);
  fill(255);

  for(var i=0; i!=400; ++i) {
    bins[i] = '';
    bins[i] += floor(random(2));
  }

  for(var i=0; i!=10; ++i) {
    things[i] = new Thing();
  }
}

function draw() {
  if(locked) {
    background(0);
    for(var i=0; i!=things.length; ++i) {
      things[i].move();
      things[i].show();
    }
  } else {
    background(0);
    fill(0, 255, 0);
    for(var l=0; l!=200; ++l){
      s = "";
      var r = floor(random(100));
      for(var i=0; i!=bins.length; ++i) {
        s += bins[(i+r)%bins.length];
      }
      text(s, 0, 10 + 10*l);
    }

    noStroke();
    fill(0, 255, 0, 127);
    w+=5;
    rect(width/2, height/2, w, height/5);

    if (w >= width) {
      var link = createA("http://google.com", "Het wachtwoord zit onder de tafel");
      link.style("color", "white").style("text-decoration", "none");
      var button = createButton('');
      button.child(link).style("background-color", "#7f7f7f").position(width/2, height/2);
    }
  }
}

function typing() {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  if(pw.value() == "0,317187") {
    locked = false;
    pw.remove();
  }
}

function Thing() {
  this.a = createVector(random(width), random(height));
  this.b = createVector(random(width), random(height));
  this.va = p5.Vector.random2D().mult(3);
  this.vb = p5.Vector.random2D().mult(3);
  this.dy = function() {
    return abs(this.a.y - this.b.y) * ((this.a.x - this.b.x)/abs(this.a.x - this.b.x));
  }

  this.show = function() {

    line(this.a.x, this.a.y, this.b.x + this.dy(), this.a.y);
    line(this.b.x + this.dy(), this.a.y, this.b.x, this.b.y);
    ellipse(this.a.x, this.a.y, 10, 10);
    ellipse(this.b.x, this.b.y, 10, 10);
  }

  this.move = function() {
    this.a.add(this.va);
    this.b.add(this.vb);

    this.a.x = (this.a.x+width)%width;
    this.a.y = (this.a.y+height)%height;
    this.b.x = (this.b.x+width)%width;
    this.b.y = (this.b.y+height)%height;
  }
}
