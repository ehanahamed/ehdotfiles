# mkinitcpio

See https://wiki.archlinux.org/title/Mkinitcpio for general info about `mkinitcpio`

The only thing I changed in my `mkinitcpio.conf` is in `HOOKS(`, I added `colors` after the already existing `udev`. This is needed for the `mkinitcpio-colors-git` (AUR) package to set the colors of the virtual terminal (the terminal that shows before login)

See https://github.com/evanpurkhiser/mkinitcpio-colors for info on `mkinitcpio-colors-git`

Make sure you regenerate your initramfs, which can be done by reinstalling `mkinitcpio-colors-git` (AUR)

You can also manually regenerate your initramfs, but that is done differently depending on your arch installation, so i can't really show you a specific example command. See https://wiki.archlinux.org/title/Mkinitcpio for more info.
