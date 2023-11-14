import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { QuestionType } from '../../interfaces';
import { SingleQuestion, InputQuestion, InfoQuestion, MultipleQuestion } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Question = () => {
  const { questionId } = useParams();
  const { questions } = useSelector((state: RootState) => state.questions);
  const question = questions[Number(questionId || 0) - 1];

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}>
      <Typography fontSize="2rem" sx={{ maxWidth: '600px', textAlign: 'center' }}>
        {question.label}
      </Typography>
      {(() => {
        switch (question.type) {
          case QuestionType.SINGLE:
            return <SingleQuestion question={question} />;
          case QuestionType.MULTIPLE:
            return <MultipleQuestion question={question} />;
          case QuestionType.INFO:
            return <InfoQuestion question={question} />;
          case QuestionType.INPUT:
            return <InputQuestion question={question} />;
        }
      })()}
    </Box>
  );
};
