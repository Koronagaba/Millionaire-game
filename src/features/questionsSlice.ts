import { createSlice } from "@reduxjs/toolkit";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
} from "../data/data";
import { SingleData } from "../types/types";

interface QuestionState {
  questionNumber: number;
  easyData: SingleData[];
  randomQuestion: SingleData | null;
}

const initialState: QuestionState = {
  questionNumber: 1,
  easyData,
  randomQuestion: null,
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.questionNumber = state.questionNumber + 1;
    },
    drawQuestion(state) {
      if (state.questionNumber <= 3) {
        const random = Math.floor(Math.random() * state.easyData.length);
        state.randomQuestion = state.easyData[random];
        state.easyData.splice(random, 1);
      } else if (state.questionNumber > 3 && state.questionNumber <= 6) {
        const random = Math.floor(Math.random() * mediumData.length);
        state.randomQuestion = mediumData[random];
        mediumData.splice(random, 1);
      } else if (state.questionNumber > 6 && state.questionNumber <= 9) {
        const random = Math.floor(Math.random() * quiteDifficultData.length);
        state.randomQuestion = quiteDifficultData[random];
        quiteDifficultData.splice(random, 1);
      } else if (state.questionNumber > 9 && state.questionNumber <= 12) {
        const random = Math.floor(Math.random() * difficultData.length);
        state.randomQuestion = difficultData[random];
        difficultData.splice(random, 1);
      }
    },
  },
});

export const { nextQuestion, drawQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
