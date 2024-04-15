let myFont;

let dino;
let comet;
let comet2;
let ship;

let shapeArray = []
var TranslationX = 150;
var TranslationY = 150;

let img;

function preload() {
  myFont = loadFont('./text/Montserrat-Regular.ttf');
  dino = loadModel('models/dino.stl', true);
  comet = loadModel('models/comet.obj', true);
  comet2 = loadModel('models/comet.stl', true);
  ship = loadModel('models/ship.obj', true);
  img = loadImage('images/comet.jpeg');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  pg = createGraphics(256, 256);
  shapeArray.push(new shapeclass("sphere", 40, 30, 0, TranslationX, TranslationY, 0, -0.01, 0, img));
  shapeArray.push(new shapeclass("sphere", 40, 30, 0, -TranslationX, -TranslationY, 0, 0.01, 0, img));
}


function draw() {
  background(200);
  image(img);
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }



  fill('white');
  textFont(myFont);
  textSize(36);
  text("Kaeli Moore", -350, 350);
  text("Prehistoric Pixels", 30, -350);

  ambientLight(50);
  directionalLight(255, 255, 255, 0.5, 0.5, 0);
  spotLight(255, 255, 255, 150, 0, 250, 0, 0, -1);
  directionalLight(230, 230, 230, 1, 1, -2);


  push();
  noStroke();
  scale(.5);
  rotateY(frameCount * .01);
  fill(10,200,10);
  model(dino,100,100,100);
  pop();

  push();
  rotateZ(frameCount * .01);
  rotateX(frameCount * .01);
  fill(245, 0, 0);
  torus(100, 10, 64, 64);
  pop();

  push();
  rotateZ(frameCount * .01);
  rotateY(frameCount * .01);
 fill(255, 255, 0);
  torus(100, 10, 64, 64);
  pop();

  push();
  rotateY(frameCount * .01);
  rotateX(frameCount * .01);
  fill(0, 0, 200);
  torus(100, 10, 64, 64);
  pop();

  push();
  scale(.5);
  rotateY(frameCount * -.015);
  translate(300, -80, 0);
  normalMaterial();
  model(comet);
  pop();

  push();
  scale(.5);
  rotateY(frameCount * .02);
  translate(-300, 80, 0);
  normalMaterial();
  model(comet);
  pop();


  push();
  noStroke();
  scale(.5);
  rotateX(frameCount * .03);
  specularMaterial(10, 10, 10);
  translate(0, -400, 0);
  model(ship);
  pop();




  if (mouseIsPressed) {
    TranslationX = random(800);
    TranslationY = random(800);
   
    console.log("hi");
  }
}

