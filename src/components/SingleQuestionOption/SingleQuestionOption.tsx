import React from 'react';
import { useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, useParams } from 'react-router-dom';

import { CommonButton } from '../CommonButton';
import { useAnswersStore } from '../../store';

interface Props {
  label: string;
  questionLabel: string;
}

export const SingleQuestionOption = ({ label, questionLabel }: Props) => {
  const { setAnswer } = useAnswersStore();
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleAnswer = () => {
    navigate(`/quiz/${numQuestionId + 1}`);
    setAnswer({ question: questionLabel, answer: [label] });
  };

  return (
    <CommonButton
      sx={{ width: '343px', justifyContent: 'space-between' }}
      onClick={handleAnswer}
      variant="outlined"
      endIcon={<ArrowForwardIcon sx={{ color: theme.palette.primary.main }} />}>
      {label}
    </CommonButton>
  );
};
