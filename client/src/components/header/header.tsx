import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { HEADER_HEIGHT } from '../../config/consts';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography/Typography';
import ButtonBase from '@mui/material/ButtonBase/ButtonBase';
import Popper from '@mui/material/Popper/Popper';
import Paper from '@mui/material/Paper/Paper';
import ClickAwayListener from '@mui/base/ClickAwayListener/ClickAwayListener';
import Grow from '@mui/material/Grow/Grow';
import MenuList from '@mui/material/MenuList/MenuList';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Divider from '@mui/material/Divider/Divider';
import StoreMallDirectory from '@mui/icons-material/StoreMallDirectory';
import ExitToApp from '@mui/icons-material/ExitToApp';

export const Header = () => {
  const { signout, user } = useAuth();
  const buttonBaseRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleUserMenuOpen = () => {
    if (buttonBaseRef.current) {
      setAnchorEl(buttonBaseRef.current);
    }
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signout();
  };

  return (
    <>
      <Box
        className="header"
        display="flex"
        justifyContent="space-between"
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: `${HEADER_HEIGHT}px`,
          padding: '0 20px',
          bgcolor: 'background.transparent',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(20px)',
          zIndex: 10
        }}
      >
        <Box>{!user && <Link to="/sign-in">Sign in</Link>}</Box>
        <Box>
          {user && (
            <ButtonBase
              ref={buttonBaseRef}
              onClick={handleUserMenuOpen}
              sx={{ height: '100%', px: 1 }}
            >
              <AccountCircle />
              <Typography sx={{ ml: 0.5 }} color="inherit" variant="body2">
                {user?.email}
              </Typography>
              <KeyboardArrowDown />
            </ButtonBase>
          )}
        </Box>
      </Box>
      <Popper
        style={{ zIndex: 0 }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ width: '100%', transformOrigin: 'right top' }}>
            <Paper sx={{ borderRadius: 0 }}>
              <ClickAwayListener onClickAway={handleUserMenuClose}>
                <MenuList>
                  <Link to="/home">
                    <MenuItem>
                      <StoreMallDirectory />
                      <Typography sx={{ ml: 1 }}>Home</Typography>
                    </MenuItem>
                  </Link>

                  <Divider />

                  <MenuItem sx={{ display: 'flex' }} onClick={handleSignOut}>
                    <ExitToApp />
                    <Typography sx={{ ml: 1 }} color="inherit">
                      Log out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
