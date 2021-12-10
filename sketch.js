function setup() {
  createCanvas(400, 400);
  background(68);
  noStroke();
  noLoop();
  frameRate(500)
}

function draw() {
  drawTarget(width * 0.25,height * 0.4,200,4)
  drawTarget(width * 0.5,height * 0.5,300,10)
  drawTarget(width * 0.75,height * 0.3,120,6)
}

function drawTarget(xloc,yloc,size,num){
  const grayValues = 255/num;
  const steps = size/num;
  for(let i = 0; i < num;i++){
    fill(i*grayValues);
    rect(xloc,yloc,size-i*steps,size-i*steps,1000)
  }
}