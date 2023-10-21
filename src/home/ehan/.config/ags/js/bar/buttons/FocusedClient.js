import PanelButton from '../PanelButton.js';
import { App, Hyprland, Utils, Widget } from '../../imports.js';
import options from '../../options.js';
import { substitute } from '../../utils.js';
const { icons, titles } = options.substitutions;

export const ClientLabel = () => Widget.Label({
    binds: [['label', Hyprland.active.client, 'class', c => substitute(titles, c)]],
});

export default () => PanelButton({
    className: 'focused-client',
    content: Widget.Box({
        children: [
            ClientLabel(),
        ],
        binds: [
            ['tooltip-text', Hyprland.active, 'client', c => c.title]
        ],
    }),
    onClicked: () => {
        for (var i = 0; i < Hyprland.monitors.length; i++) {
            /*
            docks are numbered by monitor starting from "dock0",
            this loop runs toggleWindow for every dock on every monitor
            */
            App.toggleWindow("dock" + i);
        }
    },
});
