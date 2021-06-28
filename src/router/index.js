import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Home"),
    meta: { keepAlive: true }
  },
  {
    path: "/sort",
    name: "sort",
    component: () => import("@/views/sort/Sort")
  },
  {
    path: "/shopping",
    name: "shopping",
    component: () => import("@/views/shopping/Shopping")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("@/views/personal/Personal")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("@/views/detail/Detail")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
