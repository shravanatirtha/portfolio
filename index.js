const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
// -----------deployment----------
//const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Shravana Tirtha");
  });
}
// -----------deployment----------

app.listen(PORT, () => {
  console.log(`Node server running at http://localhost:${PORT}`);
});
