import {
  signInWithGooglePopup,
  createUserDocumentFrom,
  signInWithGoogleRedirect
} from '../lib/firebase/firebase';

export const SignIn = () => {
  const loginUserWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFrom(user);
    console.log('sign in with google response', user);
  };

  const loginUserWithGoogleRederect = async () => {
    const { user } = await signInWithGooglePopup();

    console.log('sign in with google response', user);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={loginUserWithGoogle}>sign in with google</button>
      <button onClick={loginUserWithGoogleRederect}>sign in with google redirect</button>
    </div>
  );
};
