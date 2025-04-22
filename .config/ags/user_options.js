// For every option, see ~/.config/ags/modules/.configuration/user_options.js
// (vscode users ctrl+click this: file://./modules/.configuration/user_options.js)
// (vim users: `:vsp` to split window, move cursor to this path, press `gf`. `Ctrl-w` twice to switch between)
//   options listed in this file will override the default ones in the above file

const userConfigOptions = {
    "apps": {
        "terminal": "kitty"
    },
    'time': {
        // See https://docs.gtk.org/glib/method.DateTime.format.html
        // Here's the 12h format: "%I:%M%P"
        // For seconds, add "%S" and set interval to 1000
        'format': "%H:%M",
        'interval': 1000,
        'dateFormatLong': "%Y-%m-%d %b W%V-%u %a", // On bar
        'dateInterval': 5000,
        'dateFormat': "%Y-%m-%d W%V %a", // On notif time
    },
}

export default userConfigOptions;
