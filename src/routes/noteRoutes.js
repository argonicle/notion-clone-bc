const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const noteController = require("../controllers/noteController");

router.post("/", userController.verifyUser, noteController.createNote);
router.get("/", userController.verifyUser, noteController.findAllNotes);
router.put("/:noteId", userController.verifyUser, noteController.updateNote);
router.delete("/:noteId", userController.verifyUser, noteController.deleteNote);

module.exports = router;
