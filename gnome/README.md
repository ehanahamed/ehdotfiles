all the packages in `hyprlandRice/`, plus:

- `gnome`
  - this package group includes gdm
    - run `systemctl enable gdm.service` to enable gdm
    - if you had ly from the hyprland rice, disable ly.service first
- `gnome-extra`
- `gnome-shell-extension-pop-shell`
- `gnome-shell-extension-kimpanel-git` (AUR)
  - for fcitx5
    - btw you need gdm enabled for fcitx5 to autostart

ly and fcitx5, mentioned above, are explained in `hyprlandRice/`

For `gnome-shell-extension-kimpanel-git` with fcitx5, I installed `fcitx5`, `fcitx5-gtk`, `fcitx5-qt`, `fcitx5-configtool`, and `fcitx5-chinese-addons`, which was explained in `hyprlandRice/`

For keyboard shortcuts, sometimes you need to use dconf editor (like for multiple shorcuts, single-key shorcuts (like for pop shell), etc)
