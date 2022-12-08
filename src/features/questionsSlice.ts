import { createSlice } from "@reduxjs/toolkit";
import {
  difficultData,
  easyData,
  mediumData,
  quiteDifficultData,
} from "../data/data";
import { AnswerType, SingleData } from "../types/types";

interface DataStateWithUsedIds {
  data: SingleData[];
  usedIds: number[];
}

interface QuestionState {
  selectedAnswer: AnswerType | null;
  questionNumber: number;
  currentQuestion: SingleData | null;
  easyDataCopy: DataStateWithUsedIds;
  mediumDataCopy: DataStateWithUsedIds;
  quiteDifficultDataCopy: DataStateWithUsedIds;
  difficultDataCopy: DataStateWithUsedIds;
  randomId: number | null;
}

const initialState: QuestionState = {
  selectedAnswer: null,
  questionNumber: 1,
  currentQuestion: null,
  easyDataCopy: {
    data: [...easyData],
    usedIds: [],
  },
  mediumDataCopy: {
    data: [...mediumData],
    usedIds: [],
  },
  quiteDifficultDataCopy: {
    data: [...quiteDifficultData],
    usedIds: [],
  },
  difficultDataCopy: {
    data: [...difficultData],
    usedIds: [],
  },
  randomId: null,
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.questionNumber ++;
    },
    setQuestionNumber(state, { payload }) {
      state.questionNumber = payload;
    },
    chooseAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },
    drawId(state, { payload }) {
      state.randomId = Math.floor(Math.random() * payload.length);
    },
    setCurrendQuestion(state, { payload }) {
      if (!state.randomId) return;
      state.currentQuestion = payload[state.randomId];
    },
    // addIdToUsedIds(state) {
    //   if (!state.randomId) return;
    //   state.easyDataCopy.usedIds.push(state.randomId);
    // },
    drawEasyQuestion(state) {
      if (!state.randomId) return;
      state.easyDataCopy.data.splice(state.randomId, 1);
    },
    drawMediumQuestion(state) {
      if (!state.randomId) return;
      state.mediumDataCopy.data.splice(state.randomId, 1);
    },
    drawQuiteDifficultQuestion(state) {
      if (!state.randomId) return;
      state.quiteDifficultDataCopy.data.splice(state.randomId, 1);
    },
    drawDifficultQuestion(state) {
      if (!state.randomId) return;
      state.difficultDataCopy.data.splice(state.randomId, 1);
    },
    restoreInitialEasyData(state) {
      state.easyDataCopy.data = easyData;
    },
    restoreInitialMediumData(state) {
      state.mediumDataCopy.data = mediumData;
    },
    restoreInitialQuiteDifficultData(state) {
      state.quiteDifficultDataCopy.data = quiteDifficultData;
    },
    restoreInitialDifficultData(state) {
      state.difficultDataCopy.data = difficultData;
    },
  },
});

export const {
  nextQuestion,
  chooseAnswer,
  setQuestionNumber,
  drawId,
  setCurrendQuestion,
  drawEasyQuestion,
  drawMediumQuestion,
  drawQuiteDifficultQuestion,
  drawDifficultQuestion,
  // addIdToUsedIds,
  restoreInitialEasyData,
  restoreInitialMediumData,
  restoreInitialQuiteDifficultData,
  restoreInitialDifficultData,
} = questionsSlice.actions;
export default questionsSlice.reducer;
