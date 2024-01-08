import App from "resource:///com/github/Aylur/ags/app.js"
import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { execAsync } from "resource:///com/github/Aylur/ags/utils.js"
import Hyprland from "resource:///com/github/Aylur/ags/service/hyprland.js";
import { range } from "./js/extraUtils.js";
import { Settings } from "./settings.js";

export function topBar(monitor) {
  const logo = Widget.Label({
    classNames: ["logo", "icon", Settings.topBar.logo.color],
    label: Settings.topBar.logo.text
  })

  const dispatch = function (ws) {
    return Hyprland.sendMessage(`dispatch workspace ${ws}`);
  }

  const workspaces = () => Widget.Box({
    class_name: "workspaces",
    children: range(
      1,
      Settings.topBar.workspaces
    ).map(
      i => Widget.Button({
        attribute: i,
        label: `${i}`,
        onClicked: () => dispatch(i),
        setup: self => self.hook(Hyprland, () => {
          self.toggleClassName("active", (Hyprland.active.workspace.id === i));
          self.toggleClassName("open", ((Hyprland.getWorkspace(i)?.windows || 0) > 0));
        })
      })
    ),
  });

  const clock = Widget.Button({
    on_clicked: function () {
      App.toggleWindow(`dashboard${monitor}`)
    },
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

  const start = () => Widget.Box({
    vertical: false,
    spacing: 0,
    vpack: "center",
    hpack: "start",
    children: [
      logo,
      workspaces()
    ]
  })

  const window = () => Widget.Window({
    monitor: monitor,
    name: `topBar${monitor}`,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    class_names: ["topBar"],
    child: Widget.CenterBox({
      vertical: false,
      spacing: 8,
      start_widget: start(),
      center_widget: clock,
    }),
  });

  return window();
}

export function dashboard(monitor) {
  const window = () => Widget.Window({
    monitor: monitor,
    name: `dashboard${monitor}`,
    exclusivity: "ignore",
    layer: "top",
    popup: true,
    focusable: true,
    anchor: ["top"],
    margins: [50,0],
    class_names: ["dashboard"],
    child: Widget.Box({
      vertical: false,
      spacing: 8,
      children: [
        Widget.Calendar({
          showDayNames: true,
          showHeading: true,      
        })
      ]
    })
  });

  return window()
}
