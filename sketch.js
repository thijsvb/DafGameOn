var pw;
var things = [];
var locked = true;
var w = 0;
var tHeight;
var bins = "";
var wrong, computing, ding;

function preload() {
  wrong = loadSound("sounds/wrong.mp3");
  computing = loadSound("sounds/computing.mp3");
  ding = loadSound("sounds/ding.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.input(typing);
  pw.changed(pwTry);

  background(0);
  select("body").style("background-color", "#000000");
  rectMode(CENTER);
  stroke(255);
  fill(255);
  textAlign(LEFT, TOP);
  tHeight = ceil(height/25);
  textSize(tHeight);

  for(var i=0; i!=400; ++i) {
    bins += floor(random(2));
  }


  for(var i=0; i!=20; ++i) {
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
    for(var l=0; l!=10; ++l){
      var x = noise(millis()/250 + l*100) * -150;
      text(bins, x, height/2-height/5 + tHeight*l);
    }

    noStroke();
    fill(0, 255, 0, 127);
    w+=6;
    rect(width/2, height/2, w, height/5);

    if (w >= width) {
      computing.stop();
      ding.setVolume(1)
      ding.play();
      var link = createA("http://10.0.0.249:5201/", "Het wachtwoord zit onder de tafel");
      link.style("color", "white").style("text-decoration", "none");
      link.style("background-color", "#7f7f7f").style("padding", "8px");
      link.style("border-radius", "8px").position(width/2, height/4);
      noLoop();
    }
  }
}

function typing() {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  if(pw.value() == "0,317187") {
    locked = false;
    pw.remove();
    computing.setVolume(1)
    computing.loop();
  }
}

function pwTry() {
  if(wrong) {
    wrong.setVolume(1)
    wrong.play();
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
    ellipse(this.a.x, this.a.y, 5, 5);
    ellipse(this.b.x, this.b.y, 5, 5);
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
