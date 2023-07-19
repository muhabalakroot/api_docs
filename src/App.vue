<template>
  <v-expand-x-transition>
    <component :is="this.$route.meta.layout">
      <router-view />
    </component>
  </v-expand-x-transition>
</template>

<script></script>
