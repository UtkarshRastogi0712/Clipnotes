import { useState } from "react";
import "./App.css";
import Sidebar from "../components/sidebar";
import NonSideBar from "../components/nonsidebar";
import Add from "../components/add";
import Note from "../components/note";

function App() {
  const [newNote, setNotes] = useState(false);
  const Toggle = () => {
    setNotes(!newNote);
    console.log(newNote);
  };

  return (
    <div className="col">
      <Sidebar />
      <NonSideBar />
      {newNote && <Note toggle={Toggle} />}
      <Add toggle={Toggle} />
    </div>
  );
}

export default App;
