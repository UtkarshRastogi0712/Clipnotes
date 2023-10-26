const Router = require("express");
const {
  createNoteController,
  getNoteController,
  getAllNotesController,
} = require("./notes.controller");

const router = Router();

router.post("/", createNoteController);
router.get("/:id", getNoteController);
router.get("/", getAllNotesController);

module.exports = router;
