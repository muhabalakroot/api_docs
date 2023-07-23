<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Packages</div>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >The "Package" feature in the VANEX API serves as a core functionality for
      migrating items from the user's application to the system. It allows users
      to create packages and get the existing packages. These packages can then
      be processed and handled within the system.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Get All Packages</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>It allows users to get all the existing packages.</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code>https://app.vanex.ly/api/v1/customer/package</code>
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
            <code>https://app.vanex.ly/api/v1/customer/package?page=1</code>
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
            <td>page</td>
            <td>no</td>
            <td>Number</td>
            <td>pagenation</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre>
{
    "data": {
        "package-code": "1-BEN-1234567",
        "package_type": {
            "id": 1,
            "name": "شحن تجاري",
            "name_en": "ONSPEED",
            "active": 1,
            "parent": 0
        },
        "package_sub_type": {
            "id": 1,
            "name": "شحن تجاري",
            "name_en": "ONSPEED",
            "active": 1,
            "parent": 0
        },
        "reciever": "مستلم تجريبي",
        "phone": "0910000000",
        "phone_b": "0920000000",
        "address": "عنوان تجريبي - راس عبيدة",
        "price": 1158,
        "origin_price": 1200,
        "shippment": 42,
        "total": 1200,
        "extra_size_price": 0,
        "region_commission": 12,
        "payment_methode": "cash",
        "paid_by": "market",
        "extra_size_by": "market",
        "commission_by": "market",
        "paid_by_ar": "المتجر",
        "extra_size_by_ar": "المتجر",
        "commission_by_ar": "المتجر",
        "status": "قيد الإجراء",
        "status_object": {
            "id": 1,
            "status_value": "store_new",
            "status_name_admin": "قيد الإجراء",
            "status_name_cust": "قيد الإجراء",
            "type": "OPS",
            "status_log": "Package has been created",
            "notes": ""
        },
        "create_date": "2023-07-17",
        "address_code": null,
        "instore_date": null,
        "delivery_date": null,
        "update_date": "2023-07-17 16:00:59",
        "qty": 10,
        "qty_return": 0,
        "recieved_money": 0,
        "description": "تجربة وصف",
        "non_delivery_reason": 0,
        "non_delivery_text": null,
        "stock_location": null,
        "pkg_orign": 0,
        "sticker_notes": "ملاحظة البوليصة",
        "leangh": 36,
        "width": 35,
        "height": 35,
        "store_reference_id": null,
        "map": "https://maps.google.com/?q=xxx,xxx",
        "origin": null,
        "breakable": 1,
        "receipt_money": 0,
        "measuring_is_allowed": 1,
        "storage_subscription": 0,
        "inspection_allowed": 1,
        "heat_intolerance": 1,
        "store_sub_sender": null,
        "casing": 0,
        "photo": null,
        "sender": {
            "id": 1,
            "name": "شركة منصة للحلول الذكية"
        },
        "City": {
            "id": 2,
            "name": "بنغازي",
            "code": null,
            "name_en": null,
            "region": null,
            "price": 30,
            "est_time": null,
            "locations": [
                {
                    "id": 120,
                    "name": "وسط المدينة",
                    "code": null,
                    "name_en": null,
                    "region": null,
                    "price": 30,
                    "est_time": null
                },
                {
                    "id": 121,
                    "name": "الصابري",
                    "code": null,
                    "name_en": null,
                    "region": null,
                    "price": 30,
                    "est_time": null
                },
                
            ]
        },
        "sub_city": {
            "id": 122,
            "name": "راس عبيدة"
        },
        "products_package": [],
        "created_at": "2023-07-17T14:00:59.000000Z",
        "updated_at": "2023-07-17T14:00:59.000000Z"
    }
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
            <td>data</td>
            <td>Object</td>
            <td>
              Main data section containing detailed information about the
              package
            </td>
          </tr>
          <tr>
            <td>package-code</td>
            <td>String</td>
            <td>The unique code assigned to the package.</td>
          </tr>
          <tr>
            <td>package_type</td>
            <td>Object</td>
            <td>Information about the package type</td>
          </tr>
          <tr>
            <td>package_type.id</td>
            <td>Number</td>
            <td>The ID of the package type.</td>
          </tr>
          <tr>
            <td>package_type.name</td>
            <td>String</td>
            <td>The name of the package type in Arabic.</td>
          </tr>
          <tr>
            <td>package_type.name_en</td>
            <td>String</td>
            <td>The name of the package type in English.</td>
          </tr>
          <tr>
            <td>package_type.active</td>
            <td>Number</td>
            <td>A flag indicating if the package type is active.</td>
          </tr>
          <tr>
            <td>package_type.parent</td>
            <td>Number</td>
            <td>The ID of the parent package type.</td>
          </tr>
          <tr>
            <td>package_sub_type</td>
            <td>Object</td>
            <td>Information about the package sub-type</td>
          </tr>
          <tr>
            <td>package_sub_type.id</td>
            <td>Number</td>
            <td>The ID of the package sub-type.</td>
          </tr>
          <tr>
            <td>package_sub_type.name</td>
            <td>String</td>
            <td>The name of the package sub-type in Arabic.</td>
          </tr>
          <tr>
            <td>package_sub_type.name_en</td>
            <td>String</td>
            <td>The name of the package sub-type in English.</td>
          </tr>
          <tr>
            <td>package_sub_type.active</td>
            <td>Number</td>
            <td>A flag indicating if the package sub-type is active.</td>
          </tr>
          <tr>
            <td>package_sub_type.parent</td>
            <td>Number</td>
            <td>The ID of the parent package sub-type.</td>
          </tr>
          <tr>
            <td>reciever</td>
            <td>String</td>
            <td>The name of the recipient of the package.</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>String</td>
            <td>The phone number of the recipient.</td>
          </tr>
          <tr>
            <td>phone_b</td>
            <td>String</td>
            <td>An alternative phone number for the recipient.</td>
          </tr>
          <tr>
            <td>address</td>
            <td>String</td>
            <td>The address of the recipient.</td>
          </tr>
          <tr>
            <td>price</td>
            <td>Number</td>
            <td>The price of the package.</td>
          </tr>
          <tr>
            <td>origin_price</td>
            <td>Number</td>
            <td>The original price of the package before any adjustments.</td>
          </tr>
          <tr>
            <td>shippment</td>
            <td>Number</td>
            <td>The shipment ID associated with the package.</td>
          </tr>
          <tr>
            <td>total</td>
            <td>Number</td>
            <td>The total amount of the package.</td>
          </tr>
          <tr>
            <td>extra_size_price</td>
            <td>Number</td>
            <td>The price for any extra size of the package.</td>
          </tr>
          <tr>
            <td>region_commission</td>
            <td>Number</td>
            <td>The commission value for the region.</td>
          </tr>
          <tr>
            <td>payment_methode</td>
            <td>String</td>
            <td>The method of payment for the package.</td>
          </tr>
          <tr>
            <td>paid_by</td>
            <td>String</td>
            <td>The entity that paid for the package.</td>
          </tr>
          <tr>
            <td>extra_size_by</td>
            <td>String</td>
            <td>
              The entity responsible for handling extra size of the package.
            </td>
          </tr>
          <tr>
            <td>commission_by</td>
            <td>String</td>
            <td>
              The entity responsible for handling the commission for the
              package.
            </td>
          </tr>
          <tr>
            <td>paid_by_ar</td>
            <td>String</td>
            <td>The Arabic name of the entity that paid for the package.</td>
          </tr>
          <tr>
            <td>extra_size_by_ar</td>
            <td>String</td>
            <td>
              The Arabic name of the entity responsible for handling extra size.
            </td>
          </tr>
          <tr>
            <td>commission_by_ar</td>
            <td>String</td>
            <td>
              The Arabic name of the entity responsible for handling the
              commission.
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>String</td>
            <td>The current status of the package.</td>
          </tr>
          <tr>
            <td>status_object</td>
            <td>Object</td>
            <td>Information about the status object</td>
          </tr>
          <tr>
            <td>status_object.id</td>
            <td>Number</td>
            <td>The ID of the status object.</td>
          </tr>
          <tr>
            <td>status_object.status_value</td>
            <td>String</td>
            <td>The status value.</td>
          </tr>
          <tr>
            <td>status_object.status_name_admin</td>
            <td>String</td>
            <td>The status name in Arabic for administrative use.</td>
          </tr>
          <tr>
            <td>status_object.status_name_cust</td>
            <td>String</td>
            <td>The status name in Arabic for customer use.</td>
          </tr>
          <tr>
            <td>status_object.type</td>
            <td>String</td>
            <td>The type of the status.</td>
          </tr>
          <tr>
            <td>status_object.status_log</td>
            <td>String</td>
            <td>A log message related to the status.</td>
          </tr>
          <tr>
            <td>status_object.notes</td>
            <td>String</td>
            <td>Additional notes for the status.</td>
          </tr>
          <tr>
            <td>create_date</td>
            <td>String</td>
            <td>The date the package was created.</td>
          </tr>
          <tr>
            <td>address_code</td>
            <td>String</td>
            <td>The code associated with the address.</td>
          </tr>
          <tr>
            <td>instore_date</td>
            <td>String</td>
            <td>The date the package was received in-store.</td>
          </tr>
          <tr>
            <td>delivery_date</td>
            <td>String</td>
            <td>The date the package was delivered.</td>
          </tr>
          <tr>
            <td>update_date</td>
            <td>String</td>
            <td>The date and time of the last update to the package.</td>
          </tr>
          <tr>
            <td>qty</td>
            <td>Number</td>
            <td>The quantity of items in the package.</td>
          </tr>
          <tr>
            <td>qty_return</td>
            <td>Number</td>
            <td>The quantity of items returned.</td>
          </tr>
          <tr>
            <td>recieved_money</td>
            <td>Number</td>
            <td>The amount of money received for the package.</td>
          </tr>
          <tr>
            <td>description</td>
            <td>String</td>
            <td>A description of the package.</td>
          </tr>
          <tr>
            <td>non_delivery_reason</td>
            <td>Number</td>
            <td>The reason for non-delivery.</td>
          </tr>
          <tr>
            <td>non_delivery_text</td>
            <td>String</td>
            <td>Additional text related to the non-delivery reason.</td>
          </tr>
          <tr>
            <td>stock_location</td>
            <td>String</td>
            <td>The stock location of the package.</td>
          </tr>
          <tr>
            <td>pkg_orign</td>
            <td>Number</td>
            <td>The origin of the package.</td>
          </tr>
          <tr>
            <td>sticker_notes</td>
            <td>String</td>
            <td>Additional notes related to the package sticker.</td>
          </tr>
          <tr>
            <td>leangh</td>
            <td>Number</td>
            <td>The length of the package</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Number</td>
            <td>The width of the package.</td>
          </tr>
          <tr>
            <td>height</td>
            <td>Number</td>
            <td>The height of the package.</td>
          </tr>
          <tr>
            <td>store_reference_id</td>
            <td>String</td>
            <td>The reference ID of the store.</td>
          </tr>
          <tr>
            <td>map</td>
            <td>String</td>
            <td>The URL to the Google Maps location.</td>
          </tr>
          <tr>
            <td>origin</td>
            <td>String</td>
            <td>The origin of the package.</td>
          </tr>
          <tr>
            <td>breakable</td>
            <td>Number</td>
            <td>A flag indicating if the package is breakable.</td>
          </tr>
          <tr>
            <td>receipt_money</td>
            <td>Number</td>
            <td>A flag indicating if money was received for the package.</td>
          </tr>
          <tr>
            <td>measuring_is_allowed</td>
            <td>Number</td>
            <td>A flag indicating if measuring is allowed for the package.</td>
          </tr>
          <tr>
            <td>storage_subscription</td>
            <td>Number</td>
            <td>
              A flag indicating if the package has a storage subscription.
            </td>
          </tr>
          <tr>
            <td>inspection_allowed</td>
            <td>Number</td>
            <td>A flag indicating if inspection is allowed for the package.</td>
          </tr>

          <tr>
            <td>heat_intolerance</td>
            <td>Number</td>
            <td>A flag indicating if the package has heat intolerance.</td>
          </tr>
          <tr>
            <td>store_sub_sender</td>
            <td>Object</td>
            <td>Information about the sub-sender store.</td>
          </tr>
          <tr>
            <td>casing</td>
            <td>Number</td>
            <td>A flag indicating if the package requires casing.</td>
          </tr>
          <tr>
            <td>photo</td>
            <td>String</td>
            <td>The photo of the package.</td>
          </tr>
          <tr>
            <td>sender</td>
            <td>Object</td>
            <td>Information about the sender of the package</td>
          </tr>
          <tr>
            <td>sender.id</td>
            <td>Number</td>
            <td>The ID of the sender.</td>
          </tr>
          <tr>
            <td>sender.name</td>
            <td>String</td>
            <td>The name of the sender.</td>
          </tr>
          <tr>
            <td>City</td>
            <td>Object</td>
            <td>Information about the city</td>
          </tr>
          <tr>
            <td>City.id</td>
            <td>Number</td>
            <td>The ID of the city.</td>
          </tr>
          <tr>
            <td>City.name</td>
            <td>String</td>
            <td>The name of the city.</td>
          </tr>
          <tr>
            <td>City.code</td>
            <td>String</td>
            <td>The city code.</td>
          </tr>
          <tr>
            <td>City.name_en</td>
            <td>String</td>
            <td>The name of the city in English.</td>
          </tr>
          <tr>
            <td>City.region</td>
            <td>String</td>
            <td>The region associated with the city.</td>
          </tr>
          <tr>
            <td>City.price</td>
            <td>Number</td>
            <td>The price associated with the city.</td>
          </tr>
          <tr>
            <td>City.est_time</td>
            <td>String</td>
            <td>The estimated time for the city.</td>
          </tr>
          <tr>
            <td>City.locations</td>
            <td>Array</td>
            <td>An array of locations within the city.</td>
          </tr>
          <tr>
            <td>City.locations.id</td>
            <td>Number</td>
            <td>The ID of the location.</td>
          </tr>
          <tr>
            <td>City.locations.name</td>
            <td>String</td>
            <td>The name of the location.</td>
          </tr>
          <tr>
            <td>City.locations.code</td>
            <td>String</td>
            <td>The code associated with the location.</td>
          </tr>
          <tr>
            <td>City.locations.name_en</td>
            <td>String</td>
            <td>The name of the location in English.</td>
          </tr>
          <tr>
            <td>City.locations.region</td>
            <td>String</td>
            <td>The region associated with the location.</td>
          </tr>
          <tr>
            <td>City.locations.price</td>
            <td>Number</td>
            <td>The price associated with the location.</td>
          </tr>
          <tr>
            <td>City.locations.est_time</td>
            <td>String</td>
            <td>The estimated time for the location.</td>
          </tr>
          <tr>
            <td>sub_city</td>
            <td>Object</td>
            <td>Information about the sub-city</td>
          </tr>
          <tr>
            <td>sub_city.id</td>
            <td>Number</td>
            <td>The ID of the sub-city.</td>
          </tr>
          <tr>
            <td>sub_city.name</td>
            <td>String</td>
            <td>The name of the sub-city.</td>
          </tr>
          <tr>
            <td>products_package</td>
            <td>Array</td>
            <td>An empty array for products associated with the package.</td>
          </tr>
          <tr>
            <td>created_at</td>
            <td>String</td>
            <td>The date and time of package creation.</td>
          </tr>
          <tr>
            <td>updated_at</td>
            <td>String</td>
            <td>The date and time of package update.</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>
<style>
code {
  color: red;
}
</style>
