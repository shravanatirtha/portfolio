const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// -----------deployment----------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Shravana Tirtha");
  });
}
// -----------deployment----------

app.listen(process.env.PORT, () => {
  console.log("Node server running at http://localhost:5000");
});
