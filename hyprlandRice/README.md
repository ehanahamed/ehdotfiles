# Ehan's dotfiles

hyprland rice

## TODO

- cava config
  - `source` is the number from `pactl list sources`, or `auto`
- move from wofi to ags
  - add emoji stuff to ags
  - move clipboard stuff to ags
- printer stuff
  - document & implement
  - CUPS
  - system-config-printer (https://github.com/OpenPrinting/system-config-printer) for CUPS
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

### Bluetooth

- `bluez` - bluetooth
- `bluez-utils` - bluetooth, also, it provides `bluetoothctl`
- something else i forgor

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

### gtk & stuff
 - `lxappearance` - super useful
 - `gnome-themes-extra` - needed for gtk themes to work i think?
 - `catppuccin-gtk-theme-mocha` (AUR) - gtk theme
   - I use `Catppuccin-Mocha-Standard-Lavender-Dark`
   - I set this using `lxappearance`, and setting the `$GTK_THEME` env variable in [`~/.config/hypr/hyprland.conf`](./src/home/ehan/.config/hypr/hyprland.conf)
     - Some line in my `hyprland.conf` has `env = GTK_THEME...`
 - `papirus-icon-theme-git` (AUR) - icon theme
   - I set the icon theme using `lxappearance` and by running `gsettings set org.gnome.desktop.interface icon-theme Papirus-Dark`

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

### Input & other languages

- `fcitx5` - input method framework
  - lets you switch keyboard layouts & use different alphabets/languages (like Bangla, Chinese, Russian, etc)
- `fcitx5-configtool` - optional gui settings menu for fcitx5
- `fcitx5-chinese-addons` - pinyin and table input method for fcitx5

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
