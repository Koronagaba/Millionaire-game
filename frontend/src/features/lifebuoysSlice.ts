import { createSlice } from "@reduxjs/toolkit";

interface AnswersWithCalculatedPercents {
  id?: number;
  answerTheAudience: number;
}

interface LifebuoysState {
  answersWithCalculatedPercents: AnswersWithCalculatedPercents[];
}

const initialState: LifebuoysState = {
  answersWithCalculatedPercents: [],
};

const lifebuoysSlice = createSlice({
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
} = lifebuoysSlice.actions;
export default lifebuoysSlice.reducer;
