import { useEffect, useState } from "react";
import "./nonsidebar.css";
import React from "react";
import Topbar from "./topbar";
import Card from "./card";

function NonSideBar(props) {
  const temp_data = {
    title: "Lorem",
    content: "Lorem ipsum",
  };

  return (
    <div className="non-side-bar">
      <Topbar />
      <div className="canvas">
        <div className="note-title">
          <h1>Notes</h1>
        </div>
        <dev className="cards">
          {Array(5).fill(
            <Card
              title={temp_data.title ? temp_data.title : ""}
              content={temp_data.content}
            />
          )}
        </dev>
      </div>
    </div>
  );
}

export default NonSideBar;
