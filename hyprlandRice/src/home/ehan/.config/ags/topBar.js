import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js'
import { Settings } from "./settings.js"

export function topBar(monitor) {
  function label(monitor) {
    const labelLabel = Widget.Label({
      label: "this is monitor " + monitor,
    });

    return labelLabel;
  }

  const clock = Widget.Label({
    class_name: 'clock',
    setup: function (self) {
      self.poll(1000,
        self => execAsync(
          ['date', Settings.topBar.clock.format]
        ).then(
          date => self.label = date
          )
      )
    }
  });

  const window = Widget.Window({
    monitor: monitor,
    name: `topBar${monitor}`,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    child: clock,
  });

  return window;
}
