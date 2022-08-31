<template>
  <div class="home">
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3 @click="handleDelete(book)">{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div
          :class="{ icon: true, fav: book.isFav }"
          @click="handleUpdate(book)"
        >
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
    <CreateBookForm />
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import getUser from "../composables/getUser";
import CreateBookForm from "@/components/CreateBookForm";

import { firestore } from "../firebase/config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

import { useRouter } from "vue-router";
import { watchEffect } from "vue";

export default {
  name: "Home",
  components: { CreateBookForm },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    const { documents: books } = getCollection("books");

    const handleDelete = (book) => {
      const docRef = doc(firestore, "books", book.id); //fetching docRef using doc()

      deleteDoc(docRef);
    };

    const handleUpdate = (book) => {
      const docRef = doc(firestore, "books", book.id);

      updateDoc(docRef, {
        isFav: !book.isFav,
      });
    };

    // resolving the issue when user clicks on logout and is still on the home page
    watchEffect(() => {
      if (!user.value) {
        router.push("/login");
      }
    });

    return { books, handleDelete, handleUpdate };
  },
};
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
.icon.fav {
  color: #f83f5e;
}
</style>