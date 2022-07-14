import { Box } from '@mui/material';

export const Header = () => {
  return (
    <Box style={{ height: 0 }}>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', height: 50, bgcolor: 'background.dark' }}></Box>
    </Box>
  );
};
