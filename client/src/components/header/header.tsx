import { Box, Button, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

interface IProps {
  main?: boolean;
}

export const Header = ({ main }: IProps) => {
  const auth = useAuth();

  return (
    <header className={`${main ? 'main-header' : 'private-header'} header`}>
      <Box
        sx={{
          width: '100%',
          height: '51px',
          bgcolor: 'background.transparent',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(20px)'
        }}
      >
        {auth.user ? (
          <Box>
            <Typography>Account: {auth?.user?.email}</Typography>
            <Button onClick={() => auth.signout()}>Sign-out</Button>
          </Box>
        ) : (
          <Link to="/sign-in">Sign in</Link>
        )}
      </Box>
    </header>
  );
};
