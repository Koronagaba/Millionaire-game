import { configureStore } from "@reduxjs/toolkit";
import gameOverSlice from "./features/gameOverSlice";
import questionsSlice from "./features/questionsSlice";
import timerSlice from "./features/timerSlice";
import lifebousSlice from "./features/lifebousSlice";
import responsiveSlice from "./features/responsiveSlice";
import soundSlice from "./features/soundSlice";
import userNameSlice from "./features/userNameSlice";

export const store = configureStore({
  reducer: {
    questions: questionsSlice,
    gameOver: gameOverSlice,
    timer: timerSlice,
    lifebous: lifebousSlice,
    responsive: responsiveSlice,
    sound: soundSlice,
    userName: userNameSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
