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
      <div class="ma-2 text-h4">Get All Storage Orders</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          The "Get All Storage Orders" endpoint allows you to retrieve a list of
          all storage orders that have been created in the system. Storage
          orders are records of orders placed for safe storage of items or
          products.
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
        <li>GET</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request example:</div>
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
    "message": "",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 181,
                "user_id": null,
                "store_id": "1",
                "status_id": "1",
                "approved_user_id": null,
                "rejected_user_id": null,
                "approved_warehouse_user_id": null,
                "origin_id": null,
                "location_id": null,
                "fulfillment_id": null,
                "type_id": "1",
                "sub_type_id": "3",
                "section_id": null,
                "column_id": null,
                "shelf_id": null,
                "package_id": null,
                "total_qty": "1",
                "total_cost": "44.00",
                "storage_cost": "0.00",
                "notes": null,
                "approved_at": null,
                "returned_at": null,
                "rejected_at": null,
                "approved_warehouse_at": null,
                "rejected_warehouse_at": null,
                "storage_shipping_order_id": null,
                "return_id": null,
                "rejected_warehouse_user_id": null,
                "branch_region_id": "1",
                "created_at": "2023-08-02T12:07:34.000000Z",
                "updated_at": "2023-08-02T12:07:34.000000Z",
                "status": {
                    "id": 1,
                    "name": "قيد الإجراء",
                    "created_at": null,
                    "updated_at": null
                },
                "type": {
                    "id": 1,
                    "name": "إدخال",
                    "super_type_id": null,
                    "created_at": null,
                    "updated_at": null
                }
            },
        ],
        "first_page_url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=1",
        "from": 1,
        "last_page": 9,
        "last_page_url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=9",
        "links": [
            {
                "url": null,
                "label": "&laquo; السابق",
                "active": false
            },
            {
                "url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=1",
                "label": "1",
                "active": true
            },
            
        ],
        "next_page_url": "https://api.vanextest.com.ly/api/v1/safe-storage/orders?page=2",
        "path": "https://api.vanextest.com.ly/api/v1/safe-storage/orders",
        "per_page": 10,
        "prev_page_url": null,
        "to": 10,
        "total": 81
    },
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
            <td>integer</td>
            <td>The unique identifier of the storage order.</td>
          </tr>
          <tr>
            <td>user_id</td>
            <td>integer</td>
            <td>
              The ID of the user associated with the storage order (nullable).
            </td>
          </tr>
          <tr>
            <td>store_id</td>
            <td>string</td>
            <td>The ID of the store where the storage order is placed.</td>
          </tr>
          <tr>
            <td>status_id</td>
            <td>string</td>
            <td>The ID of the status of the storage order.</td>
          </tr>
          <tr>
            <td>approved_user_id</td>
            <td>integer</td>
            <td>
              The ID of the user who approved the storage order (nullable).
            </td>
          </tr>
          <tr>
            <td>rejected_user_id</td>
            <td>integer</td>
            <td>
              The ID of the user who rejected the storage order (nullable).
            </td>
          </tr>
          <tr>
            <td>approved_warehouse_user_id</td>
            <td>integer</td>
            <td>
              The ID of the warehouse user who approved the storage order
              (nullable).
            </td>
          </tr>
          <tr>
            <td>origin_id</td>
            <td>integer</td>
            <td>The ID of the origin of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>location_id</td>
            <td>integer</td>
            <td>The ID of the location of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>fulfillment_id</td>
            <td>integer</td>
            <td>The ID of the fulfillment of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>type_id</td>
            <td>string</td>
            <td>The ID of the type of the storage order.</td>
          </tr>
          <tr>
            <td>sub_type_id</td>
            <td>string</td>
            <td>The ID of the sub-type of the storage order.</td>
          </tr>
          <tr>
            <td>section_id</td>
            <td>integer</td>
            <td>The ID of the section of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>column_id</td>
            <td>integer</td>
            <td>The ID of the column of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>shelf_id</td>
            <td>integer</td>
            <td>The ID of the shelf of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>package_id</td>
            <td>integer</td>
            <td>The ID of the package of the storage order (nullable).</td>
          </tr>
          <tr>
            <td>total_qty</td>
            <td>string</td>
            <td>The total quantity of products in the storage order.</td>
          </tr>
          <tr>
            <td>total_cost</td>
            <td>string</td>
            <td>The total cost of the storage order.</td>
          </tr>
          <tr>
            <td>storage_cost</td>
            <td>string</td>
            <td>The storage cost of the storage order.</td>
          </tr>
          <tr>
            <td>notes</td>
            <td>string</td>
            <td>
              Additional notes or comments related to the storage order
              (nullable).
            </td>
          </tr>
          <tr>
            <td>approved_at</td>
            <td>string</td>
            <td>
              The date and time when the storage order was approved (nullable).
            </td>
          </tr>
          <tr>
            <td>returned_at</td>
            <td>string</td>
            <td>
              The date and time when the storage order was returned (nullable).
            </td>
          </tr>
          <tr>
            <td>rejected_at</td>
            <td>string</td>
            <td>
              The date and time when the storage order was rejected (nullable).
            </td>
          </tr>
          <tr>
            <td>approved_warehouse_at</td>
            <td>string</td>
            <td>
              The date and time when the storage order was approved by the
              warehouse user (nullable).
            </td>
          </tr>
          <tr>
            <td>rejected_warehouse_at</td>
            <td>string</td>
            <td>
              The date and time when the storage order was rejected by the
              warehouse user (nullable).
            </td>
          </tr>
          <tr>
            <td>storage_shipping_order_id</td>
            <td>integer</td>
            <td>
              The ID of the shipping order associated with the storage order
              (nullable).
            </td>
          </tr>
          <tr>
            <td>return_id</td>
            <td>integer</td>
            <td>
              The ID of the return associated with the storage order (nullable).
            </td>
          </tr>
          <tr>
            <td>rejected_warehouse_user_id</td>
            <td>integer</td>
            <td>
              The ID of the warehouse user who rejected the storage order
              (nullable).
            </td>
          </tr>
          <tr>
            <td>branch_region_id</td>
            <td>string</td>
            <td>
              The ID of the branch region associated with the storage order.
            </td>
          </tr>
          <tr>
            <td>created_at</td>
            <td>string</td>
            <td>The date and time when the storage order was created.</td>
          </tr>
          <tr>
            <td>updated_at</td>
            <td>string</td>
            <td>The date and time when the storage order was last updated.</td>
          </tr>
          <tr>
            <td>status Name</td>
            <td>string</td>
            <td>The name of the status of the storage order.</td>
          </tr>
          <tr>
            <td>type Name</td>
            <td>string</td>
            <td>The name of the type of the storage order.</td>
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
