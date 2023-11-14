import { createSlice } from '@reduxjs/toolkit';
import { Answer } from '../../interfaces';

interface AnswersState {
  answers: Answer[];
}

const initialState: AnswersState = {
  answers: []
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setSingleAnswer: (state, action) => {
      state.answers = [...state.answers, action.payload];
    },
    setMultipleAnswers: (state, action) => {
      state.answers = action.payload;
    },
    setInitialAnswers: () => initialState
  }
});

export const { setSingleAnswer, setMultipleAnswers, setInitialAnswers } = answersSlice.actions;

export default answersSlice.reducer;
