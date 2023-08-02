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
      <div class="ma-2 text-h4">Delete Order</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          This endpoint is used to delete a specific Order from the system.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/orders</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Method:</div>
      <ul class="ml-5">
        <li>DELETE</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request example:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/orders/181</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">params:</div>
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
            <td>id</td>
            <td>yes</td>
            <td>Number</td>
            <td>Indicates the identification</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre class="overflow-x-auto">
{
    "status_code": 200,
    "message": "تم إلغاء طلب التخزين بنجاح",
    "data": [],
    "errors": false,
    "code": null
}
            </pre
          >
        </code>
      </v-alert>

      <!-- <div class="text-subtitle-1 font-weight-black mt-3">
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
            <td>data</td>
            <td>Object</td>
            <td>The main data payload of the response.</td>
          </tr>
          <tr>
            <td>order_id</td>
            <td>Number</td>
            <td>The unique identifier of the newly created storage order.</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>Boolean</td>
            <td>
              Indicates whether there were any errors during request processing.
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              The status code for the response (can be null in this case).
            </td>
          </tr>
        </tbody>
      </v-table> -->
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
