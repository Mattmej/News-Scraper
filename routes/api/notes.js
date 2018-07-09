const express = require("express");
const router = express.Router();
const noteController = require("../../controllers/note");

router.get("/:id", noteController.findOneNote);
router.post("/", noteController.createNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;