import React from 'react';
import { Box, useTheme, Typography, LinearProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';

import { useAnswersStore, useQuestionsStore } from '../../store';
import { CommonButton } from '../CommonButton';

export const Nav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { questionId } = useParams();
  const numQuestionId = Number(questionId || 0);
  const { questions } = useQuestionsStore();
  const { answers, setAnswers } = useAnswersStore();
  const progress = ((numQuestionId - 1) / (questions.length - 1)) * 100;

  const handleBack = () => {
    const newAnswers = answers.length > 0 ? answers.slice(0, -1) : [];
    setAnswers(newAnswers);
    if (numQuestionId - 1 < 1) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <Box
      sx={{
        marginBottom: '40px',
        width: '100%',
        borderBottom: `1px solid ${theme.palette.primary.main}`
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 50px'
        }}>
        <CommonButton
          variant="text"
          sx={{
            color: 'black',
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          disableRipple
          disableFocusRipple
          onClick={handleBack}
          startIcon={<ArrowBackIosIcon sx={{ color: theme.palette.primary.main }} />}>
          Back
        </CommonButton>
        <Typography>{`${Number(questionId)} of ${questions.length}`}</Typography>
      </Box>
      <LinearProgress variant="determinate" color="primary" value={progress} />
    </Box>
  );
};
