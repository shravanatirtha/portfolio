const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Shravana Tirtha");
});
app.listen(5000, () => {
  console.log("Node server running at http://localhost:5000");
});
