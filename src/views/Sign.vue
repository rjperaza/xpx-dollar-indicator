<template>
  <div>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12">INGRESAR.....</v-col>
          <v-btn outlined color="secondary" @click="logged">HAZ CLICK</v-btn>
        </v-row>
        <v-row>
          <v-col cols="12">GO TO HOME.....</v-col>
          <v-btn outlined color="secondary" @click="goToHome">HAZ CLICK</v-btn>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeLogged"]),
    logged() {
      this.changeLogged(true);
      this.goToHome();
    },
    goToHome() {
      this.$router.push('/home').catch(e => {})
    }
  },
};
</script>