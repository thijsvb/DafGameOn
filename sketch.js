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
  if(pw.value() == "test") {
    background(0, 255, 0);
    pw.remove();
    var link = createA("http://google.com", "Het wachtwoord zit onder de tafel");
    var button = createButton('');
    button.child(link);
    button.position(width/2, height/2);
  }
}
