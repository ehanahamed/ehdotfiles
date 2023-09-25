#! /bin/bash

mode=$(echo -e "output\nwindow\nregion" | tofi)
if [ "$mode" != "" ]; then
  hyprshot -m $mode
fi
