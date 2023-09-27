#! /bin/bash

# volumeraw will have a left and right value for the current speaker,
# getting the 0th of the array gives us just one of the sides
volumeraw=$(pulsemixer --get-volume)
volume=${volumeraw%% *}
notify-send -u low -t 600 -h int:value:$volume "Volume: $volume%" "Mute: $(pulsemixer --get-mute)"
