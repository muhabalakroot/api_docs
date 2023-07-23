// Composables
import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "@/layouts/TheLayout.vue";

const routes = [
  {
    path: "/preface",
    component: () => import("@/pages/Preface.vue"),
    name: "Preface",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/authentication",
    component: () => import("@/pages/Authentication.vue"),
    name: "Authentication",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetPackage",
    component: () => import("@/pages/GetPackage.vue"),
    name: "GetPackage",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllPackages",
    component: () => import("@/pages/GetAllPackages.vue"),
    name: "GetAllPackages",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/CreatePackage",
    component: () => import("@/pages/CreatePackage.vue"),
    name: "CreatePackage",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/collects",
    component: () => import("@/pages/Collects.vue"),
    name: "Collects",
    meta: {
      layout: TheLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
