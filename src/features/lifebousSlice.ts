import { createSlice } from "@reduxjs/toolkit";

interface TwoIdsWrongAnswersInterface {
  ids: number[];
  questionId?: number;
}

interface PorbabilityAnswers {
  id?: number;
  probabilityAmount: number;
}

interface AnswersAfterPublicHelp {
  id?: number;
  answerTheAudience: number;
}

interface LifebousState {
  disableThirtySecLifebous: boolean;
  twoIdsWrongAnswers: TwoIdsWrongAnswersInterface;
  twoIdsInTheGame: number[];
  disablePublicHelpLifebous: boolean;
  probabilityAnswers: PorbabilityAnswers[];
  percentAnswersAfterPublicHelp: AnswersAfterPublicHelp[];
}

const initialState: LifebousState = {
  disableThirtySecLifebous: false,
  twoIdsWrongAnswers: { ids: [] },
  twoIdsInTheGame: [],
  disablePublicHelpLifebous: false,
  probabilityAnswers: [],
  percentAnswersAfterPublicHelp: [],
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    toggleDisableThirtySecondLifebous(
      state,
      { payload }: { payload: boolean }
    ) {
      state.disableThirtySecLifebous = payload;
    },
    setTwoIdsWrongAnswers(
      state,
      { payload }: { payload: TwoIdsWrongAnswersInterface }
    ) {
      state.twoIdsWrongAnswers = payload;
    },
    setTwoIdsInTheGame(state, { payload }) {
      state.twoIdsInTheGame = payload;
    },
    resetTwoIdsInTheGame(state) {
      state.twoIdsInTheGame = [];
    },
    toggleDisablePublicHelpLifebous(state, { payload }: { payload: boolean }) {
      state.disablePublicHelpLifebous = payload;
    },
    addProbabilityAnswers(state, { payload }) {
      state.probabilityAnswers.push(payload);
    },
    clearProbabilityAnswers(state) {
      state.probabilityAnswers = [];
    },
    addAnswersWithCalculatedPercents(
      state,
      { payload }: { payload: AnswersAfterPublicHelp[] }
    ) {
      state.percentAnswersAfterPublicHelp = payload;
    },
  },
});

export const {
  toggleDisableThirtySecondLifebous,
  setTwoIdsWrongAnswers,
  setTwoIdsInTheGame,
  resetTwoIdsInTheGame,
  toggleDisablePublicHelpLifebous,
  addProbabilityAnswers,
  clearProbabilityAnswers,
  addAnswersWithCalculatedPercents,
} = lifebousSlice.actions;
export default lifebousSlice.reducer;
