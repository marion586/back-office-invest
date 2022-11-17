import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/connexion",
    name: "connexion",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/SignIn/SignIn.vue"),
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/SignUp/SignUp.vue"),
  },
  {
    path: "/homePath",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/Home/Home.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../Pages/Home/Home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
