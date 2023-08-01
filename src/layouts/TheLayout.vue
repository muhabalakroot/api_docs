<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar scroll-behavior="collapse" :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      </template>

      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="4" align="center"
          ><v-img
            src="./../assets/logo-primary.svg"
            max-width="200"
            class="px-2"
          ></v-img
        ></v-col>
        <v-col cols="4" align="center"> </v-col>
      </v-row>
    </v-app-bar>

    <v-main @click.stop="drawer = !drawer">
      <v-expand-x-transition>
        <v-container>
          <slot></slot>
        </v-container>
      </v-expand-x-transition>
    </v-main>
    <v-navigation-drawer temporary v-model="drawer" width="300" class="py-6">
      <v-list
        :lines="false"
        density="compact"
        nav
        v-model:selected="selected"
        @click="navigat"
      >
        <v-list-item value="Preface" color="primary">
          <template v-slot:prepend>
            <v-icon icon="mdi-note-text-outline"></v-icon>
          </template>

          <v-list-item-title>Preface</v-list-item-title>
        </v-list-item>

        <v-list-group value="Authentication">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-folder-outline"
              v-bind="props"
              title="Authentication"
            >
            </v-list-item>
          </template>

          <v-list-item
            color="primary"
            v-for="([title, icon], i) in auth"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Packages">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-folder-outline"
              v-bind="props"
              title="Packages"
            ></v-list-item>
          </template>

          <v-list-item
            color="primary"
            v-for="(title, i) in packages"
            :key="i"
            :title="title"
            :value="title"
            prepend-icon="mdi-note-text-outline"
          ></v-list-item>

          <v-divider class="ma-2"></v-divider>
          <div class="text-subtitle-2 pl-16">Get Packages By their Status</div>
          <v-divider class="ma-2"></v-divider>

          <v-list-item
            color="primary"
            v-for="(title, i) in getPackages"
            :key="i"
            :title="title"
            :value="title"
            prepend-icon="mdi-note-text-outline"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Collects">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-folder-outline"
              v-bind="props"
              title="Collects"
            ></v-list-item>
          </template>

          <v-list-item
            color="primary"
            v-for="(title, i) in collects"
            :key="i"
            :value="title"
            :title="title"
            prepend-icon="mdi-note-text-outline"
          ></v-list-item>
        </v-list-group>

        <!-- <v-list-group value="webHook">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-folder-outline"
              v-bind="props"
              title="webHook"
            ></v-list-item>
          </template>

          <v-list-item
            color="primary"
            v-for="(title, i) in webHooks"
            :key="i"
            :value="title"
            :title="title"
            prepend-icon="mdi-note-text-outline"
          ></v-list-item>
        </v-list-group> -->

        <v-list-group value="Utilities">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-folder-outline"
              v-bind="props"
              title="Utilities"
            ></v-list-item>
          </template>

          <v-list-item
            color="primary"
            v-for="(title, i) in utils"
            :key="i"
            :value="title"
            :title="title"
            prepend-icon="mdi-note-text-outline"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    selected: null,
    drawer: null,
    open: ["Users"],
    auth: [["Login", "mdi-note-text-outline"]],
    packages: ["Get Package", "Get All Package", "Create New Package"],
    getPackages: [
      "Get Packages On Track",
      "Get Delivered Packages",
      "Get Pending Packages",
      "Get Returned Packages",
    ],
    collects: ["Get Collect", "Get All Collects", "Create New Collect"],
    webHooks: [
      "Package Accepted",
      "Package Delivered",
      "Settlement",
      "Bundle Returned",
    ],
    utils: ["Get All Cities", "Get All SubCities", "Delivery Calculation"],
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigat() {
      if (this.selected == "Preface") this.$router.push({ name: "Preface" });

      // Authentication
      if (this.selected == "Login")
        this.$router.push({ name: "Authentication" });

      //Packages
      if (this.selected == "Get Package")
        this.$router.push({ name: "GetPackage" });

      if (this.selected == "Get All Package")
        this.$router.push({ name: "GetAllPackages" });

      if (this.selected == "Create New Package")
        this.$router.push({ name: "CreatePackage" });

      //Get Packages
      if (this.selected == "Get Packages On Track")
        this.$router.push({ name: "GetPackagesOnTrack" });

      if (this.selected == "Get Delivered Packages")
        this.$router.push({ name: "GetDeliveredPackages" });

      if (this.selected == "Get Pending Packages")
        this.$router.push({ name: "GetPendingPackages" });

      if (this.selected == "Get Returned Packages")
        this.$router.push({ name: "GetReturnedPackages" });

      //Collects
      if (this.selected == "Get Collect")
        this.$router.push({ name: "GetCollect" });

      if (this.selected == "Get All Collects")
        this.$router.push({ name: "GetAllCollects" });

      if (this.selected == "Create New Collect")
        this.$router.push({ name: "CreateCollect" });

      // Web Hook
      if (this.selected == "Package Accepted")
        this.$router.push({ name: "PackageAccepted" });

      if (this.selected == "Package Delivered")
        this.$router.push({ name: "PackageDelivered" });

      if (this.selected == "Settlement")
        this.$router.push({ name: "Settlement" });

      if (this.selected == "Bundle Returned")
        this.$router.push({ name: "BundleReturned" });

      // Utilities
      if (this.selected == "Get All Cities")
        this.$router.push({ name: "GetAllCities" });

      if (this.selected == "Get All SubCities")
        this.$router.push({ name: "GetAllSubCities" });

      if (this.selected == "Delivery Calculation")
        this.$router.push({ name: "DeliveryCalculation" });
    },
  },
};
</script>
