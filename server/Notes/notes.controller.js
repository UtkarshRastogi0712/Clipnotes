const {
  createNote,
  getNote,
  getAllNotes,
  updateNote,
  deleteNote,
} = require("./notes.services");

const deleteNoteController = async (req, res) => {
  try {
    const note = await deleteNote(req.params.id);
    if (!note) {
      return res
        .status(200)
        .json({ success: false, message: "Note not found" });
    }
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const createNoteController = async (req, res) => {
  try {
    const note = await createNote(req.body);
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const updateNoteController = async (req, res) => {
  try {
    const note = await updateNote(req.params.id, req.body);
    if (!note) {
      return res
        .status(200)
        .json({ success: false, message: "Note not found" });
    }
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getNoteController = async (req, res) => {
  try {
    const note = await getNote(req.params.id);
    if (!note) {
      return res
        .status(200)
        .json({ success: false, message: "Note not found" });
    }
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const notes = await getAllNotes();
    if (!notes) {
      return res
        .status(200)
        .json({ success: false, message: "Notes not found" });
    }
    res.status(200).json({ success: true, data: notes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  createNoteController,
  getNoteController,
  getAllNotesController,
  updateNoteController,
  deleteNoteController,
};
