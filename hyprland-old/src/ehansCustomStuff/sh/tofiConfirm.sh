#! /bin/bash

command=$1
prompttext=$2
confirm=$3
options=$4

input=$(echo -e "$options" | tofi --prompt-text "$prompttext")
if [ "$input" == "$confirm" ]; then
  $command
fi
