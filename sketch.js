
// // #9 Bouncing ball
// let rad = 50;
// let speed = {
//   x: 2.8,
//   y: 2
// }
// let pos = {
//   x: 0,
//   y: 0
// }
// let dir = {
//   x: 1,
//   y: 1
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   pos.x = width / 2;
//   pos.y = height / 2;

// }

// function draw() {
//   move();
//   bounce();
//   display();
// }

// function move() {

//   pos.x = pos.x + speed.x * dir.x;
//   pos.y = pos.y + speed.y * dir.y;
// }

// function bounce() {

//   if (pos.x > width - rad || pos.x < rad) {
//     dir.x *= -1;
//   }
//   if (pos.y > height - rad || pos.y < rad) {
//     dir.y *= -1;
//   }
// }

// function display() {
//   background(0);
//   noStroke();
//   ellipseMode(RADIUS);
//   fill(255, 255, 0)
//   ellipse(pos.x, pos.y, rad, rad);
// }






let bubble;
let bubble1;
let bubble2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble = new Bubble(0, 0, 50, 2.8, 2.2);
  bubble1 = new Bubble(100, 100, 100, 5, 4);
  bubble2 = new Bubble(400, 400, 70, 3, 4);
  bubble.position();
  bubble1.position();
  bubble2.position();
}

function draw() {
  background(0);
  bubble.move();
  bubble.bounce();
  bubble.display();
  bubble1.move();
  bubble1.bounce();
  bubble1.display();
  bubble2.move();
  bubble2.bounce();
  bubble2.display();
}

class Bubble {
  constructor(_x, _y, _rad, _speedX, _speedY) {
    this.posX = _x;
    this.posY = _y;
    this.rad = _rad;
    this.dirX = 1;
    this.dirY = 1;
    this.speedX = _speedX;
    this.speedY = _speedY;

  }
  position() {
    this.posX = width / 2;
    this.posY = height / 2;
  }

  move() {
    this.posX = this.posX + this.speedX * this.dirX;
    this.posY = this.posY + this.speedY * this.dirY;
  }

  bounce() {
    if (this.posX > width - this.rad || this.posX < this.rad) {
      this.dirX *= -1;
    }
    if (this.posY > height - this.rad || this.posY < this.rad) {
      this.dirY *= -1;
    }
  }

  display() {
    noStroke();
    ellipseMode(RADIUS);
    fill(255, 255, 0)
    ellipse(this.posX, this.posY, this.rad, this.rad);
  }
}