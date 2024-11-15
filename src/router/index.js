import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/homeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history", // Optional: history mode for cleaner URLs
  base: process.env.BASE_URL,
  routes,
});

export default router;
