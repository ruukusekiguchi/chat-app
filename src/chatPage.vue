<template>
  <div id="app">
    <div>
      <h1>チャットページ</h1>
      <p><router-link :to="{ name: 'top' }"> ログインページ </router-link></p>
      <h2>ログイン画面</h2>
      <button @click="login">ログインする</button>
    </div>
  </div>
</template>

<script>
import firebase from "./main";

export default {
  name: "App",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    login() {
      //db取得
      firebase
        .firestore()
        .collection("colection")
        .get()
        .then((response) => {
          const list = {};

          response.forEach((doc) => {
            const docId = doc.id;
            list[docId] = doc.data();
          });
          console.log(list);
        });

      //db登録処理
      firebase
        .firestore()
        .collection("colection")
        .doc()
        .set({ text: "bbbb", timestamp: "" });
    },
    logout() {
      firebase.auth().signOut();
      alert("ログアウト完了");
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
