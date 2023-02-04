import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeApp} from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCR867TDIqG6a5DQgNsBPGjwvVZTnBjXg',
  authDomain: 'space-whatschat.firebaseapp.com',
  projectId: 'space-whatschat',
  storageBucket: 'space-whatschat.appspot.com',
  messagingSenderId: '265185708803',
  appId: '1:265185708803:web:783540bb845900a83fb736',
  measurementId: 'G-CNRBCDNCJ7',
};

// Initialize Firebase
const FireabseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = initializeAuth(FireabseApp, {
  presistance: getReactNativePersistence(AsyncStorage),
});
export const FireStore = getFirestore();

export default FireabseApp;
