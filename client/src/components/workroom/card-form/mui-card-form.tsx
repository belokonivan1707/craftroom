import React from 'react';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { Formik, FormikValues } from 'formik';
import { LoadingButton } from '../../../ui/buttons/loading-button';

interface IProps {
  title: string;
  childrenWhileDisplaying: React.ReactNode;
  childrenWhileEditing: React.ReactNode;
  onSubmit: (values: Record<string, any>) => Promise<boolean>;
}

export const MuiCardForm: React.FC<IProps & FormikValues> = ({
  title,
  childrenWhileDisplaying,
  childrenWhileEditing,
  onSubmit,
  initialValues
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditClicked = () => {
    setIsEditing(true);
  };

  const handleCancelClicked = React.useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleSubmit = React.useCallback(
    async (values: Record<string, any>) => {
      const success = await onSubmit(values);
      if (success) {
        setIsEditing(false);
      }
    },
    [onSubmit]
  );

  return (
    <Card sx={{ width: '100%' }}>
      <Box padding={1}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height="44px"
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            {!!title && <Typography variant="h5">{title}</Typography>}
          </Box>
          <Box>
            {!isEditing && (
              <IconButton onClick={handleEditClicked} size="large">
                <Edit />
              </IconButton>
            )}
          </Box>
        </Box>

        {isEditing && (
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            {({ submitForm, isSubmitting, values }) => (
              <Box>
                <Box>{childrenWhileEditing}</Box>
                <Box display="flex" flexDirection="row" justifyContent="flex-end" flex={1}>
                  <Button color="secondary" variant="contained" onClick={handleCancelClicked}>
                    {'Cancel'}
                  </Button>
                  <LoadingButton
                    color="primary"
                    variant="contained"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    {'Save'}
                  </LoadingButton>
                </Box>
              </Box>
            )}
          </Formik>
        )}

        {!isEditing && <Box>{childrenWhileDisplaying}</Box>}
      </Box>
    </Card>
  );
};
