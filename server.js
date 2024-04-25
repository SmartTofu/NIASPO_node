const express = require("express");
const app = express();

app.listen(1234, () => {
  console.log("Application started and Listening on port 1234");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});