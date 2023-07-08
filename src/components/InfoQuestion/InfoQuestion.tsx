import React from 'react';
import { Box, Typography } from '@mui/material';

import { Question } from '../../interfaces';
import { CommonButton } from '../CommonButton';
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
  question: Question;
}

export const InfoQuestion = ({ question }: Props) => {
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    navigate(`/quiz/${numQuestionId + 1}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px'
      }}>
      <Typography fontSize="1.5rem" sx={{ maxWidth: '600px', textAlign: 'center' }}>
        {question.description}
      </Typography>
      <CommonButton sx={{ marginTop: '12px', width: '343px' }} onClick={handleNextQuestion}>
        OK, let&apos;s do it!
      </CommonButton>
    </Box>
  );
};
