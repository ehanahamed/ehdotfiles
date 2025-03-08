#! /bin/bash

cliphist list | tofi --prompt-text "Copy: " | cliphist decode | wl-copy
