<template>
<div id="app">
    <h2>ユーザ登録画面</h2>
    <div>
      <p>メールアドレス:</p>
      <input type="text" id="email" v-model="mail" />
      <p>パスワード:</p>
      <input type="text" id="pass" v-model="password" />
    </div>
    <button type="submit" @click="register">登録する</button>
</div>
</template>

<script lang="ts">

export default {
    name: "App",
  data() {
    return {
      mail: "",
      password: "",}
    }
}
</script>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
