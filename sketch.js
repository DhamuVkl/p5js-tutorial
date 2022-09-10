
// 9 Bouncing ball
let rad = 50;
let speed = {
  x : 2.8,
  y : 2
}
let pos = {
  x : 0,
  y : 0
}
let dir = {
  x : 1,
  y : 1
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  ellipseMode(RADIUS);
  pos.x = width / 2;
  pos.y = height / 2;

}

function draw() {

  background(0);
  pos.x = pos.x + speed.x * dir.x;
  pos.y = pos.y + speed.y * dir.y;
  if (pos.x > width - rad || pos.x < rad) {
    dir.x *= -1;
  }
  if (pos.y > height - rad || pos.y < rad) {
    dir.y *= -1;
  }
  fill(255, 255, 0)
  ellipse(pos.x, pos.y, rad, rad);


}

