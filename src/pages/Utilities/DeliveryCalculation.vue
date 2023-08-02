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
      <div class="ma-2 text-h4">Delivery Calculation</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          This endpoint is used to calculate the delivery cost and estimated
          time for a specific city or region. It takes the origin and
          destination cities/regions along with package details as input and
          returns the calculated cost and estimated delivery time.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/delivery-calculation</code
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
              }}/delivery-calculation?destination=2&sub_city_id=125&sender_region=1&height=35&leangh=35&width=35&price=11&delivery_type=1</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Query Params:</div>
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
            <td>destination</td>
            <td>yes</td>
            <td>Number</td>
            <td>The ID of the destination region</td>
          </tr>
          <tr>
            <td>sub_city_id</td>
            <td>yes</td>
            <td>Number</td>
            <td>The ID of the sub-city</td>
          </tr>
          <tr>
            <td>sender_region</td>
            <td>yes</td>
            <td>Number</td>
            <td>The ID of the sender region</td>
          </tr>
          <tr>
            <td>height</td>
            <td>yes</td>
            <td>Number</td>
            <td>The height of the package</td>
          </tr>
          <tr>
            <td>leangh</td>
            <td>yes</td>
            <td>Number</td>
            <td>The length of the package</td>
          </tr>
          <tr>
            <td>width</td>
            <td>yes</td>
            <td>Number</td>
            <td>The width of the package</td>
          </tr>
          <tr>
            <td>price</td>
            <td>yes</td>
            <td>Number</td>
            <td>The price of the package</td>
          </tr>
          <tr>
            <td>delivery_type</td>
            <td>yes</td>
            <td>Number</td>
            <td>The type of delivery</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre class="overflow-x-auto">
{
    "status_code": 200,
    "message": "سعر شحن متاجر هوا 30 دينار ليبي.",
    "sender_region": "طرابلس",
    "destination": "شبنة",
    "delivery_type": "متاجر",
    "estimated_duration": "من ثلاثة إلى خمسة أيام",
    "destination_price": 30,
    "extra_size_price": 0,
    "est_days_int": 0,
    "commission_price": 0,
    "delivery_price": 30,
    "errors": false
}
            </pre
          >
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
            <td>HTTP status code for the response.</td>
          </tr>
          <tr>
            <td>message</td>
            <td>String</td>
            <td>A message indicating the pricing for the delivery service.</td>
          </tr>
          <tr>
            <td>sender_region</td>
            <td>String</td>
            <td>The name of the sender region.</td>
          </tr>
          <tr>
            <td>destination</td>
            <td>String</td>
            <td>The name of the destination region.</td>
          </tr>
          <tr>
            <td>delivery_type</td>
            <td>String</td>
            <td>The type of delivery service.</td>
          </tr>
          <tr>
            <td>estimated_duration</td>
            <td>String</td>
            <td>The estimated duration for delivery.</td>
          </tr>
          <tr>
            <td>destination_price</td>
            <td>Number</td>
            <td>The price for delivery to the destination.</td>
          </tr>
          <tr>
            <td>extra_size_price</td>
            <td>Number</td>
            <td>The additional price for extra-sized packages.</td>
          </tr>
          <tr>
            <td>est_days_int</td>
            <td>Number</td>
            <td>The estimated number of days for delivery as an integer.</td>
          </tr>
          <tr>
            <td>commission_price</td>
            <td>Number</td>
            <td>The commission price for the delivery.</td>
          </tr>
          <tr>
            <td>delivery_price</td>
            <td>Number</td>
            <td>The total delivery price.</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>Boolean</td>
            <td>Indicates if there are any errors in the response.</td>
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
