<template>
  <v-container>
    <v-card class="mx-auto mt-15" elevation="15" width="800">
      <v-card-title>Territories</v-card-title>
      <v-card-text>
        <v-treeview :items="items" :open="open" @update:active="updateActive">
          <template v-slot:prepend="{ open }">
            <v-icon>{{
              open ? "mdi-map-marker-multiple" : "mdi-map-marker"
            }}</v-icon>
          </template>
        </v-treeview>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
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
    };
  },
  methods: {
    updateActive(newOpen) {
      this.open = newOpen;
    },
  },
};
</script>
