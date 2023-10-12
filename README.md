# Ehan's dotfiles

## Custom scripts

 - [`tofiHyprshot.sh`](./src/ehansCustomStuff/sh/tofiHyprshot.sh)
   - Dependencies
     - `tofi` (AUR)
     - `hyprshot` (AUR)
 - [`tofiCliphist.sh`](./src/ehansCustomStuff/sh/tofiCliphist.sh)
   - Dependencies
     - `tofi` (AUR)
     - `cliphist` 
 - [`avizoVolumectl`](./src/ehansCustomStuff/sh/avizoVolumectl.sh)
   - Custom modification of volumectl from https://github.com/misterdanb/avizo
     - My version uses custom images, see [`osd.md`](./docs/configuringStuff/osd.md)
   - Dependencies
     - `pamixer`
     - `pactl`
 - [`avizoLightctl`](./src/ehansCustomStuff/sh/avizoLightctl.sh)
   - Custom modification of lightctl from https://github.com/misterdanb/avizo
     - My version uses custom images, see [`osd.md`](./docs/configuringStuff/osd.md)
   - Dependencies
     - `brightnessctl-git` (AUR)
       - I use AUR version because it has new features needed by other scripts (like Waybar)

## Packages

All of these are from arch's repositories through or from the `aur`. 

I use `yay` to easily install aur packages.

### Important-ish stuff
 - `networkmanager` - network stuff, provides `nmcli` and `nmtui`
 - `ly` - [display manager](./src/dm.md)

### Window Manager & Stuff

 - `hyprland` - wm
 - `xdg-desktop-portal-hyprland` - xdg stuff
 - `xdg-desktop-portal-wlr` - xdg stuff
 - `hyprpaper` - wallpaper utility
 - `kitty` - terminal
 - `tofi` (AUR) - menu & launcher
   - see [`~/.config/tofi/config`](./src/home/ehan/.config/tofi/config)
 - `hyprshot` (AUR) - screenshot utility
 - `swaync` (AUR) - notifications
 - `wev` (AUR) - test/debug keybinds & stuff
 - `brightnessctl-git` (AUR) - screen brightness (aur `-git`` version has new features required by this rice)
 - `waybar` - bar, config & css under `~/.config/waybar`

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
 - `pamixer` - needed for `avizo` to work

### Extra stuff

 - `cava` (AUR) - audio visualizer (for asthetics)
 - `cliphist` - clipboard manager
 - `pick` (AUR) - fuzzy search tool
   - can be used to search through a command that outputs lots of lines, like `commandThatReturnsLargeList | pick`
 - `nemo` - the only gui file manager that doesn't suck
 - `nemo-fileroller` - useful stuff for nemo

### gtk & stuff
 - `lxappearance` - super useful
 - `gnome-themes-extra` - needed for gtk themes to work
 - `flat-remix-gtk` (AUR) - gtk theme
   - I use `Flat-Remix-GTK-Violet-Dark`, all of them are in the same package
   - I set this using `lxappearance` & `$GTK_THEME` variable, see [`~/.config/hypr/hyprland.conf`](./src/home/ehan/.config/hypr/hyprland.conf)
     - Some line has `env = GTK_THEME...`
 - `flat-remix` (AUR) - icon theme
   - I use `Flat-Remix-Violet-Dark`, all of them are in the same package
   - I set the icon theme using `lxappearance`

### Theming the virtual console (terminal before login, during boot)

 - `mkinitcpio-colors-git` (AUR)
   - see [`/etc/mkinitcpio.conf`](./src/etc/mkinitcpio.conf)
     - "runs" `mkinitcpio-colors` to set colors
   - see [`/etc/mkinitcpio.conf.md`](./src/etc/mkinitcpio.conf.md)
   - see https://github.com/evanpurkhiser/mkinitcpio-colors
   - see [`etc/vconsole.conf`](./src/etc/vconsole.conf)
     - defines the colors to use

### OSD, like volume/brightness indicator and stuff

 - `avizo` (AUR) - on screen display for multimedia keys and stuff
   - requires `pamixer`, `brightnessctl-git` (AUR), and `pactl`

### Fonts

 - `ttf-iosevka-nerd`
 - `ttf-iosevkaterm-nerd`
 - `ttc-iosevka`
