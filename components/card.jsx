import "./card.css";
import React from "react";
import { useState, useRef } from "react";

function Card(props) {
  const timer = useRef(null);
  const longpress = useRef(false);
  const [action, setAction] = useState("notlongpress");

  const cardClick = () => {
    console.log("Normal click");
    props.clicked(props.title, props.content, props._id);
    props.toggle();
  };

  const cardRightClicked = () => {
    console.log("Right click");
    props.rightClicked(props._id);
  };

  function timerRed() {
    longpress.current = false;
    timer.current = setTimeout(() => {
      longpress.current = true;
      setAction("longpress");
      cardRightClicked();
    }, 500);
  }

  const mouseDown = () => {
    timerRed();
  };
  const mouseUp = () => {
    if (action === "longpress") return;
    clearTimeout(timer.current);
  };
  const touchStart = () => {
    timerRed();
  };
  const touchEnd = () => {
    if (action === "longpress") return;
    clearTimeout(timer.current);
  };

  return (
    <div
      className="card"
      onClick={() => {
        if (longpress.current) {
          console.log("Longpress underway");
          return;
        }
        setAction("notlongpress");
        cardClick();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        cardRightClicked();
      }}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Card;
