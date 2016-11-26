String inString = "";

void setup() {
  Serial.begin(9600);
}

void loop() {
  while (Serial.available() > 0) {
    int inChar = Serial.read();
    if (isDigit(inChar)) {
      // convert the incoming byte to a char
      // and add it to the string:
      inString += (char)inChar;
    }
    // if you get a newline, print the string,
    // then the string's value:
    if (inChar == '\n') {
      Serial.print("Value:");
      int value = inString.toInt();
      Serial.println(value);
      Serial.print("String: ");
      Serial.println(inString);
      // clear the string for new input:
      inString = "";
      tone(8, value);
    }
  }
}

