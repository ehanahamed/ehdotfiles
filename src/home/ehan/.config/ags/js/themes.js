import { Utils } from './imports.js';
const WP = `/home/${Utils.USER}/Pictures/Wallpapers/`;

const editScheme = (scheme, edit) => {
    const obj = {};
    Object.keys(scheme).forEach(color => obj[color] = edit(scheme[color]));
    return obj;
};

// themes
const kitty_dark = {
    wallpaper: WP + 'kitty.jpeg',
    name: 'kitty_dark',
    icon: '󰄛',
    color_scheme: 'dark',
    bg_color: '#171717',
    fg_color: '#eee',
    hover_fg: '#f1f1f1',
    red: '#e55f86',
    green: '#00D787',
    yellow: '#EBFF71',
    blue: '#51a4e7',
    magenta: '#9077e7',
    teal: '#51e6e6',
    orange: '#E79E64',
    wm_gaps: 22,
    radii: 9,
    spacing: 9,
    shadow: 'transparent',
    drop_shadow: false,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
    font: 'Ubuntu Nerd Font',
    mono_font: 'Mononoki Nerd Font',
    font_size: 16,
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(3f3f3fFF)',
    hypr_inactive_border: 'rgba(3f3f3fDD)',
    accent: '$blue',
    accent_fg: '#141414',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 6%)',
    border_color: '$fg_color',
    border_opacity: 97,
    border_width: 1,
    hypr_border_width: 1
};

const purpleish = {
    wallpaper: WP + 'purpleish.png',
    name: 'purpleish',
    icon: 'P',
    color_scheme: 'dark',
    bg_color: '#1e1e32',
    fg_color: '#a3a3cc',
    hover_fg: '#7a52cc',
    red: '#ff6666',
    green: '#52CCA3',
    yellow: '#FFCC66',
    blue: '#527ACC',
    magenta: '#7a52cc',
    teal: '#52CCCC',
    orange: '#FF9966',
    wallpaper_fg: 'white',
    hypr_active_border: 'rgb(7a52cc)',
    hypr_inactive_border: 'rgb(1e1e32)',
    accent: '#7a52cc',
    accent_fg: '#1e1e32',
    widget_bg: '#5C5C99',
    widget_opacity: 80,
    active_gradient: 'to right, #7a52cc, #704bbb',
    border_color: '$fg_color',
    border_opacity: 100,
    hypr_border_width: 8,
    border_width: 2,
    wm_gaps: 20,
    radii: 10,
    spacing: 10,
    shadow: 'transparent',
    drop_shadow: false,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
    font: 'NotoSans Nerd Font Propo',
    mono_font: 'NotoSansM Nerd Font Propo',
    font_size: 16,
}

export default [
    kitty_dark,
    purpleish
];
