# Periph

Periph is intended to be a protocol for microcontrollers to be able to communicate with web browsers on phones and other devices via the headphone jack. 

### Status

Currently, I would not call anything in this repository an actual protocol. A lot more work is required before I'd deem this usable in real world scenarios. Right now, it's great for tests and to learn and explore. Most of the code here works, and has been tested on a Samsung Galaxy S3 running Jelly Bean (Cyanogen Mod). The browser used in these tests was Chrome. 

I currently have code only for Arduino boards. I've tested on an UNO, but any 5V Arduino that can use the tone() method should be fine. 

In its current state, this repo contains code for only one way communication (Arduino to phone browser). At some point, a two-way communication protocol has to be developed. 

### Caution

Do NOT use this with an iPhone / iPad or any Apple device. I have not tested this yet on any Apple device, and I have good reason to believe it might not be good for the device. Android devices are fine. That being said, use at your own risk for now.

### Setup

Read the above Caution section before doing this... __Seriously.__

**Arduino**
Use the circuit as shown below. 

You don't necessarily need the TRRS adapter from Sparkfun. Although, that makes it a lot easier. 

You only need to use the [*Ring2* and *Sleeve* plates](https://robrobinette.com/images/Audio/TRRS_Balanced_Headphone_Pinout.jpg) on the connector. 

![Breadboard circuit](/circuit/periph-circuit_bb.png)

![Circuit Diagram](/circuit/periph-circuit_schem.png)

**Webpage**

All of the examples have to be run with https or locally within the device. I'll try to set up some https webpages soon for the examples to be easily accessible. 


### Examples

1. **periphBasic** can be used to check if the js part works fine *without* the microcontroller. Just run the webpage, allow microphone access and whistle to see the change.

2. **periphBlink** is like the Arduino's blink sketch. The arduino sends a signal to the phone every second that alternates the background of the canvas element between two shades of grey.

3. **periphJoystick** gets x and y values from a [joystick module](http://www.sainsmart.com/sainsmart-joystick-module-free-10-cables-for-arduino.html) and animates a virtual joystick on screen.

4. **periphSnake** build upon periphJoystick to work the the popular snake game. Code modified from [Dan Shiffman's Coding Rainbow](https://github.com/CodingRainbow).

### References

[Wolf Paulus' Slideshare presentation](http://www.slideshare.net/wolfpaulus/android-arduino-and-the-headphone-jack)

[Chris Wilson's Pitch Detect](https://github.com/cwilso/PitchDetect)

[Dan Shiffman's p5js Snake game](https://github.com/CodingRainbow/Rainbow-Code/tree/master/challenges/CC_03_Snake_game_p5.js)


