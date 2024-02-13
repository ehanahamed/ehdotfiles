# Ehan's dotfiles

hyprland rice

## TODO

- cava config
  - `source` is the number from `pactl list sources`, or `auto`
- move from wofi to ags
  - add emoji stuff to ags
  - move clipboard stuff to ags
- rerun ags when new monitor added
  - https://wiki.hyprland.org/0.22.0beta/FAQ/#how-do-i-move-my-favorite-workspaces-to-a-new-monitor-when-i-plug-it-in

## Custom scripts

 - [`tofiHyprshot.sh`](./src/ehansCustomStuff/sh/tofiHyprshot.sh)
   - Dependencies
     - `tofi` (AUR)
     - `hyprshot` (AUR)
 - [`tofiCliphist.sh`](./src/ehansCustomStuff/sh/tofiCliphist.sh)
   - Dependencies
     - `tofi` (AUR)
     - `cliphist` 

## Packages

All of these are from arch's repositories through or from the `aur`. 

I use `yay` to easily install aur packages.

### Important-ish stuff
- `networkmanager` - network stuff, provides `nmcli` and `nmtui`
- `ly` - display manager
  - to setup, enable `ly.service` (`systemctl enable ly.service`)
  - I customized the colors using `mkinitcpio-colors`, see [`etc/mkinitcpio.conf.md`](./src/etc/mkinitcpio.conf.md)  

### Internet & wifi
- `networkmanager`
  - its commands are `nmcli` and `nmtui`
    - if you wanna really quickly setup wifi use `nmtui`
  - if you installed it correctly, it will automatically reconnect to your wifi after you log in to one once

- while installing archlinux you'll by default be able to use a command called `iwctl`
  - before being able to install networkmanager, you'll be "forced" to use `iwctl`, read its archwiki page to figure it out ig

### Window Manager & Stuff

 - `hyprland` - wm
 - `xdg-desktop-portal-hyprland` - xdg stuff
 - `xdg-desktop-portal-wlr` - xdg stuff
 - `hyprpaper` - wallpaper utility
 - `kitty` - terminal
 - `tofi` (AUR) - menu & launcher
   - see [`~/.config/tofi/config`](./src/home/ehan/.config/tofi/config)
 - `hyprshot` (AUR) - screenshot utility
 - `wev` (AUR) - test/debug keybinds & stuff
 - `brightnessctl-git` (AUR) - screen brightness (aur `-git`` version has new features required by this rice)
 - `blueman` - bluetooth gui
 - `aylurs-gtk-shell-git` (AUR) - (aka "ags") widgets, notifications, status bar, osd, etc
   - dependencies (for the config, not ags itself)
     - `sassc`
     - `swww` (AUR)
     - `hyprpicker` (AUR)
     - `python-pam`
     - `pavucontrol` - NOT actually needed, but some buttons are supposed to launch pavucontrol
     - `gnome-bluetooth-3.0` (NOT the same as `gnome-bluetooth`)
       - (this is NOT one of gnome's bloatware, its an important bluetooth backend thingy)

### Graphics

Some software needs vulkan, for my hardware (integrated graphics + intel cpu), these are the packages I use:

- `vulkan-intel` - intel vulkan driver, no "setup" required
  - I just installed it through pacman, and relaunched an app (godot) that didn't work before, and now it works

### Bluetooth

- `bluez` - bluetooth
  - after installing, enable `bluetooth.service` (`systemctl enable bluetooth.service`)
- `bluez-utils` - bluetooth, also, it provides `bluetoothctl`
- `blueman` - bluetooth gui

### Permissions, polkit, keyring, etc

 - `polkit-gnome` - polkit agent
   - polkit-gnome is started manually as an `exec-once` in `hyprland.conf`
 - `libsecret` - keyring thingy
 - `gnome-keyring` - keyring thingy
   - see https://wiki.archlinux.org/title/GNOME/Keyring#PAM_step
     - after installing `libsecret` and `gnome-keyring`, you need to add `auth optional pam_gnome_keyring.so` at the end of the `auth` section and `session optional pam_gnome_keyring.so auto_start` at the end of the `session` section in `/etc/pam.d/login`
   - see [`https://wiki.archlinux.org/title/GNOME/Keyring#Launching_gnome-keyring-daemon_outside_desktop_environments_(KDE,_GNOME,_XFCE,_...)`](https://wiki.archlinux.org/title/GNOME/Keyring#Launching_gnome-keyring-daemon_outside_desktop_environments_(KDE,_GNOME,_XFCE,_...))
     - I added `dbus-update-activation-environment --all` and `gnome-keyring-daemon --start --components=secrets` as `exec-once`s in my `hyprland.conf`
 - `seahorse` - gui for keyring thingy

### Audio

 - `pipewire` - [audio & stuff](./src/audio.md)
 - `wireplumber` - [audio & stuff](./src/audio.md)
 - `pipewire-audio` - [audio & stuff](./src/audio.md)
 - `pipewire-pulse` - [audio & stuff](./src/audio.md)
 - `pulsemixer` - volume control tui
 - `pamixer` - needed for `ags` to work
 - `sof-firmware` - needed for audio to work at all
   - you might or might not need it depending on your hardware, search archwiki for more info
   - if you see "dummy output" without this, try installing it or if that doesnt work either try installing the other firmware package, i forgor (search for "sof-firmware", "audio firmware", etc in archwiki)

### Printers & stuff

  - `cups` - OpenPrinting CUPS (Common Unix Printing System)
    - after installing, enable `cups.service` (`systemctl enable cups.service`)
  - `system-config-printer` (https://github.com/OpenPrinting/system-config-printer) gui settings for CUPS

  - for my specific printer
    - `hplip` - for HP printers
      - install it with pacman, and then open system-config-printer (labeled "Print Settings" in most app launchers)
      - then setup your printer(s) and hplip will appear as an option under stuff in system-config-printer after you installed `hplip` 

### Extra stuff

 - `cava` (AUR) - audio visualizer (for asthetics)
 - `cliphist` - clipboard manager
 - `pick` (AUR) - fuzzy search tool
   - can be used to search through a command that outputs lots of lines, like `commandThatReturnsLargeList | pick`
 - `nemo` - the only gui file manager that doesn't suck
 - `nemo-fileroller` - useful stuff for nemo
 - `starship` - shell prompt
 - `pavucontrol` - audio gui
 - `audacity` - audio recording, editing, etc
 - `bottom` - graphical "task manager"
   - its command is `btm`
 - `hyprpicker` - useful color picker
 - `git` - version control, need it for everything
   - btw the command to set email & username is:
     - `git config --global user.name "name goes here"`
     - `git config --global user.email "email@ehan.dev"`
     - this isnt for logging in, its for the info that gets attached to the actual git commits
 - `kdenlive` - open source video editor
   - to get dark theme(s), install `breeze` (theme thingy for kde apps like kdenlive)
 - `obs-studio` - its great for screen recording too

### gtk & stuff
 - `nwg-look` (AUR) - super useful gtk settings editor
  - it "just works" (change settings and click apply, and it works, there's no setup or script or complex config)
  - its named "GTK Settings" in most app launchers
 - `gnome-themes-extra` - needed for gtk themes to work i think?
 - `catppuccin-gtk-theme-mocha` (AUR) - gtk theme
   - I use `Catppuccin-Mocha-Standard-Lavender-Dark`
   - Set it using `nwg-look`
   - OR, WITHOUT `nwg-look`, set the `$GTK_THEME` env variable in `hyprland.conf`
     - `env = GTK_THEME,Catppuccin-Mocha-Standard-Lavender-Dark`
     - do NOT do this if you're using nwg-look
 - `papirus-icon-theme-git` (AUR) - icon theme
   - Set it using `nwg-look`
   - OR, WITHOUT `nwg-look`
     - add `exec-once = gsettings set org.gnome.desktop.interface icon-theme Papirus-Dark` to your `hyprland.conf`
     - only do that if you do NOT use nwg-look
 - `breeze` - theme thingy for kde apps
   - it also has cursor themes and stuff, you can set that using `nwg-look`

### Theming the virtual console (terminal before login, during boot)

- `mkinitcpio-colors-git` (AUR)
  - to setup:
    - update `/etc/mkinitcpio.conf`
      - instructions here: [`etc/mkinitcpio.conf.md`](./src/etc/mkinitcpio.conf.md)
    - define colors in [`etc/vconsole.conf`](./src/etc/vconsole.conf)
      - "instructions"/example in the file
    - then install `mkinitcpio-colors-git` (AUR), or if you installed it before the steps above, reinstall it
      - when you reinstall it, the build script regenerates your initramfs
  - for more info see https://github.com/evanpurkhiser/mkinitcpio-colors and [`etc/mkinitcpio.conf.md`](./src/etc/mkinitcpio.conf.md)

### Fonts

- `ttf-noto-nerd`
  - I use `NotoSansM Nerd Font Propo` in ~~waybar and other~~ stuff

to get all letters, alphabets, & emojis to work, I installed:

- `noto-fonts-emoji` - emojis
  - Install it (through pacman) and then reboot, and it "just works"
    - no setup or settings-changing needed, all apps "just automatically work" after installing & rebooting
  - Without it, emojis appear as blank squares or question mark blocks
- `noto-fonts-cjk` - more languages/alphabets
  - for chinese, japanese, korean, + more
  - Install it (through pacman) and then reboot, and it "just works"
    - even in a web browser for example, just installing it and rebooting fixes any "question mark blocks" or "unknown characters" from other languages
  - it doesn't "break" other languages, like russian or bangla for example, those alphabets will also work with this font
- `noto-fons` - noto emoji has problems without this

### Input & other languages

- `fcitx5` - input method framework
  - lets you switch keyboard layouts & use different alphabets/languages (like Bangla, Chinese, Russian, etc)
- `fcitx5-qt` - even if you think you don't use qt, some apps secretly do
- `fcitx5-gtk` - even if you think you don't use gtk, some apps secretly do
- `fcitx5-configtool` - optional gui settings menu for fcitx5
  - named "Fcitx5 Configuration" in app launchers
  - the menu on the right has a list of keyboard layouts, uncheck "only show current language" to search through more, use the left arrow button in the center to add a layout selected in that list to your "group"/list of "enabled" layouts, on the left (its not obvious at first)
- `fcitx5-chinese-addons` - pinyin and table input method for fcitx5

### Themeing fcitx5

- I use `Catppuccin fcitx5`, see https://github.com/catppuccin/fcitx5
  - Super simple to setup after installing fcitx5, follow the instructions on catppuccin/fcitx5's github readme

btw, there are seperate things that fcitx5 doesn't control (explained below)

I use `altgr-intl` keyboard layout variant through fcitx5, but also without fcitx5 by setting `kb_variant` in `hyprland.conf`, see https://wiki.hyprland.org/Configuring/Variables/#input
  - This keyboard layout/variant lets you use ALT to type special characters, for example:
    - `ALT` + `"` + `o` = `ö`
    - `ALT` + `'` + `a` = `á`
    - `ALT` + `c` = `©`
    - `ALT` + `?` = `¿`
    - `ALT` + `~` + `n` = `ñ`
    - btw these special character combinations quite logical, for example:
      - `ALT` + `SHIFT` + `0` = `°`
        - so, `ALT` + `SHIFT` + `0` + `a` = `å`

I set compose key in hyprland using `kb_options` in `hyprland.conf`
  - I set it to my capslock key, because I never use capslock, you can set it to whatever you want using `kb_options`
    - search for `kb_options` my [`hyprland.conf`](./src/home/ehan/.config/hypr/hyprland.conf) to see the syntax
    - also see the hyprland wiki: https://wiki.hyprland.org/Configuring/Variables/#input
  - Just like the alt deadkey, compose key is very epic and logical, for example:
    - `COMPOSE` then `o` then `c` = `©`
    - `COMPOSE` then `o` then `a` = `å`

One difference between the compose key and the `altgr-intl` layout variant is that the compose key works on every layout, while `altgr-intl` IS a layout.

Also, you don't need to hold down the compose key, you press it once, then press the other keys (that's why i typed "then" for compose and "+" for altgr-intl)
