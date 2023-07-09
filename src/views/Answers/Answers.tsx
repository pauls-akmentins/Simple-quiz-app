import React, { useEffect, useState } from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../../components';

import { useAnswersStore } from '../../store';

export const Answers = () => {
  const { answers } = useAnswersStore();
  const [isLoading, setIsLoading] = useState(true);
  const nameValue = answers.find((answer) => answer.question === 'What is your name?');
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutValue = 3000;
    const interval = 100;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (interval / timeoutValue) * 100;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setIsLoading(false);
    }, timeoutValue);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

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
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            width: '100%',
            height: '100%'
          }}>
          <Typography fontSize="2rem">Analyzing data...</Typography>
          <LinearProgress
            sx={{ width: '345px' }}
            variant="determinate"
            color="primary"
            value={progress}
          />
        </Box>
      ) : (
        <>
          <Typography
            fontSize="1.5rem"
            sx={{ maxWidth: '600px', textAlign: 'center', marginBottom: '20px' }}>
            {`Congratz, ${nameValue?.answer}! Here are your answers to the questions:`}
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
        </>
      )}
    </Box>
  );
};
