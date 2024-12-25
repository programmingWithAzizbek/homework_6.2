import React from "react";

function ColorList(props) {
  const { red, green, blue, yellow, maroon } = props;
  return (
    <div>
      <p>{red}</p>
      <div></div>
      <p>{green}</p>
      <div></div>
      <p>{blue}</p>
      <div></div>
      <p>{yellow}</p>
      <div></div>
      <p>{maroon}</p>
      <div></div>
    </div>
  );
}

export default ColorList;
