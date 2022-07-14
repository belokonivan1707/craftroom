import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Layout } from './components/layout';
import { Users } from './pages/users';
import { WorkRoom } from './pages/work-room';
import { ROUTES } from './config/routes';
import { MuiTheme } from './config/theme';

const App = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Layout>
        <Router>
          <Routes>
            <Route path={ROUTES.WORK_ROOM} element={<WorkRoom />} />
            <Route path={ROUTES.USERS.HOME} element={<Users />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};
export default App;
