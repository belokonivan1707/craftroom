import { Box } from '@mui/material';

export const Header = () => {
  return (
    <div style={{ height: 0 }}>
      <header>
        <Box sx={{ position: 'fixed', top: 0, width: '100%', height: 50, bgcolor: 'background.dark' }}></Box>
      </header>
    </div>
  );
};
