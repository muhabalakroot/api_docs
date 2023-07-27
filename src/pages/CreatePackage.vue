<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Packages</div>

    <TheEnviromentSelecter></TheEnviromentSelecter>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >The "Package" feature in the VANEX API serves as a core functionality for
      migrating items from the user's application to the system. It allows users
      to create packages and get the existing packages. These packages can then
      be processed and handled within the system.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Create Package</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>It allows users to create new packages.</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/customer/package</code
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
              }}/customer/package</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Body:</div>
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
            <td>type</td>
            <td>yes</td>
            <td>Number</td>
            <td>Always set the type to 1</td>
          </tr>
          <tr>
            <td>description</td>
            <td>yes</td>
            <td>String</td>
            <td>Descripe the package</td>
          </tr>
          <tr>
            <td>qty</td>
            <td>yes</td>
            <td>Number</td>
            <td>How many paces is the package</td>
          </tr>
          <tr>
            <td>leangh</td>
            <td>yes</td>
            <td>Number</td>
            <td>The Length of the package</td>
          </tr>
          <tr>
            <td>width</td>
            <td>yes</td>
            <td>Number</td>
            <td>The width of the package</td>
          </tr>
          <tr>
            <td>height</td>
            <td>yes</td>
            <td>Number</td>
            <td>The height of the package</td>
          </tr>
          <tr>
            <td>breakable</td>
            <td>yes</td>
            <td>Number</td>
            <td>Is the package breakable (true only if value = 1)</td>
          </tr>

          <tr>
            <td>measuring_is_allowed</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>
              A flag indicating whether measuring is allowed for the package
            </td>
          </tr>
          <tr>
            <td>inspection_allowed</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>
              A flag indicating whether inspection is allowed for the package
            </td>
          </tr>
          <tr>
            <td>heat_intolerance</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>A flag indicating whether the package has heat intolerance</td>
          </tr>
          <tr>
            <td>casing</td>
            <td>yes</td>
            <td>Boolean</td>
            <td>A flag indicating whether the package requires casing</td>
          </tr>
          <tr>
            <td>address</td>
            <td>yes</td>
            <td>String</td>
            <td>The address associated with the package</td>
          </tr>
          <tr>
            <td>reciever</td>
            <td>yes</td>
            <td>String</td>
            <td>The name of the package recipient</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>yes</td>
            <td>Number</td>
            <td>The phone number of the recipient</td>
          </tr>
          <tr>
            <td>phone_b</td>
            <td>yes</td>
            <td>Number</td>
            <td>An alternative phone number for the recipient</td>
          </tr>
          <tr>
            <td>city</td>
            <td>yes</td>
            <td>Number</td>
            <td>
              Id of city (You can get The city id from "Get All Cities" route)
            </td>
          </tr>
          <tr>
            <td>address_child</td>
            <td>yes</td>
            <td>Number</td>
            <td>The child address ID</td>
          </tr>
          <tr>
            <td>price</td>
            <td>yes</td>
            <td>Number</td>
            <td>The price of the package</td>
          </tr>
          <tr>
            <td>sticker_notes</td>
            <td>yes</td>
            <td>String</td>
            <td>Additional notes related to the package sticker</td>
          </tr>
          <tr>
            <td>paid_by</td>
            <td>yes</td>
            <td>String</td>
            <td>
              Indicates who paid for the package. can only be (market or
              customer)
            </td>
          </tr>
          <tr>
            <td>extra_size_by</td>
            <td>yes</td>
            <td>String</td>
            <td>
              Indicates who will handle the extra size of the package. can only
              be (market or customer)
            </td>
          </tr>
          <tr>
            <td>commission_by</td>
            <td>yes</td>
            <td>String</td>
            <td>
              Indicates who will handle the commission for the package. can only
              be (market or customer)
            </td>
          </tr>
          <tr>
            <td>extra_size_by</td>
            <td>yes</td>
            <td>String</td>
            <td>
              Indicates who will handle the extra size of the package. can only
              be (market or customer)
            </td>
          </tr>
          <tr>
            <td>payment_method</td>
            <td>yes</td>
            <td>String</td>
            <td>
              The method of payment for the package. can only be (“cash”,
              “cheque”)
            </td>
          </tr>
          <tr>
            <td>map</td>
            <td>yes</td>
            <td>String</td>
            <td>The URL to the Google Maps location</td>
          </tr>
          <tr>
            <td>package_sub_type</td>
            <td>yes</td>
            <td>Number</td>
            <td>Always set the package_sub_type to 6</td>
          </tr>
          <tr>
            <td>type_id</td>
            <td>yes</td>
            <td>Number</td>
            <td>Always set the type_id to 1</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre>
  {
      "status_code": 201,
      "message": "تم إضافة شحنة جديدة من قبل الزبون.",
      "package_code": "1-BEN-2426487",
      "errors": false
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
            <td>package_code</td>
            <td>String</td>
            <td>Id of th newly created package</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>boolean</td>
            <td>
              A boolean indicating whether there were any errors during the
              request.
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
