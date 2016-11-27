int xAxisPin = A1;
int xValue = 0;

int yAxisPin = A0;
int yValue = 0;

int buttonPin = 7;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
}

void loop() {
    yValue = map(analogRead(yAxisPin),0,1023,0,9);
    Serial.print("Y : ");
    Serial.println(yValue);
    xValue = map(analogRead(xAxisPin),0,1023,0,9);
    Serial.print("X : ");
    Serial.println( xValue);

    int valueToBeSent = ((xValue) * 100) + ((yValue)* 10 + 100);
    tone(8, valueToBeSent);

    Serial.print("sending : ");
    Serial.println(valueToBeSent);
    Serial.println();
//  int buttonState = digitalRead(buttonPin);
//  Serial.println(buttonState);
  delay(10);
}
