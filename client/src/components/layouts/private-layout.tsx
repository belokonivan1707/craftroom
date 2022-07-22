import React from 'react';
import { Box } from '@mui/material';
import { MuiRouterContext } from '../../lib/mui-router-context';
import { Header } from '../header/header';
import { NavigationBar } from '../navigation/navigation-bar';
import { HEADER_HEIGHT } from '../../config/consts';

interface IProps {
  children: React.ReactNode;
}

export const PrivateLayout = ({ children }: IProps) => {
  return (
    <div id="private-layout" style={{ width: '100%', height: '100%' }}>
      <Header />

      <Box id="content" display="flex" sx={{ height: '100%', overflow: 'hidden' }}>
        <MuiRouterContext.Consumer>
          {({ pathname }) => <NavigationBar pathname={pathname} />}
        </MuiRouterContext.Consumer>

        <Box
          width="90%"
          sx={{
            padding: `${HEADER_HEIGHT + 12}px 12px 12px 12px`,
            overflow: 'auto'
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};
