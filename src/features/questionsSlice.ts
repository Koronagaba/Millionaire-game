import { createSlice } from "@reduxjs/toolkit";
import { easyData } from "../data/data";
import { AnswerType, SingleData } from "../types/types";

interface QuestionState {
  questionNumber: number;
  currentQuestion: SingleData | null;
  selectedAnswer: AnswerType | null;
  easyDataCopy: SingleData[]
} 

const initialState: QuestionState = {
  questionNumber: 1,
  currentQuestion : null,
  selectedAnswer: null,
  easyDataCopy: [...easyData]
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.questionNumber++;
    },
    setQuestionNumber(state, {payload}){
      state.questionNumber = payload
    },
    drawQuestion(state, { payload }) {
      const random = Math.floor(Math.random() * payload.length);
      state.currentQuestion = payload[random];
      payload.splice(random, 1);
    },
    chooseAnswer(state, action) {
        state.selectedAnswer = action.payload
    }
  },
});

export const { nextQuestion, drawQuestion, chooseAnswer, setQuestionNumber } = questionsSlice.actions;
export default questionsSlice.reducer;
