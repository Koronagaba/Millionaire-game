import express from "express";

var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "It works" });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
