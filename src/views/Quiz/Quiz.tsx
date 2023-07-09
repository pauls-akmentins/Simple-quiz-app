import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

import { useQuestionsStore } from '../../store';
import { Question } from '../Question';
import { Nav } from '../../components';
import { MockApi } from '../../apis';

export const Quiz = () => {
  const { questions } = useQuestionsStore();
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);

  const { setQuestions } = useQuestionsStore();

  useEffect(() => {
    const fetchMockData = async () => {
      const {
        data: { questions }
      } = await MockApi();

      setQuestions(questions);
    };

    fetchMockData();
  }, []);

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
