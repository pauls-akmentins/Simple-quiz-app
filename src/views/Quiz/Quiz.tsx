import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';

import { Question } from '../Question';
import { Nav } from '../../components';
import { MockApi } from '../../apis';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../../store/questions/questionsSlice';

export const Quiz = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state: RootState) => state.questions);
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);

  useEffect(() => {
    const fetchMockData = async () => {
      const {
        data: { questions }
      } = await MockApi();

      dispatch(setQuestions(questions));
    };

    fetchMockData();
  }, []);

  if (questions.length === 0) return <></>;

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
