import "./card.css";
import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Card;
