/*
this is the firebase configuration file
Author: Rachel Knowles
version: 1.1.0
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "@firebase/firestore";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp2DRJvOb-ioPimmDmZxARx8gob_DGRKI",
  authDomain: "fit3161-2-stucom-ffb4a.firebaseapp.com",
  projectId: "fit3161-2-stucom-ffb4a",
  storageBucket: "fit3161-2-stucom-ffb4a.appspot.com",
  messagingSenderId: "739812073286",
  appId: "1:739812073286:web:17926b5fe9215d8c500f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// referred to in project, const that represents the firestore database
const database = getFirestore(app);

// initialise authentication module
const auth = getAuth(app);


// create a signUp function, so users can sign up to application and are authenticated
const signUp = async (firstname: string, lastname: string, email: string, password: string, university: string) => {
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      await addDoc(collection(database, "users"), {
          uid: user.uid,
          email: user.email,
          password: password, // should probably get rid of this at a later stage
          firstname: firstname,
          lastname: lastname,
          universityAttending: university
      });
  } catch (e:any) {
      console.error(e);
      alert(e.message)
  }
};

// function that allows the user to log in to app using email and password, given they already have
// an account that is on firestore db
const logInWithEmailAndPassword = async(email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;
  } catch (error:any) {
    console.log(error);
    alert(error.message);
  }
}


// logOut function 
const logOut = () => {
  signOut(auth);
};

// declare the exports for this file
export { database, auth, signUp, logInWithEmailAndPassword, logOut };
  
