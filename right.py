#! /usr/bin/env python
import time as t
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.cleanup()
GPIO.setup(4, GPIO.OUT)
print("Turning Right...");
GPIO.output(4, GPIO.HIGH)
t.sleep(1)
print("...Turned Right");
GPIO.output(4,GPIO.LOW)
GPIO.cleanup()
