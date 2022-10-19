/*
this is the firebase configuration file
Author: Rachel Knowles
version: 1.1.0
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "@firebase/firestore";
import * as firebase from "firebase/app";
import "firebase/firestore";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getFirestore,
  CollectionReference,
  DocumentData,
  setDoc,
  doc,
  Firestore,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  EmailAuthCredential,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { constants } from "crypto";
import {
  FIREBASE_APP_ID,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
} from "./constants";
import { userInfoI } from "./App";
// import { userDetails, setUserDetails } from "./App";
import { userIDGlobal } from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: "fit3161-2-stucom-ffb4a",
  storageBucket: "fit3161-2-stucom-ffb4a.appspot.com",
  messagingSenderId: "739812073286",
  appId: FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// referred to in project, const that represents the firestore database
const database = getFirestore(app);

// initialise authentication module
const auth = getAuth();

// check if a user is logged in
const user = auth.currentUser;

//adding user info to db
const addtoDatabase = (userData) => {
  // let newUser = auth.currentUser as User;
  // console.log("hope this works");

  setDoc(doc(database, "users", userData.uid), userData)
    .then((doc) => {
      // console.log("this is doc", doc);
      // console.log("Successful");
    })
    .catch((error) => {
      // console.log(`Unsuccessful returned error ${error}`);
    });
  // console.log("doc should be set");
};

// create a signUp function, so users can sign up to application and are authenticated
const signUp = async (firstname, lastname, email, password, university) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userData = {
      firstName: firstname,
      familyName: lastname,
      email: userCredential.user.email,
      university: university,
      password: password,
      uid: userCredential.user.uid,
    };
    addtoDatabase(userData);
    // .then(() => {
    //   console.log("AAAAAAHHH");
    //   addtoDatabase();
    // })
    // .catch(() => console.log("FUCKCCC"));

    // setUserDetails({ userId: userCredential.user.uid });
    // console.log("this is from firebaSE, this is", userDetails);
    // .then(() => {
    //   // let user = auth.currentUser as User;
    //   addtoDatabase();
    // });

    // await addDoc(collection(database, "users"), {
    //   uid: userCredential.user.uid,
    //   email: userCredential.user.email,
    //   password: password, // should probably get rid of this at a later stage
    //   firstname: firstname,
    //   lastname: lastname,
    //   universityAttending: university,
    // });
  } catch (e) {
    console.error(e);
    alert(e.message);
    return false;
  }
  return true;
};

// function that allows the user to log in to app using email and password, given they already have
// an account that is on firestore db
const logInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const user = userCredential.user;
    const user = {
      userId: userCredential.user.uid,
    };

    // console.log(user);
  } catch (error) {
    // console.log(error);
    alert(error.message);
    return false;
  }

  return true;
};

const getDataFromCollection = async () => {
  // gets all the users from firebase
  const userRefs = query(collection(database, "users"));

  // const [userDoc, setUserDocs] = useState([]);

  // gets all the user documents
  const getDocuments = (userRefs) => {
    getDocs(userRefs)
      .then((response) => {
        // console.log(response.docs);
        // get the individual document
        const userDocs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
          // ...doc.data()
        }));

        // console.log(userDocs);
        // console.log(auth.currentUser?.email);

        // setUserDocs(userDocs);
      })
      .catch((e) => console.log(e.message));
  };

  // console.log(getDocuments);

  let docId = "";
  // let data = "";
  const userQuery = query(userRefs);

  const querySnapshot = await getDocs(userQuery);

  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(user);
  //   if (user === doc.get('uid')) {
  //     docId = doc.id.toString();
  //     console.log(doc.get('uid'))
  //     console.log(doc.id, " => ", doc.data());
  //     data = doc.data();
  //     // }

  //   }
  // });
};

// declare the exports for this file
export {
  database,
  auth,
  user,
  signUp,
  logInWithEmailAndPassword,
  getDataFromCollection,
};
