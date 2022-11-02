import { configureStore } from '@reduxjs/toolkit';
import gameOverSlice from '../features/gameOverSlice';
import questionsSlice from '../features/questionsSlice';


export const store = configureStore({
  reducer: {
   questions: questionsSlice,
   gameOver: gameOverSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
