var lily;
var ximage = 50, yimage = 50;
var speedX, speedY;

var pad;

var x2image = 200, y2image = 200;
var speedX2, speedY2;

var frog;
var x3image = 300, y3image = 300;
var speedX3 = (3), speedY3 = (3);

var timerValue = 10;
var startButton;
var updateImagePosition


var myImageObject;

var run1;
var run2;

var imageX1 = 300;
var imageY1 = 100;
var speedX, speedY;
var imageW1 = 256;
var imageH1 = 256;
var i = 0;
var time = 10;
var counter = 0;

var flipX = false;

var aniX = 175, aniY = 175;
var w = 200, h = 200;

var biscX = 100, biscY = 100;
var w2 = 50, h2 = 50;
var animations = [];
function setup() {
    createCanvas(1000, 1000);

    myImageObject = new mySprite("../image/Idle (1).png", aniX, aniY, w, h);
    animations[0] = myImageObject;
    myImageObject = new mySprite("../image/Idle (2).png", aniX, aniY, w, h);
    animations[1] = myImageObject;
    myImageObject = new mySprite("../image/Idle (3).png", aniX, aniY, w, h);
    animations[2] = myImageObject;
    myImageObject = new mySprite("../image/Idle (4).png", aniX, aniY, w, h);
    animations[3] = myImageObject;
    myImageObject = new mySprite("../image/Idle (5).png", aniX, aniY, w, h);
    animations[4] = myImageObject;
    myImageObject = new mySprite("../image/Idle (6).png", aniX, aniY, w, h);
    animations[5] = myImageObject;
    myImageObject = new mySprite("../image/Idle (7).png", aniX, aniY, w, h);
    animations[6] = myImageObject;
    myImageObject = new mySprite("../image/Idle (8).png", aniX, aniY, w, h);
    animations[7] = myImageObject;
    myImageObject = new mySprite("../image/Idle (9).png", aniX, aniY, w, h);
    animations[8] = myImageObject;
    myImageObject = new mySprite("../image/Idle (10).png", aniX, aniY, w, h);
    animations[9] = myImageObject;
    lily = loadImage("../image/lily.jpeg");
    pad = loadImage("../image/lilypad.png.jpeg");
    frog = loadImage("../image/frog.jpeg");
    setInterval(Incrementi, 75);
    setInterval(updateImagePosition, 50);
    myImageObject2 = new biscuit("../image/biscuit.png", biscX, biscY, w2, h2);






}

//key var
var o = (100);
var p = (100);

//cookie var
var circlex = (200);
var circley = (200);
var speedx = (3);
var speedy = (5);

//stripe var
var stripex = (1);
var speeds = (5);

//chip var 

//rectangle chips
var x1 = (190);
var y1 = (290);
var x2 = (250);
var y2 = (190);
var x3 = (110);
var y3 = (180);
var x4 = (170);
var y4 = (150);
var x5 = (255);
var y5 = (150);
var speedr = (6);

//square chips
var x6 = (210);
var y6 = (260);
var x7 = (180);
var y7 = (200);
var x8 = (120);
var y8 = (240);
var x9 = (200);
var y9 = (110);
var x10 = (280);
var y10 = (190);
var x11 = (145);
var y11 = (130);



function preload() {
    myFont = loadFont('../font/Sixtyfour/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf');
}





function draw() {



    //brown
    const a = color(123, 63, 0);
    //dark brown
    const b = color(92, 64, 51);
    //blue
    const c = color(93, 173, 226);


    background(200, 100, 95);
    animations[i].draw();

   /* function checkCollision(aniX, aniY, w, h, biscX, biscY, w2, h2) {

        if (
            aniX - w / 2 < biscX + w2 / 2 &&
            aniX + w2 / 2 > biscX - w / 2 &&
            aniY - h2 / 2 < biscY + h / 2 &&
            aniY + h2 / 2 > biscY - h / 2

        ) {
            return true;

        } else {
            return false;
        }
    

     
    }
*/

    myImageObject2.draw();

    if (keyIsPressed ) {
        if (key == 'a') {
            aniX -= 1;
            for (var k = 0; k < animations.length; k++) {
                animations[k].updateX(aniX);
            }
        }
        if (key == 'd') {
            aniX += 1;
            for (var k = 0; k < animations.length; k++) {
                animations[k].updateX(aniX);
            }
        }
        if (key == 'w') {
            aniY -= 10;
            for (var k = 0; k < animations.length; k++) {
                animations[k].updateY(aniY);
            }
        }
        if (key == 's') {
            aniY += 10;
            for (var k = 0; k < animations.length; k++) {
                animations[k].updateY(aniY);
            }
        
        }
       
    }
   





    fill(0);
    textSize(32);
    textFont('myFont');
    text('-COOKIE MONSTER-', 20, 35);
    textSize(17);
    text('Kaeli Moore', 300, 385);



    //stripes
    fill(c);

    //rect(stripex,40,400,20);
    //rect(0,70,400,20);
    //rect(stripex,100,400,20);
    //rect(0,130,400,20);
    //rect(stripex,160,400,20);
    //rect(0,190,400,20);
    //rect(stripex,220,400,20);
    //rect(0,250,400,20);
    //rect(stripex,280,400,20);
    //rect(0,310,400,20);
    //rect(stripex,340,400,20);
    //rect(0,370,299,20);
    //

    stripex += speeds;
    if (stripex > 400 || stripex < 0) { speeds *= -1 }

    // cookie
    fill(a);
    circle(circlex, circley, 200);

    //circle horiz
    circlex += speedx;
    if (circlex > 300 || circlex < 100) { speedx *= -1 }

    //circle vert
    circley += speedy;
    if (circley > 300 || circley < 100) { speedy *= -1 }


    //chips
    fill(b);

    x6 += speedx;
    if (x6 > 390 || x6 < 0) { speedx *= -1 }
    rect(x6, y6, 10, 7)
    y6 += speedy;
    if (y6 > 393 || y6 < 0) { speedx *= -1 }
    square(x6, y6, 13);

    x7 += speedx;
    if (x7 > 390 || x7 < 0) { speedx *= -1 }
    rect(x7, y7, 10, 7)
    y7 += speedy;
    if (y7 > 393 || y7 < 0) { speedx *= -1 }
    square(x7, y7, 12);

    x8 += speedx;
    if (x8 > 390 || x8 < 0) { speedx *= -1 }
    rect(x8, y8, 10, 7)
    y8 += speedy;
    if (y8 > 393 || y8 < 0) { speedx *= -1 }
    square(x8, y8, 9);

    x9 += speedx;
    if (x9 > 390 || x9 < 0) { speedx *= -1 }
    rect(x9, y9, 10, 7)
    y9 += speedy;
    if (y9 > 393 || y9 < 0) { speedx *= -1 }
    square(x9, y9, 10);

    x10 += speedx;
    if (x10 > 390 || x10 < 0) { speedx *= -1 }
    rect(x10, y10, 10, 7)
    y10 += speedy;
    if (y10 > 393 || y10 < 0) { speedx *= -1 }
    square(x10, y10, 11);

    x11 += speedx;
    if (x11 > 390 || x11 < 0) { speedx *= -1 }
    rect(x11, y11, 10, 7)
    y11 += speedy;
    if (y11 > 393 || y11 < 0) { speedx *= -1 }
    square(x11, y11, 8);


    //test chip
    x1 += speedx;
    if (x1 > 390 || x1 < 0) { speedr *= -1 }
    rect(x1, y1, 10, 7)
    y1 += speedy;
    if (y1 > 393 || y1 < 0) { speedr *= -1 }
    rect(x1, y1, 10, 7);

    x2 += speedx;
    if (x2 > 390 || x2 < 0) { speedx *= -1 }
    rect(x2, y2, 10, 7)
    y2 += speedy;
    if (y2 > 393 || y2 < 0) { speedx *= -1 }
    rect(x2, y2, 9, 6);

    x3 += speedx;
    if (x2 > 390 || x2 < 0) { speedx *= -1 }
    rect(x3, y3, 10, 7)
    y3 += speedy;
    if (y3 > 393 || y3 < 0) { speedx *= -1 }
    rect(x3, y3, 11, 7);

    x4 += speedx;
    if (x4 > 390 || x4 < 0) { speedx *= -1 }
    rect(x4, y4, 10, 7)
    y4 += speedy;
    if (y4 > 393 || y4 < 0) { speedx *= -1 }
    rect(x4, y4, 8, 7);

    x5 += speedx;
    if (x5 > 390 || x5 < 0) { speedx *= -1 }
    rect(x5, y5, 10, 7)
    y5 += speedy;
    if (y5 > 393 || y5 < 0) { speedx *= -1 }
    rect(x5, y5, 10, 7);


    // key
    fill(93, 137, 117);
    square(o, p, 25);
    // images
    image(lily, ximage, yimage, 50, 50);
    image(pad, x2image, y2image, 50, 50);
    image(frog, x3image, y3image, 50, 50);



}

/*function keyPressed() {
    if (key == 'a') {
        aniX -= 1;
    }
    else if (key == 'd') {
        aniX += 10;
    }
    else if (key == 'w') {
        aniY -= 10;
    }
    else if (key == 's') {
        aniY += 10;
    }
*/
function Incrementi() {

    i++
    if (i > 9) {
        i = 0
    }
}

function updateImagePosition() {
    // Update the image position

    if (x3image < o) { x3image++ }

    if (x3image > o) { x3image-- }

    if (y3image < p) { y3image++ }

    if (y3image > p) { y3image-- }

    // Ensure the image stays within the canvas bounds
    x3image = constrain(x3image, 0, width - 50);
    y3image = constrain(y3image, 0, height - 50);

}


/*function keyIsPressed () {
    if (key == 'a') {
        aniX -= 1;
        for (var k = 0; k < animations.length; k++) {
            animations[k].updateX(aniX);
        }
    }
    if (key == 'd') {
        aniX += 1;
        for (var k = 0; k < animations.length; k++) {
            animations[k].updateX(aniX);
        }
    }
    if (key == 'w') {
        aniY -= 10;
        for (var k = 0; k < animations.length; k++) {
            animations[k].updateY(aniY);
        }
    }
    if (key == 's') {
        aniY += 10;
        for (var k = 0; k < animations.length; k++) {
            animations[k].updateY(aniY);
        }
    
    }
    /*if(checkCollision(aniX, aniY, w, h, biscX, biscY,  w2, h2))
    {
       console.log("aniX" + aniX);
    }

}*/