import { Box, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { MockApi } from './apis';
import { MainContainer } from './layout';
import { ThemeProvider } from './providers';
import { routesConfig } from './routesConfig';
import { useQuestionsStore } from './store';

const App = () => {
  const routes = useRoutes(routesConfig);
  const { setQuestions } = useQuestionsStore();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMockData = async () => {
      setIsLoading(true);
      const {
        data: { questions }
      } = await MockApi();
      setIsLoading(false);

      setQuestions(questions);
    };

    fetchMockData();
  }, []);

  return (
    <ThemeProvider>
      <MainContainer>
        {isLoading ? (
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              margin: '0 100px'
            }}>
            <CircularProgress size={100} color="primary" />
          </Box>
        ) : (
          routes
        )}
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
