import React from 'react';
import { useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate, useParams } from 'react-router-dom';

import { CommonButton } from '../CommonButton';
import { useDispatch } from 'react-redux';
import { setSingleAnswer } from '../../store/answers/answersSlice';

interface Props {
  label: string;
  questionLabel: string;
}

export const SingleQuestionOption = ({ label, questionLabel }: Props) => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const numQuestionId = Number(questionId || 0);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleAnswer = () => {
    if (numQuestionId) {
      navigate(`/quiz/${numQuestionId + 1}`);
    }
    dispatch(setSingleAnswer({ question: questionLabel, answer: [label] }));
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
