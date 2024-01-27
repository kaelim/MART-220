function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Draw the cookie
  fill(165, 42, 42); // Chocolate color
  ellipse(width / 2, height / 2, 200, 200);

  // Draw chocolate chips
  drawChocolateChips(width / 2, height / 2, 200, 20);
}

// Function to draw chocolate chips
function drawChocolateChips(x, y, diameter, numChips) {
  fill(0); // Chocolate chip color

  for (let i = 0; i < numChips; i++) {
    // Randomly position chocolate chips within the cookie
    let chipX = x + random(-diameter / 2, diameter / 2);
    let chipY = y + random(-diameter / 2, diameter / 2);

    // Draw chocolate chip as a smaller ellipse
    ellipse(chipX, chipY, 10, 10);
  }
}
