import { createSlice } from "@reduxjs/toolkit";

interface GameOverState {
  gameOver: boolean;
  award: number;
}

const initialState: GameOverState = {
  gameOver: false,
  award: 0,
};

const gameOverSlice = createSlice({
  name: "gameOver",
  initialState,
  reducers: {
    setGameOver(state) {
      state.gameOver = true;
    },
    showCurrentAward(state, { payload }) {
      state.award = payload;
    },
  },
});

export const { setGameOver, showCurrentAward } = gameOverSlice.actions;
export default gameOverSlice.reducer;
