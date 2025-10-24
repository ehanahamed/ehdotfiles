# Fixing fn lock on LG Gram laptop running Linux

My keyboard has fn lock/function lock with the escape key, but pressing fn + esc doesn't work when booted into Arch Linux. I have to hold fn to make the volume keys mute/decrease/increase volume instead of behaving like f10/f11/f12, and fn + esc doesn't change it, so it was just stuck like that, even if I reboot. I also couldn't find any BIOS setting for fn lock/action key behavior on this laptop.

`cat /sys/devices/platform/lg-laptop/fn_lock` outputs `0`, which would imply that function lock/fn lock is off, but i guess fn lock is "inverted" on LG Gram laptops, so try:
```
echo 1 | sudo tee /sys/devices/platform/lg-laptop/fn_lock
```

and then see if it changes it, for me it did (yay)

so to save that after reboot, I created `/etc/udev/rules.d/99-fnlock.rules` and put this:
```
SUBSYSTEM=="platform", DRIVER=="lg-laptop", ATTR{fn_lock}="1"
```

and i wrote it here for future reference
