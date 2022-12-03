import { configureStore } from "@reduxjs/toolkit";
import gameOverSlice from "./features/gameOverSlice";
import questionsSlice from "./features/questionsSlice";
import timerSlice from "./features/timerSlice";
import lifebousSlice from "./features/lifebousSlice";
import responsiveSlice from './features/responsiveSlice'
import millionaireSlice from "./features/millionaireSlice";
import soundSlice from "./features/soundSlice";

export const store = configureStore({
  reducer: {
    questions: questionsSlice,
    gameOver: gameOverSlice,
    timer: timerSlice,
    lifebous: lifebousSlice,
    responsive: responsiveSlice,
    millionaire: millionaireSlice,
    sound: soundSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
