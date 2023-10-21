import Dock from './Dock.js';
import { Utils, Widget } from '../imports.js';

export default monitor => Widget.Window({
    monitor,
    name: `dock${monitor}`,
    exclusive: true,
    className: 'floating-dock',
    anchor: ['bottom'],
    child: Widget.Box({
        vertical: true,
        style: 'padding: 1px;',
        children: [
            Dock(),
            Widget.Box({
                className: 'padding',
                style: 'padding: 2px;',
            }),
        ],
    }),
});
