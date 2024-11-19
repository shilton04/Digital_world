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
  mode: "hash", // Use hash mode for GitHub Pages compatibility
  base: process.env.BASE_URL,
  routes,
});

export default router;
