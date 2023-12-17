import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Hyprland from "resource:///com/github/Aylur/ags/service/hyprland.js";

function Bar(monitor) {
    function label(monitor) {
        const labelLabel = Widget.Label({
            label: "this is monitor " + monitor,
        })

        return labelLabel;
    }
    
    const window = Widget.Window({
        monitor,
        // name has to be unique
        name: `bar${monitor}`,
        anchor: ['top', 'left', 'right'],
        exclusivity: "exclusive",
        child: label(monitor),
    })

    return window
}

/* barList starts with just one bar on monitor 0 */
var barList = [Bar(0)];

/* Then, we use Hyprland.monitors to add more bars to barList */
for (
    i = 1; /* for loop starts at 1, because monitor 0 is already added */
    i < Hyprland.monitors.length;
    i++
) {
    barList.push(Bar(i));
}

/* Now, we set windows to barList, so that all the bars are shown */
export default { windows: barList }
