import "./card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card" onClick={props.toggle}>
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Card;
