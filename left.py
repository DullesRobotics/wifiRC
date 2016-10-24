#! /usr/bin/env python
import time as t
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.cleanup()
GPIO.setup(17, GPIO.OUT)

GPIO.output(17, GPIO.HIGH)
t.sleep(1)
GPIO.output(17,GPIO.LOW)
GPIO.cleanup()
