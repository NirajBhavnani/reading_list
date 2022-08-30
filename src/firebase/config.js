// In firebase v9, we just import the functions which will be used in the project
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //importing firestore service in v9

const firebaseConfig = {
  apiKey: "AIzaSyAPHvdvRAdYNdtXVkNsLxAt9hNmiEwK0bo",
  authDomain: "reading-list-d6614.firebaseapp.com",
  projectId: "reading-list-d6614",
  storageBucket: "reading-list-d6614.appspot.com",
  messagingSenderId: "415974614817",
  appId: "1:415974614817:web:9fe3933d9527fd74ca4060",
};

//   init firebase
initializeApp(firebaseConfig);

// init services
const firestore = getFirestore();

export { firestore };
