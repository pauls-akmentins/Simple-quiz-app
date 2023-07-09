import React from 'react';
import { useRoutes } from 'react-router-dom';

import { MainContainer } from './layout';
import { ThemeProvider } from './providers';
import { routesConfig } from './routesConfig';

const App = () => {
  const routes = useRoutes(routesConfig);

  return (
    <ThemeProvider>
      <MainContainer>{routes}</MainContainer>
    </ThemeProvider>
  );
};

export default App;
