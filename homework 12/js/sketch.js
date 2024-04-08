let myFont;
function preload(){
   myFont = loadFont('./text/Montserrat-Regular.ttf');
}

function setup() {
    createCanvas(800, 800, WEBGL);
pg = createGraphics(256,256);
  }

  function draw(){
background(200);
fill('pink');
textFont(myFont);
textSize(36);
text("Kaeli Moore", -350, 350);
text("Wavelengths",150,-350);
// ambient light is gray
ambientLight(50);
// directional light is red
directionalLight(255, 255, 255, 0.25, 0.25, 0);
// spotlight is green
spotLight(255, 255, 255, 150, 0, 250, 0, 0, -1);


push();
rotateZ(frameCount * .01);
rotateX(frameCount *.01);
rotateY(frameCount * .01);
normalMaterial();
box(50);
pop();

push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
ambientMaterial(255,0,0);
torus(100, 10, 64, 64);
pop();

push();
rotateZ(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(255,255,0);
torus(100, 10, 64, 64);
pop();

push();
rotateY(frameCount * .01);
rotateX(frameCount * .01);
ambientMaterial(0,0,255);
torus(100, 10, 64, 64);
pop();

push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(200,0,200);
translate(200, 0, 0);
sphere(40,70);
pop();

push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(200,0,200);
translate(-200, 0, 0);
sphere(40,70);
pop();

push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(0,250,0);
translate(0, 200, 0);
cone(40,70,30);
pop();

push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(0,250,0);
translate(0, -200, 0);
cone(40,70,30);
pop();


push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(255,94,5);
translate(0,0,200);
ellipsoid(30, 40, 40,54);
pop();

push();
rotateZ(frameCount * .01);
rotateX(frameCount * .01);
rotateY(frameCount * .01);
ambientMaterial(255,94,5);
translate(0,0,-200);
ellipsoid(30, 40, 40,54);
pop();



  }