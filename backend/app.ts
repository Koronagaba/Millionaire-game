import express from "express";
import {
  getDifficultQuestions,
  getEasyQuestions,
  getMediumQuestions,
  getQuiteDifficultQuestions,
} from "./actions/getQuestions.action";
import { generateAIResponse } from "./actions/ai/generateAIResponse.action";

var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/easyQuestions", getEasyQuestions);
app.get("/mediumQuestions", getMediumQuestions);
app.get("/quiteDifficultQuestions", getQuiteDifficultQuestions);
app.get("/difficultQuestions", getDifficultQuestions);
// app.post("/questions", insertQuestions);
app.post("/api/ai-response", generateAIResponse);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
