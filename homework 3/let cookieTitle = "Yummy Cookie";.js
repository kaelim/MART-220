let cookieTitle = "Yummy Cookie";
let cookieName = "Your Name";
let chocolateChips = [];

function setup() {
  createCanvas(400, 400);
  
  // Create 10 initial chocolate chips with random positions
  for (let i = 0; i < 10; i++) {
    chocolateChips.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(255);

  // Display title in the top left
  textSize(20);
  fill(0);
  text(cookieTitle, 20, 30);

  // Display name in the bottom right
  textSize(16);
  text(cookieName, width - textWidth(cookieName) - 20, height - 20);

  // Draw the cookie
  fill(180, 120, 50); // Cookie color
  ellipse(width / 2, height / 2, 200, 200);

  // Move and display chocolate chips
  for (let i = 0; i < chocolateChips.length; i++) {
    chocolateChips[i].x += random(-2, 2);
    chocolateChips[i].y += random(-2, 2);

    fill(0); // Chocolate chip color
    ellipse(chocolateChips[i].x, chocolateChips[i].y, 10, 10);
  }
}

function mousePressed() {
  // Stop the movement of the chocolate chips when the mouse is pressed
  noLoop();
}
