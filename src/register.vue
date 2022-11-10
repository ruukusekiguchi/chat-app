<template>
  <div id="app">
    <div>
      <h2>ユーザ登録画面</h2>
      <p>メールアドレス:</p>
      <input type="text" id="email" v-model="mail" />
      <p>パスワード:</p>
      <input type="text" id="pass" v-model="password" />
      <button type="submit" @click="register">登録する</button>
    </div>
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
    };
  },
  methods: {
    register() {
      console.log("出力1");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mail, this.password)
        .then(() => {
          alert(
            "メールアドレス:" +
              this.mail +
              "パスワード:" +
              this.password +
              "\n登録完了"
          );
          this.$router.push({ name: "top" });
          console.log("出力2");
        });
      console.log("出力4");
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
