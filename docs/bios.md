# BIOS stuff

ALWAYS DISABLE `SECURE BOOT`! It's not actually "secure" or "safe", all it actually does is force you to use default settings. (Like forcing you to boot to windows, or breaking your linux installation!)

## Boot order

### HP BIOSs

In the "OS Boot Manager" submenu of the boot order menu, you can NOT move the bootloaders up or down when `secure boot` is enabled.

When `secure boot` is disabled, you can move the bootloaders under the "OS Boot Managers" submenu up and down, but pushing `esc` will NOT save them. You have to press `F10`. It never says this anywhere, but you have to press `F10` to save the order in the submenu. (This probably only applies to HP BIOSs)

...
