<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Authentication</div>

    <TheEnviromentSelecter></TheEnviromentSelecter>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >VANEX API uses Bearer token to authenticate your request, you can
      generate the bearer token via sending your email address and password to
      the system using the login API Element.
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Login</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>Used to get the token to be able to use the system</li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Request URL:</div>
      <ul class="ml-5">
        <li>
          <v-alert>
            <code
              >{{
                activeEnviroment || "(Chose an Enviroment)"
              }}/authenticate</code
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
              }}/authenticate?email=example@gmail.com&password=test1234</code
            >
          </v-alert>
        </li>
      </ul>

      <div class="text-subtitle-1 font-weight-black mt-3">Parameter:</div>
      <v-table density="compact">
        <thead style="background-color: lightblue">
          <tr>
            <th class="text-left">Parameter</th>
            <th class="text-left">Required</th>
            <th class="text-left">Type</th>
            <th class="text-left">Expanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>email</td>
            <td>yes</td>
            <td>String</td>
            <td>The user's email address.</td>
          </tr>
          <tr>
            <td>password</td>
            <td>yes</td>
            <td>String</td>
            <td>User password</td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-subtitle-1 font-weight-black mt-3">Return example:</div>
      <v-alert>
        <code>
          <pre>
{
    "status_code": 200,
    "message": "",
    "data": {
        "status_code": 200,
        "message": "تم تسجيل الدخول",
        "access_token": "148607|dUQKq4FemUderGM7ThzmKHQrxm5uYDo489jP9hHe",
        "token_type": "Bearer",
        "user": {
            "id": 10211,
            "name": "مستخدم تجريبي",
            "email": "user@vanex.ly",
            "type": 1,
            "full_access": 1,
            "branch_region": null,
            "storage_subscription": 1,
            "office_cities": [
                42,
                200,
                500,
                69,
                222,
                501,
                319,
                320,
                502
            ],
            "avatar": "https://app.vanex.ly/storage/users/pics/10211_WEIP6oFr7qTUgvEW.png"
        }
    },
    "errors": false,
    "code": null
}
          </pre>
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
            <td>String</td>
            <td>
              The main data section of the response, containing detailed
              information about the request.
            </td>
          </tr>
          <tr>
            <td>access_token</td>
            <td>String</td>
            <td>
              An access token associated with the user session, which can be
              used for further authenticated requests.
            </td>
          </tr>
          <tr>
            <td>token_type</td>
            <td>String</td>
            <td>The type of access token provided.</td>
          </tr>
          <tr>
            <td>user</td>
            <td>String</td>
            <td>Information about the logged-in user.</td>
          </tr>
          <tr>
            <td>user.id</td>
            <td>Number</td>
            <td>The user's ID.</td>
          </tr>
          <tr>
            <td>user.name</td>
            <td>String</td>
            <td>The name of the user.</td>
          </tr>
          <tr>
            <td>user.email</td>
            <td>String</td>
            <td>The user's email address.</td>
          </tr>
          <tr>
            <td>user.type</td>
            <td>Number</td>
            <td>The type or role of the user within the application.</td>
          </tr>
          <tr>
            <td>user.full_access</td>
            <td>Number</td>
            <td>
              A flag indicating whether the user has full access to the
              application or not.
            </td>
          </tr>
          <tr>
            <td>user.branch_region</td>
            <td>String</td>
            <td>Information about the user's branch or region.</td>
          </tr>
          <tr>
            <td>user.storage_subscription</td>
            <td>Number</td>
            <td>
              A flag indicating whether the user has a storage subscription or
              not.
            </td>
          </tr>
          <tr>
            <td>user.office_cities</td>
            <td>Array</td>
            <td>
              An array containing multiple city IDs associated with the user.
            </td>
          </tr>
          <tr>
            <td>user.avatar</td>
            <td>String</td>
            <td>The URL to the user's avatar image.</td>
          </tr>
          <tr>
            <td>errors</td>
            <td>Boolean</td>
            <td>
              A boolean indicating whether there were any errors during the
              request.
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              A specific error code associated with any potential errors in the
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
