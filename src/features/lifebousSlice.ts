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
  answersWithCalculatedPercents: AnswersWithCalculatedPercents[];
}

const initialState: LifebousState = {
  answersWithCalculatedPercents: [],
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    addAnswersWithCalculatedPercents(
      state,
      { payload }: { payload: AnswersWithCalculatedPercents[] }
    ) {
      state.answersWithCalculatedPercents = payload;
    },
  },
});

export const {
  addAnswersWithCalculatedPercents,
} = lifebousSlice.actions;
export default lifebousSlice.reducer;
