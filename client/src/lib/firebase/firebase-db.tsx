import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

export const db = getFirestore();
export const createUserDocumentFrom = async (userAuth: any, additionalInfo?: any) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (err: any) {
      console.log('error creating the user', err?.message);
    }
  }
  return userDocRef;
};
