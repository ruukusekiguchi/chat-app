<template>
  <div id="app">
    <div>
      <h1>チャットページ</h1>
      <p><router-link :to="{ name: 'top' }"> ログインページ </router-link></p>
      <input type="text" v-model="message" />
      <button @click="login">送信</button>
    </div>
    <!-- {{ list }} -->
    <!-- <table hover :items="items"></table> -->
    <p v-for="(data, index) in items" :key="index">
      <!-- ifの省略形 -->
      {{ data.username ? data.username : data.uid ? data.uid : "匿名さん"
      }}<br />
      {{ data.text }}
    </p>
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
      uid: "",
      userdata: {},
      items: {},
    };
  },
  created() {
    this.getuid();
    this.users();
    this.get();
  },
  methods: {
    get() {
      firebase
        .firestore()
        .collection("colection")
        .orderBy("timestamp", "desc")
        .get()
        .then((response) => {
          const list = {};

          response.forEach((doc) => {
            const docId = doc.id;
            list[docId] = doc.data();
          });
          console.log(list);
          this.items = list;
        });
    },
    getuid() {
      this.uid = firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : "";
    },
    users() {
      firebase
        .firestore()
        .collection("user")
        .doc(this.uid)
        .get()
        .then((response) => {
          console.log(response.data());
          this.userdata = response.data();
        });
    },

    login() {
      //db登録処理
      firebase
        .firestore()
        .collection("colection")
        .doc()
        .set({
          text: this.message,
          timestamp: firebase.firestore.Timestamp.now(),
          uid: firebase.auth().currentUser
            ? firebase.auth().currentUser.uid
            : "",
          username: this.userdata.name,
        })
        .then(() => {
          this.get();
        });
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
  /* display: flex;
  justify-content: center; */
}
</style>
