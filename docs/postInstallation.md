# Post installation setup

## GRUB

If you're in a dual boot (with windows, another linux os, or anything else) and want to add the other operating system to the grub menu, follow this section.

This guide assumes you already have GRUB, if you do not already have GRUB installed and setup, follow `installtion.md`.

Edit `/etc/default/grub` using a text editor. You must be root to edit this (aka use `sudo`)

In `/etc/default/grub`, the last few lines should look like this:
```
# Probing for other operating systems is disabled for security reasons. Read
# documentation on GRUB_DISABLE_OS_PROBER, if still want to enable this
# functionality install os-prober and uncomment to detect and include other
# operating systems.
#GRUB_DISABLE_OS_PROBER=false
```

See the "`GRUB_DISABLE_OS_PROBER=`", set it to `false` and uncomment it. (The `#` at the start of a line indicates a comment.)

Save the changes to the file.

Now, to add these changes to your actual GRUB, run:
(this assumes you followed `installation.md` to install arch with grub, if you didn't follow that guide, then your grub might be at a different path.)
```
# grub-mkconfig -o /boot/grub/grub.cfg
```

You should be done now! It should now auto-detect other operating systems (like windows, other linux distros, etc) and add them to your GRUB menu!

## Sound

Install `sof-firmware` & `alsa-firmware` (pacman)

Install `pulseaudio` (pacman)

I use pulsemixer, install `pulsemixer` (pacman) if you want ig

Reboot before testing, so that changes are applied!

I didn't need to do any extra configuration, I just installed the packages and they work!

For bluetooth sound stuff, see the `Bluetooth` section (its litterally right under this)

## Bluetooth

I just followed the arch wiki: https://wiki.archlinux.org/title/bluetooth

I installed `bluez` (pacman), then `bluez-utils` (pacman), then enabled `bluetooth.service` (systemctl/systemd) (using `# systemctl enable bluetooth.service` and/or `# systemctl start bluetooth.service`)

I also installed `bluetuith` (AUR) cause its cool ig

For audio to work with bluetooth, install `pulseaudio-bluetooth` (pacman)
