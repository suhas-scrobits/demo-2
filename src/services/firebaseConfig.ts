import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLrwOVVqgaTBJYT0ftTYsEo026p1pj_lg",
  authDomain: "sisai-dev.firebaseapp.com",
  projectId: "sisai-dev",
  storageBucket: "sisai-dev.appspot.com",
  messagingSenderId: "1067168191409",
  appId: "1:1067168191409:web:888a3f44f20ce75abaa390",
  measurementId: "G-HWQKLJ0PNS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const database = firebase.database();
const auth = getAuth();

export { firebase, auth, database };
