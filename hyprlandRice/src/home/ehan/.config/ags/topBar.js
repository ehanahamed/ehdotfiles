import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js'
import { Hyprland } from "resource:///com/github/Aylur/ags/service/hyprland.js";
import { Settings } from "./settings.js"

export function topBar(monitor) {
  const logo = Widget.Label({
    classNames: ["logo", "icon", Settings.topBar.logo.color],
    label: Settings.topBar.logo.text
  })

  const workspaces = Widget.Box({

  })

  const clock = Widget.Button({
    child: Widget.Label({
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
    }),
  });

  const start = Widget.Box({
    vertical: false,
    spacing: 20,
    vpack: "center",
    hpack: "start",
    children: [
      logo,
      workspaces
    ]
  })

  const window = Widget.Window({
    monitor: monitor,
    name: `topBar${monitor}`,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    class_names: ["topBar"],
    child: Widget.CenterBox({
      vertical: false,
      spacing: 8,
      start_widget: start,
      center_widget: clock,
    }),
  });

  return window;
}
