const path = require("path");
const { Router } = require("express");
const router = Router();

router.get("/notes", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../public/notes.html"));
});

router.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;
