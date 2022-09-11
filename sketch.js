
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
bubble.radius();
bubble.speed();
bubble.direction();


function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble = new Bubble();
  bubble.position();


}

function draw() {
bubble.move();
bubble.bounce();
bubble.display();
}

class Bubble {
  radius() {
    this.rad = 50;
  }
  position() {
    this.x = width / 2;
    this.y = height / 2;
  }
  direction(){
    this.x = 1;
    this.y = 1;
  }
  speed(){
    this.x = 2.8;
    this.y = 2.2;
  }
  move() {
    this.x = position.x + speed.x * direction.x;
    this.y = position.y + speed.y * direction.y;
  }
  bounce() {
    if (position.x > width - radius.rad || position.x < radius.rad) {
      direction.x *= -1;
    }
    if (position.y > height - radius.rad || position.y < radius.rad) {
      direction.y *= -1;
    }
  }
  display() {
    background(0);
    noStroke();
    ellipseMode(RADIUS);
    fill(255, 255, 0)
    ellipse(position.x, position.y, radius.rad, radius.rad);
  }

}