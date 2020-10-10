const fs = require("fs");
const path = require("path");
const { Router } = require("express");
const noteData = require("../db/db.json");
const router = Router();

// Saves note to db.json
const saveNotes = function () {
  fs.writeFileSync(
    path.resolve(__dirname, "../db/db.json"),
    JSON.stringify(noteData)
  );
};

router.get("/notes", function (req, res) {
  res.status(200).json(
    noteData.map(function (note, i) {
      return {
        ...note,
        id: i,
      };
    })
  );
});

//Saves note
router.post("/notes", function (req, res) {
  noteData.push(req.body);
  saveNotes();
  res.status(201).json(true);
});

// Deletes note
router.delete("/notes/:id", function (req, res) {
  noteData.splice(req.params.id, 1);
  console.log(req.params.id);
  saveNotes();
  res.status(200).json({ ok: true });
});

module.exports = router;
