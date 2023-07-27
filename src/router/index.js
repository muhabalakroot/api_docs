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
    path: "/GetCollect",
    component: () => import("@/pages/GetCollect.vue"),
    name: "GetCollect",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllCollects",
    component: () => import("@/pages/GetAllCollects.vue"),
    name: "GetAllCollects",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/CreateCollect",
    component: () => import("@/pages/CreateCollect.vue"),
    name: "CreateCollect",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/PackageAccepted",
    component: () => import("@/pages/PackageAccepted.vue"),
    name: "PackageAccepted",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/PackageDelivered",
    component: () => import("@/pages/PackageDelivered.vue"),
    name: "PackageDelivered",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/Settlement",
    component: () => import("@/pages/Settlement.vue"),
    name: "Settlement",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/BundleReturned",
    component: () => import("@/pages/BundleReturned.vue"),
    name: "BundleReturned",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllCities",
    component: () => import("@/pages/GetAllCities.vue"),
    name: "GetAllCities",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllSubCities",
    component: () => import("@/pages/GetAllSubCities.vue"),
    name: "GetAllSubCities",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/DeliveryCalculation",
    component: () => import("@/pages/DeliveryCalculation.vue"),
    name: "DeliveryCalculation",
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
