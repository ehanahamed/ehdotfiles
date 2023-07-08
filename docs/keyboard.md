# keyboard layouts

make sure ur using KDE

install `fcitx5` (pacman)

install `fcitx5-qt` (pacman) and `fcitx5-gtk` (pacman)

if you want chinese cangjie input and other input methods, install `fcitx5-table-extra` (pacman)

you should also install `fcitx5-configtool` (pacman)

reboot

create a shell script, name it whatever you want

in the shell script add
```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
```

you do NOT need a shellbang (a shellbang is the first line of a shell script that usually looks like `#! /path/to/something`)

save the file, and make sure it's chmod-ed as a+rx (all users can read and execute/run)

go to kde system settings, search for autostart

in autostart, the list should already have something there, probably "org.kde.blablabla",

choose the add button, then find your shell script

this will add your shell script to your autostart

reboot

now go to kde system settings > regional settings > input method

the title of the input method section should say "Fcitx 5"

in this section, add and change your keyboard settings.

note that the normal kde keyboard settings (kde system settings > input devices > keyboard) will not work for multiple keyboard layouts now, instead use fctix's settings (kde system settings > regional settings > input method) for multiple layouts and set your default layout in normal kde keyboard settings.

the keyboard shortcut should also be configured in fcitx's settings (kde system settings > regional settings > input method), NOT in kde's keyboard settings (kde system settings > input devices > keyboard)
