# Ehan's dotfiles

awesomewm rice (last updated 2023/11/26, work in progress)

## TODO

- cava config
  - `source` is the number from `pactl list sources`, or `auto`
- printer stuff
  - document & implement
  - CUPS
  - system-config-printer (https://github.com/OpenPrinting/system-config-printer) for CUPS

## Packages

All of these are from arch's repositories through or from the `aur`. 

I use `yay` to easily install aur packages.

### Important-ish stuff
 - `networkmanager` - network stuff, provides `nmcli` and `nmtui`
 - `ly` - [display manager](./src/dm.md)

### Window Manager & Stuff

 - `awesome` - wm
 - `picom` - compositor (adds animations & stuff)
 - `kitty` - terminal
 - `brightnessctl-git` (AUR) - screen brightness (aur `-git`` version has new features required by this rice)
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
 - `pamixer` - ~~needed for `ags` to work~~ (used by old rice, still useful tho)

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
   - WORK IN PROGRESS needs to be set in awesome rc.lua
     - Used to be in some line in my `hyprland.conf` has `env = GTK_THEME...`
 - `papirus-icon-theme-git` (AUR) - icon theme
   - I set the icon theme using `lxappearance` and by running `gsettings set org.gnome.desktop.interface icon-theme Papirus-Dark`

### Theming the virtual console (terminal before login, during boot)

 - `mkinitcpio-colors-git` (AUR)
   - see [`/etc/mkinitcpio.conf`](./src/etc/mkinitcpio.conf)
     - "runs" `mkinitcpio-colors` to set colors
   - see [`/etc/mkinitcpio.conf.md`](./src/etc/mkinitcpio.conf.md)
   - see https://github.com/evanpurkhiser/mkinitcpio-colors
   - see [`etc/vconsole.conf`](./src/etc/vconsole.conf)
     - defines the colors to use

### Fonts

 - `ttf-noto-nerd`
   - I use `NotoSansM Nerd Font Propo` in waybar and other stuff

## Extra info?

I use `altgr-intl` keyboard layout variant (`kb_variant`), WORK IN PROGRESS needs to be set in awesome rc.lua
  - This variant lets you use ALT to type special characters, for example:
    - `ALT` + `"` + `o` = `ö`
    - `ALT` + `'` + `a` = `á`
    - `ALT` + `c` = `©`
    - `ALT` + `?` = `¿`
    - `ALT` + `~` + `n` = `ñ`
    - btw these special character combinations quite logical, for example:
      - `ALT` + `SHIFT` + `0` = `°`
        - so, `ALT` + `SHIFT` + `0` + `a` = `å`
