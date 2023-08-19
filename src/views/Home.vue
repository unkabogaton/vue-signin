<template>
  <v-container>
    <div
      class="text-h3 font-weight-bold text-gray mt-15 text-center grey--text"
    >
      Welcome {{ this.$store.state.user.displayName }}
    </div>
    <v-card class="mx-auto mt-10 pa-5 mb-15" elevation="15" width="800">
      <v-card-title>Territories</v-card-title>
      <div class="text-center ma-7" v-if="!dataReady">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <v-card-text v-else>
        <v-treeview
          :items="hierarchicalTerritories"
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
      open: [],
      hierarchicalTerritories: [],
      dataReady: true,
    };
  },
  async created() {
    this.dataReady = false;
    await axios
      .get("api/Territories/All")
      .then((response) => {
        if (response.status === 200) {
          this.hierarchicalTerritories = this.buildHierarchy(
            response.data.data,
            null
          );
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
    buildHierarchy(territories, parentId = null) {
      const hierarchy = [];

      for (const territory of territories) {
        if (territory.parent === parentId) {
          const childTerritory = { ...territory };
          const children = this.buildHierarchy(territories, territory.id);

          if (children.length > 0) {
            childTerritory.children = children;
          }

          hierarchy.push(childTerritory);
        }
      }

      return hierarchy;
    },
  },
};
</script>
