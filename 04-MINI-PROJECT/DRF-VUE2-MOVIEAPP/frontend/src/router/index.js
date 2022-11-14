import Vue from "vue";
import VueRouter from "vue-router";
import PostListPage from "@/pages/PostListPage";
import PostViewPage from "@/pages/PostViewPage";
import SignupPage from "@/pages/SignupPage";
import SigninPage from "@/pages/SigninPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PostListPage",
    component: PostListPage,
  },
  {
    path: "/post/:postId",
    name: "PostViewPage",
    components: {
      default: PostViewPage,
    },
    props: {
      default: true,
    },
  },
  {
    path: "/signup",
    name: "SignupPage",
    component: SignupPage,
  },
  {
    path: "/signin",
    name: "SigninPage",
    component: SigninPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
