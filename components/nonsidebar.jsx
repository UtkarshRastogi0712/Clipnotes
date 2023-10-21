import "./nonsidebar.css";
import React from "react";
import Topbar from "./topbar";
import Card from "./card";

function NonSideBar() {
  return (
    <div className="non-side-bar">
      <Topbar />
      <div className="canvas">
        <div className="note-title">
          <h1>Notes</h1>
        </div>
        <dev className="cards">
          {Array(10).fill(<Card />)}
          <Card />
        </dev>
      </div>
    </div>
  );
}

export default NonSideBar;
