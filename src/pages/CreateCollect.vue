<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Collect</div>

    <TheEnviromentSelecter></TheEnviromentSelecter>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >The "Collect" feature in the VANEX API serves as a core functionality for
      migrating items from the user's application to the system. It allows users
      to create Collects and get the existing Collects. These Collects can then
      be processed and handled within the system.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Create Collect</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>It allows users to create new Collects.</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/customer/collects</code
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
              }}/customer/collects</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Body:</div>
      <v-table density="compact">
        <thead style="background-color: lightblue">
          <tr>
            <th class="text-left">Key</th>
            <th class="text-left">Required</th>
            <th class="text-left">Type</th>
            <th class="text-left">Expanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>address</td>
            <td>yes</td>
            <td>String</td>
            <td>The address of the customer who wants the collect service.</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>yes</td>
            <td>String</td>
            <td>The phone number of the customer.</td>
          </tr>
          <tr>
            <td>map</td>
            <td>yes</td>
            <td>String</td>
            <td>The location (map) of the customer.</td>
          </tr>
          <tr>
            <td>notes</td>
            <td>yes</td>
            <td>String</td>
            <td>Additional notes or comments related to the request.</td>
          </tr>
          <tr>
            <td>services</td>
            <td>yes</td>
            <td>Object</td>
            <td>An object containing information about various services.</td>
          </tr>
          <tr>
            <td>sett</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>A flag indicating if the sattelment is requested</td>
          </tr>
          <tr>
            <td>returns_request</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>
              A flag indicating if the service "returns_request" is requested.
            </td>
          </tr>
          <tr>
            <td>ready</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>A flag indicating that the packages are ready.</td>
          </tr>
          <tr>
            <td>num_pkg</td>
            <td>yes</td>
            <td>String</td>
            <td>The number of packages requested.</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre>
{
    "status_code": 201,
    "message": "تم إضافة طلب تجميع جديد.",
    "id": 34308,
    "errors": false
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
            <td>status_code</td>
            <td>Number</td>
            <td>
              The status code of the response, indicating the success or failure
              of the request.
            </td>
          </tr>
          <tr>
            <td>message</td>
            <td>String</td>
            <td>A general message related to the response.</td>
          </tr>
          <tr>
            <td>id</td>
            <td>String</td>
            <td>Id of th newly created collect</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>boolean</td>
            <td>
              A boolean indicating whether there were any errors during the
              request.
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>
<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useEnviromentStore } from "@/stores/EnviromentStore.js";

import TheEnviromentSelecter from "@/components/TheEnviromentSelecter.vue";
export default {
  components: {
    TheEnviromentSelecter,
  },
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
};
</script>
<style>
code {
  color: red;
}
</style>
