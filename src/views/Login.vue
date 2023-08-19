<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mt-15">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="15">
          <div class="text-center text-h3 font-weight-bold pt-6 grey--text">
            Login
          </div>
          <v-card-text class="pa-7">
            <v-form @submit.prevent="signIn">
              <v-text-field
                label="Username"
                v-model="username"
                filled
                required
                dense
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                filled
                required
                type="password"
                dense
              ></v-text-field>
              <v-btn type="submit" dark color="blue-grey" class="mt-3"
                >Sign In</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async signIn() {},
  },
};
</script>

<style></style>
