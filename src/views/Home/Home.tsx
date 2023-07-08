import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { CommonButton } from '../../components';
import iceHockeyImg from '../../assets/images/ice-hockey.png';
import { useAnswersStore } from '../../store';

export const Home = () => {
  const navigate = useNavigate();
  const { setInitialAnswer } = useAnswersStore();

  useEffect(() => {
    setInitialAnswer();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        margin: '0 100px'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '30px'
        }}>
        <Typography sx={{ fontSize: '3rem' }}>Quiz app - ice hockey edition</Typography>
        <CommonButton
          onClick={() => {
            navigate(`/quiz/1`);
          }}>
          Start the quiz
        </CommonButton>
      </Box>
      <img src={iceHockeyImg} alt="Ice hockey image" />
    </Box>
  );
};
