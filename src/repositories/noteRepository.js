const Note = require("../models/noteSchema");

const createNote = async (userId) => {
  const noteCount = await Note.find().count();
  const note = await Note.create({
    user: userId,
    position: noteCount > 0 ? noteCount : 0,
  });
  return note;
};

const findAllNotes = async (userId) => {
  const notes = await Note.find({ user: userId }).sort("-position");
  return notes;
};

const updateNote = async (noteId, contents) => {
  const note = await Note.findByIdAndUpdate(
    noteId,
    {
      $set: contents,
    },
    { new: true } // 更新後のデータを取得するためのオプション！！
  );
  return note;
};

const deleteNote = async (noteId) => {
  const note = await Note.deleteOne({ _id: noteId });
  return note;
};

module.exports = { createNote, findAllNotes, updateNote, deleteNote };
