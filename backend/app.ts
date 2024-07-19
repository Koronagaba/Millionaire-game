import express from "express";
import { getDifficultQuestions, getEasyQuestions, getMediumQuestions, getQuiteDifficultQuestions } from "./actions/getQuestions.action";

var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/easyQuestions", getEasyQuestions);
app.get("/mediumQuestions", getMediumQuestions)
app.get("/quiteDifficultQuestions", getQuiteDifficultQuestions)
app.get("/difficultQuestions", getDifficultQuestions)
// app.post("/questions", insertQuestions);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
