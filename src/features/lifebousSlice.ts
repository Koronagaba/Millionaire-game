import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LifebousState {
  disableThirtySec: boolean;
  twoIdsWrongAnswers: TwoIdsWrongAnswersInterface;
}

interface TwoIdsWrongAnswersInterface {
  ids: number[];
  questionId?: number;
}

const initialState: LifebousState = {
  disableThirtySec: false,
  twoIdsWrongAnswers: { ids: [] },
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    setDisableThirtySecond(state, { payload }: { payload: boolean }) {
      state.disableThirtySec = payload;
    },
    setTwoIdsWrongAnswers(
      state,
      { payload }: { payload: TwoIdsWrongAnswersInterface }
    ) {
      state.twoIdsWrongAnswers = payload;
    },
  },
});

export const { setDisableThirtySecond, setTwoIdsWrongAnswers } =
  lifebousSlice.actions;
export default lifebousSlice.reducer;
