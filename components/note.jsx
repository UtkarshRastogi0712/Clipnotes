import "./note.css";
import React from "react";
import { useState } from "react";

function Note(props) {
  const [title, setTitle] = useState(props.title ? props.title : "Title");
  const [content, setContent] = useState(
    props.content ? props.content : "Content"
  );

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <div className="modal-background" onClick={props.toggle}></div>
      <div className="note-body">
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleContent}
        />
      </div>
    </div>
  );
}

export default Note;
