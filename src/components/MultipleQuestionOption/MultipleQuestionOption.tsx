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
  selectedAnswers: string[];
  options?: QuestionOption[];
  setSelectedAnswers: (answers: string[]) => void;
}

export const MultipleQuestionOption = ({
  label,
  deselectAll,
  selectedAnswers,
  options,
  setSelectedAnswers
}: Props) => {
  const theme = useTheme();

  const handleSelection = () => {
    const isSelected = selectedAnswers.includes(label);

    if (isSelected) {
      setSelectedAnswers(selectedAnswers.filter((answer) => answer !== label));
    } else {
      if (deselectAll) {
        setSelectedAnswers([label]);
      } else {
        const isDeselectSelected = options?.find(
          ({ label, custom }) => custom && selectedAnswers.includes(label)
        );
        if (isDeselectSelected) {
          setSelectedAnswers([label]);
        } else {
          setSelectedAnswers([...selectedAnswers, label]);
        }
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
