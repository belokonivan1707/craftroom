import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';

interface IProps {
  children: React.ReactNode;
}
export const PrivateRoutes = ({ children }: IProps) => {
  const auth = false;

  if (!auth) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};
