import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from './components/layouts/layout';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { ROUTES } from './config/routes';
import { useAuth } from './hooks/useAuth';
import React from 'react';

const NotAuthorized = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/dashboard/home');
    }
  }, [navigate, user]);

  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path="/" element={<h1>Landing page path = "/"</h1>} />
        <Route path="*" element={<h1>I do not no this patH NOT_AUTHORIZED</h1>} />
      </Routes>
    </Layout>
  );
};

export default NotAuthorized;
