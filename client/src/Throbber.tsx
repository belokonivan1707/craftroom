import Box from '@mui/material/Box/Box';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Typography from '@mui/material/Typography/Typography';

interface ThrobberProps {
  text?: string;
  removeMargin?: boolean;
}

export const Throbber = (props: ThrobberProps) => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <CircularProgress size={100} />
      <Typography variant="h5">{props.text || "We're just loading your content..."}</Typography>
    </Box>
  </Box>
);
