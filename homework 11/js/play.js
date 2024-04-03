var idlePaths = [];
var deadPaths = [];
var deathPaths = [];
let myAnimation;
var myWalkAnimation;
var walkPaths = [];
var stoneImage, stoneImage1, stoneImage2;
let cakeImage;
let broccoliImage;
var score = 0;
var health = 3;
const particles = [];
let isExplosion = false;
var currentX = 100, currentY = 500;
let isWon = false;
var objecthealth = 10;

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

    stoneImage1 = createSprite(700, 100, 1000, 1000, 'static');
    stoneImage1.img = "../images/stone.png";
    stoneImage1.scale = 0.1;
    stoneImage1.diameter = 200;

    stoneImage2 = createSprite(100, 200, 500, 500, 'static');
    stoneImage2.img = "../images/stone.png";
    stoneImage2.scale = 0.15;
    stoneImage2.diameter = 250;

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
    if (isWon) {

        explosion();
        broccoliImage.remove();
        cakeImage.remove();
        stoneImage.remove();
        stoneImage1.remove();
        stoneImage2.remove();
    
    }
    else {
        if (kb.pressing('d')) {
            if (myAnimation.isColliding(stoneImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
            eatCake();
            eatVeggie();

            myAnimation.updatePosition('forward');
            myAnimation.drawAnimation('walk');

        }
        else if (kb.pressing('a')) {
            if (myAnimation.isColliding(stoneImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
            eatCake();
            eatVeggie();
            myAnimation.updatePosition('reverse');
            myAnimation.drawAnimation('walk');

        }
        else if (kb.pressing('w')) {
            if (myAnimation.isColliding(stoneImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
            eatCake();
            eatVeggie();
            myAnimation.updatePosition('up');
            myAnimation.drawAnimation('walk');
        }
        else if (kb.pressing('s')) {
            if (myAnimation.isColliding(stoneImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
            eatCake();
            eatVeggie();

            myAnimation.updatePosition('down');
            myAnimation.drawAnimation('walk');
        }
        else if (kb.pressing('x')) {
            attack();

        }
        else {
            myAnimation.drawAnimation('idle');
        }

    }


    fill(225, 102, 122);
    textSize(25);
    text("Score: " + score, 150, 50);

    if (score == 10) {
        isWon = true;
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

function eatVeggie() {
    if (myAnimation.isColliding(broccoliImage)) {
        broccoliImage.remove();
        health--;
        broccoliImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
        broccoliImage.img = "../images/broccoli.jpeg"
        broccoliImage.scale = 0.1;
        broccoliImage.diameter = 150;
    }

}

function eatCake() {
    if (myAnimation.isColliding(cakeImage)) {
        cakeImage.remove();
        score++;
        cakeImage = createSprite(random(50, width - 100), random(50, height - 100), 100, 100, 'static');
        cakeImage.img = "../images/cupcake.png "
        cakeImage.scale = 0.01;
        cakeImage.diameter = 150;
    }
    if (score == 10) {
        currentX = myAnimation.getCurrentAnimation().x + 160;
        currentY = myAnimation.getCurrentAnimation().y + 50;
        isWon = true;
    }

}
function createParticles() {

    for (let i = 0; i < 50; i++) {
        let p = new Particle(currentX, currentY);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            // remove this particle
            particles.splice(i, 1);
        }
    }
}

function attack() {
    if (stoneImage != null) {
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, stoneImage.position.x, stoneImage.position.y) < 200) {
            createParticles(currentX = 600, currentY = 500);
            objecthealth -= 1;
            if (objecthealth <= 0) {
                stoneImage.remove();

            }
        }

    }
    if (stoneImage1 != null) {
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, stoneImage1.position.x, stoneImage1.position.y) < 200) {
            createParticles(currentX = 700, currentY = 100);
            objecthealth -= 1;
            if (objecthealth <= 0) {
                stoneImage1.remove();

            }
        }

    }
    if (stoneImage2 != null) {
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, stoneImage2.position.x, stoneImage2.position.y) < 200) {
            createParticles(currentX = 100, currentY = 200);
            objecthealth -= 1;
            if (objecthealth <= 0) {
                stoneImage2.remove();

            }
        }

    }
}

function explosion() {

    for (let i = 0; i < 50; i++) {
        let p = new Particle(400, 300);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            // remove this particle
            particles.splice(i, 1);
        }
    }
}