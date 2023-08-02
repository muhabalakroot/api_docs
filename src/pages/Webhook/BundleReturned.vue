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
      <div class="ma-2 text-h4">Bundle Returned</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          this event gets dispatched when a number of packages get returned.
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre class="overflow-x-auto">
{
  "type":"bundle_returns",
  "ref_number" : null,
  
  //the accepted package
  "packages" : [
    {
      "code": "H-1-TIP-43432",
      "store_sub_sender" : 123,
      "store_reference_id" : 123
    }
  ],
  "time_stamp":"2023-01-24 09:00:00"
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
              “package_accepted”, “package_delivered”, “settlement”,
              “bundle_returns”.
            </td>
          </tr>
          <tr>
            <td>ref_number</td>
            <td>yes</td>
            <td>string, nullable</td>
            <td>integer if the type = settlement, else its null.</td>
          </tr>
          <tr>
            <td>packages</td>
            <td>yes</td>
            <td>array</td>
            <td>the package that this event is referencing</td>
          </tr>
          <tr>
            <td>code</td>
            <td>yes</td>
            <td>object</td>
            <td>the package code</td>
          </tr>
          <tr>
            <td>store_sub_sender</td>
            <td>yes</td>
            <td>integer</td>
            <td>the store user id</td>
          </tr>
          <tr>
            <td>store_reference_id</td>
            <td>yes</td>
            <td>integer</td>
            <td>order reference number from the client system</td>
          </tr>
          <tr>
            <td>time_stamp</td>
            <td>yes</td>
            <td>object</td>
            <td>time of the event</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>
