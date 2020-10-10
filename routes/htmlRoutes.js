const path = require("path");
const { Router } = require("express");
const router = Router();

// Handles GET request for note page
router.get("/notes", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../public/notes.html"));
});

// Handles GET request for home page
router.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = router;
