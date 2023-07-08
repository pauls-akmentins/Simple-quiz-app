export interface QuestionOption {
  label: string;
  value: string;
  custom?: {
    deselectAll: boolean;
  };
}
