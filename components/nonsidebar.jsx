import "./nonsidebar.css";
import React from "react";
import Topbar from "./topbar";

function NonSideBar() {
  return (
    <div className="non-side-bar">
      <Topbar />
      <div className="canvas">
        <div className="note-title">Notes</div>
        <div className="note-cards">Cards</div>
      </div>
    </div>
  );
}

export default NonSideBar;
