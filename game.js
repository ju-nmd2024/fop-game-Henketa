function setup() {
  createCanvas(900, 600);
}

let x = 100;
let y = 100;

//The 3 screen states
function startScreen(){
  background(105,190,150);
  textSize(25);
  fill(255,195,0);
  stroke(0);
  strokeWeight(3);
  text("Press any button (unfinished)",300,550);
}

function gameScreen(){
  background(45,130,200);
  fill(0);
  textSize(30);
  text("Steal the emerald",10,30);
  bgLab();
  masterEmerald();
  sonicTails(500,700,0.23);
}

function endScreen(){
  background(0,0,0);
  textFont('Verdana');
  textSize(65);
  fill(255);
  stroke(0,100,190);
  strokeWeight(5);
  text("GAME OVER",250,250);
}

//bg,props,characters
function bgLab(){
   //background
   push();
   fill(155,180,200);
   strokeWeight(1);
   rect(-1,430,902,220);
   pop();
   push();
   strokeWeight(0);
   fill(210,220,230);
   rect(0,500,900,200);
   pop();
}
function masterEmerald(){
  push();
  fill(0,225,155);
  strokeWeight(1.4);
  translate(100,150);

  //top half of emerald
  ellipse(300,350,170,15);
  triangle(215,350,225,354,197,382);
  triangle(230,395,225,354,195,385);
  triangle(260,357,225,354,230,395);
  triangle(275,400,230,395,260,358);
  triangle(275,400,300,358,260,357);
  triangle(275,400,325,400,300,358);
  triangle(340,357,325,400,300,358);
  triangle(325,400,370,395,340,358);
  triangle(375,354,370,395,340,357);
  triangle(370,395,375,354,405,385);
  triangle(385,350,375,354,403,382);

  //bottom half of emerald
  triangle(230,395,300,490,195,385);
  triangle(275,400,230,395,300,490);
  triangle(275,400,325,400,300,490);
  triangle(325,400,370,395,300,490);
  triangle(370,395,300,490,405,385);
  pop();
  //stand for emerald
}
function sonicTails(x,y,s,reachEnd){
  push();
  strokeWeight(4);
  translate(0,0);
  scale(s);

//Sonic Torso
fill(0,100,200);
triangle(x-170,y+40,x-250,y+100,x-110,y+80);
triangle(x-200,y+140,x-110,y+210,x-130,y+82);
triangle(x-90,y+210,x-120,y+200,x-140,y+240);
push();
translate(x-90,y+150);
rotate(2.7);
ellipse(0,0,130,160);
pop();
push();
fill(250,210,165);
translate(x-74,y+155);
rotate(2.9);
ellipse(0,0,100,130);
pop();

//Sonic Behind Glove
push();
fill(255,255,255);
ellipse(x-50,y-100,70);
pop();

//Sonic Head
triangle(x-190,y-40,x-300,y+10,x-160,y+50);
triangle(x-260,y-130,x-190,y-35,x-80,y-97);
triangle(x-50,y-80,x+20,y-110,x-13,y-25);
ellipse(x-102,y-10,180);
triangle(x-130,y-85,x-190,y-130,x-160,y-35);

//Sonic Glove
push();
fill(255,255,255);
ellipse(x-200,y-100,70);
pop();
push();
fill(255,255,255);
translate(x-232,y-78);
rotate(-0.1);
rect(0,0,70,20,20);
pop();

//Sonic Muzzle n Nose
push();
fill(250,210,165);
translate(x-80,y+50);
rotate(0.1);
ellipse(0,0,140,70);
pop();
push();
fill(40,40,40);
translate(x-10,y+45);
rotate(1.4);
ellipse(0,0,15,30);
pop();

//Sonic Eyes
push();
fill(255,255,255);
ellipse(x-120,y,20);
ellipse(x-20,y+10,20);
pop();

//Sonic shoes
push();
fill(255,255,255);
translate(x-70,y+260);
rotate(0.1);
ellipse(0,0,40,60);
pop();
push();
fill(235,0,0);
beginShape();
vertex(x+122,y+210);
bezierVertex(x+100,y+200,x-50,y+250,x+38,y+310);
endShape();
beginShape();
vertex(x-58,y+316);
bezierVertex(x-80,y+290,x-99,y+250,x-45,y+206);
endShape();
pop();

push();
fill(255,255,255);
translate(x-5,y+270);
rotate(-1);
rect(0,0,60,17,20);
pop();

fill(200,0,0);
push();
translate(x+80,y+260);
rotate(0.7);
ellipse(0,0,10,130);
pop();
push();
translate(x-40,y+260);
rotate(0.2);
ellipse(0,0,60,120);
pop();

//Tails Shoes
fill(235,0,0);
push();
translate(x-290,y-200);
rotate(0.2);
ellipse(0,0,60,130);
pop();
push();
translate(x-180,y-200);
rotate(-0.1);
ellipse(0,0,50,130);
pop();
push();
fill(255,255,255);
ellipse(x-280,y-225,55,65);
ellipse(x-170,y-225,45,65);
pop();

//Tails Torso
fill(252,180,50);
push();
translate(x-200,y-340);
rotate(0.7);
ellipse(0,0,160,130);
pop();

//Tails Gloves
push();
fill(255,255,255);
ellipse(x-200,y-135,70);
ellipse(x-190,y-104,20);
ellipse(x-50,y-135,70);
ellipse(x-50,y-103,20);
pop();

push();
fill(255,255,255);
translate(x-239,y-169);
rotate(-0.1);
rect(0,0,70,20,20);
pop();
push();
fill(255,255,255);
translate(x-89,y-170);
rotate(-0.1);
rect(0,0,70,20,20);
pop();

//Tails Tail
push();
translate(x-220,y-460);
ellipse(0,0,300,50);
pop();
quad(x-231,y-410,x-210,y-412,x-200,y-455,x-240,y-455);

//Tails Head
push();
translate(x-102,y-300);
rotate(0.2);
triangle(23,-85,78,-36,93,-130);
ellipse(0,0,180);
triangle(-84,-30,-28,-85,-100,-130);
triangle(80,-40,75,-50,130,-50);
triangle(67,-60,75,-50,120,-80);
triangle(67,-60,56,-70,100,-110);
pop();

//Tails Muzzle n Nose
push();
translate(x-102,y-300);
rotate(0.2);
fill(255,255,255);
ellipse(10,56,160,70);
pop();
push();
fill(40,40,40);
translate(x-35,y-240);
rotate(1.6);
ellipse(0,0,15,30);
pop();

//Tails Eyes
push();
fill(255,255,255);
ellipse(x-35,y-275,20);
ellipse(x-112,y-297,20);
pop();
}


function draw() {
  gameScreen();
}
