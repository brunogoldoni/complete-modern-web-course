import React from "react";
import ReactDOM from "react-dom";

import { GoodAfternoon, GoodEvening } from "./components/Multiples";

ReactDOM.render(
  <div>
    <GoodAfternoon name="Bruno" />
    <GoodEvening name="Karina" />
  </div>,
  document.getElementById("root")
);
