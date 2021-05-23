import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAL2x0DnxnYnL2mel_Y9w1U6dLgG4AR8CA",
    authDomain: "crwn-clothing-1e9a8.firebaseapp.com",
    projectId: "crwn-clothing-1e9a8",
    storageBucket: "crwn-clothing-1e9a8.appspot.com",
    messagingSenderId: "432506596105",
    appId: "1:432506596105:web:8a62a46adb53ef8f0d01d8"
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
export const AddCollectionAndDocuments =async (collectionId, CollectionArray) => {
  const CollectionRef = firestore.collection(collectionId);
  const batch = firestore.batch();
  CollectionArray.forEach((obj) => {
    const objDoc = CollectionRef.doc();
    batch.set(objDoc, obj);
  });
  return await batch.commit();
};

export const ConvertCollectionsSnapshotsToMap=collection=>{
  const NewArrayFromSnapShot=
  collection.docs.map(
    doc=>{
      const {items,title}=doc.data();
      return{
        items,
        title,
        id:doc.id,
        routeName:encodeURI(title.toLowerCase())
      }
    }
  )
  return NewArrayFromSnapShot.reduce((accumulator,collection)=>{

    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{})
}

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
