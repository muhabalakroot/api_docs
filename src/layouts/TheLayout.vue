<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar flat height="100"> </v-app-bar>
    <v-main @click.stop="drawer = !drawer">
      <v-expand-x-transition>
        <slot></slot>
      </v-expand-x-transition>
    </v-main>
    <v-navigation-drawer width="300" permanent class="px-2 py-6">
      <v-img
        src="./../assets/logo-primary.svg"
        max-width="300"
        class="px-2"
      ></v-img>
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
            ></v-list-item>
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
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    selected: null,
    open: ["Users"],
    auth: [["Login", "mdi-note-text-outline"]],
    packages: ["Get Package", "Get All Package", "Create New Package"],
    collects: ["Get Collect", "Get All Collects", "Create New Collect"],
  }),
  methods: {
    navigat() {
      if (this.selected == "Preface") this.$router.push({ name: "Preface" });

      if (this.selected == "Login")
        this.$router.push({ name: "Authentication" });

      if (this.selected == "Get Package")
        this.$router.push({ name: "GetPackage" });

      if (this.selected == "Get All Package")
        this.$router.push({ name: "GetAllPackages" });

      if (this.selected == "Create New Package")
        this.$router.push({ name: "CreatePackage" });

      if (
        this.selected == "Get Collect" ||
        this.selected == "Get All Collects" ||
        this.selected == "Create New Collect"
      )
        this.$router.push({ name: "Collects" });
    },
  },
};
</script>
