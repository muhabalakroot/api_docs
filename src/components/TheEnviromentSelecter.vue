<template>
  <v-row no-gutters>
    <v-col cols="4" xs="0"> </v-col>
    <v-col cols="4" xs="0"> </v-col>
    <v-col cols="4" xs="12">
      <v-select
        label="Chose an Enviroment"
        density="compact"
        width="100px"
        :items="[
          { title: 'Main Enviroment', value: mainEnviroment },
          { title: 'Test Enviroment', value: testEnviroment },
        ]"
        variant="outlined"
        v-model="value"
      ></v-select>
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useEnviromentStore } from "@/stores/EnviromentStore.js";
export default {
  data() {
    return {
      value: "",
    };
  },
  computed: {
    ...mapState(useEnviromentStore, [
      "mainEnviroment",
      "testEnviroment",
      "activeEnviroment",
    ]),
  },
  methods: {
    ...mapActions(useEnviromentStore, ["changeActive"]),
  },
  watch: {
    value() {
      this.changeActive(this.value);
    },
  },
  mounted() {
    this.value = this.activeEnviroment;
  },
};
</script>
