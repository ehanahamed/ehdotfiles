# mkinitcpio

See https://wiki.archlinux.org/title/Mkinitcpio for general info about `mkinitcpio`

The only thing I changed in my mkinitcpio.conf is in `HOOKS`, I added `colors` after the already existing `udev`. This is needed for the `mkinitcpio-colors-git` package to set the colors of the virtual terminal (the terminal that shows before login)

See https://github.com/evanpurkhiser/mkinitcpio-colors for into on `mkinitcpio-colors-git`

Make sure you regenerate your initramfs, like this
```
# mkinitcpio -p linux
```
