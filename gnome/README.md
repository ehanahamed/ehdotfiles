packages
- `networkmanager`
- `sof-firmware`
- `bluez`
- `bluez-utils`
- `pulsemixer`
- `gnome`
  - this package group includes `gdm`
    - run `systemctl enable gdm.service` to enable gdm
- https://github.com/catppuccin/gtk
- `gnome-extra`
- `gnome-shell-extension-forge` (AUR)
- `gnome-shell-extension-blur-my-shell` (AUR)
- `fcitx5`
- `fcitx5-qt`
- `fcitx5-gtk`
- `fcitx5-configtool`
- `gnome-shell-extension-kimpanel-git` (AUR)
  - for fcitx5
    - btw you need gdm enabled for fcitx5 to autostart
- `blackbox-terminal`
- https://github.com/catppuccin/blackbox

extra stuff
- `blueman`
- `kdenlive`
- `gparted`
- `guvcview`
- `fcitx5-chinese-addons`
- `vulkan-intel`

For fcitx5, i disabled the input source keyboard shorcuts from gnome's settings, so that the shortcuts from fcitx5's settings work.

Installing gnome extensions through pacman or the aur is the most simple method. After installing one you might need to reboot before they appear under the extensions list. And to uninstall, removing the package and rebooting removes the extension (and all its settings, menus, shortcuts, etc) correctly.
