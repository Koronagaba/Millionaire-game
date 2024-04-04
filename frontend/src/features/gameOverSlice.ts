import { createSlice } from "@reduxjs/toolkit";

interface GameOverState {
  award: number;
}

const initialState: GameOverState = {
  award: 0,
};

const gameOverSlice = createSlice({
  name: "gameOver",
  initialState,
  reducers: {
    showCurrentAward(state, { payload }) {
      state.award = payload;
    },
  },
});

export const {
  showCurrentAward } = gameOverSlice.actions;
export default gameOverSlice.reducer;
