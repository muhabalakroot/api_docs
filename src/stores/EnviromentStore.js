import { defineStore } from "pinia";

export const useEnviromentStore = defineStore("EnviromentStore", {
  state: () => {
    return {
      mainEnviroment: "https://app.vanex.ly/api/v1",
      testEnviroment: "https://app.testvanex.ly/api/v1",
      activeEnviroment: "",
    };
  },
  actions: {
    changeActive(newValue) {
      this.activeEnviroment = newValue;
    },
  },
});
