import { Route, Routes } from 'react-router-dom';
import { PrivateLayout } from './components/layouts/private-layout';
import { PrivateRoutes } from './lib/private-routes';
import { ROUTES } from './config/routes';
import Users from './pages/users';
import WorkRoom from './pages/work-room';

const Authorized = () => (
  <PrivateRoutes>
    <PrivateLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<h1>HOME</h1>} />
        <Route path={ROUTES.WORK_ROOM} element={<WorkRoom />} />
        <Route path={ROUTES.USERS.HOME} element={<Users />} />

        <Route path="*" element={<h1>I do not have this path DASHBOARD</h1>} />
      </Routes>
    </PrivateLayout>
  </PrivateRoutes>
);

export default Authorized;
