<template>
  <div id="app">
    <div>
      <button @click="logout">ログアウト</button>
      <p>
        <router-link :to="{ name: 'register' }"> 新規 </router-link>
      </p>
      <p>
        <router-link :to="{ name: 'chat' }"> チャットページ </router-link>
      </p>
      <h2>ログイン画面</h2>
      <div class="form-group">
        <p>メールアドレス:</p>
        <input type="text" v-model="loginEmail" />
        <p>パスワード:</p>
        <input type="text" v-model="loginPassword" />
      </div>
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
      console.log("出力5");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then(() => {
          alert(
            "メールアドレス:" +
              this.loginEmail +
              "パスワード:" +
              this.loginPassword
          );
          this.$router.push({
            name: "chat",
          });
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
  display: flex;
  justify-content: center;
}
</style>
