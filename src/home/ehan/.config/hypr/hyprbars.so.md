# hyprbars.so

The file, `hyprbars.so` was compiled on my x86_64 machine, it might not work on your own machine.

To compile hyprbars yourself, see the instructions below and also see https://github.com/hyprwm/hyprland-plugins/blob/main/hyprbars/README.md and https://wiki.hyprland.org/Plugins/Using-Plugins/

## Compiling hyprbars

clone hyprland's official plugins repo, `hyprwm/hyprland-plugins`, like so:
```
git clone https://github.com/hyprwm/hyprland-plugins && cd hyprland-plugins
```

It does not matter where you clone it, and you can delete the git repo after you compile and move the `hyprbars.so` file.

If you use `hyprland-git` (AUR) or a hyprland package from a non-arch distro, or compiled hyprland yourself, see the instructions at http://wiki.hyprland.org/Plugins/Using-Plugins/#preparing-hyprland-sources-for-plugins before following the rest of this guide.

If you use `hyprland` (Arch's official package, NOT AUR), then you can do the steps below without reading the link above first.

Go to the `hyprbars` directory of the cloned repo:
```
cd hyprbars
```

Compile it.
```
make all
```

You don't need any knowledge of how C or C++ works, just make sure there are no errors while compiling. Warnings are fine and can be ignored.

If there are any errors (warnings are not errors, ignore them), check the guide at http://wiki.hyprland.org/Plugins/Using-Plugins

If there are no errors (warnings don't matter), then you should get a `hyprbars.so` file in the `hyprbars` folder of the cloned repo.

Copy this file somewhere safe, like `~/.config/hypr/`.

Then, use the plugin by adding this line to your hyprland config file.
```
plugin = /path/to/hyprbars.so
```

## Configuring hyprbars

See https://github.com/hyprwm/hyprland-plugins/blob/main/hyprbars/README.md for how to configure hyprbars. My configuration is somewhere in `~/.config/hyprland.conf` 
