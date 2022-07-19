import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import { SignIn } from './pages/sign-in';
import { Authorized } from './authorized';
import { ROUTES } from './config/routes';

// without lazy loading
// 663Kb 100-130ms

// lazy loading
// 508Kb B 70-100ms

// import WorkRoom from './pages/work-room';
// import Users from './pages/users';

// const WorkRoom = React.lazy(() => import('./pages/work-room'));
// const Users = React.lazy(() => import('./pages/users'));

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<h1>Landing page path = "/"</h1>} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.SIGN_UP} element={<h1>sign up</h1>} />

          <Route path="/dashboard/*" element={<Authorized />} />
          <Route path="*" element={<h1>I do not no this patH GENERAL</h1>} />
        </Routes>
      </AppWrapper>
    </Router>
  );
};
export default App;
