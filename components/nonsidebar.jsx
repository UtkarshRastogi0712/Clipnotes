import "./nonsidebar.css";
import React from "react";
import Topbar from "./topbar";
import Card from "./card";

function NonSideBar() {
  const data = {
    title:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  };

  return (
    <div className="non-side-bar">
      <Topbar />
      <div className="canvas">
        <div className="note-title">
          <h1>Notes</h1>
        </div>
        <dev className="cards">
          {Array(5).fill(<Card title={data.title} content={data.content} />)}
        </dev>
      </div>
    </div>
  );
}

export default NonSideBar;
