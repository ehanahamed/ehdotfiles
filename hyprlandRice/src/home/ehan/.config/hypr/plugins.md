# hyprland plugins

## Compiling

To compile plugins, see https://wiki.hyprland.org/Plugins/Using-Plugins/

If the url above changes, just search hyprland's documentation/wiki for "plugins".

It's actually really easy, all you do is run a few commands.

Basically
- clone the plugin's repository
- clone hyprland's repository (clone it inside of the plugin's repository)
  - we're NOT installing hyprland, we're updating it's headers to build the plugin, clone it even though you already have hyprland installed
- in hyprland's repository:
  - run `git checkout tags/yourHyprlandVersion`
    - for example `git checkout tags/v0.33.1`
    - make sure you use YOUR current hyprland version
  - after you checkout the right tag, run `make all && sudo make installheaders`
- in the plugin's repository:
  - after you did everything for hyprland's repository, run `make all` in the plugin's repository
    - after that command finishes, a `.so` file should be created

If the instructions above are different from the hyprland wiki's instructions, then this might be outdated, and you should follow the hyprland wiki. (https://wiki.hyprland.org/Plugins/Using-Plugins/)

After you compile it and get that `pluginname.so` file, copy that somewhere (I put it in `~/.config/hypr/`)

Now add it to the `hyprland.conf` config (use an absolute path)

For example, my config ~~has~~ (used to have)
```
plugin = /home/ehan/.config/hypr/hyprbars.so
```

After you're done compiling it, you can delete the plugin's repository and hyprland's repository

### If plugins don't work or if hyprland crashes

If you cannot run hyprland because it crashes right after logging in, log into a different window manager, desktop environment, shell, or something with a terminal through your display manager.

If you're display manager doesn't have that option, open a tty using `Ctrl`, `Alt`, `F3` or `Ctrl`, `Alt`, `F4`.

Once you're able to run commands in a terminal/tty again, (or if hyprland didn't crash, but plugins don't work), do the steps below.

Try updating everything, on archlinux that's `pacman -Syu` and/or `yay -Syu`

Uninstall and reinstall Hyprland, especially if you installed the archlinux package.

It sounds useless, but reinstalling will re-run build scripts that setup important headers needed to compile plugins.

After you do any of those steps, delete the old `.so` file and try to recompile it!

btw, if hyprland crashed and you're using a tty, the `reboot` command exists, and if it returns an error, just use `sudo reboot`

## Configuring

Make sure the following line(s) is/are in your `hyprland.conf`
```
plugin = /path/to/plugin
```

btw the path should be absolute (starting from `/`) (NOT `./`, `~/`, `../`, etc)

When a plugin's documentation says `pluginname {` or `plugin:pluginname {`, it means this, and it means in `hyprland.conf`
```
plugin {
    pluginname {
        options = go, here
    }
}
```
