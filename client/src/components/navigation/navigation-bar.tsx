import React from 'react';
import Box from '@mui/material/Box/Box';
import List from '@mui/material/List/List';
import { INavBarRoute, NAV_BAR_ROUTES } from '../../config/routes';
import { NavigationItem } from './navigation-item';

interface INavigationBar {
  pathname: string;
  openDrawer?: boolean;
  setOpenDrawer?: (toggle: boolean) => void;
}

export const NavigationBar: React.FC<INavigationBar> = ({ pathname }) => {
  const renderNavItems = (item: INavBarRoute) => (
    <NavigationItem
      key={item.path}
      path={item.path}
      currentPath={pathname}
      title={item.title}
      Icon={item.icon}
    />
  );

  return (
    <nav style={{ width: '10%', minWidth: '200px' }}>
      <Box
        sx={{
          width: '100%',
          border: '1px solid',
          borderColor: 'divider',
          height: '100vh'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '50px',
            bgcolor: 'background.transparent',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          hello
        </Box>
        <List sx={{ p: 0 }}>{NAV_BAR_ROUTES.map(renderNavItems)}</List>
      </Box>
    </nav>
  );
};
