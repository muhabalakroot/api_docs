<template>
  <v-card class="ma-4 pa-6">
    <div class="mb-2 text-h3" align="center">Web Hook</div>

    <v-divider class="ma-2"></v-divider>

    <v-alert
      >Culpa enim dolor anim veniam commodo ea fugiat ad dolore anim. Ad do
      labore fugiat elit laborum ex eu minim. Nostrud exercitation dolor veniam
      minim voluptate eu. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Ab perspiciatis optio corporis iusto nihil ipsum ex numquam, enim
      quidem saepe at ullam harum mollitia sunt architecto totam cupiditate
      aperiam obcaecati?
    </v-alert>

    <div>
      <div class="ma-2 text-h4">Package Accepted</div>

      <v-divider class="ma-2"></v-divider>

      <div class="text-subtitle-1 font-weight-black mt-3">
        Brief description:
      </div>
      <ul class="ml-5">
        <li>
          this event gets dispatched when a package arrives at one of vanex
          shiping offices & gets registered
        </li>
      </ul>

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
