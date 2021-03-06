import firebase from "firebase/app";
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDeAvLFUpk8dppZf6dPm2UUxZ9kJhzWpdY",
    authDomain: "login-d18b6.firebaseapp.com",
    projectId: "login-d18b6",
    storageBucket: "login-d18b6.appspot.com",
    messagingSenderId: "671601578219",
    appId: "1:671601578219:web:197f6f1a7cdac1395caeae",
    measurementId: "G-5BT1M21H6T"
  };
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;