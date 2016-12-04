# Periph

Periph is intended to be a protocol for microcontrollers to be able to communicate with web browsers on phones and other devices via the headphone jack. 

### Status
Currently, I would not call anything in this repository an actual protocol. A lot more work is required before I'd deem this usable in real world scenarios. Right now, it's great for tests and to learn and explore. Most of the code here works, and has been tested on a Samsung Galaxy S3 running Jelly Bean (Cyanogen Mod). The browser used in these tests was Chrome. 

I currently have code only for Arduino boards. I've tested on an UNO, but any 5V Arduino that can use the tone() method should be fine. 

In its current state, this repo contains code for only one way communication (Arduino to phone browser). At some point, a two-way communication protocol has to be developed. 

### Caution / Advisory
Do NOT use this with an iPhone / iPad or any Apple device. I have not tested this yet on any Apple device, and I have good reason to believe it might not be good for the device. Android devices are fine. That being said, use at your own risk for now.

### Setup

***Read the above Caution/Avisory before doing this. Seriously. ***

___Arduino___

TODO - insert circuit diagram here.

___Webpage___
All of the examples have to be run with https or locally within the device. I'll try to set up some https webpages soon for the examples to be easily accessible. 

### Examples

