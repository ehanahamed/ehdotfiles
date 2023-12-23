import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Audio from "resource:///com/github/Aylur/ags/service/audio.js";
import Battery from "resource:///com/github/Aylur/ags/service/battery.js";
import Brightness from "./js/brightness.js";

export function sideBar(monitor) {
  function label(monitor) {
    const labelLabel = Widget.Label({
      label: "sidebar on monitor " + monitor,
    });

    return labelLabel;
  }

  const volume = Widget.Box({
    vertical: true,
    children: [
      Widget.ProgressBar({
        vertical: true,
        inverted: true,
        connections: [
          [
            Audio, self => {
              /*
              The ? operator (before the .volume) will make the expression return undefined if Audio.speaker is undefined
              Without the question mark, it would throw an error if Audio.speaker is undefined
              The || 0 will assign self.value to 0 if Audio.speaker?.volume is undefined,
              otherwise, self.value will be set to Audio.speaker.volume
              */
              self.value = Audio.speaker?.volume || 0;
            },
            "speaker-changed"
          ]
        ]
      })
    ]
  })

  const brightness = Widget.Box({
    vertical: true,
    children: [
      Widget.ProgressBar({
        vertical: true,
        inverted: true,
        binds: [
          [
            "value",
            Brightness,
            "screenValue",
          ],
        ],
      
        connections: [
          [
            Brightness,
            function (self, screenValue) {
              self.value = Brightness.screenValue;
            }
          ],
        ]
        }),
    ],
  });

  const battery = Widget.Box({
    vertical: true,
    children: [
      Widget.ProgressBar({
        vertical: true,
        inverted: true,
        connections: [
          [
            Battery,
            function (self) {
              self.value = Battery.percent / 100;
            },
          ],
        ],
      }),
    ],
  });

  const Start = Widget.Box({
    vertical: true,
    children: [volume, brightness, battery],
  });

  const window = Widget.Window({
    monitor: monitor,
    name: `sideBar${monitor}`,
    class_names: ["sideBar"],
    anchor: ["left", "top", "bottom"],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      vertical: true,
      start_widget: Start /*
      center_widget: Center(),
      end_widget: End()*/,
    }),
  });

  return window;
}
