# Fixing annoying stuff for Windows Dual Booting

This page is only for users who have a dual boot with windows.

## Boot order

Is your computer booting to 

Your UEFI probably has an option to change the boot order and make GRUB boot first, but you may notice that it doesn't work. This is because some UEFI don't listen to the UEFI specification and do whatever they want (the "whatever they want" in this case is making windows' boot loader always the first boot option).

