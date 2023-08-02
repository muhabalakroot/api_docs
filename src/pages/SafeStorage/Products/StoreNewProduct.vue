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
      <div class="ma-2 text-h4">Store New Product</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          The "Store New Product" endpoint allows you to add a new product to
          the system. Once added, this product can be used when creating orders
          for safe storage. Each product will be assigned a unique identifier
          that can be referenced in the "Orders" endpoint.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/products</code
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
              }}/safe-storage/products</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">as Form Data:</div>
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
            <td>storage_product_type_id</td>
            <td>integer</td>
            <td>The ID representing the type of storage product.</td>
          </tr>
          <tr>
            <td>storage_price_id</td>
            <td>integer</td>
            <td>The ID of the price associated with the storage product.</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>The name of the product.</td>
          </tr>
          <tr>
            <td>product_code</td>
            <td>string</td>
            <td>The code assigned to the product.</td>
          </tr>
          <tr>
            <td>color_id</td>
            <td>integer</td>
            <td>The ID representing the color of the product.</td>
          </tr>
          <tr>
            <td>unit_price</td>
            <td>float</td>
            <td>The unit price of the product.</td>
          </tr>
          <tr>
            <td>length</td>
            <td>float</td>
            <td>The length of the product (in cm).</td>
          </tr>
          <tr>
            <td>width</td>
            <td>float</td>
            <td>The width of the product (in cm).</td>
          </tr>
          <tr>
            <td>height</td>
            <td>float</td>
            <td>The height of the product (in cm).</td>
          </tr>
          <tr>
            <td>min_stock</td>
            <td>integer</td>
            <td>The minimum stock quantity required for the product.</td>
          </tr>
          <tr>
            <td>box_qty</td>
            <td>integer</td>
            <td>The quantity of the product in a box.</td>
          </tr>
          <tr>
            <td>importing_date</td>
            <td>date</td>
            <td>The date when the product was imported.</td>
          </tr>
          <tr>
            <td>expiry_date</td>
            <td>date</td>
            <td>The expiry date of the product.</td>
          </tr>
          <tr>
            <td>specs</td>
            <td>array</td>
            <td>An array of integers representing product specifications.</td>
          </tr>
          <tr>
            <td>unit</td>
            <td>string</td>
            <td>The unit of measurement for product dimensions (e.g., cm).</td>
          </tr>
          <tr>
            <td>company</td>
            <td>string</td>
            <td>The name of the company associated with the product.</td>
          </tr>
          <tr>
            <td>notes</td>
            <td>string</td>
            <td>Additional notes or remarks about the product.</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre class="overflow-x-auto">
{
    "status_code": 200,
    "message": "",
    "data": [
        "تم إنشاء الصنف بنجاج"
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
