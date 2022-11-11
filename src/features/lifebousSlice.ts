import { createSlice } from "@reduxjs/toolkit";

interface LifebousState {
  disableThirtySec: boolean;
  twoIdsWrongAnswers: number[];
}

const initialState: LifebousState = {
  disableThirtySec: false,
  twoIdsWrongAnswers: [],
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    setDisableThirtySecond(state, { payload }) {
      state.disableThirtySec = payload;
    },
    setTwoIdsWrongAnswers(state, { payload }) {
      state.twoIdsWrongAnswers = payload;
    },
  },
});

export const { setDisableThirtySecond, setTwoIdsWrongAnswers } =
  lifebousSlice.actions;
export default lifebousSlice.reducer;
