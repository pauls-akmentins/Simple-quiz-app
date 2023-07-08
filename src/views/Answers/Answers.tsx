import React from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../../components';

import { useAnswersStore } from '../../store';

export const Answers = () => {
  const { answers } = useAnswersStore();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}>
      <Typography
        fontSize="2rem"
        sx={{ maxWidth: '600px', textAlign: 'center', marginBottom: '20px' }}>
        Congratz! Here are your answers to the questions:
      </Typography>

      {answers.map(({ question, answer }, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            margin: '10px 0'
          }}>
          <Typography fontWeight={600}>{`${index + 1}.  ${question}`}</Typography>
          <Box sx={{ display: 'flex' }}>
            {answer?.map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </Box>
        </Box>
      ))}
      <CommonButton sx={{ marginTop: '20px' }} onClick={() => navigate('/')}>
        Fill the quiz again!
      </CommonButton>
    </Box>
  );
};
