<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Safe Storage Features</div>

    <TheEnviromentSelecter></TheEnviromentSelecter>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >The Safe Storage feature is a service offered by VANEX API that allows
      you to securely store your valuable packages for a specified period. It
      provides a convenient and reliable solution for businesses that need a
      secure storage facility for their items without the hassle of maintaining
      a storage space themselves.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Get Product Special Care Cases</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          The "Get Product Special Care Cases" endpoint is designed to provide
          information about special care cases related to product storage.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/storage-specs</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Method:</div>
      <ul class="ml-5">
        <li>POST</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request example:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/storage-specs</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre class="overflow-x-auto">
{
    "status_code": 200,
    "message": "",
    "data": [
        {
            "id": 1,
            "description": "قابل للكسر",
            "description_en": null,
            "icon": null
        },
        {
            "id": 2,
            "description": "قابل للتلف",
            "description_en": null,
            "icon": null
        },
        {
            "id": 3,
            "description": "قابل للخدش",
            "description_en": null,
            "icon": null
        },
        {
            "id": 4,
            "description": "قابل للطي",
            "description_en": null,
            "icon": null
        },
        {
            "id": 5,
            "description": "قابل للسكب",
            "description_en": null,
            "icon": null
        },
        {
            "id": 6,
            "description": "قابل للانفجار",
            "description_en": null,
            "icon": null
        }
    ],
    "errors": false,
    "code": null
}
            </pre
          >
        </code>
      </v-alert>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Return parameter description:
      </div>
      <v-table density="compact">
        <thead style="background-color: lightblue">
          <tr>
            <th class="text-left">Parameter</th>
            <th class="text-left">Type</th>
            <th class="text-left">Expanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>Number</td>
            <td>The unique identifier of the color.</td>
          </tr>
          <tr>
            <td>description</td>
            <td>String</td>
            <td>Description in Arabic.</td>
          </tr>
          <tr>
            <td>description_en</td>
            <td>String</td>
            <td>Description in English</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>String</td>
            <td>Icon of the case</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>
<script>
import { mapState } from "pinia";
import { useEnviromentStore } from "@/stores/EnviromentStore.js";

import TheEnviromentSelecter from "@/components/TheEnviromentSelecter.vue";
export default {
  components: {
    TheEnviromentSelecter,
  },
  computed: {
    ...mapState(useEnviromentStore, ["activeEnviroment"]),
  },
};
</script>
<style>
code {
  color: red;
}
</style>
