import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Audio from "resource:///com/github/Aylur/ags/service/audio.js";
import Battery from "resource:///com/github/Aylur/ags/service/battery.js";
import Brightness from "./js/brightness.js";
import Settings from "./settings.js"

export function sideBar(monitor) {
  function label(monitor) {
    const labelLabel = Widget.Label({
      label: "sidebar on monitor " + monitor,
    });

    return labelLabel;
  }

  const volume = Widget.Box({
    vertical: true,
    class_names: ["volume"],
    children: [
      Widget.ProgressBar({
        vertical: true,
        inverted: true,
        hpack: "center",
        connections: [
          [
            Audio,
            function (self) {
              /*
              The ? operator (before the .volume) will make the expression return undefined if Audio.speaker is undefined
              Without the question mark, it would throw an error if Audio.speaker is undefined
              The || 0 will assign self.value to 0 if Audio.speaker?.volume is undefined,
              otherwise, self.value will be set to Audio.speaker.volume
              */
              var volume = Audio.speaker?.volume || 0;
              if (volume > 1) {
                self.value = 1;
              } else if (volume <= 0) {
                self.value = 0;
              } else {
                self.value = volume;
              }
            },
            "speaker-changed"
          ]
        ]
      }),
      Widget.Label({
        hpack: "center",
        connections: [
          [
            Audio,
            function (self) {
              /*
              The ? operator (before the .volume) will make the expression return undefined if Audio.speaker is undefined
              Without the question mark, it would throw an error if Audio.speaker is undefined
              The || 0 will make the calculation use 0 if the ? makes it return undefined
              */
              self.label = Math.round((Audio.speaker?.volume || 0) * 100).toString() + "%"
            },
            "speaker-changed"
          ]
        ],
      }),
      Widget.Label({
        label: "",
        hpack: "center",
        class_names: ["icon"]
      })
    ]
  })

  const brightness = Widget.Box({
    vertical: true,
    class_names: ["brightness"],
    children: [
      Widget.ProgressBar({
        vertical: true,
        inverted: true,
        hpack: "center",
        connections: [
          [
            Brightness,
            function (self, screenValue) {
              self.value = Brightness.screenValue;
            }
          ],
        ]
        }),
        Widget.Label({
          hpack: "center",
          connections: [
            [
              Brightness,
              function (self, screenValue) {
                self.label = (Brightness.screenValue * 100).toString() + "%";
              }
            ],
          ],
        }),
      Widget.Label({
        label: "",
        hpack: "center",
        class_names: ["icon"]
      })
    ],
  });

  const battery = Widget.Box({
    vertical: true,
    class_names: ["battery"],
    children: [
      Widget.ProgressBar({
        vertical: true,
        inverted: true,
        hpack: "center",
        connections: [
          [
            Battery,
            function (self) {
              self.value = Battery.percent / 100;
            },
          ],
        ],
      }),
      Widget.Label({
        hpack: "center",
        connections: [
          [
            Battery,
            function (self) {
              self.label = (Battery.percent).toString() + "%";
            },
          ],
        ],
      }),
      Widget.Label({
        label: "󱐋",
        hpack: "center",
        class_names: ["icon"]
      })
    ],
  });

  const Start = Widget.Box({
    vertical: true,
    spacing: 10,
    children: [volume, brightness, battery],
  });

  const window = Widget.Window({
    monitor: monitor,
    name: `sideBar${monitor}`,
    class_names: ["sideBar"],
    anchor: ["left", "top", "bottom"],
    exclusivity: "exclusive",
    margins: [20, 10],
    child: Widget.CenterBox({
      vertical: true,
      start_widget: Start /*
      center_widget: Center(),
      end_widget: End()*/,
    }),
  });

  return window;
}
