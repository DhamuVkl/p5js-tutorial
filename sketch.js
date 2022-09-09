
// 9 Bouncing ball
let rad = 50;
let speedx = 2.8;
let speedy = 2.2;
let x, y;
let xdir = 1;
let ydir = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  ellipseMode(RADIUS);
  x = width / 2;
  y = height / 2;

}

function draw() {

  background(0);
  x = x + speedx * xdir;
  y = y + speedy * ydir;
  if (x > width - rad || x < rad) {
    xdir *= -1;
  }
  if (y > height - rad || y < rad) {
    ydir *= -1;
  }
  fill(255, 255, 0)
  ellipse(x, y, rad, rad);


}

