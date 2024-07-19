import { createSlice } from "@reduxjs/toolkit";
import {
  getDifficultQuestions,
  getEasyQuestions,
  getMediumQuestions,
  getQuiteDifficultQuestions,
} from "../api/fetchData";
import { difficultData, quiteDifficultData } from "../data/data";
import { AnswerType, SingleData } from "../types/types";

interface DataStateWithUsedIds {
  data: SingleData[] | any;
  usedIds: number[];
}
interface PorbabilityAnswers {
  id?: number;
  probabilityAmount: number;
}
interface TwoIdsWrongAnswersInterface {
  wrongAnswersIds: number[];
  questionId?: number;
}

interface QuestionState {
  selectedAnswer: AnswerType | null;
  questionNumber: number;
  currentQuestion: SingleData | null;
  easyDataCopy: DataStateWithUsedIds;
  mediumDataCopy: DataStateWithUsedIds;
  quiteDifficultDataCopy: DataStateWithUsedIds;
  difficultDataCopy: DataStateWithUsedIds;
  randomIndex: number | null;
  startGame: boolean;
  gameOver: boolean;
  youAreMillionaire: boolean;
  probabilityAnswers: PorbabilityAnswers[];
  disableThirtySecLifebous: boolean;
  disablePublicHelpLifebous: boolean;
  twoIdsWrongAnswers: TwoIdsWrongAnswersInterface;
  initialAnimations: boolean;
  changeQuestionAnimation: boolean;
  wrongAnswerAnimation: boolean;
  disappearPercentageAnimation: boolean;
  easyData: SingleData[] | null;
  mediumData: SingleData[] | null;
  quiteDifficultData: SingleData[] | null;
  difficultData: SingleData[] | null;
  // availableQuestions: SingleData[];
}

const initialState: QuestionState = {
  selectedAnswer: null,
  questionNumber: 1,
  currentQuestion: null,
  easyData: null,
  easyDataCopy: {
    data: [],
    usedIds: [],
  },
  mediumData: null,
  mediumDataCopy: {
    data: [],
    usedIds: [],
  },
  quiteDifficultData: null,
  quiteDifficultDataCopy: {
    data: [],
    usedIds: [],
  },
  difficultData: null,
  difficultDataCopy: {
    data: [],
    usedIds: [],
  },
  randomIndex: null,
  startGame: false,
  gameOver: false,
  youAreMillionaire: false,
  probabilityAnswers: [],
  disableThirtySecLifebous: false,
  disablePublicHelpLifebous: false,
  twoIdsWrongAnswers: { wrongAnswersIds: [] },
  initialAnimations: false,
  changeQuestionAnimation: false,
  wrongAnswerAnimation: false,
  disappearPercentageAnimation: false,
};

const questionsSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    handleNextQuestion(state) {
      if (state.questionNumber < 3) {
        state.randomIndex = Math.floor(
          Math.random() * state.easyDataCopy.data.length
        );
        state.currentQuestion = state.easyDataCopy.data[state.randomIndex];
        state.easyDataCopy.data.splice(state.randomIndex, 1);
      } else if (state.questionNumber >= 3 && state.questionNumber < 6) {
        state.randomIndex = Math.floor(
          Math.random() * state.mediumDataCopy.data.length
        );
        state.currentQuestion = state.mediumDataCopy.data[state.randomIndex];
        state.mediumDataCopy.data.splice(state.randomIndex, 1);
      } else if (state.questionNumber >= 6 && state.questionNumber < 9) {
        state.randomIndex = Math.floor(
          Math.random() * state.quiteDifficultDataCopy.data.length
        );
        state.currentQuestion =
          state.quiteDifficultDataCopy.data[state.randomIndex];
        state.quiteDifficultDataCopy.data.splice(state.randomIndex, 1);
      } else if (state.questionNumber >= 8 && state.questionNumber <= 12) {
        state.randomIndex = Math.floor(
          Math.random() * state.difficultDataCopy.data.length
        );
        state.currentQuestion = state.difficultDataCopy.data[state.randomIndex];
        state.difficultDataCopy.data.splice(state.randomIndex, 1);
      }
      state.questionNumber++;
      state.probabilityAnswers = [];
    },
    setInitialQuestion(state) {
      state.initialAnimations = true;
      state.disappearPercentageAnimation = false;
      state.startGame = true;
      state.gameOver = false;
      state.easyDataCopy.data = state.easyData;
      state.mediumDataCopy.data = state.mediumData;
      state.quiteDifficultDataCopy.data = quiteDifficultData;
      state.difficultDataCopy.data = difficultData;
      state.youAreMillionaire = false;
      state.questionNumber = 1;
      state.probabilityAnswers = [];
      state.disableThirtySecLifebous = false;
      state.disablePublicHelpLifebous = false;
      state.twoIdsWrongAnswers = { wrongAnswersIds: [], questionId: undefined };
      if (state.easyData && state.easyData.length) {
        state.randomIndex = Math.floor(
          Math.random() * state.easyDataCopy.data.length
        );
        state.currentQuestion = state.easyDataCopy.data[state.randomIndex];
        state.easyDataCopy.data = state.easyData.filter(
          (item, index) => index !== state.randomIndex
        );
      }
    },

    stopTheGame(state) {
      state.startGame = false;
    },
    setGameOver(state) {
      state.gameOver = true;
      state.initialAnimations = false;
    },
    youAreMillionaire(state, { payload }) {
      state.youAreMillionaire = payload;
    },
    setDisableThirtySecondLifebous(state) {
      state.disableThirtySecLifebous = true;
    },
    setDisablePublicHelpLifebous(state) {
      state.disablePublicHelpLifebous = true;
    },
    addProbabilityAnswers(state, { payload }) {
      state.probabilityAnswers.push(payload);
    },
    setTwoIdsWrongAnswers(
      state,
      { payload }: { payload: TwoIdsWrongAnswersInterface }
    ) {
      state.twoIdsWrongAnswers = payload;
    },
    chooseAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },
    setInitialAnimations(state, { payload }) {
      state.initialAnimations = payload;
    },
    setChangeQuestionAnimation(state, { payload }) {
      state.changeQuestionAnimation = payload;
    },
    setWrongAnswerAnimation(state, { payload }) {
      state.wrongAnswerAnimation = payload;
    },
    setDisappearPercentageAnimation(state, { payload }) {
      state.disappearPercentageAnimation = payload;
    },
    setToInitialQuestionNumber(state) {
      state.questionNumber = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEasyQuestions.fulfilled, (state, action) => {
        state.easyData = action.payload;
        state.easyDataCopy.data = action.payload;
      })
      .addCase(getMediumQuestions.fulfilled, (state, action) => {
        state.mediumData = action.payload;
        state.mediumDataCopy.data = action.payload;
      })
      .addCase(getQuiteDifficultQuestions.fulfilled, (state, action) => {
        state.quiteDifficultData = action.payload;
        state.quiteDifficultDataCopy.data = action.payload;
      })
      .addCase(getDifficultQuestions.fulfilled, (state, action) => {
        state.difficultData = action.payload;
        state.difficultDataCopy.data = action.payload;
      });
  },
});

export const {
  chooseAnswer,
  handleNextQuestion,
  setInitialQuestion,
  setGameOver,
  setDisableThirtySecondLifebous,
  setDisablePublicHelpLifebous,
  addProbabilityAnswers,
  setDisappearPercentageAnimation,
  setTwoIdsWrongAnswers,
  youAreMillionaire,
  stopTheGame,
  setInitialAnimations,
  setChangeQuestionAnimation,
  setWrongAnswerAnimation,
  setToInitialQuestionNumber,
} = questionsSlice.actions;
export default questionsSlice.reducer;
