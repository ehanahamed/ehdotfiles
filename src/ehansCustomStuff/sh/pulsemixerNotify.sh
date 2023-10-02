#! /bin/bash

# Will get the current speaker's volume, no extra setup needed for headphones, bluetooth speakers, etc
volumeraw=$(pulsemixer --get-volume)
volume=${volumeraw%% *}
if [ $(pulsemixer --get-mute) == 1 ]; then
  notify-send -u low -t 1000 -h int:value:$volume "Volume: $volume%" "(muted)"
else
  notify-send -u low -t 1000 -h int:value:$volume "Volume: $volume%" "(UNMUTED)"
fi
