import "./card.css";
import React from "react";

function Card(props) {
  const cardClick = () => {
    console.log("Normal click");
    props.clicked(props.title, props.content, props._id);
    props.toggle();
  };
  /*
  const cardRightClicked = () => {
    console.log("Right click");
    props.rightClicked(props._id);
  };*/
  return (
    <div className="card" onClick={cardClick}>
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default Card;
