import "./card.css";
import React from "react";

function Card(props) {
  const cardClick = () => {
    console.log(props.title, props.content);
    props.clicked(props.title, props.content);
    props.toggle();
  };
  return (
    <div className="card" onClick={cardClick}>
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Card;
