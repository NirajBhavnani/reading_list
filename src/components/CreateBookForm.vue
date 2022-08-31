<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Book</h3>

    <label for="title">Book title:</label>
    <input type="text" name="title" v-model="title" required />

    <label for="author">Book author:</label>
    <input type="text" name="author" v-model="author" required />

    <button>Add Book</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { firestore } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { user } = getUser();

    const title = ref("");
    const author = ref("");

    const handleSubmit = async () => {
      const colRef = collection(firestore, "books");
      await addDoc(colRef, {
        title: title.value,
        author: author.value,
        isFav: false,
        userUid: user.value.uid,
      });

      // reset the form
      title.value = "";
      author.value = "";
    };

    return { handleSubmit, title, author };
  },
};
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>