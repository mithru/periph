function setup() {
  createCanvas(400, 400);

  noStroke();
}

var inputValue;
var xAxis, yAxis;

//inputValue = 45; // just to test

function draw() {
  background(255);
  if(ac > 0) {
    inputValue = (ac - 100)/10;
  }
  xAxis = map(Math.floor(inputValue/10),0,9,-15,15);
  yAxis = map(inputValue%10,0,9,-15,15);

    // text(xAxis, 100, 100);
    //   text(yAxis, 100, 200);

  fill(100);
  ellipse(50,50,50,50);
  fill(150);
  ellipse(50+xAxis,50+yAxis,20,20);

}
