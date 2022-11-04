import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  timer: number;
  stopTimer: boolean;
}

const initialState: TimerState = {
  timer: 5,
  stopTimer: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setStopTimer(state, {payload}) {
      state.stopTimer  = payload;
    },
    runTimer(state) {
        state.timer = state.timer - 1
    },
    setTimerToinitialValue(state){
        state.timer = 5
    }
  },
});

export const { setStopTimer, runTimer, setTimerToinitialValue } = timerSlice.actions;
export default timerSlice.reducer;
