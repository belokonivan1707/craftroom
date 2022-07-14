import { Box, Button, ListItem } from '@mui/material';
import React from 'react';
import { MAX_HEIGHT_HEADER, MAX_WIDTH_CONTENT } from '../config/consts';
import { Header } from './header';
import { NavigationBar } from './navigation/navigation-bar';

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Header />

      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          height: '100%',
          background: 'green'
        }}
      >
        <Box
          sx={{
            width: '20%'
          }}
        >
          <NavigationBar />
        </Box>

        <Box
          sx={{
            marginTop: `${MAX_HEIGHT_HEADER}px`,
            width: '80%',
            overflowY: 'auto'
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};
