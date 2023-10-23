import "./add.css";
import React from "react";

function Add(props) {
  return (
    <div className="main-bar" onClick={props.toggle}>
      <div className="vert-bar"></div>
      <div className="horz-bar"></div>
    </div>
  );
}

export default Add;
