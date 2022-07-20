import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth: () => firebase.auth.Auth = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0lZZVBoscTEBRXhcnWRGZJFZIKVZVjQU',
      authDomain: 'craft-room-ef4b3.firebaseapp.com',
      projectId: 'craft-room-ef4b3',
      storageBucket: 'craft-room-ef4b3.appspot.com',
      messagingSenderId: '186928159994',
      appId: '1:186928159994:web:a8d0103d7b7908d4df3d43'
    });
  }
  return firebase.auth();
};
