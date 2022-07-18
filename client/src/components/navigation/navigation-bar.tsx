import React from 'react';
import { Box, Button, List, ListItem, SvgIconTypeMap, Typography } from '@mui/material';
import { INavBarRoute, NAV_BAR_ROUTES } from '../../config/navigation-routes';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Link } from 'react-router-dom';

interface IProps {
  path: string;
  currentPath: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

  isActive?: boolean;
}

const NavigationItem: React.FC<IProps> = ({ path, currentPath, title, Icon }) => {
  const isActive = currentPath.replace('/', '').startsWith(path.replace('/', ''));

  return (
    <>
      <ListItem sx={{ padding: 0 }}>
        <Link to={path} style={{ width: '100%', borderBottom: '1px solid #DDDD' }}>
          <Button
            fullWidth
            sx={{
              justifyContent: 'flex-start',
              color: `${isActive ? 'secondary' : 'text.secondary'}`
            }}
          >
            <Icon />
            <Typography variant="body2" sx={{ paddingLeft: '10px', textTransform: 'capitalize' }}>
              {title}
            </Typography>
          </Button>
        </Link>
      </ListItem>
    </>
  );
};

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
