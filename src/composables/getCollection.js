import { ref, watchEffect } from "vue";

// firebase imports
import { firestore } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const getCollection = (c, q) => {
  const documents = ref(null);

  // collection reference
  let colRef = collection(firestore, c);

  // Using query
  if (q) {
    colRef = query(colRef, where(...q));
  }

  // real-time listener in v9
  const unsubscribe = onSnapshot(colRef, (snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });

    // update values
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents };
};

export default getCollection;
