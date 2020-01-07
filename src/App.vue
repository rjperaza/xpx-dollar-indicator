<template>
  <v-app>
    <!-- Toolbar -->
    <v-app-bar app flat dense>
      <img
        class="mr-3"
        :src="require('@/assets/logo-white.png')"
        alt="logo"
        height="35"
      />
    </v-app-bar>

    <v-content>
      <v-container>
        <div class="text-center mt-5">
          <span class="display-1 font-weight-medium">XPX DOLLAR INDICATOR</span>
        </div>
        <router-view></router-view>
        <v-dialog v-model="loading.state" hide-overlay persistent width="300">
          <v-card :color="loading.colour" dark>
            <v-card-text class="pt-4">
              {{loading.title}}
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['loading'])
  }
}
</script>
