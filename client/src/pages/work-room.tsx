import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Speed from '@mui/icons-material/Speed';
import { MuiCardForm } from '../lib/mui-card-form';
import { SettingDisplay } from '../lib/setting-display';
import { TextFormField } from '../lib/fields/text-form-field';
import { PinCode } from '../components/pin-code';
import { MenuList } from '../components/menu/menu-list';
import { TypographySettings } from '../components/typography-settings';

const WorkRoom = () => {
  const [pin, setPin] = React.useState<(number | undefined)[]>([]);
  const onSubmitSettings = async () => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => {
          reject(() => {
            throw new Error('You do not have server :D');
          });
        }, 1000);
      });
      return true;
    } catch (err) {
      return false;
    }
  };

  return (
    <Paper
      sx={{
        p: '10px 15px'
      }}
    >
      <h1>Work room</h1>
      <Box display="flex" justifyContent="space-between">
        <Box width="45%">
          <Box width="100%" marginBottom={4}>
            <MenuList />
          </Box>

          <Box width="100%" marginBottom={4}>
            <PinCode pin={pin} setPin={setPin} />
          </Box>

          <Box width="100%" marginBottom={4}>
            <MuiCardForm
              title="Settings"
              onSubmit={onSubmitSettings}
              initialValues={{
                username: ''
              }}
              childrenWhileDisplaying={
                <Box>
                  <SettingDisplay
                    label="User Name"
                    description={'Write user name'}
                    tooltipText={'This field will be showing in table for merchant'}
                    tooltipIcon={<Speed />}
                  >
                    <Typography>NIkollo</Typography>
                  </SettingDisplay>
                </Box>
              }
              childrenWhileEditing={
                <Box>
                  <SettingDisplay
                    label={'Label'}
                    description={'Description'}
                    tooltipText={'Tooltip text'}
                    tooltipIcon={<Speed />}
                  >
                    <TextFormField name="username" label="User Name" />
                  </SettingDisplay>
                </Box>
              }
            />
          </Box>
        </Box>
        <Box width="45%">
          <TypographySettings />
        </Box>
      </Box>
    </Paper>
  );
};

export default WorkRoom;
