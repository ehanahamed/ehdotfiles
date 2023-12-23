import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import Gdk from 'gi://Gdk';

export function range(start, length) {
  return Array.from({ length }, (_, i) => i + start);
}

export function forMonitors(widget) {
  const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
  /*
  .flat(depth) brings elements of child arrays into the parent array
  for example
  [0, 1, [2, 3], 4].flat(1) would turn into [0, 1, 2, 3, 4]

  range(start, length) is defined above

  .map() is used here to create an array of widgets,
  from the array returned by range()
  */
  return range(0, n).map(widget).flat(1);
}
