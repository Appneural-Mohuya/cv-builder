// plugins/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDdR8pAMSxcGhvHF_PuV0DGxqiw9lbCXZk",
  authDomain: "cvbuilder-28ced.firebaseapp.com",
  projectId: "cvbuilder-28ced",
  storageBucket: "cvbuilder-28ced.appspot.com",
  messagingSenderId: "363825751049",
  appId: "1:363825751049:web:dff4ef2d14dbbc83a7c4d8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const appleProvider = new firebase.auth.OAuthProvider('apple.com');
