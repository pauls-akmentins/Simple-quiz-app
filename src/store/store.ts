import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './answers/answersSlice';
import questionsReducer from './questions/questionsSlice';

export const store = configureStore({
  reducer: {
    answers: answersReducer,
    questions: questionsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
