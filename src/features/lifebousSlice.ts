import { createSlice } from "@reduxjs/toolkit";

interface TwoIdsWrongAnswersInterface {
  wrongAnswersIds: number[];
  questionId?: number;
}

interface PorbabilityAnswers {
  id?: number;
  probabilityAmount: number;
}

interface AnswersWithCalculatedPercents {
  id?: number;
  answerTheAudience: number;
}

interface LifebousState {
  disableThirtySecLifebous: boolean;
  twoIdsWrongAnswers: TwoIdsWrongAnswersInterface;
  disablePublicHelpLifebous: boolean;
  probabilityAnswers: PorbabilityAnswers[];
  answersWithCalculatedPercents: AnswersWithCalculatedPercents[];
}

const initialState: LifebousState = {
  disableThirtySecLifebous: false,
  twoIdsWrongAnswers: { wrongAnswersIds: [] },
  disablePublicHelpLifebous: false,
  probabilityAnswers: [],
  answersWithCalculatedPercents: [],
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
      { payload }: { payload: AnswersWithCalculatedPercents[] }
    ) {
      state.answersWithCalculatedPercents = payload;
    },
  },
});

export const {
  toggleDisableThirtySecondLifebous,
  setTwoIdsWrongAnswers,
  toggleDisablePublicHelpLifebous,
  addProbabilityAnswers,
  clearProbabilityAnswers,
  addAnswersWithCalculatedPercents,
} = lifebousSlice.actions;
export default lifebousSlice.reducer;
