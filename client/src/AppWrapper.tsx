import { ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { MuiTheme } from './config/theme';
import { MuiRouterContext } from './lib/mui-router-context';

const AppWrapper = ({ children }: any) => {
  const location = useLocation();

  return (
    <ThemeProvider theme={MuiTheme}>
      <Suspense
        fallback={
          <h1 style={{ position: 'fixed', top: '50%', left: '50%', background: 'pink', width: '400px' }}>
            Loading. . .
          </h1>
        }
      >
        <MuiRouterContext.Provider value={{ pathname: location.pathname }}>
          {children}
        </MuiRouterContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
};
export default AppWrapper;
