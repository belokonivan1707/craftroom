import React, { ReactElement } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

export const SettingDisplay: React.FC<{
  label: string;
  description?: string;
  tooltipText: string;
  tooltipIcon: ReactElement;
  children: React.ReactNode;
}> = props => {
  const { label, description, tooltipText, tooltipIcon, children } = props;

  return (
    <Box width="100%" display="flex" alignItems="center" marginBottom={2}>
      <Box width="30%" display="flex" flexDirection="column" marginRight={2}>
        <Box display="flex" alignItems="center" marginBottom={1}>
          <Typography variant="body2">
            <b>{label}</b>
          </Typography>
          <Box display="flex" alignItems="center" marginLeft={1}>
            <Tooltip title={tooltipText}>{tooltipIcon}</Tooltip>
          </Box>
        </Box>
        <Typography variant="caption">{description}</Typography>
      </Box>

      <Box display="flex" alignItems="flex-end">
        {children}
      </Box>
    </Box>
  );
};
