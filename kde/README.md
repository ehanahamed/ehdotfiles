packages
- `networkmanager`
- `sof-firmware`
- `bluez`
- `bluez-utils`
- `pulsemixer`
- `plasma`
- https://github.com/catppuccin/kde
- https://github.com/catppuccin/gtk
- `fcitx5`
- `fcitx5-qt`
- `fcitx5-gtk`
- `fcitx5-configtool`
- https://github.com/catppuccin/fcitx5
- `blackbox-terminal`
- https://github.com/catppuccin/blackbox

extra stuff
- `blueman`
- `kdenlive`
- `gparted`
- `guvcview`
- `kde-applications`
- `fcitx5-chinese-addons`
- `vulkan-intel`

sddm comes with the plasma package group, make sure to `systemctl enable sddm.service`, you can configure it in kde's system settings

everything else (bars, pannels, widgets, etc) can be super easily configured through kde's settings

for fcitx5, go to keyboard settings and choose fcitx5 as your "virtual keyboard", fcitx5's settings are normally under fcitx5's configtool app, but in kde that app is part of kde's settings app, under "input method"
