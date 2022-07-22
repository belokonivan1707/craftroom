import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import { useAuth } from '../hooks/useAuth';

interface IProps {
  children: React.ReactNode;
}
export const PrivateRoutes = ({ children }: IProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
