import { createSlice } from "@reduxjs/toolkit";
import { easyData } from "../data/data";
import { SingleData } from "../types/types";

interface QuestionState {
  questionNumber: number;
  easyData: SingleData[];
  randomQuestion: SingleData | null
}

const initialState: QuestionState = {
  questionNumber: 1,
  easyData,
  randomQuestion: null
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

      const random = Math.floor(Math.random() * state.easyData.length )
      state.randomQuestion = state.easyData[random]
      state.easyData.splice(random, 1)

    }},
  },
});

export const { nextQuestion, drawQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;

