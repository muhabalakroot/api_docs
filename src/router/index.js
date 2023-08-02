// Composables
import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "@/layouts/TheLayout.vue";

const routes = [
  {
    path: "/",
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
    component: () => import("@/pages/Packages/GetPackage.vue"),
    name: "GetPackage",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllPackages",
    component: () => import("@/pages/Packages/GetAllPackages.vue"),
    name: "GetAllPackages",
    meta: {
      layout: TheLayout,
    },
  },
  //Get Packages By Their Statuse
  {
    path: "/GetPackagesOnTrack",
    component: () => import("@/pages/Packages/GetPackagesOnTrack.vue"),
    name: "GetPackagesOnTrack",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetDeliveredPackages",
    component: () => import("@/pages/Packages/GetDeliveredPackages.vue"),
    name: "GetDeliveredPackages",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetPendingPackages",
    component: () => import("@/pages/Packages/GetPendingPackages.vue"),
    name: "GetPendingPackages",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/CreatePackage",
    component: () => import("@/pages/Packages/CreatePackage.vue"),
    name: "CreatePackage",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetReturnedPackages",
    component: () => import("@/pages/Packages/GetReturnedPackages.vue"),
    name: "GetReturnedPackages",
    meta: {
      layout: TheLayout,
    },
  },
  //collects
  {
    path: "/GetCollect",
    component: () => import("@/pages/Collects/GetCollect.vue"),
    name: "GetCollect",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllCollects",
    component: () => import("@/pages/Collects/GetAllCollects.vue"),
    name: "GetAllCollects",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/CreateCollect",
    component: () => import("@/pages/Collects/CreateCollect.vue"),
    name: "CreateCollect",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/PackageAccepted",
    component: () => import("@/pages/Webhook/PackageAccepted.vue"),
    name: "PackageAccepted",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/PackageDelivered",
    component: () => import("@/pages/Webhook/PackageDelivered.vue"),
    name: "PackageDelivered",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/Settlement",
    component: () => import("@/pages/Webhook/Settlement.vue"),
    name: "Settlement",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/BundleReturned",
    component: () => import("@/pages/Webhook/BundleReturned.vue"),
    name: "BundleReturned",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllCities",
    component: () => import("@/pages/Utilities/GetAllCities.vue"),
    name: "GetAllCities",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/GetAllSubCities",
    component: () => import("@/pages/Utilities/GetAllSubCities.vue"),
    name: "GetAllSubCities",
    meta: {
      layout: TheLayout,
    },
  },
  {
    path: "/DeliveryCalculation",
    component: () => import("@/pages/Utilities/DeliveryCalculation.vue"),
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
