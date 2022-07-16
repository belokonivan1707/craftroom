import React from 'react';
import { Button, Divider, Drawer, List, ListItem, SvgIconTypeMap, Typography } from '@mui/material';
import { NAVIGATION_BAR_ITEMS } from '../../config/navigation-bar';
import { MAX_HEIGHT_HEADER } from '../../config/consts';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IProps {
  path: string;
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  handleClick?: (path: string) => void;
  isActive?: boolean;
}

const NavigationItem: React.FC<IProps> = ({ path, title, Icon, handleClick, isActive }) => {
  console.log('RENDERED NAVIGAION BAR ITEM path', path);

  return (
    <>
      <ListItem sx={{ padding: 0 }}>
        <Button
          sx={{
            justifyContent: 'flex-start',
            color: 'text.secondary'
          }}
          // color={isActive === path ? 'primary' : 'secondary'}
          fullWidth
          href={path}
          // onClick={() => handleClick(path)}
        >
          <Icon />
          <Typography variant="body2" sx={{ padding: '0 0 0 10px', textTransform: 'capitalize' }}>
            {title}
          </Typography>
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

export const NavigationBar: React.FC<{ pathname: string }> = ({ pathname }) => {
  console.log('RENDERED NavigationBar PATH PATH PATHNAME', pathname);
  // React.useEffect(() => {}, [pathname]);

  return (
    <nav>
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            height: `calc(100vh - ${MAX_HEIGHT_HEADER}px)`,
            position: 'relative',
            top: MAX_HEIGHT_HEADER,
            overflowY: 'auto',
            borderColor: `action.disabled`
          }
        }}
      >
        <List>
          {NAVIGATION_BAR_ITEMS.map(({ path, title, icon }) => {
            return <NavigationItem key={path} path={path} title={title} Icon={icon} />;
          })}
        </List>
      </Drawer>
    </nav>
  );
};
