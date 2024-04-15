import express from "express";
import { getQuestions, getEasyQuestions } from "./mongo";

var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/questions", getQuestions);
app.get("/easyQuestions", getEasyQuestions);
// app.post("/questions", insertQuestions);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
