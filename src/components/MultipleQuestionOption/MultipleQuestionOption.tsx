import React from 'react';
import { useTheme } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import { CommonButton } from '../CommonButton';
import { QuestionOption } from '../../interfaces';

interface Props {
  label: string;
  questionKey: string;
  deselectAll?: boolean;
  selectedAnswers: string[] | null;
  options?: QuestionOption[];
  setSelectedAnswers: (answers: string[]) => void;
}

export const MultipleQuestionOption = ({
  label,
  deselectAll,
  selectedAnswers,
  setSelectedAnswers,
  options
}: Props) => {
  const theme = useTheme();

  const handleSelection = () => {
    const isSelected = selectedAnswers?.includes(label);

    if (deselectAll) {
      if (isSelected) {
        setSelectedAnswers([]);
      } else {
        setSelectedAnswers([label]);
      }
    } else {
      if (isSelected) {
        setSelectedAnswers(selectedAnswers?.filter((answer) => answer !== label) || []);
      } else {
        const updatedAnswers = selectedAnswers?.filter((answer) => {
          const answerData = options?.find((option) => option.value === answer);
          return !(answerData && answerData.custom && answerData.custom.deselectAll);
        });
        setSelectedAnswers([...(updatedAnswers || []), label]);
      }
    }
  };
  return (
    <CommonButton
      sx={{ width: '343px', justifyContent: 'space-between' }}
      onClick={handleSelection}
      variant="outlined"
      endIcon={
        selectedAnswers?.includes(label) ? (
          <TaskAltIcon sx={{ color: theme.palette.primary.main }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ color: theme.palette.primary.main }} />
        )
      }>
      {label}
    </CommonButton>
  );
};
