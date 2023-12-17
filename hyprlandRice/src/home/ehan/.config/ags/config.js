import { forMonitors } from "./extraUtils.js";
import { topBar } from "./topBar.js"

const windows = function () {
  return [
    forMonitors(topBar)
  ]
};

export default {
  /*
  .flat(depth) brings elements of child arrays into the parent array
  for example
  [0, 1, [2, 3], 4].flat(1) would turn into [0, 1, 2, 3, 4]
  */
  windows: windows().flat(1),
};
