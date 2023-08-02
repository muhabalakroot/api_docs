<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Utilities</div>

    <TheEnviromentSelecter></TheEnviromentSelecter>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >The Utilities provides a set of useful utility endpoints and
      functionalities that can be utilized by various parts in your application.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Get All Cities</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>It allows users to get all of the Cities with there IDs.</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/city/names</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Method:</div>
      <ul class="ml-5">
        <li>GET</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request example:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/city/names</code
            >
          </v-alert>
        </li>
      </ul>

      <!-- <div class="text-subtitle-1 font-weight-black mt-3">Query Params:</div>
      <v-table density="compact">
        <thead style="background-color: lightblue">
          <tr>
            <th class="text-left">Query Params</th>
            <th class="text-left">Required</th>
            <th class="text-left">Type</th>
            <th class="text-left">Expanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>page</td>
            <td>no</td>
            <td>Number</td>
            <td>pagenation</td>
          </tr>
        </tbody>
      </v-table> -->

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre class="overflow-x-auto">
{
    "status_code": 200,
    "message": "قائمة أسماء المدن",
    "data": [
        {
            "id": 1,
            "name": "طرابلس",
            "name_en": "Tripoli",
            "code": "TIP",
            "price": 10,
            "branch": 1,
            "est_time": "يوم",
            "region": "TIP",
            "branch_region_details": {
                "id": 1,
                "name": "طرابلس"
            }
        },
        {
            "id": 2,
            "name": "بنغازي",
            "name_en": "Benghazi",
            "code": "BEN",
            "price": 30,
            "branch": 1,
            "est_time": "ثلاثة أيام",
            "region": "BEN",
            "branch_region_details": {
                "id": 1,
                "name": "طرابلس"
            }
        },
        {
            "id": 3,
            "name": "سبها",
            "name_en": "Sebha",
            "code": "SBH",
            "price": 30,
            "branch": 1,
            "est_time": "من ثلاثة إلى خمسة أيام",
            "region": "STH",
            "branch_region_details": {
                "id": 1,
                "name": "طرابلس"
            }
        },
    ],
    "errors": false
}
          </pre>
        </code>
      </v-alert>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Response body description:
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
            <td>The status code of the response.</td>
          </tr>
          <tr>
            <td>message</td>
            <td>String</td>
            <td>A message associated with the response.</td>
          </tr>
          <tr>
            <td>data</td>
            <td>Object</td>
            <td>Contains detailed information about the collect.</td>
          </tr>
          <tr>
            <td>id</td>
            <td>Number</td>
            <td>ID of the city</td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td>Name of the city in Arabic</td>
          </tr>
          <tr>
            <td>name_en</td>
            <td>String</td>
            <td>Name of the city in English</td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>Code of the city</td>
          </tr>
          <tr>
            <td>price</td>
            <td>Number</td>
            <td>Price of the city</td>
          </tr>
          <tr>
            <td>branch</td>
            <td>Number</td>
            <td>Branch code</td>
          </tr>
          <tr>
            <td>est_time</td>
            <td>String</td>
            <td>Estimated time for delivery</td>
          </tr>
          <tr>
            <td>region</td>
            <td>String</td>
            <td>Region code</td>
          </tr>
          <tr>
            <td>branch_region_details</td>
            <td>object</td>
            <td>Details of the branch region</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>Boolean</td>
            <td>Indicator for any errors.</td>
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
