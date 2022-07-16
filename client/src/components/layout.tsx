import { Box } from '@mui/material';
import React from 'react';
import { MAX_HEIGHT_HEADER } from '../config/consts';
import { MuiRouterContext } from '../lib/mui-router-context';
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
          height: '100%'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 200,
            background: 'black',
            height: '100vh'
          }}
        >
          <MuiRouterContext.Consumer>
            {({ pathname }) => <NavigationBar pathname={pathname} />}
          </MuiRouterContext.Consumer>
        </Box>

        <Box
          sx={{
            marginTop: `${MAX_HEIGHT_HEADER}px`,
            width: '90%',
            height: `calc(100% - ${50}px)`,
            overflowY: 'auto',
            padding: '24px'
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};
