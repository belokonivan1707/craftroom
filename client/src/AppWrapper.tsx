// TO DO MuiRouterContext and Suspense

import { ThemeProvider } from '@mui/material';
import { MuiTheme } from './config/theme';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { MuiRouterContext } from './lib/mui-router-context';
import { Throbber } from './Throbber';

interface IProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: IProps) => {
  const location = useLocation();

  return (
    <ThemeProvider theme={MuiTheme}>
      <Suspense fallback={<Throbber />}>
        <MuiRouterContext.Provider value={{ pathname: location.pathname }}>
          {children}
        </MuiRouterContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
};
export default AppWrapper;
