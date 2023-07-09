import React, { useState } from 'react';
import { Box } from '@mui/material';

import { Question } from '../../interfaces';
import { MultipleQuestionOption } from '../MultipleQuestionOption';
import { CommonButton } from '../CommonButton';
import { useAnswersStore } from '../../store';
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
  question: Question;
}

export const MultipleQuestion = ({ question }: Props) => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);
  const { setAnswer } = useAnswersStore();
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswer = () => {
    if (numQuestionId) {
      navigate(`/quiz/${numQuestionId + 1}`);
    }
    setAnswer({ question: question?.label, answer: selectedAnswers });
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
      {question?.options?.map(({ label, custom }, index) => (
        <MultipleQuestionOption
          key={index}
          label={label}
          deselectAll={Boolean(custom)}
          questionKey={question?.key}
          selectedAnswers={selectedAnswers}
          options={question.options}
          setSelectedAnswers={(answers) => setSelectedAnswers(answers)}
        />
      ))}
      <CommonButton
        sx={{ marginTop: '12px', width: '343px' }}
        disabled={!selectedAnswers?.length}
        onClick={handleAnswer}>
        Continue
      </CommonButton>
    </Box>
  );
};
