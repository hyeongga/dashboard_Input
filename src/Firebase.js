import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdOEyIBvJZMYtOiw_xhUBRV8ZBuFQUHSg",
  authDomain: "cookiedog-69eb2.firebaseapp.com",
  projectId: "cookiedog-69eb2",
  storageBucket: "cookiedog-69eb2.appspot.com",
  messagingSenderId: "462528750519",
  appId: "1:462528750519:web:25cdfbde9bb18d0cf8fe32",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const fireStore = getFirestore(firebase);
const storage = getStorage(firebase);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { fireStore, storage, auth, provider, signInWithPopup, signOut };
