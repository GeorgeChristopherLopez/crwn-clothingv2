// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJeeYzLJAcfH8mHQ84Row3vlQMAg0rV98",
  authDomain: "crwnclothingv2-db.firebaseapp.com",
  projectId: "crwnclothingv2-db",
  storageBucket: "crwnclothingv2-db.appspot.com",
  messagingSenderId: "953799650666",
  appId: "1:953799650666:web:d9e040c866e7b21c5ec913"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// config google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid );
 // console.log(userDocRef)
  const userSnapshot  = await getDoc(userDocRef)
  //console.log(userSnapshot)
 // console.log(userSnapshot.exists())

  // if user data doese not exhist
    // create / sest the doc with the data from userauth in my collection
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createddAt = new Date();

    try {
  
      await setDoc(userDocRef, {
        displayName,
        email,
        createddAt,
        ...additionalInfo
      })
  
    } catch (error){
  
      console.log("error creating the user", error.message)
  
    }
  }
  // if user data exhist
    // return user do ref
    return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
 if(!email || !password) return;

 return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
 
  return await signInWithEmailAndPassword(auth, email, password)
 }
 

 export const signOutUser = async () => await signOut(auth)
 
 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)