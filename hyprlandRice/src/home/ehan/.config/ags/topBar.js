import Widget from "resource:///com/github/Aylur/ags/widget.js";

export function topBar(monitor) {
  function label(monitor) {
    const labelLabel = Widget.Label({
      label: "this is monitor " + monitor,
    });

    return labelLabel;
  }

  const window = Widget.Window({
    monitor,
    // name has to be unique
    name: `bar${monitor}`,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    child: label(monitor),
  });

  return window;
}
