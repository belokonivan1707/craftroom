import { Box, Button, CircularProgress } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

export type IProps = ButtonProps & {
  loading: boolean;
};

export const LoadingButton = ({ loading, onClick, ...rest }: IProps) => (
  <Box sx={{ position: 'relative' }}>
    <Button {...rest} onClick={loading ? undefined : onClick} />
    {loading && (
      <Box
        sx={{
          height: '24px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <CircularProgress size={24} />
      </Box>
    )}
  </Box>
);
