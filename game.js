function setup() {
  createCanvas(900, 600);
}

//The 3 screen states
function startScreen(){
  background(105,190,150);
  textSize(25);
  fill(255,195,0);
  stroke(0);
  strokeWeight(3);
  text("Click to start",width / 2,550);
  push();
  textSize(65);
  textAlign(CENTER);
  strokeWeight(5);
  text("Sonic & Tails steals the emerald",width / 2-220,150,600);
  pop();
  

}

function gameScreen(){
  background(45,130,200);
  fill(255);
  textSize(30);
  text("Steal the emerald",10,30);
  push();
  textSize(20);
  text("Do not land too fast",10,60);
  pop();
  bgLab();
  masterEmerald();
}

function endScreen(){
  push();
  background(0,0,0);
  textFont('Verdana');
  textSize(65);
  fill(255);
  stroke(0,100,190);
  strokeWeight(5);
  text("GAME OVER",width / 2,350);
  pop();
  push();
  fill(255);
  stroke(0,100,190);
  text("Click to restart",width / 2+100,450);
  pop();
}

function winScreen(){
  push();
  background(100);
  fill(255);
  text("Emerald acquired!",width / 2,350);
  pop();
  push();
  textSize(20);
  fill(255);
  text("Click to restart",width / 2+60,450);
  pop();
  
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
  ellipse(x+200,y+250,170,15);
  triangle(x+115,y+250,x+125,y+254,x+97,y+282);
  triangle(x+130,y+295,x+125,y+254,x+95,y+285);
  triangle(x+160,y+257,x+125,y+254,x+130,y+295);
  triangle(x+175,y+300,x+130,y+295,x+160,y+258);
  triangle(x+175,y+300,x+200,y+258,x+160,y+257);
  triangle(x+175,y+300,x+225,y+300,x+200,y+258);
  triangle(x+240,y+257,x+225,y+300,x+200,y+258);
  triangle(x+225,y+300,x+270,y+295,x+240,y+258);
  triangle(x+275,y+254,x+270,y+295,x+240,y+257);
  triangle(x+270,y+295,x+275,y+254,x+305,y+285);
  triangle(x+285,y+250,x+275,y+254,x+303,y+282);

  //bottom half of emerald
  triangle(x+130,y+295,x+200,y+390,x+95,y+285);
  triangle(x+175,y+300,x+130,y+295,x+200,y+390);
  triangle(x+175,y+300,x+225,y+300,x+200,y+390);
  triangle(x+225,y+300,x+270,y+295,x+200,y+390);
  triangle(x+270,y+295,x+200,y+390,x+305,y+285);
  pop();

  //stand for emerald
  push();
  strokeWeight(2.3);
  rect(x+248,y+488,7,100);
  rect(x+345,y+488,7,100);
  quad(x+231,y+475,x+369,y+475,x+354,y+490,x+246,y+490);
  pop();
}
function sonicTails(x,y,s,r){
  push();
  strokeWeight(4);
  translate(0,0);
  scale(s);
  rotate(r);

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

let state = "start";
let x = 100;
let y = 100;

//character position variables
let xPos = 400;
let yPos = 600;
let rotation = 0;

//emerald position variables
let emeraldX = 100;
let emeraldY = 100;

//game logic variables
let velocityY = 0.5;
let velocityX = 0.2;
let acceleration = 0.6;


function draw() {

  //screens
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    sonicTails(xPos,yPos,0.23,rotation);

    //gravity logic
    yPos = yPos + velocityY;
    xPos = xPos + velocityX;
    velocityY = velocityY + acceleration;
    

    //velocity decrease
    if (keyIsDown (84)) {
    velocityY = velocityY - 1;
    } else if (keyIsDown (71)) {
      velocityY = velocityY + 1;
    }
    if (keyIsDown(72)) {
      velocityX = velocityX + 1;
    } else if (keyIsDown(70)) {
      velocityX = velocityX - 1;
    }
  
    //emerald hitbox
    if(yPos >=1850 && xPos >=1415 && xPos <=2085) {
      console.log("sonic inside hitbox");
      state = "win";
      xPos = 400;
      yPos = 600;
    } else if(yPos >=1450 && velocityY >=50){
      console.log("sonic ded");
      state = "end";
      xPos = 400;
      yPos = 600;
    } else if (yPos >=2400 && xPos >=315) {
      console.log("sonic ded");
      state = "end";
      xPos = 400;
      yPos = 600;
    } 
  }

  
  if (state === "win") {
    winScreen();
    velocityY = 0;
    velocityX = 0;
  } else if (state === "end") {
    endScreen();
    velocityY = 0;
    velocityX = 0;
  }



}

function mouseClicked() {
  console.log("clicking works!");
  state = "game";
  if (state === "win") {
    state = "game";
  } else if (state === "end") {
    state = "game";
  }
}

//redo from scratch.
/*
function draw() {

//emerald hitbox
 if(yPos>=490 && xPos>=315 && xPos<=484){
  state="win";
 
 } else if(yPos<=510 && xPos<=900){
  state="end";
 
 }


  //Screens
  if (state === "game") {
    startScreen();
  } else if (state === "game") {
    
    gameScreen();
  
    sonicTails(xPos,yPos,0.23,rotation);

    //gravity logic
    yPos = yPos + velocityY;
    velocityY =velocityY + acceleration;

    //velocity decrease
    if (keyIsDown (84)) {
      velocityY = velocityY - 1;
    }
  

    
    if (state === "end") {
    endScreen();
  } else if (state === "win") {
    winScreen();
  }
}
/*
function mouseIsPressed(){
  console.log("iClicked");
  if (state === "start") {
    state = "game";
  } else if (state === "end") {
    state = "game";
  } else if (state === "win") {
    state = "game";
  }
}

}
*/