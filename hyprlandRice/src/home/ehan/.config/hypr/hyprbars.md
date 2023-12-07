# hyprbars

## Compiling

To compile, see https://wiki.hyprland.org/Plugins/Using-Plugins/

If the url above changes, just search the documentation/wiki for "plugins". 

After you compile it and get the `hyprbars.so` file, copy that somewhere (I put it in `~/.config/hypr/`)

Now add it to the `hyprland.conf` config (use an absolute path)

For example, my config has
```
plugin = /home/ehan/.config/hypr/hyprbars.so
```

btw the other files (in the git repo you cloned) are not needed (other than to re-compile it)

### If it's not working, try to...

Try updating everything, (`pacman -Syu` and/or `yay -Syu`)

Uninstall and reinstall Hyprland, especially if you installed the archlinux package.

It sounds useless, but those will re-run build scripts that setup important headers needed to compile plugins.

After you do any of those steps, delete the old `.so` file and try to recompile it!

## Configuring

See https://github.com/hyprwm/hyprland-plugins/tree/main/hyprbars#readme


