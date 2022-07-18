import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import { Layout } from './components/private-layout';
import { ROUTES } from './config/routes';

// without lazy loading
// 663Kb 100-130ms

// lazy loading
// 508Kb B 70-100ms

import WorkRoom from './pages/work-room';
import Users from './pages/users';

// const WorkRoom = React.lazy(() => import('./pages/work-room'));
// const Users = React.lazy(() => import('./pages/users'));

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Layout>
          <Routes>
            <Route path={ROUTES.WORK_ROOM} element={<WorkRoom />} />
            <Route path={ROUTES.USERS.HOME} element={<Users />} />
          </Routes>
        </Layout>
      </AppWrapper>
    </Router>
  );
};
export default App;
