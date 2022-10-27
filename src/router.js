import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", // URL
      component: () => import("./login.vue"),
      name: "top",
    },
    {
      path: "/login",
      component: () => import("./login.vue"),
    },
    {
      path: "/chatPage",
      component: () => import("./chatPage.vue"),
      name: "chat",
    },
  ],
});
