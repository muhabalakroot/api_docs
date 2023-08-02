<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Safe Storage Features</div>

    <v-alert type="error"> Problem with the end Point </v-alert>
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
      <div class="ma-2 text-h4">Get Stored Product</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          This endpoint retrieves detailed information about a specific stored
          product identified by its product ID. The stored product represents a
          record of a product that is currently stored. want to retrieve.
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
        <li>GET</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request example:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/products?id=146</code
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
            <td>id</td>
            <td>yes</td>
            <td>Number</td>
            <td>id of the Product</td>
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
        {
            "id": 146,
            "name": "لابتوب",
            "marketing_store": "1",
            "product_code": "3556378939",
            "product_type": {
                "id": 2,
                "description": "كهربية"
            },
            "product_stor_class": "9",
            "color": "أسود",
            "color_id": null,
            "length": "50.00",
            "width": "50.00",
            "height": "40.00",
            "unit": "cm",
            "box_qty": "1",
            "expiry_date": "2022-06-28",
            "importing_date": "2018-01-01",
            "min_stock": "10",
            "company": "HP",
            "unit_price": "2500.00",
            "notes": null,
            "image": null,
            "created_at": "2022-06-27T22:31:04.000000Z",
            "updated_at": "2022-06-27T22:31:04.000000Z",
            "is_freeze": "0",
            "full_image": "https://api.vanextest.com.ly/assets/img/product-placeholder.jpg",
            "total_qty": "60",
            "specs": [
                "6",
                "3",
                "1"
            ],
            "storage_price_type": {
                "id": 9,
                "description": "عناية فائقة"
            },
            "colour": null
        },
        {
            "id": 147,
            "name": "باور بانك",
            "marketing_store": "1",
            "product_code": "21332132",
            "product_type": {
                "id": 2,
                "description": "كهربية"
            },
            "product_stor_class": "7",
            "color": "أحمر",
            "color_id": null,
            "length": "35.00",
            "width": "35.00",
            "height": "35.00",
            "unit": "cm",
            "box_qty": "1",
            "expiry_date": "2023-01-01",
            "importing_date": "2022-12-31",
            "min_stock": "25",
            "company": "ال جي العرب",
            "unit_price": "1200.00",
            "notes": null,
            "image": null,
            "created_at": "2022-06-27T22:41:23.000000Z",
            "updated_at": "2022-06-27T22:41:23.000000Z",
            "is_freeze": "0",
            "full_image": "https://api.vanextest.com.ly/assets/img/product-placeholder.jpg",
            "total_qty": "69",
            "specs": [
                "1",
                "2",
                "4",
                "5"
            ],
            "storage_price_type": {
                "id": 7,
                "description": "عناية عادية"
            },
            "colour": null
        },
        {
            "id": 161,
            "name": "test",
            "marketing_store": "1",
            "product_code": "test",
            "product_type": {
                "id": 1,
                "description": "مواد منزلية"
            },
            "product_stor_class": "7",
            "color": null,
            "color_id": "1",
            "length": "35.00",
            "width": "35.00",
            "height": "35.00",
            "unit": "cm",
            "box_qty": "1",
            "expiry_date": "2023-08-06",
            "importing_date": "2023-08-06",
            "min_stock": "3",
            "company": "test",
            "unit_price": "111.00",
            "notes": "test",
            "image": null,
            "created_at": "2023-08-02T12:31:48.000000Z",
            "updated_at": "2023-08-02T12:31:48.000000Z",
            "is_freeze": "0",
            "full_image": "https://api.vanextest.com.ly/assets/img/product-placeholder.jpg",
            "total_qty": 0,
            "specs": [
                "3",
                "2",
                "1",
                "4",
                "5",
                "6"
            ],
            "storage_price_type": {
                "id": 7,
                "description": "عناية عادية"
            },
            "colour": {
                "id": 1,
                "name": "أبيض"
            }
        }
    ],
    "errors": false,
    "code": null
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
            <td>id</td>
            <td>Number</td>
            <td>The unique identifier of the stored product.</td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td>
              The name of the stored product (e.g., "لابتوب" for a laptop).
            </td>
          </tr>
          <tr>
            <td>marketing_store</td>
            <td>String</td>
            <td>The ID of the marketing store associated with the product.</td>
          </tr>
          <tr>
            <td>product_code</td>
            <td>String</td>
            <td>
              The unique product code or SKU (Stock Keeping Unit) for
              identification.
            </td>
          </tr>
          <tr>
            <td>product_type</td>
            <td>Object</td>
            <td>
              The type of the product represented as an object with "id" and
              "description" fields.
            </td>
          </tr>
          <tr>
            <td>product_stor_class</td>
            <td>String</td>
            <td>
              The class/category of the stored product (e.g., "9" for a specific
              storage class).
            </td>
          </tr>
          <tr>
            <td>color</td>
            <td>String</td>
            <td>The color of the product.</td>
          </tr>
          <tr>
            <td>color_id</td>
            <td>Null or String</td>
            <td>The ID of the color, if available, otherwise null.</td>
          </tr>
          <tr>
            <td>length</td>
            <td>String</td>
            <td>The length of the product in centimeters (cm).</td>
          </tr>
          <tr>
            <td>width</td>
            <td>String</td>
            <td>The width of the product in centimeters (cm).</td>
          </tr>
          <tr>
            <td>height</td>
            <td>String</td>
            <td>The height of the product in centimeters (cm).</td>
          </tr>
          <tr>
            <td>unit</td>
            <td>String</td>
            <td>
              The unit of measurement for the dimensions (e.g., "cm" for
              centimeters).
            </td>
          </tr>
          <tr>
            <td>box_qty</td>
            <td>String</td>
            <td>The quantity of the product per box.</td>
          </tr>
          <tr>
            <td>expiry_date</td>
            <td>String</td>
            <td>The date when the product is set to expire.</td>
          </tr>
          <tr>
            <td>importing_date</td>
            <td>String</td>
            <td>The date when the product was imported or added to storage.</td>
          </tr>
          <tr>
            <td>min_stock</td>
            <td>String</td>
            <td>The minimum stock level required for this product.</td>
          </tr>
          <tr>
            <td>company</td>
            <td>String</td>
            <td>The company or manufacturer of the product.</td>
          </tr>
          <tr>
            <td>unit_price</td>
            <td>String</td>
            <td>The unit price of the product.</td>
          </tr>
          <tr>
            <td>notes</td>
            <td>Null or String</td>
            <td>
              Additional notes or comments about the product, if available.
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>Null or String</td>
            <td>The image URL of the product, if available, otherwise null.</td>
          </tr>
          <tr>
            <td>created_at</td>
            <td>String</td>
            <td>The timestamp when the product was created.</td>
          </tr>
          <tr>
            <td>updated_at</td>
            <td>String</td>
            <td>The timestamp when the product was last updated.</td>
          </tr>
          <tr>
            <td>is_freeze</td>
            <td>String</td>
            <td>
              A flag indicating whether the product is in freeze status (e.g.,
              "0" for not frozen).
            </td>
          </tr>
          <tr>
            <td>full_image</td>
            <td>Null or String</td>
            <td>
              The full image URL of the product, if available, otherwise null.
            </td>
          </tr>
          <tr>
            <td>total_qty</td>
            <td>String</td>
            <td>The total quantity of the product available in storage.</td>
          </tr>
          <tr>
            <td>specs</td>
            <td>Array</td>
            <td>
              An array of IDs representing the specifications of the product.
            </td>
          </tr>
          <tr>
            <td>storage_price_type</td>
            <td>Object</td>
            <td>
              The type of storage price associated with the product represented
              as an object with "id" and "description" fields.
            </td>
          </tr>
          <tr>
            <td>colour</td>
            <td>Null or String</td>
            <td>The color of the product, if available, otherwise null.</td>
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
