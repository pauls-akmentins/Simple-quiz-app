import React from 'react';
import { Button, ButtonProps, useTheme } from '@mui/material';

interface Props extends Omit<ButtonProps, 'children'> {
  children: React.ReactNode;
}

export const CommonButton = ({ children, variant, sx, ...restButtonProps }: Props) => {
  const theme = useTheme();

  return (
    <Button
      variant={variant || 'contained'}
      sx={{
        borderColor: theme.palette.primary.main,
        ...(variant === 'contained' && {
          boxShadow: '0px 16px 32px 0px #AA00FF3D'
        }),
        ...(variant === 'outlined' && { justifyContent: 'flex-start' }),
        textTransform: 'none',
        height: '48px',
        width: '285px',
        ...(variant !== 'text' && { padding: '0 20px' }),
        ...sx
      }}
      {...restButtonProps}>
      {children}
    </Button>
  );
};
