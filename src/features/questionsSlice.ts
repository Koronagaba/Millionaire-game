import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { SingleData } from "../types/types";

interface QuestionState {
  questionNumber: number;
  data: SingleData[];
  randomQuestion: SingleData | null
}

const initialState: QuestionState = {
  questionNumber: 1,
  data,
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

      const random = Math.floor(Math.random() * state.data.length )
      state.randomQuestion = state.data[random]
      state.data.splice(random, 1)
  

    }},
  },
});

export const { nextQuestion, drawQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;

