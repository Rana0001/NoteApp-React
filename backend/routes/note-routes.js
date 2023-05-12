const express = require("express")
const router = express.Router()
const noteController = require("../controller/note-controller")

router.route("/")
.get(noteController.getNotes)
.post(noteController.createNote)

router.route("/:id")
.get(noteController.getNote)
.put(noteController.updateNote)
.delete(noteController.deleteNote)

module.exports = router