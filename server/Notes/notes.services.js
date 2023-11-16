const Note = require("./notes.schema");

const createNote = async (note) => {
  try {
    const newNote = new Note(note);
    const savedNote = await newNote.save();
    return savedNote;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const updateNote = async (id, updatedData) => {
  if (!updatedData || !Object.keys(updatedData).length > 0) {
    throw new Error("updated data is required");
  }
  try {
    const note = await Note.findOneAndUpdate(
      { _id: id },
      { $set: updatedData },
      { new: true }
    );
    return note;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getNote = async (id) => {
  try {
    const note = await Note.findOne({ _id: id });
    return note;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const getAllNotes = async () => {
  try {
    const note = await Note.find();
    return note;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

const deleteNote = async (id) => {
  try {
    const deletedNote = await Note.deleteOne({ _id: id });
    return deletedNote;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

module.exports = { createNote, getNote, getAllNotes, updateNote, deleteNote };
