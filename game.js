function setup() {
  createCanvas(900, 600);
}

function startScreen(){
  background(105,190,150);
  textSize(25);
  fill(255,195,0);
  stroke(0);
  strokeWeight(3);
  text("Press any button (unfinished)",300,550);
}

function gameScreen(){
  background(145,180,220);
  textSize(30);
  text("Steal the emerald",10,30);
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

function draw() {
  startScreen();
}
