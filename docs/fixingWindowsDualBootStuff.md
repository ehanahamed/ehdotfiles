# Fixing annoying stuff for Windows Dual Booting

This page is only for users who have a dual boot with windows.

## Time

You may notice that the time in Arch is wrong. If it has the correct minute and second but the hour is incorrect, then it's because Windows stores time in the hardware clock as your Local Timezone, while Linux (and Arch) store it as UTC by default. If you're time is also wrong by the minute or second, then you might have a different problem that this page doesn't solve.

There are three ways to solve this
 - Set your time zone in Windows to UTC
    - This will make time wrong in Windows, but right in Arch
 - Set your time zone in Arch to UTC
    - This will make the time right on both Arch & Windows
    - However, Arch will now think your timezone is UTC, which will cause some odd behavior.
 - Make Arch store local time in hardware clock
    - not reccomended

This documentation reccomends using option 1, settings your time zone to UTC in Windows. This documentation also only explains option 1, because I have no clue how to do the other options.

Obvously, this can be done through Windows's settings app, nothing else needs to be done in Arch.

## Drives

Is an NTFS partition on your drive saying it's "read-only"? this might be becau
