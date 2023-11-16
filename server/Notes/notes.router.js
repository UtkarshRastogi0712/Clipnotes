const Router = require("express");
const {
  createNoteController,
  getNoteController,
  getAllNotesController,
  updateNoteController,
  deleteNoteController,
} = require("./notes.controller");

const router = Router();

router.post("/", createNoteController);
router.delete("/:id", deleteNoteController);
router.put("/:id", updateNoteController);
router.get("/:id", getNoteController);
router.get("/", getAllNotesController);

module.exports = router;
