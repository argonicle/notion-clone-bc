const noteRepository = require("../repositories/noteRepository");
const { existValue } = require("../utils/existValue");

const createNote = async (userId) => {
  const note = await noteRepository.createNote(userId);
  await existValue(note);
  return note;
};

const findAllNotes = async (userId) => {
  const notes = await noteRepository.findAllNotes(userId);
  await existValue(notes);
  return notes;
};

const updateNote = async (noteId, contents) => {
  const note = await noteRepository.updateNote(noteId, contents);
  await existValue(note);
  return note;
};

const deleteNote = async (noteId) => {
  const note = await noteRepository.deleteNote(noteId);
  await existValue(note);
  return note;
};

module.exports = { createNote, findAllNotes, updateNote, deleteNote };
