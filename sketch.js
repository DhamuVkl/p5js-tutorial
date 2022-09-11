// //#1
// function setup() {
//   createCanvas(500, 300);

// }

// function draw() {
//   background(20, 107, 87);

//   rectMode(CENTER);
//   fill(250,100,25);
//   stroke(10);
//   strokeWeight(2);
//   rect(250, 150, 100, 50);    


//   fill(255, 255, 50, 100);
//   noStroke();
//   ellipse(250, 150, 50, 70);

// }


// //#2 moving circle mouse
// function setup() {
//   createCanvas(500, 300);

//   background(0);

// }

// function draw() {
//   noStroke();
//   fill(255, 50);
//   circle(circleX, mouseY, 50);

// }

// function mousePressed() {
//   background(0);
// }

// //#3 moving circle speed

// let circleX = 10;
// function setup() {
//   createCanvas(500, 300);
// }

// function draw() {
//   background(0);
//   noStroke();
//   fill(255, 500);
//   circle(circleX, 150, 50);
//   circleX += 7;
// }

// function mousePressed() {
//   circleX = 0;
// }

// //#4 random
// let rectX;
// let rectY;
// let lineW;
// function setup() {
//   createCanvas(500, 300);
// }

// function draw() {
//   background(20, 107, 87);
//   rectX = random(10, 200);
//   rectY = random(10, 200);
//   lineW = random(0, 3);
//   rectMode(CENTER);
//   fill(250, 100, 25);
//   stroke(10);
//   strokeWeight(lineW);
//   rect(250, 150, rectX, rectY);
// }

// function mousePressed() {
//   rectX = random(10, 200);
//   rectY = random(10, 200);
//   lineW = random(0, 3);
// }

// //#5 random colour
// let x, y, r, g, b;
// let size;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }

// function draw() {
//   x = random(width);
//   y = random(height);
//   r = random(255);
//   g = random(255);
//   b = radians(255);
//   circle(x, y, size);
//   noStroke();
//   fill(r, g, b);
// }

// function mousePressed() {
//   background(0);
//   size = random(100);
// }

// //#6 colour circle paint
// let r, g, b, size;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }

// function draw() {
//   r = random(255);
//   g = random(255);
//   b = radians(255);
//   circle(mouseX, mouseY, size);
//   noStroke();
//   fill(r, g, b);
// }

// function mousePressed() {
//   background(0);
//   size = random(100);
// }

// //#7 backgrownd colour shift map function
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // background(0);
// }

// function draw() {
//  col = map(mouseX, 0, windowWidth, 0, 255);
//  background(col);
// }

//// #8 Graphics
// console.log("Graphics");
// let x = 200;
// let y = 200;
// let extracanvas;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   extracanvas = createGraphics(windowWidth, windowHeight);
//   extracanvas.clear();
//   background(0);

// }

// function draw() {
//   background(0);
//   x += random(-5, 5);
//   y += random(-5, 5);
//   let starx = random(width);
//   let stary = random(height);
//   extracanvas.fill(255, 150);
//   extracanvas.noStroke();
//   extracanvas.circle(starx, stary, 2);

//   image(extracanvas, 0, 0);   // layering extra canvas
//   fill(255, 0, 0);
//   circle(x, y, 40);

// }


// // 9 Bouncing ball
// let rad = 50;
// let speedx = 2.8;
// let speedy = 2.2;
// let x, y;
// let xdir = 1;
// let ydir = 1;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();
//   ellipseMode(RADIUS);
//   x = width / 2;
//   y = height / 2;

// }

// function draw() {

//   background(0);
//   x = x + speedx * xdir;
//   y = y + speedy * ydir;
//   if (x > width - rad || x < rad) {
//     xdir *= -1;
//   }
//   if (y > height - rad || y < rad) {
//     ydir *= -1;
//   }
//   fill(255, 255, 0)
//   ellipse(x, y, rad, rad);


// }

// #10 loop
// rad = 25;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }

// function draw() {
//   let x = 0;
//   // atempt #1
//   while (x <= width) {
//     ellipseMode(CENTER);
//     fill(0, 255, 0);
//     ellipse(x, 200, rad, rad);
//     x += 50;
//   }
//   // atempt #2
//   for (let a = 0; a <= width; a += 50) {
//     ellipseMode(CENTER);
//     fill(255, 0, 0);
//     ellipse(a, 400, rad, rad);
//   }
//   // atempt #1 & #2 both same
// }

// // #11 nested loop
// rad = 25;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
//   stroke(255);
//   strokeWeight(2);
//   frameRate(7);
// }

// function draw() {
//   for (let x = 0; x <= width; x += 50) {
//     for (let y = 0; y <= height; y += 50) {
//       ellipseMode(CENTER);
//       fill(random(255), random(200), 0);
//       ellipse(x, y, rad, rad);
//     }
//   }
// }

// // #12 function arg and parameter
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
// }

// function draw() {
//   lollipop(100, 150, 70);
//   lollipop(200, 400, 100);
//   lollipop(300, 500, 50);
// }

// function lollipop(x, y, dia) {
//   fill(255);
//   rect(x - 5, y, 10, 150);
//   fill(0, 255, 200);
//   ellipseMode(CENTER);
//   ellipse(x, y, dia, dia);
// }

// // #13 function return
// function setup() {
//   km = milesTokm(87.9);
//   print(km);
//   km1 = milesTokm(100);
//   print(km1);
// }
// function milesTokm(miles) {
//   km = miles * 1.6;
//   return km;
// }

// // #14 Class OOP(object orinted programing)
// let bubble;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   bubble = new Bubble();
//   print(bubble.x, bubble.y);
// }

// function draw() {
//   background(0);

// }

// class Bubble {
//   constructor() {
//     this.x = 100;
//     this.y = 200;
//   }
// }

// #15 Array
let words = ["Rainbow", "Coding", "Train", "Dhamu", "Hello"];
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(100);
  text(words[index], 10, 200);
}

function mousePressed() {
  index += 1;
  if (index == words.length) {
    index = 0;
  }
}