import Vue from "vue";
import App from "@/App.vue";
import firebase from "firebase";
// import * as firebase from "firebase/app";
// import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB6CcyA169P5ZLaDJ0cw71h3H_XIZJeYhE",
  authDomain: "chat-app-950d0.firebaseapp.com",
  databaseURL: "https://chat-app-950d0-default-rtdb.firebaseio.com",
  projectId: "chat-app-950d0",
  storageBucket: "chat-app-950d0.appspot.com",
  messagingSenderId: "164752078871",
  appId: "1:164752078871:web:4d5c2c0c1f60bfd4b34452",
  measurementId: "G-3Z71Z7F3XT",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
