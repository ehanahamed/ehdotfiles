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
 - `polkit-dumb-agent-git` - polkit agent
 - `dunst` - notifications
 - `wev` - test/debug keybinds & stuff
 - `brightnessctl` - screen brightness
 - `ly` - [display manager](./dm.md)

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
