<template>
  <div id="app">
    <div>
      <h1>チャットページ</h1>
      <p><router-link :to="{ name: 'top' }"> ログインページ </router-link></p>
      <!-- <h2>ログイン画面</h2> -->
      <input type="text" v-model="message" />
      <button @click="login">ログインする</button>
    </div>

    <table hover :items="items"></table>
    <!-- <p>{{ this.items }}</p> -->
  </div>
</template>

<script>
import firebase from "./main";

export default {
  name: "App",
  data() {
    return {
      message: "",
      loginEmail: "",
      loginPassword: "",
      items: [],
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

          this.date = new Date();
          // this.date.getFullYear();
          // this.date.getMonth();
          // this.date.getDate();

          response.forEach((doc) => {
            const docId = doc.id;
            list[docId] = doc.data();
            this.items = [doc.data()];
          });
          // console.log(list[docId]);
          console.log(list);
        });

      // var message ={
      //   item:this.list[0]
      // };

      //db登録処理
      firebase
        .firestore()
        .collection("colection")
        .doc()
        .set({ text: this.message, timestamp: "" });
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
