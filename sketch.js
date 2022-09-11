
// // #1 Bouncing ball
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





// // #2 bouning ball with class
// let bubble;
// let bubble1;
// let bubble2;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   bubble = new Bubble(0, 0, 50, 2.8, 2.2);
//   bubble1 = new Bubble(100, 100, 100, 5, 4);
//   bubble2 = new Bubble(400, 400, 70, 3, 4);
//   bubble.position();
//   bubble1.position();
//   bubble2.position();
// }

// function draw() {
//   background(0);
//   bubble.move();
//   bubble.bounce();
//   bubble.display();
//   bubble1.move();
//   bubble1.bounce();
//   bubble1.display();
//   bubble2.move();
//   bubble2.bounce();
//   bubble2.display();
// }

// class Bubble {
//   constructor(_x, _y, _rad, _speedX, _speedY) {
//     this.posX = _x;
//     this.posY = _y;
//     this.rad = _rad;
//     this.dirX = 1;
//     this.dirY = 1;
//     this.speedX = _speedX;
//     this.speedY = _speedY;

//   }
//   position() {
//     this.posX = width / 2;
//     this.posY = height / 2;
//   }

//   move() {
//     this.posX = this.posX + this.speedX * this.dirX;
//     this.posY = this.posY + this.speedY * this.dirY;
//   }

//   bounce() {
//     if (this.posX > width - this.rad || this.posX < this.rad) {
//       this.dirX *= -1;
//     }
//     if (this.posY > height - this.rad || this.posY < this.rad) {
//       this.dirY *= -1;
//     }
//   }

//   display() {
//     noStroke();
//     ellipseMode(RADIUS);
//     fill(255, 255, 0)
//     ellipse(this.posX, this.posY, this.rad, this.rad);
//   }
// }

// // #3 bouning ball with array
// let bubbles = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   for (let bubble = 0; bubble < 100; bubble++) {
//     let a_x = random(width)*bubble + 20;
//     let a_y = random(height)*bubble + 40;
//     let b_r = random(50);
//     let d_speedX = random(10);
//     let d_speedY = random(10);
//     bubbles[bubble] = new Bubble(a_x, a_y, b_r, d_speedX, d_speedY)
//     bubbles[bubble].position();
//   }
// }

// function draw() {
//   background(0);
//   for (let bubble = 0; bubble < bubbles.length; bubble++) {
//     bubbles[bubble].move();
//     bubbles[bubble].bounce();
//     bubbles[bubble].display();
//   }
// }

// class Bubble {
//   constructor(_x, _y, _rad, _speedX, _speedY) {
//     this.posX = _x;
//     this.posY = _y;
//     this.rad = _rad;
//     this.dirX = 1;
//     this.dirY = 1;
//     this.speedX = _speedX;
//     this.speedY = _speedY;

//   }
//   position() {
//     this.posX = width / 2;
//     this.posY = height / 2;
//   }

//   move() {
//     this.posX = this.posX + this.speedX * this.dirX;
//     this.posY = this.posY + this.speedY * this.dirY;
//   }

//   bounce() {
//     if (this.posX > width - this.rad || this.posX < this.rad) {
//       this.dirX *= -1;
//     }
//     if (this.posY > height - this.rad || this.posY < this.rad) {
//       this.dirY *= -1;
//     }
//   }

//   display() {
//     stroke(255, 255, 0);
//     strokeWeight(2);
//     noFill();
//     ellipseMode(RADIUS);
//     // fill(255, 255, 0);
//     ellipse(this.posX, this.posY, this.rad, this.rad);
//   }
// }


// // #4 attempt with mouseIsPressed
// let bubbles = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function mousePressed() {
//   let b_r = random(10, 50);
//   let d_speedX = random(10);
//   let d_speedY = random(10);
//   let b = new Bubble(mouseX, mouseY, b_r, d_speedX, d_speedY);
//   bubbles.push(b);

// }

// function draw() {
//   background(0);
//   for (let bubble = 0; bubble < bubbles.length; bubble++) {
//     bubbles[bubble].move();
//     bubbles[bubble].bounce();
//     bubbles[bubble].display();
//   }
// }

// class Bubble {
//   constructor(_x, _y, _rad, _speedX, _speedY) {
//     this.posX = _x;
//     this.posY = _y;
//     this.rad = _rad;
//     this.dirX = 1;
//     this.dirY = 1;
//     this.speedX = _speedX;
//     this.speedY = _speedY;

//   }

//   position() {
//     this.posX = width / mouseX;
//     this.posY = height / mouseY;
//   }

//   move() {
//     this.posX = this.posX + this.speedX * this.dirX;
//     this.posY = this.posY + this.speedY * this.dirY;
//   }

//   bounce() {
//     if (this.posX > width - this.rad || this.posX < this.rad) {
//       this.dirX *= -1;
//     }
//     if (this.posY > height - this.rad || this.posY < this.rad) {
//       this.dirY *= -1;
//     }
//   }

//   display() {
//     stroke(255, 255, 0);
//     strokeWeight(2);
//     noFill();
//     ellipseMode(RADIUS);
//     // fill(255, 255, 0);
//     ellipse(this.posX, this.posY, this.rad, this.rad);
//   }
// }


// #5 attempt with color_mousePressed
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let bubble = 0; bubble < 100; bubble++) {
    let a_x = random(width) * bubble + 20;
    let a_y = random(height) * bubble + 40;
    let b_r = random(50);
    let d_speedX = random(10);
    let d_speedY = random(10);
    bubbles[bubble] = new Bubble(a_x, a_y, b_r, d_speedX, d_speedY)
    bubbles[bubble].position();

  }
}

function mousePressed() {
  for (let bubble = 0; bubble < bubbles.length; bubble++) {
    bubbles[bubble].click(mouseX, mouseY);
  }

}

function draw() {
  background(0);
  for (let bubble = 0; bubble < bubbles.length; bubble++) {
    bubbles[bubble].move();
    bubbles[bubble].bounce();
    bubbles[bubble].display();
  }
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
    this.brightness = 0;

  }

  click(mX, mY) {
    let inside = dist(mX, mY, this.posX, this.posY);
    if (inside < this.rad) {
      console.log("You Clicked");
      this.brightness = 255;
    }
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
    stroke(255, 255, 0);
    strokeWeight(2);
    fill(this.brightness, 150);
    ellipse(this.posX, this.posY, this.rad, this.rad);
  }
}
