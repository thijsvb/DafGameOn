var pw;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pw = createInput('');
  pw.position(width/2, height/2);
  pw.input(typing);
  background(0);
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
    button.child(link).style("color", "#0f0f0f").position(width/2, height/2);
  }
}
