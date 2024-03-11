var xImage = 50, yImage = 200;
var myFont;
var myTime = 10;
var i = 0;
var flipX = false;
var idleStrings = [];
var walkStrings = [];
var idleArray = [];
var walkArray = [];

var objectToEat;
var objectToDraw;
var score = 0;

var objectNotEat;

var mySound;
var happySound;
var badSound;

function preload() {
    idleStrings = loadStrings("../text/idle.txt");
    walkStrings = loadStrings("../text/walk.txt");
    mySound = loadSound('../sounds/game.wav');
    happySound = loadSound('../sounds/happy.wav');
    badSound = loadSound('../sounds/bad.wav');
}

function setup() {
    createCanvas(600, 600);

    for (let k = 0; k < idleStrings.length; k++) {
        idleArray.push(new myImage(idleStrings[k], 50, 200, 680, 472));
    }
    for (let k = 0; k < walkStrings.length; k++) {
        walkArray.push(new myImage(walkStrings[k], 50, 200, 680, 472));
    }

    objectToEat = new myImage("../images/cupcake.png", 500, 200, 100, 100);
    //myFont = loadFont("fonts/ProtestRiot-Regular.ttf");
    objectNotEat = new myImage("../images/broccoli.jpeg", 100, 500, 100, 100);

    setInterval(changeTime, 100);
    setInterval(countDown, 1000);
}

function mousePressed() {
    mySound.loop();
}
// this runs continuously
function draw() {
    setCenter(width/32, height/32);
    background(120);
      
  // polarLines( number, radius, distance, [callback] )
  noFill();
  stroke('#ccc');
  strokeWeight(0.5);
  polarLines(8, 140, 0);
  polarLines(8, 60, 20);
  
  // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
  noStroke();
  fill(13, 146, 185, 110);
  polarEllipses(10, 50, 50, 70);
  fill(252, 248, 200, 120);
  polarEllipses(5, 36, 36, 32);
  fill(178, 216, 178, 120);
  polarEllipses(10, 30, 30, 70);
  polarEllipses(10, 30, 30, 120);
  fill(238, 175, 170);
  polarEllipses(12, 8, 8, 40);
  fill(252, 248, 200, 120);
  polarEllipses(5, 16, 16, 32);
  fill(13, 146, 185, 110);
  polarEllipses(14, 50, 50, 155);
  
  // polarHexagon( angle, radius, [distance] ) 
  noStroke();
  fill(175, 170, 238);
  polarHexagon(3, 10, 0);
  
  fill(238, 175, 170);
  // polarTriangles( number, radius, distance, [callback] )
  polarTriangles(4, 6, 60);
  polarTriangles(4, 8, 140);
  // polarSquares( number, radius, distance, [callback] )
  polarSquares(8, 2, 80);
  polarSquares(4, 4, 120);
}



function draw() {
  background(0);
  setCenter(width/32, height/32);
  noFill()
  
  strokeWeight(1);
  
  stroke('#ff7300');
  // polarPolygon( number, angle, radius, [distance] )
  polarPolygon(10, 0, 50);
  // polarPentagons( number, radius, distance, [callback] )
  polarPentagons(6, 60, 60);
  
  // polarTriangles( number, radius, distance, [callback] )
  stroke('#64ff00');
  polarTriangles(8, 125, 150);
  
  strokeWeight(1);
  stroke('#fc49ab');
  polarTriangles(10, 150, 150);


    if (objectToEat != null) {
        objectToEat.draw();
    }

    if (objectNotEat != null) {
        objectNotEat.draw();
    }

    if (keyIsPressed) {
        if (key == "w") {
            yImage -= 1;
        }
        if (key == "s") {
            yImage += 1;
        }
        if (key == "a") {
            xImage -= 1;
            flipX = true;
        }
        if (key == "d") {
            xImage += 1;
            flipX = false;
        }

        for (var ii = 0; ii < idleArray.length; ii++) {
            idleArray[ii].updateX(xImage);
            idleArray[ii].updateFlip(flipX);
            walkArray[ii].updateX(xImage);
            walkArray[ii].updateFlip(flipX);
            idleArray[ii].y = yImage;
            walkArray[ii].y = yImage;

            if (objectToEat != null) {
                if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                    objectToEat = null;
                    score++;
                    happySound.play();
                }
            }
            if (objectNotEat != null) {
                if (walkArray[ii].checkCollision(objectNotEat.x, objectNotEat.y, objectNotEat.w, objectNotEat.h)) {
                    objectNotEat = null;
        
                    badSound.play();
                }
            }


        }
        objectToDraw = walkArray;
    }
    else {
        objectToDraw = idleArray;
    }


   




objectToDraw[i].draw();



fill(200, 102, 169);
textSize(24);
// textFont(myFont);
text("Score: " + score, 400, 50);

fill(200, 102, 169);
textSize(25);
text(myTime + " seconds", 50, 50);
}

function changeTime() {
    i++;
    if (i > idleArray.length - 1) {
        i = 0;
    }
}
function countDown() {
    myTime--;
    if (myTime < 0) {
        myTime = 7;
        createANewFoodItem();
    }
    else if (myTime < 4 && myTime > 2) {

        createANewFoodItem();
    }
}

function createANewFoodItem() {
    console.log("HI");
    objectToEat = new myImage("../images/cupcake.png", random(50, width - 100), random(50, height - 100), 100, 100);
}

