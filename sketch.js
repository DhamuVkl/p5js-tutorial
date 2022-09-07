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

//#6 colour circle paint
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

// //#7 backgrownd colour shift map function
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // background(0);
// }

// function draw() {
//  col = map(mouseX, 0, windowWidth, 0, 255);
//  background(col);
// }

// #8 Graphics
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


//   if (mouseIsPressed) {
//     extracanvas.fill(255, 150);
//     extracanvas.noStroke();
//     extracanvas.circle(mouseX, mouseY, 50);
//   }
//   image(extracanvas, 0, 0);
//   fill(255, 0, 0);
//   circle(x, y, 40);

// }