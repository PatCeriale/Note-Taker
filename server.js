const express = require("express");
const app = express();
// Sets initial port to use later with listener
const PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Require routes
app.use("/api", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

// Start server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
