import "./newnote.css";
import React from "react";

function Newnote(props) {
  return (
    <div>
      <div className="modal-background" onClick={props.toggle}></div>
      <div className="note-body"></div>
    </div>
  );
}

export default Newnote;
