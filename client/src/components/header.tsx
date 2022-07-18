import { Box } from '@mui/material';

export const Header = () => {
  return (
    <header
      style={{ position: 'fixed', width: 'calc(90%)', top: 0, left: 200, right: 0, zIndex: 1000 }}
    >
      <Box
        sx={{
          width: '100%',
          height: '51px',
          bgcolor: 'background.transparent',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(20px)'
        }}
      ></Box>
    </header>
  );
};
