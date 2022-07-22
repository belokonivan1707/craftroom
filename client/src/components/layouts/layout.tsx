import React from 'react';
import { Box } from '@mui/material';
import { HEADER_HEIGHT } from '../../config/consts';
interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Box
        width="100%"
        sx={{
          padding: `${HEADER_HEIGHT + 16}px 16px 16px 16px`,
          overflowY: 'auto'
        }}
      >
        {children}
      </Box>
    </div>
  );
};
