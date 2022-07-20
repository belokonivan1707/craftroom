import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import { ProvideAuth } from './hooks/useAuth';
import { Root } from './Root';

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
        <ProvideAuth>
          <Root />
        </ProvideAuth>
      </AppWrapper>
    </Router>
  );
};
export default App;
