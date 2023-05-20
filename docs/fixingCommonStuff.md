# Fixing stuff

## Keyboard not working

If your keyboard works in GRUB, but then doesn't work in linux. First wait a few minutes, and then check if it just starts working again.

This usually happens on internal laptop keyboards, the keyboard works in grub, then doesn't work inside linux, then after pressing random keys for a few minutes, it starts working.

To fix this and make your keyboard work immedietly, just add `i8042.dumbkbd` to your GRUB.

Edit `/etc/default/grub` as superuser (with sudo or as root)

Find the line in your grub config that looks like
```
GRUB_CMDLINE_LINUX_DEFAULT="SOMETHING SOMETHING"
```

do not delete anything that already exists there, add `i8042.dumbkbd=1` to the end of the line, before the end quote.

Like this:
```
GRUB_CMDLINE_LINUX_DEFAULT="SOMETHING SOMETHING i8042.dumbkbd=1"
```

Now save the changes to your grub config.

Now, to add these changes to your actual GRUB, run:
(this assumes you followed `installation.md` to install arch with grub, if you didn't follow that guide, then your grub might be at a different path.)
```
# grub-mkconfig -o /boot/grub/grub.cfg
```

Now reboot and check to see if it works!
