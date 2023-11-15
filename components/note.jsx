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
    let note, methodChosen, uri;
    if (_id == "_id") {
      note = {
        title: title,
        content: content,
      };
      methodChosen = "POST";
      uri = "http://localhost:3000/notes/";
    } else {
      note = {
        id: _id,
        title: title,
        content: content,
      };
      methodChosen = "PUT";
      uri = `http://localhost:3000/notes/${_id}`;
    }
    const options = {
      method: methodChosen,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    };

    fetch(uri, options)
      .then((response) => response.json())
      .then(props.update())
      .catch((error) => console.error(error));
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
