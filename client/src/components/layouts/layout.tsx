import React from 'react';
import { Box } from '@mui/material';
import { MAX_HEIGHT_HEADER } from '../../config/consts';
import { Header } from '../header/header';
interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />
      <Box
        width="100%"
        sx={{
          padding: `${MAX_HEIGHT_HEADER + 16}px 16px 16px 16px`,
          overflowY: 'auto'
        }}
      >
        {children}
      </Box>
    </div>
  );
};
