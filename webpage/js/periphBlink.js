var inputValue = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  inputValue = getPeriphValue();

  if(inputValue > 100)
    background(200);
  else
    background(0);
}
