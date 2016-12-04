function setup() {
  createCanvas(600, 600);

  noStroke();
}

var inputValue, convertedInput;
var xAxis, yAxis;

function draw() {
  inputValue = getPeriphValue();

  background(255);
  if(inputValue > 0)
    convertedInput = (inputValue - 100)/10;
  xAxis = map(convertedInput/10,0,9,-50,50);
  yAxis = map(convertedInput%10,0,9,-50,50);

  fill(30);
  ellipse(300,300,300,300);
  fill(80);
  ellipse(300+xAxis,300+yAxis,150,150);

}
