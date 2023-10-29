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
          {props.cards &&
            props.cards.data.map((card) => {
              return (
                <Card
                  title={card.title ? card.title : ""}
                  content={card.content}
                  toggle={props.toggle}
                />
              );
            })}
        </dev>
      </div>
    </div>
  );
}

export default NonSideBar;
