const int periphPin = 8;

void setup() {
}

void loop() {
  tone(periphPin, 440);
  delay(1000); 
  tone(periphPin,100);
  delay(1000);
}
