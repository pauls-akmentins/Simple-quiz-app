import { Question } from '../Questions';

export interface MockData {
  data: {
    name: string;
    slug: string;
    questions: Question[];
  };
}
