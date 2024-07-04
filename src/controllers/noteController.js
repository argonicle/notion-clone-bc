const handleError = require("../middlewares/handleError");
const noteService = require("../services/noteService");

const createNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.user._id);
    res.status(201).json({ message: "新しいノートを作成しました", note });
  } catch (error) {
    handleError(res, error);
  }
};

const findAllNotes = async (req, res) => {
  try {
    const notes = await noteService.findAllNotes(req.user._id);
    res.status(200).json({ message: "ノートを取得しました", notes });
  } catch (error) {
    handleError(res, error);
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await noteService.updateNote(req.params.noteId, req.body);
    res.status(200).json({ message: "ノートを更新しました", note });
  } catch (error) {
    handleError(res, error);
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await noteService.deleteNote(req.params.noteId);
    res.status(200).json({ message: "ノートを削除しました", note });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { createNote, findAllNotes, updateNote, deleteNote };
