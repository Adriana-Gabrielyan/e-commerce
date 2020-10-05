import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB1GRQfaduWAGAIxXuSlQ4uHwQtyAE0JEA",
  authDomain: "e-commerce-18a10.firebaseapp.com",
  databaseURL: "https://e-commerce-18a10.firebaseio.com",
  projectId: "e-commerce-18a10",
  storageBucket: "e-commerce-18a10.appspot.com",
  messagingSenderId: "132788180535",
  appId: "1:132788180535:web:8b3f37fdbd92090f09d1b2",
  measurementId: "G-Z5H44V411X",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
