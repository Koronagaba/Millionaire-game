import { createSlice } from "@reduxjs/toolkit";

interface LifebousState {
  disableThirtySec: boolean;
}

const initialState: LifebousState = {
  disableThirtySec: false,
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    setDisableThirtySecond(state, { payload }) {
      state.disableThirtySec = payload;
    },
  },
});

export const { setDisableThirtySecond } = lifebousSlice.actions;
export default lifebousSlice.reducer;
