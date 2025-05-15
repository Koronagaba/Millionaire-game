import express from "express";
import {
  getDifficultQuestions,
  getEasyQuestions,
  getMediumQuestions,
  getQuiteDifficultQuestions,
} from "./actions/getQuestions.action";
import OpenAI from "openai";

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

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.DEEPSEEK_API_KEY,
});

app.post("/api/gpt", async (req, res) => {
  console.log('BOOOODY', req.body)
  const { prompt } = req.body;

  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1:fre",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(completion.choices[0].message);

  res.json({ message: completion.choices[0].message.content });
});


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
