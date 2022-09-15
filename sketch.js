
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
// // ! changes => removed position in setup also improved the bounce() and move()
// let bubble;
// let bubble1;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     bubble = new Bubble(0, 0, 50, 2.8, 2.2);
//     bubble1 = new Bubble(100, 100, 100, 5, 4);
// }

// function draw() {
//     background(0);
//     bubble.move();
//     bubble.bounce();
//     bubble.display();
//     bubble1.move();
//     bubble1.bounce();
//     bubble1.display();
// }

// class Bubble {
//     constructor(_x, _y, _rad, _speedX, _speedY) {
//         this.ball_X = _x + _rad; // ! added _rad to avoid stuck in orgin(0,0)
//         this.ball_Y = _y + _rad;
//         this.rad = _rad;
//         this.dirX = -1;
//         this.dirY = -1;
//         this.ball_speed_X = _speedX;
//         this.ball_speed_Y = _speedY;

//     }

//     move() {
//         this.ball_X += this.ball_speed_X;
//         this.ball_Y += this.ball_speed_Y;
//     }

//     bounce() {
//         if (this.ball_X + this.rad > width || this.ball_X - this.rad < 0) {
//             this.ball_speed_X *= this.dirX;
//         }

//         if (this.ball_Y + this.rad > height || this.ball_Y - this.rad < 0) {
//             this.ball_speed_Y *= this.dirY;
//         }
//     }

//     display() {
//         noStroke();
//         fill(255, 255, 0)
//         circle(this.ball_X, this.ball_Y, this.rad * 2);
//     }
// }

// // #3 bouning ball with array
// let bubbles = [];

// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     for (let bubble = 0; bubble < 100; bubble++) {
//         let b_r = random(10, 50);
//         let a_x = random(width - b_r * 2); // ! less the position(a_x, a_y) to avoid stuck in end of window when place the bubble
//         let a_y = random(height - b_r * 2);
//         let d_speedX = random(2, 10);
//         let d_speedY = random(1, 10);
//         bubbles[bubble] = new Bubble(a_x, a_y, b_r, d_speedX, d_speedY);
//     }
// }

// function draw() {
//     background(0);
//     for (let bubble = 0; bubble < bubbles.length; bubble++) {
//         bubbles[bubble].move();
//         bubbles[bubble].bounce();
//         bubbles[bubble].display();
//     }
// }

// class Bubble {
//     constructor(_x, _y, _rad, _speedX, _speedY) {
//         this.ball_X = _x + _rad; // ! added _rad to avoid stuck in orgin(0,0)
//         this.ball_Y = _y + _rad;
//         this.rad = _rad;
//         this.dirX = -1;
//         this.dirY = -1;
//         this.ball_speed_X = _speedX;
//         this.ball_speed_Y = _speedY;
//     }

//     move() {
//         this.ball_X += this.ball_speed_X;
//         this.ball_Y += this.ball_speed_Y;
//     }

//     bounce() {
//         if (this.ball_X + this.rad > width || this.ball_X - this.rad < 0) {
//             this.ball_speed_X *= this.dirX;
//         }

//         if (this.ball_Y + this.rad > height || this.ball_Y - this.rad < 0) {
//             this.ball_speed_Y *= this.dirY;
//         }
//     }

//     display() {
//         stroke(255, 255, 0);
//         strokeWeight(2);
//         noFill();
//         circle(this.ball_X, this.ball_Y, this.rad * 2);
//     }
// }


// // #4 attempt with mousePressed
// let bubbles = [];

// function setup() {
//     createCanvas(windowWidth, windowHeight);
// }

// function mousePressed() {
//     let b_r = random(10, 50);
//     let d_speedX = random(2, 10);
//     let d_speedY = random(1, 10);
//     let bubble = new Bubble(mouseX, mouseY, b_r, d_speedX, d_speedY);
//     bubbles.push(bubble);

// }

// function draw() {
//     background(0);
//     for (let bubble = 0; bubble < bubbles.length; bubble++) {
//         bubbles[bubble].move();
//         bubbles[bubble].bounce();
//         bubbles[bubble].display();
//     }
// }

// class Bubble {
//     constructor(_x, _y, _rad, _speedX, _speedY) {
//         this.ball_X = _x + _rad; // ! added _rad to avoid stuck in orgin(0,0)
//         this.ball_Y = _y + _rad;
//         this.rad = _rad;
//         this.dirX = -1;
//         this.dirY = -1;
//         this.ball_speed_X = _speedX;
//         this.ball_speed_Y = _speedY;
//     }

//     move() {
//         this.ball_X += this.ball_speed_X;
//         this.ball_Y += this.ball_speed_Y;
//     }

//     bounce() {
//         if (this.ball_X + this.rad > width || this.ball_X - this.rad < 0) {
//             this.ball_speed_X *= this.dirX;
//         }

//         if (this.ball_Y + this.rad > height || this.ball_Y - this.rad < 0) {
//             this.ball_speed_Y *= this.dirY;
//         }
//     }

//     display() {
//         stroke(255, 255, 0);
//         strokeWeight(2);
//         noFill();
//         circle(this.ball_X, this.ball_Y, this.rad * 2);
//     }
// }


// #5 attempt with color_mousePressed
let bubbles = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    for (let bubble = 0; bubble < 100; bubble++) {
        let b_r = random(20, 50);
        let a_x = random(width - b_r * 2); // ! less the position(a_x, a_y) to avoid stuck in end of window when place the bubble
        let a_y = random(height - b_r * 2);
        let d_speedX = random(2, 5);
        let d_speedY = random(1, 5);
        bubbles[bubble] = new Bubble(a_x, a_y, b_r, d_speedX, d_speedY);
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
        this.ball_X = _x + _rad; // ! added _rad to avoid stuck in orgin(0,0)
        this.ball_Y = _y + _rad;
        this.rad = _rad;
        this.dirX = -1;
        this.dirY = -1;
        this.ball_speed_X = _speedX;
        this.ball_speed_Y = _speedY;
        this.brightness = 0;
        this.Red = 255;
        this.Green = 255;
        this.Blue = 255;
        this.shape = circle;
    }

    click(mX, mY) {
        let inside = dist(mX, mY, this.ball_X, this.ball_Y);
        if (inside < this.rad) {
            console.log("You Clicked");
            this.Red = random(this.Red);
            this.Green = random(this.Green);
            this.Blue = random(this.Blue);
            this.brightness = random(200, 255);
            //console.log(this.Red, ', ' + this.Green, ', ' + this.Blue, ', ' + this.brightness);
            this.shape = ellipse;
        }
    }

    move() {
        this.ball_X += this.ball_speed_X;
        this.ball_Y += this.ball_speed_Y;
    }

    bounce() {
        if (this.ball_X + this.rad > width || this.ball_X - this.rad < 0) {
            this.ball_speed_X *= this.dirX;
        }

        if (this.ball_Y + this.rad > height || this.ball_Y - this.rad < 0) {
            this.ball_speed_Y *= this.dirY;
        }
    }

    display() {
        //stroke(255, 255, 0);
        //strokeWeight(2);
        fill(this.Red, this.Green, this.Blue, this.brightness);
        this.shape(this.ball_X, this.ball_Y, this.rad * 2);
    }
}
