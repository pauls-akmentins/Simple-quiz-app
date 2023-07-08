import { createTheme, ThemeProvider as Provider } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#AA00FF'
      }
    }
  });

  return <Provider theme={theme}>{children}</Provider>;
};
