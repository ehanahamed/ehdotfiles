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

Now, to add these changes to your actual GRUB, run (as superuser/root/sudo):
(this assumes you followed `installation.md` to install arch with grub, if you didn't follow that guide, then your grub might be at a different path.)
```
# grub-mkconfig -o /boot/grub/grub.cfg
```

Now reboot and check to see if it works!

## Weird/glitchy graphics/animations

If you have weird glitchy graphics or animations in some apps, like css animations looking super broken and laggy on your web browser, then it might actually be because you aren't using a compositor.

Compositors are usually used to add extra effects, animations, and graphics to windows on linux.

Even though it sounds kinda ironic that a compositor would fix this, its because without a compositor or a re-parenting window manager, everything is "directly" rendered/displayed to your screen. With a compositor or reparting window manager, everything is "pre-rendered" offscreen then displayed onscreen. This actually completly fixes glitchy stuff for most people.

## Emojis

(See https://github.com/androlabs/emoji-archlinux)

### Install Package font

```sh
$ sudo pacman -S noto-fonts-emoji
```

### Configure Emoji Font

```sh
$ cd ~/.config/fontconfig/ && ls
```

<hr>

_Check if exists file_ `fonts.conf`

* Case not exists

```sh
$ sudo touch fonts.conf
```

* Case exists

```sh
$ sudo nano fonts.conf
```
<hr>

Insert in `fonts.conf`

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
 <alias>
   <family>sans-serif</family>
   <prefer>
     <family>Noto Sans</family>
     <family>Noto Color Emoji</family>
     <family>Noto Emoji</family>
     <family>DejaVu Sans</family>
   </prefer> 
 </alias>

 <alias>
   <family>serif</family>
   <prefer>
     <family>Noto Serif</family>
     <family>Noto Color Emoji</family>
     <family>Noto Emoji</family>
     <family>DejaVu Serif</family>
   </prefer>
 </alias>

 <alias>
  <family>monospace</family>
  <prefer>
    <family>Noto Mono</family>
    <family>Noto Color Emoji</family>
    <family>Noto Emoji</family>
   </prefer>
 </alias>
</fontconfig>
```

## Other languages

work in progress

so far:

installed noto-sans-cjk font and did stuff so far
