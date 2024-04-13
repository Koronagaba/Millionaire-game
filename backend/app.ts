import express from "express";
import { getProducts } from "./mongo";

var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
// app.get("/", (req, res) => {
//   res.json({ message: "It works" });
// });

app.get("/products", getProducts);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
