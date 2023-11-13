const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello good people");
});
app.listen(3000, function () {
  console.log("the server is running on port 3000");
});
