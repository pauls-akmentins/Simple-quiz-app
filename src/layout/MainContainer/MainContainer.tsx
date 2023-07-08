import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => (
  <Box sx={{ height: '100vh' }}>{children}</Box>
);
