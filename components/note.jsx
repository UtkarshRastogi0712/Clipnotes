import "./note.css";
import React from "react";
import { useState } from "react";

function Note(props) {
  const [title, setTitle] = useState(
    props.title == null ? "Title" : props.title
  );
  const [content, setContent] = useState(
    props.content == null ? "Content" : props.content
  );
  const [_id, set_id] = useState(props._id == null ? "_id" : props._id);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const toggleNote = async () => {
    if (_id == "_id") {
      const note = {
        title: title,
        content: content,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      };

      fetch("http://localhost:3000/notes/", options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(props.update())
        .catch((error) => console.error(error));
    } else {
      const note = {
        id: _id,
        title: title,
        content: content,
      };

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      };

      fetch(`http://localhost:3000/notes/${_id}`, options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(props.update())
        .catch((error) => console.error(error));
    }
    props.toggle();
  };

  return (
    <div>
      <div className="modal-background" onClick={toggleNote}></div>
      <div className="note-body">
        <textarea
          className="modal-title"
          id="title-note"
          name="title-note"
          value={title}
          onChange={handleTitle}
        />
        <textarea
          className="modal-content"
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
