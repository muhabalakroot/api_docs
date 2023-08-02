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
      <div class="ma-2 text-h4">Get Storage Order</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          This endpoint retrieves detailed information about a specific storage
          order identified by its order ID. The storage order represents a
          record of an activity related to product storage.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/safe-storage/orders/:id</code
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
              }}/safe-storage/orders/166</code
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
            <td>id of the order</td>
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
    "data": {
        "id": 166,
        "user_id": "1",
        "store_id": "1",
        "status_id": "4",
        "approved_user_id": "1",
        "rejected_user_id": null,
        "approved_warehouse_user_id": "1",
        "origin_id": null,
        "location_id": null,
        "fulfillment_id": null,
        "type_id": "2",
        "sub_type_id": "6",
        "section_id": null,
        "column_id": null,
        "shelf_id": null,
        "package_id": "422566",
        "total_qty": "2",
        "total_cost": "3700.00",
        "storage_cost": "0.00",
        "notes": null,
        "approved_at": "2023-05-25 13:40:43",
        "returned_at": null,
        "rejected_at": null,
        "approved_warehouse_at": "2023-05-25 13:40:52",
        "rejected_warehouse_at": null,
        "storage_shipping_order_id": "44",
        "return_id": null,
        "rejected_warehouse_user_id": null,
        "branch_region_id": null,
        "created_at": "2023-05-25T11:40:36.000000Z",
        "updated_at": "2023-05-25T11:40:52.000000Z",
        "products": [],
        "package": {
            "id": 422566,
            "sender": "1",
            "sender_user": "24",
            "package_type": "1",
            "package_sub_type": "0",
            "recipient_user": "0",
            "reciever": "test",
            "journey": "0",
            "no_load": "0",
            "loaded_at": null,
            "sub_journey": "0",
            "phone": "0928093410",
            "phone_b": "null",
            "city": "1",
            "sub_city": "76",
            "address": "test - بن عاشور",
            "map": null,
            "price": "345.00",
            "price_delivered": "0.000",
            "city_price": "15.00",
            "shippment": "15.00",
            "customer_price": "345",
            "total": "360.00",
            "extra_size_price": "0.00",
            "region_commission": "0.00",
            "recieved_money": "0.00",
            "recieved_money_onsett": "0.00",
            "payment_methode": "cash",
            "paid_by": "customer",
            "extra_size_by": "customer",
            "commission_by": "customer",
            "status": "store_new_storage",
            "payment_status": null,
            "package_payment_type_id": "1",
            "package_discount_type_id": null,
            "payment_status_id": null,
            "create_date": "2023-05-25",
            "instore_date": null,
            "delivery_date": null,
            "update_date": "2023-05-25",
            "qty": "4",
            "qty_return": "0",
            "description": "test",
            "notes": "tset",
            "del_cost": "0.00",
            "comp_cost": "0.00",
            "comp_cost_worth": null,
            "store_cost": "0.00",
            "sett_num": "0",
            "store_sett_at": null,
            "return_sett": null,
            "acc_notes": null,
            "delivery_notes": null,
            "sticker_notes": "test",
            "non_delivery_reason": "0",
            "non_delivery_text": null,
            "delegated_at": null,
            "return_num": "0",
            "return_delay": null,
            "onjourney_sett": "0",
            "store_availability": "0",
            "stock_location": "1",
            "pkg_orign": "1",
            "pkg_accptnc": "5",
            "reg_origin": "1",
            "issue": "0",
            "sub_issue": null,
            "leangh": "35",
            "width": "35",
            "height": "35",
            "collect_request_id": null,
            "photo": "",
            "user_info_id": "0",
            "store_reference_id": null,
            "store_pkg_details": null,
            "store_sub_sender": null,
            "courier_note": null,
            "freezed": null,
            "parent_package_id": null,
            "breakable": "0",
            "receipt_money": "0",
            "measuring_is_allowed": "0",
            "inspection_allowed": "0",
            "casing": "0",
            "discount_id": null,
            "box_id": null,
            "warehouse_stock_id": null,
            "storage_subscription": "1",
            "discount_customer_id": null,
            "storage_order_out_id": null,
            "storage_order_out_at": "2023",
            "urgent": "0",
            "urgent_at": null,
            "agreement_date": null,
            "postponed_date": null,
            "frozen": null,
            "handover_is": null,
            "updated_at": "2023-05-25T11:40:52.000000Z",
            "created_at": "2023-05-25T11:37:50.000000Z",
            "deleted_at": null,
            "heat_intolerance": "0",
            "storage_order_id": null,
            "assign_storage_order_at": null,
            "original_shipment": "15.000",
            "instore_date_storage": "2023-05-25 13:40:52",
            "receiver_confirmed": "0",
            "receiver_confirmed_at": null,
            "storage_store_transaction_id": null,
            "code": "H-1-TIP-845135",
            "origin_price": 345,
            "AddressCode": null,
            "city_obj": {
                "id": 1,
                "name": "طرابلس",
                "name_en": "Tripoli",
                "branch": "1",
                "code": "TIP",
                "region": "TIP",
                "price": "10.000",
                "cost": "7.000",
                "est_time": "يوم",
                "est_days_int": "18",
                "active": "1",
                "parent_city": "0",
                "note": "",
                "main_city": "1",
                "created_at": null,
                "updated_at": "2023-04-15T23:13:58.000000Z"
            },
            "origin": {
                "id": 1,
                "name": "حي الأندلس",
                "code": "H",
                "region": "1",
                "onstore_delivery_city": "42",
                "main_account": "0",
                "sub_account": "1",
                "expences": "2",
                "main_acc_branch": "3",
                "supervisor_acc_branch": "4",
                "del_TRY_acc": "5",
                "com_try_acc": "6",
                "settlment_acc": "7",
                "settlment_acc_pre": "8",
                "tlync_acc": "698",
                "bank_acc": "699",
                "office_delivery_array": "42, 200, 500",
                "map_short_link": null
            },
            "user_info": null
        },
        "store": {
            "id": 1,
            "name": "شركة منصة للحلول الذكية2",
            "cat": "1",
            "adress": "السياحية - بجوار سوق القبب",
            "phone": "0918101704",
            "phone_b": "0918101704",
            "email": "osama.abuzrara@menasa.ly",
            "website": "www.menasa.ly",
            "notes": "",
            "contact_person": "أسامة عبد الله ساسي",
            "contact_person2": "مؤيد العكاري",
            "cont_per_phone": "",
            "cont_per_email": "",
            "cont_per_title": "المدير العام",
            "balance": "199715.81",
            "Frozen_amounts": "13206.40",
            "approved": "1",
            "branch": "1",
            "collection_subscription": "0",
            "token": "a5cdd4aa0048b187f7182f1b9ce7a6a7",
            "email_verf": "1",
            "ip": null,
            "create_date": null,
            "last_login": null,
            "API_KEY": "40063e/bfece6/3e80d5/e0d0ce/aab04a",
            "email_subs": "1",
            "storage_subscription": "1",
            "parent_store_id": null,
            "restricted_new_pkg": null,
            "created_at": "2022-10-03T10:10:16.000000Z",
            "updated_at": "2023-06-05T09:10:45.000000Z",
            "storage_package_id": "13",
            "original_shipment": null,
            "backend_url": null,
            "totalPendingSettCost": 0,
            "StoragePackagesCount": 0
        },
        "status": {
            "id": 4,
            "name": "مكتمل",
            "created_at": null,
            "updated_at": null
        },
        "type": {
            "id": 2,
            "name": "إخراج",
            "super_type_id": null,
            "created_at": null,
            "updated_at": null
        },
        "logs": [
            {
                "id": 258,
                "order_id": "166",
                "package_id": null,
                "type_id": "2",
                "sub_type_id": "6",
                "user_id": "1",
                "details": "تم تحميل المنتجات :  (3556378939-لابتوب)  (21332132-باور بانك)  علي الشحنة بنجاح ",
                "created_at": "2023-05-24T22:00:00.000000Z",
                "updated_at": "2023-05-24T22:00:00.000000Z"
            },
            {
                "id": 259,
                "order_id": "166",
                "package_id": null,
                "type_id": "2",
                "sub_type_id": "6",
                "user_id": "1",
                "details": "تم قبول الطلب 166 بشكل مبدئي",
                "created_at": "2023-05-24T22:00:00.000000Z",
                "updated_at": "2023-05-24T22:00:00.000000Z"
            },
            {
                "id": 260,
                "order_id": "166",
                "package_id": null,
                "type_id": "2",
                "sub_type_id": "6",
                "user_id": "1",
                "details": "تمت عملية الإخراج من المخزن بنجاح",
                "created_at": "2023-05-24T22:00:00.000000Z",
                "updated_at": "2023-05-24T22:00:00.000000Z"
            }
        ]
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
