# Fixing annoying stuff for Windows Dual Booting

This page is only for users who have a dual boot with windows.

## Boot order

After installing Arch in a dual boot with Windows, you might notice that your computer boots to Windows by default.

**If you know how, first try to set your boot order through your UEFI's settings.** If changing these settings doesn't work, your UEFI doesn't let you change them, or you do not know how to change these settings through your UEFI, follow the steps below.

### Step 0: Manually booting to Arch

If you are already in Arch, go to the next step.

If you are basically "stuck" in windows, don't worry there is a really simple way to manually boot to Arch.

Open the settings app.

Navigate to the Windows Update section.

Select the "advanced options" section.

Select the "recovery" section.

Select "advanced restart".

Restart using the "advanced restart" option.

### Step 1: Installing efibootmgr

**If you already have efibootmgr, go to the next step.** (If you followed this guide's Arch installation page, you have already installed efibootmgr.) If you do NOT have efibootmgr installed yet, install it using `pacman`.
```
# pacman -S efibootmgr
```

### Step 1: Find the boot number

First check the boot number/id of your GRUB
```
# efibootmgr
```

The output should look similar to this:
```
BootCurrent: 9999
Timeout: 99 seconds
BootOrder: 0001,9999,0002
Boot0001* abcdef
Boot0002* ghijkl
Boot9999* GRUB mnopqrstuvwxyz
```

The only important number here is `BootCurrent`. (It is probably NOT `9999` for you, `9999` is just an example.) Write down/remember what the `BootCurrent` number is for your computer.

NO OTHER NUMBER MATTERS IN THIS EXAMPLE! (**Do NOT change your settings to look like the example**, everyone's numbers and orders and names will be different!)

### Step 2: Test the nextboot option

Run `efibootmgr` with the next-boot option (`-n`), to make it so your computer boots to the inputted bootnumber next restart. **REPLACE `9999` WITH THE NUMBER YOU GOT FROM THE LAST STEP.**
```
#efibootmgr -n 9999
```

Now, restart your computer. It should boot to Arch! However, this change is temporary.  Follow the next steps to make this a permanent change.

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
