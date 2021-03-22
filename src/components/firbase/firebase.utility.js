import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFlJ3P9RAVZAJvBejwUazsDHZBQP90zno",
  authDomain: "crwn-db-ff7fb.firebaseapp.com",
  projectId: "crwn-db-ff7fb",
  storageBucket: "crwn-db-ff7fb.appspot.com",
  messagingSenderId: "1081985591821",
  appId: "1:1081985591821:web:38e21104fe13e74de58344",
  measurementId: "G-9FPXFMM9S5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const providerMax = new firebase.auth.TwitterAuthProvider();
providerMax.setCustomParameters({ prompt: "select_account" });
export const signInWithTwitter = () => auth.signInWithPopup(providerMax);

export default firebase;
