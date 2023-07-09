import React from 'react';
import { Box } from '@mui/material';

import { Question } from '../../interfaces';
import { SingleQuestionOption } from '../SingleQuestionOption';

interface Props {
  question: Question;
}

export const SingleQuestion = ({ question }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '12px'
      }}>
      {question.options?.map(({ label }, index) => (
        <SingleQuestionOption key={index} label={label} questionLabel={question.label} />
      ))}
    </Box>
  );
};
