import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { auth } from './lib/firebase/firebase';
import { useAuth } from './hooks/useAuth';
import Authorized from './authorized';
import NotAuthorized from './not-authorized';
import { Throbber } from './Throbber';

export const Root = () => {
  const { setUser } = useAuth();
  const [isFirebaseLoaded, setIsFirebaseLoaded] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsFirebaseLoaded(false);
    });

    return () => {
      unsubscribe();
    };
  }, [setUser]);

  if (isFirebaseLoaded) {
    return <Throbber />;
  }

  return (
    <Routes>
      <Route path="/*" element={<NotAuthorized />} />
      <Route path="/dashboard/*" element={<Authorized />} />
    </Routes>
  );
};
