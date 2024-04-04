import { createSlice } from "@reduxjs/toolkit";

interface InitialSoundState {
  allMuted: boolean;
}

const initialState: InitialSoundState = {
  allMuted: true,
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    turnOffVolume(state) {
      state.allMuted = true;
    },
    turnOnVolume(state) {
      state.allMuted = false;
    },
  },
});

export const { turnOffVolume, turnOnVolume } = soundSlice.actions;
export default soundSlice.reducer;
