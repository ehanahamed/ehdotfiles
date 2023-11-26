import Separator from '../misc/Separator.js';
import Theme from '../services/theme/theme.js';
import Clock from '../misc/Clock.js';
import DesktopMenu from './DesktopMenu.js';
import { Widget } from '../imports.js';

const DesktopClock = () => Widget.Box({
    className: 'clock-box-shadow',
    child: Widget.CenterBox({
        className: 'clock-box',
        children: [
            Clock({
                className: 'clock',
                halign: 'center',
                format: '%H',
            }),
            Widget.Box({
                className: 'separator-box',
                vertical: true,
                hexpand: true,
                halign: 'center',
                children: [
                    Separator({ valign: 'center', vexpand: true }),
                    Separator({ valign: 'center', vexpand: true }),
                ],
            }),
            Clock({
                className: 'clock',
                halign: 'center',
                format: '%M',
            }),
        ],
    }),
});

const Desktop = () => Widget.EventBox({
    onSecondaryClick: (_, event) => DesktopMenu().popup_at_pointer(event),
    onMiddleClick: print,
});

export default monitor => Widget.Window({
    monitor,
    name: `desktop${monitor}`,
    layer: 'background',
    className: 'desktop',
    anchor: ['top', 'bottom', 'left', 'right'],
    child: Desktop(),
});
