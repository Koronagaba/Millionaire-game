import { createSlice } from "@reduxjs/toolkit";
import { AnswerType, Pyramid, SingleData } from "../types/types";

interface QuestionState {
  questionNumber: number;
  currentQuestion: SingleData | null;
  selectedAnswer: AnswerType | null;
  award: number
}

const initialState: QuestionState = {
  questionNumber: 1,
  currentQuestion : null,
  selectedAnswer: null,
  award: 0
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
    chooseAnswer(state, action) {
        state.selectedAnswer = action.payload
    },
    showCurrentAward(state, {payload}) {
      state.award = payload
    }
  },
});

export const { nextQuestion, drawQuestion, chooseAnswer, showCurrentAward } = questionsSlice.actions;
export default questionsSlice.reducer;
