import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD0lZZVBoscTEBRXhcnWRGZJFZIKVZVjQU',
  authDomain: 'craft-room-ef4b3.firebaseapp.com',
  projectId: 'craft-room-ef4b3',
  storageBucket: 'craft-room-ef4b3.appspot.com',
  messagingSenderId: '186928159994',
  appId: '1:186928159994:web:a8d0103d7b7908d4df3d43'
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFrom = async (userAuth: any) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (err: any) {
      console.log('error creating the user', err?.message);
    }
  }
  return userDocRef;
};
