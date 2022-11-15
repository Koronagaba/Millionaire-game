import { createSlice } from "@reduxjs/toolkit";

interface TwoIdsWrongAnswersInterface {
  ids: number[];
  questionId?: number;
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
  answersAfterPublicHelp: AnswersAfterPublicHelp[];
}

const initialState: LifebousState = {
  disableThirtySecLifebous: false,
  twoIdsWrongAnswers: { ids: [] },
  twoIdsInTheGame: [],
  disablePublicHelpLifebous: false,
  answersAfterPublicHelp: [],
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    setDisableThirtySecondLifebous(state, { payload }: { payload: boolean }) {
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
    setDisablePublicHelpLifebous(state, { payload }: { payload: boolean }) {
      state.disablePublicHelpLifebous = payload;
    },
    setAnswersAfterPublicHelp(
      state,
      { payload }: { payload: AnswersAfterPublicHelp[] }
    ) {
      state.answersAfterPublicHelp = payload;
    },
  },
});

export const {
  setDisableThirtySecondLifebous,
  setTwoIdsWrongAnswers,
  setTwoIdsInTheGame,
  resetTwoIdsInTheGame,
  setDisablePublicHelpLifebous,
  setAnswersAfterPublicHelp,
} = lifebousSlice.actions;
export default lifebousSlice.reducer;
