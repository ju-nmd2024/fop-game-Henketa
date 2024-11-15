function setup() {
  createCanvas(900, 600);
}

function startScreen(){
  background(105,190,150);
  textSize(95);
  text("START",315,330);
}

function gameScreen(){
  background(145,180,220);
  text("Steal the emerald",10,10);
}

function draw() {
  startScreen();
}
