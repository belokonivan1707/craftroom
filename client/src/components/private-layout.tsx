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

      <Box display="flex" height="100%">
        <MuiRouterContext.Consumer>
          {({ pathname }) => <NavigationBar pathname={pathname} />}
        </MuiRouterContext.Consumer>

        <Box
          width="90%"
          sx={{
            padding: `${MAX_HEIGHT_HEADER + 16}px 16px 16px 16px`,
            overflowY: 'auto'
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};
