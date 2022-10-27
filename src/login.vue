<template>
  <div id="app">
    <h2>ユーザ登録画面</h2>
    <button @click="logout">ログアウト</button>

    <div>
      <p>メールアドレス:</p>
      <input type="text" id="email" v-model="mail" />
      <p>パスワード:</p>
      <input type="text" id="pass" v-model="password" />
    </div>
    <button type="submit" @click="register">登録する</button>

    <h2>ログイン画面</h2>
    <div class="form-group">
      <p>メールアドレス:</p>
      <input type="text" v-model="loginEmail" />
      <p>パスワード:</p>
      <input type="text" v-model="loginPassword" />
    </div>
    <button @click="login">ログインする</button>
  </div>
</template>

<script>
import firebase from "./main";

export default {
  name: "App",
  data() {
    return {
      mail: "",
      password: "",
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    register() {
      console.log("出力1");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mail, this.password)
        .then(() => {
          alert("メールアドレス:" + this.mail + "パスワード:" + this.password);
          alert("登録完了");
          console.log("出力2");
        });
      console.log("出力4");
    },
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
}
</style>
