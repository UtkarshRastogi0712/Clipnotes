import { useState } from "react";
import "./App.css";
import Sidebar from "../components/sidebar";
import NonSideBar from "../components/nonsidebar";
import Add from "../components/add";
import Note from "../components/note";

function App() {
  const [newNote, setNotes] = useState(false);
  const [notes, setNewNotes] = useState([]);

  const Toggle = () => {
    setNotes(!newNote);
  };

  const UpdateNotes = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:3000/notes/", options)
      .then((response) => response.json())
      .then((data) => setNewNotes(data))
      .catch((error) => console.log("Error", error));
    console.log(notes);
  };

  return (
    <div className="col">
      <Sidebar />
      <NonSideBar />
      {newNote && <Note toggle={Toggle} update={UpdateNotes} />}
      <Add toggle={Toggle} />
    </div>
  );
}

export default App;
