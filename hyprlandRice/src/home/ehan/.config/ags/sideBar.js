import Widget from "resource:///com/github/Aylur/ags/widget.js";

export function sideBar(monitor) {
  function label(monitor) {
    const labelLabel = Widget.Label({
      label: "sidebar on monitor " + monitor,
    });

    return labelLabel;
  }

  const brightness = Widget.Box({
    vertical: true,
    children: [
      Widget.ProgressBar({
        vertical: true,
        value: 0.5
      })
    ]
  })

  const Start = function () {
    return Widget.Box({
      vertical: true,
      children: [brightness]
    })
  }

  const window = Widget.Window({
    monitor: monitor,
    name: `sideBar${monitor}`,
    class_names: [
      "sideBar"
    ],
    anchor: ["left", "top", "bottom"],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      vertical: true,
      start_widget: Start(),
      center_widget: Center(),
      end_widget: End()
    })
  });

  return window;
}
