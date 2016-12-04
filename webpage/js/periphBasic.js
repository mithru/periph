var inputValue;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  inputValue = getPeriphValue();

  if(inputValue > 0)
    background(255);
  else
    background(200);
    textSize(30);
  text("Whistle to check if you get a signal", 50,50);
  text(inputValue, 50,100);
}
