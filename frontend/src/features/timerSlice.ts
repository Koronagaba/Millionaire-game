import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  stopTimer: boolean;
  extraTime: number
}

const initialState: TimerState = {
  stopTimer: false,
  extraTime: 0
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setStopTimer(state, {payload}) {
      state.stopTimer  = payload;
    },
    setExtraTime(state, {payload}){
      state.extraTime = payload
    }
  },
});

export const { setStopTimer, setExtraTime } = timerSlice.actions;
export default timerSlice.reducer;
