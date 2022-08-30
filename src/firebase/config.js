// In firebase v9, we just import the functions which will be used in the project
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //importing firestore service in v9

const firebaseConfig = {
  apiKey: "AIzaSyDzAaw_kPOcHg0_54MzqrDwW0FjdBQSkkY",
  authDomain: "vue-firebase-sites-36b5a.firebaseapp.com",
  projectId: "vue-firebase-sites-36b5a",
  storageBucket: "vue-firebase-sites-36b5a.appspot.com",
  messagingSenderId: "133477645271",
  appId: "1:133477645271:web:0ecedfcd7134afb167e992",
};

//   init firebase
initializeApp(firebaseConfig);

// init services
const firestore = getFirestore();

export { firestore };
