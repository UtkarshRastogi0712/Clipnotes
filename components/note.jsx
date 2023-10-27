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

  const createNote = async (note) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    };

    let createdNote = null;

    fetch("http://localhost:3000/notes/", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        createdNote = data;
        return createdNote;
      })
      .catch((error) => console.error(error));
  };

  const toggleNote = async () => {
    const note = {
      title: title,
      content: content,
    };

    const data = await createNote(note);
    console.log(data);
    if (data) {
      props.update();
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
