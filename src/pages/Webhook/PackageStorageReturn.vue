<template>
    <v-card class="ma-4 pa-6">
      <div class="mb-2 text-h3" align="center">Web Hook</div>
  
      <v-divider class="ma-2"></v-divider>
  
      <v-alert
        >Webhooks are automated messages sent from apps when something happens.
        They have a message—or payload—and are sent to a unique URL—essentially
        the app's phone number or address. Webhooks are almost always faster than
        polling, and require less work on your end.
      </v-alert>
  
      <div>
        <div class="ma-2 text-h4">Package Storage Return</div>
  
        <v-divider class="ma-2"></v-divider>
  
        <div class="text-subtitle-1 font-weight-black mt-3">
          Brief description:
        </div>
        <ul class="ml-5">
          <li>
            When the products of package returned to storage.
          </li>
        </ul>
  
        <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
        <v-alert>
          <code>
            <pre class="overflow-x-auto">
{
	"type": "package_storage_return",
	"store_reference_id": "119",
	"store_sub_sender": 1,
	"sku": 2143,
	"qty": "4"
}
              </pre
            >
          </code>
        </v-alert>
  
        <div class="text-subtitle-1 font-weight-black mt-3">Payload Schema:</div>
        <v-table density="compact">
          <thead style="background-color: lightblue">
            <tr>
              <th class="text-left">Parameter</th>
              <th class="text-left">Required</th>
              <th class="text-left">Type</th>
              <th class="text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>yes</td>
              <td>string</td>
              <td>
                “package_accepted”, “package_delivered”, “settlement”, “package_storage_return”,
                “bundle_returns”.
              </td>
            </tr>
            <tr>
                <td>store_reference_id</td>
                <td>yes</td>
                <td>integer</td>
                <td>order reference number from the client system</td>
            </tr>
            <tr>
              <td>store_sub_sender</td>
              <td>yes</td>
              <td>integer</td>
              <td>the store user id</td>
            </tr>
            <tr>
              <td>sku</td>
              <td>yes</td>
              <td>Number</td>
              <td>stock keeping units</td>
            </tr>
            <tr>
              <td>qty</td>
              <td>yes</td>
              <td>String</td>
              <td>Returned quantity</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </v-card>
  </template>
  