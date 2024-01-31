
function setup() {
    createCanvas(400, 400);
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


  function draw() {


//brown
const a = color(123,63,0);
//dark brown
const b = color(92, 64, 51);
//blue
const c = color(93, 173, 226);


    background(200,100,95);
fill(0);
textSize(32);
text('-COOKIE MONSTER-',20,35);
textSize(17);
text('Kaeli Moore',300,385);
    

//stripes
fill(c);

rect(stripex,40,400,20);
rect(0,70,400,20);
rect(stripex,100,400,20);
rect(0,130,400,20);
rect(stripex,160,400,20);
rect(0,190,400,20);
rect(stripex,220,400,20);
rect(0,250,400,20);
rect(stripex,280,400,20);
rect(0,310,400,20);
rect(stripex,340,400,20);
rect(0,370,299,20);


stripex+=speeds;
if(stripex>400||stripex<0)
{speeds *=-1}

    // cookie
    fill(a);
    circle(circlex,circley,200);

    //circle horiz
    circlex+=speedx;
if(circlex>300||circlex<100)
{speedx *=-1}

//circle vert
circley+=speedy;
if(circley>300||circley<100)
{speedy *=-1}


    //chips
    fill(b);

    x6+=speedx;
    if(x6>390||x6<0)
    {speedx *=-1}
    rect(x6,y6,10,7)
    y6+=speedy;
    if(y6>393||y6<0)
    {speedx *=-1}
    square(x6,y6,13);

    x7+=speedx;
    if(x7>390||x7<0)
    {speedx *=-1}
    rect(x7,y7,10,7)
    y7+=speedy;
    if(y7>393||y7<0)
    {speedx *=-1}
    square(x7,y7,12);

    x8+=speedx;
    if(x8>390||x8<0)
    {speedx *=-1}
    rect(x8,y8,10,7)
    y8+=speedy;
    if(y8>393||y8<0)
    {speedx *=-1}
    square(x8,y8,9);

    x9+=speedx;
    if(x9>390||x9<0)
    {speedx *=-1}
    rect(x9,y9,10,7)
    y9+=speedy;
    if(y9>393||y9<0)
    {speedx *=-1}
    square(x9,y9,10);

    x10+=speedx;
    if(x10>390||x10<0)
    {speedx *=-1}
    rect(x10,y10,10,7)
    y10+=speedy;
    if(y10>393||y10<0)
    {speedx *=-1}
    square(x10,y10,11);

    x11+=speedx;
    if(x11>390||x11<0)
    {speedx *=-1}
    rect(x11,y11,10,7)
    y11+=speedy;
    if(y11>393||y11<0)
    {speedx *=-1}
    square(x11,y11,8);


    //test chip
    x1+=speedx;
    if(x1>390||x1<0)
    {speedr *=-1}
    rect(x1,y1,10,7)
    y1+=speedy;
    if(y1>393||y1<0)
    {speedr *=-1}
    rect(x1,y1,10,7);

    x2+=speedx;
    if(x2>390||x2<0)
    {speedx *=-1}
    rect(x2,y2,10,7)
    y2+=speedy;
    if(y2>393||y2<0)
    {speedx *=-1}
    rect(x2,y2,9,6);

    x3+=speedx;
    if(x2>390||x2<0)
    {speedx *=-1}
    rect(x3,y3,10,7)
    y3+=speedy;
    if(y3>393||y3<0)
    {speedx *=-1}
    rect(x3,y3,11,7);

    x4+=speedx;
    if(x4>390||x4<0)
    {speedx *=-1}
    rect(x4,y4,10,7)
    y4+=speedy;
    if(y4>393||y4<0)
    {speedx *=-1}
    rect(x4,y4,8,7);

    x5+=speedx;
    if(x5>390||x5<0)
    {speedx *=-1}
    rect(x5,y5,10,7)
    y5+=speedy;
    if(y5>393||y5<0)
    {speedx *=-1}
    rect(x5,y5,10,7);


   // key
    fill(93,137,117);
    square(o,p,25);
   
  }
  function keyPressed() {
     if(key == 'a')
      {
          o-=5;
      }
      else if(key == 'd')
      {
          o+=5;
      }
      else if(key == 'w')
      {
          p-=5;
      }
      else if(key == 's')
      {
          p+=5;
      }
  }
  
  