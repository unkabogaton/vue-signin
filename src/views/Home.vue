<template>
  <v-container>
    <div
      class="text-h3 font-weight-bold text-gray mt-15 text-center grey--text"
    >
      Welcome
    </div>
    <v-card class="mx-auto mt-10 pa-5" elevation="15" width="800">
      <v-card-title>Territories</v-card-title>
      <v-card-text>
        <v-treeview
          v-if="dataReady"
          :items="items"
          :open="open"
          @update:active="updateActive"
        >
          <template v-slot:prepend="{ open }">
            <v-icon :color="getIconColor(open)">{{
              open ? "mdi-map-marker-multiple" : "mdi-map-marker"
            }}</v-icon>
          </template>
        </v-treeview>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Applications :",
          children: [
            { id: 2, name: "Calendar : app" },
            { id: 3, name: "Chrome : app" },
            { id: 4, name: "Webstorm : app" },
          ],
        },
        {
          id: 5,
          name: "Documents :",
          children: [
            {
              id: 6,
              name: "vuetify :",
              children: [
                {
                  id: 7,
                  name: "src :",
                  children: [
                    { id: 8, name: "index : ts" },
                    { id: 9, name: "bootstrap : ts" },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: "material2 :",
              children: [
                {
                  id: 11,
                  name: "src :",
                  children: [
                    { id: 12, name: "v-btn : ts" },
                    { id: 13, name: "v-card : ts" },
                    { id: 14, name: "v-window : ts" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: "Downloads :",
          children: [
            { id: 16, name: "October : pdf" },
            { id: 17, name: "November : pdf" },
            { id: 18, name: "Tutorial : html" },
          ],
        },
        {
          id: 19,
          name: "Videos :",
          children: [
            {
              id: 20,
              name: "Tutorials :",
              children: [
                { id: 21, name: "Basic layouts : mp4" },
                { id: 22, name: "Advanced techniques : mp4" },
                { id: 23, name: "All about app : dir" },
              ],
            },
            { id: 24, name: "Intro : mov" },
            { id: 25, name: "Conference introduction : avi" },
          ],
        },
      ],
      open: [],
      territoriesRawData: [],
      dataReady: true,
    };
  },
  async created() {
    this.dataReady = false;
    await axios
      .get("https://netzwelt-devtest.azurewebsites.net//Territories/All")
      .then((response) => {
        if (response.status === 200) {
          this.territoriesRawData = response.data;
          console.error(this.territoriesRawData);
        } else {
          console.error("Fetch failed");
        }
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
    this.dataReady = true;
  },
  methods: {
    updateActive(newOpen) {
      this.open = newOpen;
    },
    getIconColor(isOpen) {
      return isOpen ? "#1565C0" : "#1A237E";
    },
  },
};
</script>
