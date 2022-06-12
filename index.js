const express = require("express");
const app = express();
const path = require("path");
// -----------deployment----------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
} else {
  app.get("/", (req, res) => {
    res.send("Shravana Tirtha");
  });
}
// -----------deployment----------

app.listen(5000, () => {
  console.log("Node server running at http://localhost:5000");
});
