const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../utilities");

const express = require("express");
const {
  addNotes,
  editNotes,
  getAllNotes,
  deleteNotes,
  updateNotePinned,
  searchNotes,
} = require("../controller/notes.Controller");

const notesRouter = express.Router();

notesRouter.post("/addNotes", authenticateToken, addNotes);
notesRouter.put("/editNotes/:noteId", authenticateToken, editNotes);
notesRouter.get("/getAllNotes", authenticateToken, getAllNotes);
notesRouter.delete("/delete/:noteId", authenticateToken, deleteNotes);
notesRouter.put("/updatePinned/:noteId", authenticateToken, updateNotePinned);
notesRouter.get("/search", authenticateToken, searchNotes);

module.exports = notesRouter;
