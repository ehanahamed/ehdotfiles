#! /bin/bash

# First clear old notifications
dunstctl close-all

notify-send -u low -t 1000 -h int:value:$(brightnessctl --device=intel_backlight get -P) "Brightness: $(brightnessctl --device=intel_backlight get -P)%"
