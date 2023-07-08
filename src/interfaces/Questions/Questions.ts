import { QuestionOption } from '../QuestionsOption';

export enum QuestionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
  INFO = 'info'
}

export interface Question {
  type: 'single' | 'multiple' | 'info';
  options?: QuestionOption[];
  label: string;
  description?: string;
  key: string;
}
