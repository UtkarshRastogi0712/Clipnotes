import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "../components/sidebar";
import NonSideBar from "../components/nonsidebar";
import Add from "../components/add";
import Note from "../components/note";

function App() {
  const [newNote, setNotes] = useState(false);
  const [notes, setNewNotes] = useState(null);
  const [cardTitle, setCardTitle] = useState(null);
  const [cardContent, setCardContent] = useState(null);
  const [card_id, setCard_id] = useState(null);

  const cardClicked = (newTitle, newContent, new_id) => {
    setCardContent(newContent);
    setCardTitle(newTitle);
    setCard_id(new_id);
  };

  const Toggle = () => {
    setNotes(!newNote);
  };

  useEffect(() => {
    UpdateNotes();
  }, [notes]);

  const UpdateNotes = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:3000/notes/", options)
      .then((response) => response.json())
      .then((data) => {
        setNewNotes(data);
      })
      .catch((error) => console.log("Error", error));
  };

  const rightClicked = (id) => {
    const options = {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:3000/notes/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className="col">
      <Sidebar />
      <NonSideBar
        cards={notes}
        toggle={Toggle}
        clicked={cardClicked}
        rightClicked={rightClicked}
      />
      {newNote && (
        <Note
          toggle={Toggle}
          update={UpdateNotes}
          title={cardTitle ? cardTitle : null}
          content={cardContent ? cardContent : null}
          _id={card_id ? card_id : null}
        />
      )}
      <Add toggle={Toggle} />
    </div>
  );
}

export default App;
