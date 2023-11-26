#! /bin/bash

mode=$(echo -e "output\nwindow\nregion" | tofi --prompt-text "Capture: ")
if [ "$mode" != "" ]; then
  hyprshot -m $mode
fi
