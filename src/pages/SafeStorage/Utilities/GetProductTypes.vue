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
      <div class="ma-2 text-h4">Get Product Types</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          The "Get Product Types" is an endpoint that allows you to retrieve a
          list of product types available in the system.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/product-types</code
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
              }}/safe-storage/product-types</code
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
            "description": "مواد منزلية",
            "notes": "",
            "active": "1"
        },
        {
            "id": 2,
            "description": "كهربية",
            "notes": "",
            "active": "1"
        },
        {
            "id": 11,
            "description": "ساعات",
            "notes": "",
            "active": "1"
        },
        {
            "id": 10,
            "description": "كاميرات مراقبه ",
            "notes": "",
            "active": "1"
        },
        {
            "id": 6,
            "description": "حقائب",
            "notes": "",
            "active": "1"
        },
        {
            "id": 7,
            "description": "ملابس",
            "notes": "",
            "active": "1"
        },
        {
            "id": 8,
            "description": "مواد تجميلية",
            "notes": "",
            "active": "1"
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
            <td>The unique identifier of the product type.</td>
          </tr>
          <tr>
            <td>description</td>
            <td>String</td>
            <td>The description of the product type.</td>
          </tr>
          <tr>
            <td>notes</td>
            <td>String</td>
            <td>Additional notes or comments related to the product type.</td>
          </tr>
          <tr>
            <td>active</td>
            <td>String</td>
            <td>Indicates whether the product type is active.</td>
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
