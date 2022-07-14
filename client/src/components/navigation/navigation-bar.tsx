import React from 'react';
import { Box, Button, Drawer, List, ListItem } from '@mui/material';
import { NAVIGATION_BAR } from '../../config/navigation-bar';
import { MAX_HEIGHT_HEADER } from '../../config/consts';

interface IProps {}

const NavigationItem = ({ path, title }: any) => {
  return (
    <List>
      <ListItem>
        <Button>{title}</Button>
      </ListItem>
    </List>
  );
};

export const NavigationBar = ({}: IProps) => {
  return (
    <nav style={{}}>
      <Drawer
        open
        variant="permanent"
        sx={{
          height: `calc(100vh - ${MAX_HEIGHT_HEADER}px)`,
          // top: MAX_HEIGHT_HEADER,
          // position: 'relative',
          // position: 'relative',
          // overflowY: 'auto',
          background: 'red',
          width: 200
        }}
      >
        {/* {NAVIGATION_BAR.map(({ path, title }) => {
          return <NavigationItem path={path} title={title} />;
        })} */}
      </Drawer>
    </nav>
  );
};
