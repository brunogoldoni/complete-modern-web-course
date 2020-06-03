import React from "react";

import Child from "./Child";

export default (props) => {
  return (
    <div>
      <h1>
        {props.name} {props.lastName}
      </h1>
      <h2>Filhos</h2>
      <ul>
        <Child name="Bruno" lastName={props.lastName} />
        <Child {...props} />
        <Child {...props} name="Robertson" />
      </ul>
    </div>
  );
};
