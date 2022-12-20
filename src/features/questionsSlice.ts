import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  availableQuestions: SingleData[];
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
  randomIndex: null,
  startGame: false,
  gameOver: false,
  youAreMillionaire: false,
  probabilityAnswers: [],
  disableThirtySecLifebous: false,
  disablePublicHelpLifebous: false,
  twoIdsWrongAnswers: { wrongAnswersIds: [] },
  availableQuestions: [],
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
        if (!state.randomIndex) return;
        state.currentQuestion = state.easyDataCopy.data[state.randomIndex];
        state.easyDataCopy.data.splice(state.randomIndex, 1);
      } else if (state.questionNumber >= 3 && state.questionNumber < 6) {
        state.randomIndex = Math.floor(
          Math.random() * state.mediumDataCopy.data.length
        );
        if (!state.randomIndex) return;
        state.currentQuestion = state.mediumDataCopy.data[state.randomIndex];
        state.mediumDataCopy.data.splice(state.randomIndex, 1);
      } else if (state.questionNumber >= 6 && state.questionNumber < 9) {
        state.randomIndex = Math.floor(
          Math.random() * state.quiteDifficultDataCopy.data.length
        );
        if (!state.randomIndex) return;
        state.currentQuestion =
          state.quiteDifficultDataCopy.data[state.randomIndex];
        state.quiteDifficultDataCopy.data.splice(state.randomIndex, 1);
      } else if (state.questionNumber >= 8 && state.questionNumber <= 12) {
        state.randomIndex = Math.floor(
          Math.random() * state.difficultDataCopy.data.length
        );
        if (!state.randomIndex) return;
        state.currentQuestion = state.difficultDataCopy.data[state.randomIndex];
        state.difficultDataCopy.data.splice(state.randomIndex, 1);
      }

      state.questionNumber++;
      state.probabilityAnswers = [];
    },
    setInitialQuestion(state, { payload }) {
      state.easyDataCopy.data = easyData;
      state.mediumDataCopy.data = mediumData;
      state.quiteDifficultDataCopy.data = quiteDifficultData;
      state.difficultDataCopy.data = difficultData;
      state.availableQuestions = [];

      state.startGame = true;
      state.gameOver = false;
      state.youAreMillionaire = false;
      state.questionNumber = 1;
      state.probabilityAnswers = [];
      state.disableThirtySecLifebous = false;
      state.disablePublicHelpLifebous = false;
      state.twoIdsWrongAnswers = { wrongAnswersIds: [], questionId: undefined };

      state.randomIndex = Math.floor(Math.random() * payload.length);
      if (!state.randomIndex) return;
      state.currentQuestion = payload[state.randomIndex];
      state.easyDataCopy.data.splice(state.randomIndex, 1);
    },

    stopTheGame(state) {
      state.startGame = false;
    },
    setGameOver(state) {
      state.gameOver = true;
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
  setTwoIdsWrongAnswers,
  youAreMillionaire,
  stopTheGame,
} = questionsSlice.actions;
export default questionsSlice.reducer;
