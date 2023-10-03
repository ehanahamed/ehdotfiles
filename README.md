# Ehan's dotfiles

## Custom stuff

 - [`brightnessctlNotify.sh`](./src/ehansCustomStuff/sh/brightnessctlNotify.sh)
   - Dependencies
     - `brightnessctl-git` (AUR git version needed because of its newer features like the `-P` flag)
     - `libnotify` (provides `notify-send` command)
 - [`pulsemixerNotify.sh`](./src/ehansCustomStuff/sh/pulsemixerNotify.sh)
   - Dependencies
     - `pulsemixer`
     - `libnotify` (provides `notify-send` command)
 - [`tofiHyprshot.sh`](./src/ehansCustomStuff/sh/tofiHyprshot.sh)
   - Dependencies
     - `tofi`
     - `hyprshot`
 - clipboard manager using tofi & cliphist
   - Code is in [`hyprland.conf`](./src/home/ehan/.config/hypr/hyprland.conf)
     - Search for `bind = SUPER, C...`
   - Dependencies
     - `tofi`
     - `cliphist` 

## Packages

All of these are from arch's repositories through `pacman`, or from the `aur`

### Window Manager & Stuff

 - `hyprland` - wm
 - `xdg-desktop-portal-hyprland` - xdg stuff
 - `xdg-desktop-portal-wlr` - xdg stuff
 - `hyprpaper` - wallpaper utility
 - `kitty` - terminal
 - `tofi` - menu & launcher
   - see [`~/.config/tofi/config`](./src/home/ehan/.config/tofi/config)
 - `hyprshot` - screenshot utility
 - `swaync` - notifications
 - `wev` - test/debug keybinds & stuff
 - `brightnessctl-git` - screen brightness (aur `-git`` version has new features required by this rice)
 - `ly` - [display manager](./src/dm.md)
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
 - `pulsemixer` - volume control

### Extra stuff

 - `cava` - audio visualizer (for asthetics)
 - `cliphist` - clipboard manager
 - `pick` - fuzzy search tool
   - can be used to search through a command that outputs lots of lines, like `commandThatReturnsLargeList | pick`

### gtk & stuff
 - `lxappearance` - super useful
 - `gnome-themes-extra` - needed for gtk themes to work
 - `flat-remix-gtk` - gtk theme
   - I use `Flat-Remix-GTK-Violet-Dark`, all of them are in the same package
   - I set this using `lxappearance` & `$GTK_THEME` variable, see [`~/.config/hypr/hyprland.conf`](./src/home/ehan/.config/hypr/hyprland.conf)
     - Some line has `env = GTK_THEME...`
 - `flat-remix` - icon theme
   - I use `Flat-Remix-Violet-Dark`, all of them are in the same package
   - I set the icon theme using `lxappearance`

### Theming the virtual console (terminal before login, during boot)

 - `mkinitcpio-colors-git`
   - see [`/etc/mkinitcpio.conf`](./src/etc/mkinitcpio.conf)
     - "runs" `mkinitcpio-colors` to set colors
   - see [`/etc/mkinitcpio.conf.md`](./src/etc/mkinitcpio.conf.md)
   - see https://github.com/evanpurkhiser/mkinitcpio-colors
   - see [`etc/vconsole.conf`](./src/etc/vconsole.conf)
     - defines the colors to use
