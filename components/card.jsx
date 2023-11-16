import "./card.css";
import React from "react";

function Card(props) {
  const cardClick = () => {
    props.clicked(props.title, props.content, props._id);
    props.toggle();
  };
  const cardRightClicked = () => {
    props.rightClicked(props._id);
  };
  return (
    <div className="card" onClick={cardClick} onContextMenu={cardRightClicked}>
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Card;
