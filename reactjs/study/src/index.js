import React from "react";
import ReactDOM from "react-dom";

import Father from "./components/Father";
import Child from "./components/Child";

ReactDOM.render(
  <div>
    <Father name="Carlos" lastName="Goldoni">
      <Child name="Bruno" />
      <Child name="Daniela" />
    </Father>
  </div>,
  document.getElementById("root")
);
