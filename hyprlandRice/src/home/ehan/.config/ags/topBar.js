import Widget from "resource:///com/github/Aylur/ags/widget.js";

export function topBar(monitor) {
  function label(monitor) {
    const labelLabel = Widget.Label({
      label: "this is monitor " + monitor,
    });

    return labelLabel;
  }

  const window = Widget.Window({
    monitor: monitor,
    name: `topBar${monitor}`,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    child: label(monitor),
  });

  return window;
}
