import React from 'react';
import { auth } from '../lib/firebase/firebase';
import firebase from 'firebase/compat/app';

interface IProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user?: firebase.User | null;
  setUser: (user?: firebase.User | null) => void;
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  signout: () => void;
}
const AuthContext = React.createContext<IUserContext>({
  setUser: () => {},
  signin: () => {},
  signup: () => {},
  signout: () => {}
});

export const ProvideAuth = ({ children }: IProviderProps) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

function useProvideAuth(): IUserContext {
  const [user, setUser] = React.useState<any>(null);

  const signin = async (email: string, password: string) => {
    const { user } = await auth().signInWithEmailAndPassword(email, password);
    setUser(user);
    return user;
  };

  const signup = async (email: string, password: string) => {
    const repsonse = await auth().createUserWithEmailAndPassword(email, password);
    setUser(repsonse.user);
    return repsonse;
  };

  const signout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  //   const sendPasswordResetEmail = email => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  return {
    user,
    setUser,
    signin,
    signup,
    signout
    // signout
    // sendPasswordResetEmail,
    // confirmPasswordReset
  };
}
