<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Collect</div>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >The "Collect" feature in the VANEX API serves as a core functionality for
      migrating items from the user's application to the system. It allows users
      to create Collects and get the existing Collects. These Collects can then
      be processed and handled within the system.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Get All Collects</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>It allows users to get all of the existing collects.</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code>https://app.vanex.ly/api/v1/customer/collects</code>
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
            <code>https://app.vanex.ly/api/v1/customer/collects?page=1</code>
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
    "status_code": 200,
    "message": "طلبات تجميع الخاصة بالمستخدم.",
    "data": {
        "data": [
            {
                "id": 34165,
                "store": 1,
                "user_id": 24,
                "branch": 1,
                "address": "test",
                "phone": "0910000000",
                "phone_2": 940000000,
                "num_pkg": 1,
                "actual_num_pkg": 0,
                "pkg_num_rec": 0,
                "returns_request": 1,
                "sett": 1,
                "ready": 1,
                "packaging": 0,
                "map": "https://maps.google.com/?q=32.84684723121387,13.075452519721184",
                "notes": "test",
                "created": "2023-07-18 16:29:44",
                "setteled": null,
                "amount": "0.000",
                "status": "refused",
                "status_ar": "طلب مرفوض",
                "delegate": 0,
                "journey": 0,
                "non_delivery_reason": 0,
                "non_delivery_text": null
            },
        ],
        "links": {
            "first": "https://app.vanex.ly/api/v1/customer/collects?page=1",
            "last": "https://app.vanex.ly/api/v1/customer/collects?page=5",
            "prev": null,
            "next": "https://app.vanex.ly/api/v1/customer/collects?page=2"
        },
        "meta": {
            "current_page": 1,
            "from": 1,
            "last_page": 5,
            "links": [
                {
                    "url": null,
                    "label": "&laquo; السابق",
                    "active": false
                },
                {
                    "url": "https://app.vanex.ly/api/v1/customer/collects?page=1",
                    "label": "1",
                    "active": true
                },
                {
                    "url": "https://app.vanex.ly/api/v1/customer/collects?page=2",
                    "label": "2",
                    "active": false
                },
                {
                    "url": "https://app.vanex.ly/api/v1/customer/collects?page=2",
                    "label": "التالي &raquo;",
                    "active": false
                }
            ],
            "path": "https://app.vanex.ly/api/v1/customer/collects",
            "per_page": 10,
            "to": 10,
            "total": 41
        }
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
            <td>The unique identifier for the collect.</td>
          </tr>
          <tr>
            <td>store</td>
            <td>Number</td>
            <td>Identifier of the store.</td>
          </tr>
          <tr>
            <td>user_id</td>
            <td>Number</td>
            <td>Identifier of the user.</td>
          </tr>
          <tr>
            <td>branch</td>
            <td>Number</td>
            <td>Identifier of the branch.</td>
          </tr>
          <tr>
            <td>address</td>
            <td>String</td>
            <td>The address of the collect.</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>String</td>
            <td>The phone number associated with the collect.</td>
          </tr>
          <tr>
            <td>phone_2</td>
            <td>String</td>
            <td>An additional phone number.</td>
          </tr>
          <tr>
            <td>num_pkg</td>
            <td>Number</td>
            <td>The number of packages.</td>
          </tr>
          <tr>
            <td>actual_num_pkg</td>
            <td>Number</td>
            <td>The actual number of packages.</td>
          </tr>
          <tr>
            <td>pkg_num_rec</td>
            <td>Number</td>
            <td>The number of received packages.</td>
          </tr>
          <tr>
            <td>returns_request</td>
            <td>Number</td>
            <td>Indicator for return requests.</td>
          </tr>
          <tr>
            <td>sett</td>
            <td>Number</td>
            <td>Indicator for settlement status.</td>
          </tr>
          <tr>
            <td>ready</td>
            <td>Number</td>
            <td>Indicator for ready status.</td>
          </tr>
          <tr>
            <td>packaging</td>
            <td>Number</td>
            <td>Indicator for packaging status.</td>
          </tr>
          <tr>
            <td>map</td>
            <td>String</td>
            <td>The map details.</td>
          </tr>
          <tr>
            <td>notes</td>
            <td>String</td>
            <td>Additional notes.</td>
          </tr>
          <tr>
            <td>created</td>
            <td>String</td>
            <td>The creation date and time.</td>
          </tr>
          <tr>
            <td>setteled</td>
            <td>String</td>
            <td>The settlement date.</td>
          </tr>
          <tr>
            <td>amount</td>
            <td>String</td>
            <td>The amount associated with the collect.</td>
          </tr>
          <tr>
            <td>status</td>
            <td>String</td>
            <td>The status of the collect.</td>
          </tr>
          <tr>
            <td>status_ar</td>
            <td>String</td>
            <td>The status of the collect in Arabic.</td>
          </tr>
          <tr>
            <td>delegate</td>
            <td>Number</td>
            <td>Identifier of the delegate.</td>
          </tr>
          <tr>
            <td>delegate</td>
            <td>Number</td>
            <td>Identifier of the delegate.</td>
          </tr>
          <tr>
            <td>journey</td>
            <td>Number</td>
            <td>Identifier of the journey.</td>
          </tr>
          <tr>
            <td>non_delivery_reason</td>
            <td>Number</td>
            <td>Reason for non-delivery.</td>
          </tr>
          <tr>
            <td>non_delivery_text</td>
            <td>String</td>
            <td>Text for non-delivery reason.</td>
          </tr>
          <tr>
            <td>current_page</td>
            <td>Number</td>
            <td>The current page number.</td>
          </tr>
          <tr>
            <td>from</td>
            <td>Number</td>
            <td>The starting index of the items on the current page.</td>
          </tr>
          <tr>
            <td>last_page</td>
            <td>Number</td>
            <td>The last page number.</td>
          </tr>
          <tr>
            <td>links</td>
            <td>Array</td>
            <td>
              An array of links with their URLs, labels, and activity status.
            </td>
          </tr>
          <tr>
            <td>url</td>
            <td>String</td>
            <td>The URL of the link..</td>
          </tr>
          <tr>
            <td>label</td>
            <td>String</td>
            <td>The label of the link.</td>
          </tr>
          <tr>
            <td>active</td>
            <td>Boolean</td>
            <td>Indicator for the currently active link.</td>
          </tr>
          <tr>
            <td>path</td>
            <td>String</td>
            <td>The base path of the API endpoint.</td>
          </tr>
          <tr>
            <td>per_page</td>
            <td>Number</td>
            <td>The number of items per page.</td>
          </tr>
          <tr>
            <td>to</td>
            <td>Number</td>
            <td>The ending index of the items on the current page.</td>
          </tr>
          <tr>
            <td>total</td>
            <td>Number</td>
            <td>The total number of items across all pages.</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>Boolean</td>
            <td>Indicator for any errors.</td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>Error code.</td>
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
