import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Answer } from '../interfaces';

interface State {
  answers: Answer[];
}

interface Actions {
  setAnswer: (newAnswer: Answer) => void;
  setAnswers: (answers: Answer[]) => void;
  setInitialAnswer: () => void;
}

const initialState = {
  answers: []
};

export const useAnswersStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setAnswers: (answers: Answer[]) => set({ answers }),
      setAnswer: (newAnswer: Answer) =>
        set((state) => ({ answers: [...state.answers, newAnswer] })),
      setInitialAnswer: () => set({ answers: initialState.answers })
    }),
    {
      name: 'answers-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
