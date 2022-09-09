let r, g, b, size;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  r = random(255);
  g = random(255);
  b = radians(255);
  circle(mouseX, mouseY, size);
  noStroke();
  fill(r, g, b);
}

function mousePressed() {
  background(0);
  size = random(100);
}
