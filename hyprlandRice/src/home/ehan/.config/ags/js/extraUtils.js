import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import Gdk from 'gi://Gdk';

/*
range(start, length) returns an array of numbers
for example, range(0,3) returns [0,1,2]
*/
export function range(start, length) {
  return Array.from(
    { length },
    /*
    an underscore (_) is the "name" of the first parameter
    this is a convention that means that parameter won't be used
    (but we still need something as the first parameter's name,
    so that we can use the second parameter, so we use an underscore)
    */
    function (_, i) {
      return i + start
    }
  );
}

export function forMonitors(widget) {
  const n = Gdk.Display.get_default()?.get_n_monitors() || 1;
  /*
  range(start, length) is defined above

  .map() is used here to create an array of widgets,
  from the array returned by range()

  .flat(depth) brings elements of child arrays into the parent array
  for example
  [0, 1, [2, 3], 4].flat(1) would turn into [0, 1, 2, 3, 4]
  */
  return range(0, n).map(widget).flat(1);
}
