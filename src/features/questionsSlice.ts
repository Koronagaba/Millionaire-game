import { createSlice } from "@reduxjs/toolkit";
import { SingleData } from "../types/types";

interface QuestionState {
  questionNumber: number;
  currentQuestion: SingleData | null;
}

const initialState: QuestionState = {
  questionNumber: 1,
  currentQuestion : null,
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.questionNumber++;
    },
    drawQuestion(state, { payload }) {
      const random = Math.floor(Math.random() * payload.length);
      state.currentQuestion = payload[random];
      payload.splice(random, 1);
    },
  },
});

export const { nextQuestion, drawQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
