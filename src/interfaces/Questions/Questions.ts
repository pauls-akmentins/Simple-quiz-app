import { QuestionOption } from '../QuestionsOption';

export enum QuestionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
  INFO = 'info',
  INPUT = 'input'
}

export interface Question {
  type: 'single' | 'multiple' | 'info' | 'input';
  options?: QuestionOption[];
  label: string;
  inputLabel?: string;
  description?: string;
  key: string;
}
