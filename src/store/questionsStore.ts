import { create } from 'zustand';

import { Question } from '../interfaces';

interface State {
  questions: Question[];
}

interface Actions {
  setQuestions: (questions: Question[]) => void;
}

const initialState: State = {
  questions: []
};

export const useQuestionsStore = create<State & Actions>((set) => ({
  ...initialState,
  setQuestions: (questions: Question[]) => set({ questions })
}));
