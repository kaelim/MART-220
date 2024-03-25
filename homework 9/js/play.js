var idlePaths = [];
var deadPaths = [];
var deathPaths = [];
let myAnimation;
var myWalkAnimation;
var walkPaths = [];
var stoneImage;
let cakeImage;
let broccoliImage;
var score = 0;
var health = 3;

function preload() {
    idlePaths = loadStrings("../text/idle.txt");
    walkPaths = loadStrings("../text/walk.txt");
    deathPaths = loadStrings("../text/death.txt");
    deadPaths = loadStrings("../text/dead.txt");

}
function setup() {
    createCanvas(800, 600);
    myAnimation = new animations(200, 200, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('death', deathPaths);
    myAnimation.loadAnimation('dead', deadPaths);

    stoneImage = createSprite(600, 500, 1000, 1000, 'static');
    stoneImage.img = "../images/stone.png";
    stoneImage.scale = 0.25;
    stoneImage.diameter = 300;

    stoneImage = createSprite(700, 100, 1000, 1000, 'static');
    stoneImage.img = "../images/stone.png";
    stoneImage.scale = 0.1;
    stoneImage.diameter = 200;

    stoneImage = createSprite(100, 200, 500, 500, 'static');
    stoneImage.img = "../images/stone.png";
    stoneImage.scale = 0.15;
    stoneImage.diameter = 250;

    broccoliImage = createSprite(100, 500, 100, 100, 'static');
    broccoliImage.img = "../images/broccoli.jpeg"
    broccoliImage.scale = 0.1;
    broccoliImage.diameter = 150;

    cakeImage = createSprite(600, 350, 100, 100, 'static');
    cakeImage.img = "../images/cupcake.png "
    cakeImage.scale = 0.01;
    cakeImage.diameter = 150;
}

function draw() {

    background(102, 155, 102);
    if (kb.pressing('d')) {
        if (myAnimation.isColliding(stoneImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if (myAnimation.isColliding(broccoliImage)) {
            broccoliImage.remove();
            health--;
            broccoliImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            broccoliImage.img = "../images/broccoli.jpeg"
            broccoliImage.scale = 0.1;
            broccoliImage.diameter = 150;

        }
        else if (myAnimation.isColliding(cakeImage)) {
            cakeImage.remove();
            score++;
            cakeImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            cakeImage.img = "../images/cupcake.png "
            cakeImage.scale = 0.01;
            cakeImage.diameter = 150;
        }

        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('a')) {
        if (myAnimation.isColliding(stoneImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if (myAnimation.isColliding(broccoliImage)) {
            broccoliImage.remove();
            health--;
            broccoliImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            broccoliImage.img = "../images/broccoli.jpeg"
            broccoliImage.scale = 0.1;
            broccoliImage.diameter = 150;
        }
        else if (myAnimation.isColliding(cakeImage)) {
            cakeImage.remove();
            score++;
            cakeImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            cakeImage.img = "../images/cupcake.png "
            cakeImage.scale = 0.01;
            cakeImage.diameter = 150;

        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('w')) {
        if (myAnimation.isColliding(stoneImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if (myAnimation.isColliding(broccoliImage)) {
            broccoliImage.remove();
            health--;
            broccoliImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            broccoliImage.img = "../images/broccoli.jpeg"
            broccoliImage.scale = 0.1;
            broccoliImage.diameter = 150;
        }
        else if (myAnimation.isColliding(cakeImage)) {
            cakeImage.remove();
            score++;
            cakeImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            cakeImage.img = "../images/cupcake.png "
            cakeImage.scale = 0.01;
            cakeImage.diameter = 150;
        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('s')) {
        if (myAnimation.isColliding(stoneImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if (myAnimation.isColliding(broccoliImage)) {
            broccoliImage.remove();
            health--;
            broccoliImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            broccoliImage.img = "../images/broccoli.jpeg"
            broccoliImage.scale = 0.1;
            broccoliImage.diameter = 150;

        }
        else if (myAnimation.isColliding(cakeImage)) {
            cakeImage.remove();
            score++;
            cakeImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
            cakeImage.img = "../images/cupcake.png "
            cakeImage.scale = 0.01;
            cakeImage.diameter = 150;
        }
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    }
    else {
        myAnimation.drawAnimation('idle');
    }
    stoneImage.debug = mouseIsPressed;



    fill(225, 102, 122);
    textSize(25);
    text("Score: " + score, 150, 50);

    if (score == 10) {
        fill(51, 204, 255);
        textSize(100);
        text("You Win!", 250, 100);
    }
    fill(225, 102, 122);
    textSize(25);
    text("Health: " + health, 10, 50)

    if (health == 0) {
        myAnimation.drawAnimation('death');
        myAnimation.drawAnimation('dead');

        fill(255, 0, 0);
        textSize(70);
        text("Game Over", 250, 100);
    }
}