import App from 'resource:///com/github/Aylur/ags/app.js';
import { forMonitors } from "./js/extraUtils.js";
import { topBar, dashboard } from "./topBar.js";
import { sideBar } from "./sideBar.js";

const windows = function () {
  return [
    forMonitors(topBar),
    forMonitors(sideBar),
    forMonitors(dashboard)
  ]
};

export default {
  /*
  .flat(depth) brings elements of child arrays into the parent array
  for example
  [0, 1, [2, 3], 4].flat(1) would turn into [0, 1, 2, 3, 4]
  */
  windows: windows().flat(1),
  style: App.configDir + "/style.css"
};
