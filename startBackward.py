#! /usr/bin/env python
import time as t
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(22, GPIO.OUT)

GPIO.output(22, GPIO.HIGH)
