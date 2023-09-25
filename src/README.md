# Packages

All of these are from arch's repositories through `pacman`, or from the `aur`

## Window Manager & Stuff

 - `hyprland` - wm
 - `xdg-desktop-portal-hyprland` - xdg stuff
 - `xdg-desktop-portal-wlr` - xdg stuff
 - `hyprpaper` - wallpaper utility
 - `kitty` - terminal
 - `tofi` - menu & launcher
   - see [`~/.config/tofi/config`](./home/ehan/.config/tofi/config)
 - `hyprshot` - screenshot utility
 - `dunst` - notifications
 - `wev` - test/debug keybinds & stuff
 - `brightnessctl` - screen brightness
 - `ly` - [display manager](./dm.md)

## Permissions, polkit, keyring, etc

 - `polkit-gnome` - polkit agent
   - polkit-gnome is started manually as an `exec-once` in `hyprland.conf`
 - `libsecret` - keyring thingy
 - `gnome-keyring` - keyring thingy
   - see https://wiki.archlinux.org/title/GNOME/Keyring#PAM_step
     - after installing `libsecret` and `gnome-keyring`, you need to add `auth optional pam_gnome_keyring.so` at the end of the `auth` section and `session optional pam_gnome_keyring.so auto_start` at the end of the `session` section in `/etc/pam.d/login`
   - see [`https://wiki.archlinux.org/title/GNOME/Keyring#Launching_gnome-keyring-daemon_outside_desktop_environments_(KDE,_GNOME,_XFCE,_...)`](https://wiki.archlinux.org/title/GNOME/Keyring#Launching_gnome-keyring-daemon_outside_desktop_environments_(KDE,_GNOME,_XFCE,_...))
     - I added `dbus-update-activation-environment --all` and `gnome-keyring-daemon --start --components=secrets` as `exec-once`s in my `hyprland.conf`
 - `seahorse` - gui for keyring thingy

## Audio

 - `pipewire` - [audio & stuff](./audio.md)
 - `wireplumber` - [audio & stuff](./audio.md)
 - `pipewire-audio` - [audio & stuff](./audio.md)
 - `pipewire-pulse` - [audio & stuff](./audio.md)
 - `pulsemixer` - volume control

## Extra stuff

 - `cava` - audio visualizer (for asthetics)
 - `cliphist` - clipboard manager
 - `pick` - fuzzy search tool
   - can be used to search through a command that outputs lots of lines, like `commandThatReturnsLargeList | pick`

## gtk & other disgusting bloatware

 - `gnome-themes-extra` - 🤮 needed for gtk to work
 - `catppuccin-gtk-theme-mocha` - doesn't make gtk less disgusting, but makes it hurt less
   - See https://github.com/catppuccin/gtk#readme
   - See [`~/.config/hypr/hyprland.conf`](./home/ehan/.config/hypr/hyprland.conf)

## Theming the virtual console

 - `mkinitcpio-colors-git`
   - see [`/etc/mkinitcpio.conf`](./etc/mkinitcpio.conf)
     - "runs" `mkinitcpio-colors` to set colors
   - see [`/etc/mkinitcpio.conf.md`](./etc/mkinitcpio.conf.md)
   - see https://github.com/evanpurkhiser/mkinitcpio-colors
   - see [`etc/vconsole.conf`](./etc/vconsole.conf)
     - defines the colors to use
