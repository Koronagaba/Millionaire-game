import { configureStore } from "@reduxjs/toolkit";
import gameOverSlice from "../features/gameOverSlice";
import questionsSlice from "../features/questionsSlice";
import timerSlice from "../features/timerSlice";

export const store = configureStore({
  reducer: {
    questions: questionsSlice,
    gameOver: gameOverSlice,
    timer: timerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
