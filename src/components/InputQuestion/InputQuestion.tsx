import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { Question } from '../../interfaces';
import { CommonButton } from '../CommonButton';
import { useAnswersStore } from '../../store';

interface Props {
  question: Question;
}

export const InputQuestion = ({ question }: Props) => {
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);
  const navigate = useNavigate();
  const { setAnswer } = useAnswersStore();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleNextQuestion = () => {
    if (!value) {
      setError(`Please provide value to ${question.inputLabel} field`);
      return;
    }
    navigate(`/quiz/${numQuestionId + 1}`);
    setAnswer({ question: question.label, answer: [value] });
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
      <TextField
        label={question.inputLabel}
        value={value}
        onChange={(e) => {
          setError('');
          setValue(e.target.value);
        }}
        error={Boolean(error)}
        helperText={error}
        sx={{ width: '343px' }}
      />
      <CommonButton sx={{ marginTop: '12px', width: '343px' }} onClick={handleNextQuestion}>
        Continue
      </CommonButton>
    </Box>
  );
};
