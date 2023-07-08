import React from 'react';
import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

import { useQuestionsStore } from '../../store';
import { Question } from '../Question';
import { Nav } from '../../components';

export const Quiz = () => {
  const { questions } = useQuestionsStore();
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>
      <Nav />
      {questions.length > 0 && numQuestionId > questions.length ? (
        <Navigate to="/answers" replace />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            margin: '0 100px'
          }}>
          <Question />
        </Box>
      )}
    </Box>
  );
};
