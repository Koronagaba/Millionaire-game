import express from "express";
import { getEasyQuestions } from "./actions/getQuestions.action";

var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/easyQuestions", getEasyQuestions);
// app.post("/questions", insertQuestions);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
