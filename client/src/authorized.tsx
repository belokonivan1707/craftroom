import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateLayout } from './components/private-layout';
import { PrivateRoutes } from './lib/private-routes';
import { ROUTES } from './config/routes';

import Users from './pages/users';
import WorkRoom from './pages/work-room';

export const Authorized = () => (
  <PrivateRoutes>
    <PrivateLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<h1>HOME</h1>} />
        <Route path={ROUTES.WORK_ROOM} element={<WorkRoom />} />
        <Route path={ROUTES.USERS.HOME} element={<Users />} />
        <Route path="*" element={<h1>I do not no this path</h1>} />
      </Routes>
    </PrivateLayout>
  </PrivateRoutes>
);
