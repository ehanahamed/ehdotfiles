all the packages in `hyprlandRice/`, plus:

- `gnome`
  - this package group includes gdm
    - run `systemctl enable gdm.service` to enable gdm
    - if you had ly from the hyprland rice, disable ly.service first
- `gnome-extra`
- `gnome-shell-extension-forge` (AUR)
- `gnome-shell-extension-kimpanel-git` (AUR)
  - for fcitx5
    - btw you need gdm enabled for fcitx5 to autostart

ly and fcitx5, mentioned above, are explained in `hyprlandRice/`

For `gnome-shell-extension-kimpanel-git` with fcitx5, I installed `fcitx5`, `fcitx5-gtk`, `fcitx5-qt`, `fcitx5-configtool`, and `fcitx5-chinese-addons`, which was explained in `hyprlandRice/`

Installing gnome extensions through pacman or the aur is the most simple method. After installing one you might need to reboot before they appear under the extensions list. And to uninstall, removing the package and rebooting removes the extension correctly.
