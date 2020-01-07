<template>
  <div>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-date-picker
                :min="configDatePicker.min"
                :max="configDatePicker.max"
                :locale="configDatePicker.lang"
                :header-color="configDatePicker.color"
                full-width
                v-model="configDatePicker.date"
                @change="getInfoXpx(configDatePicker.date)"
              ></v-date-picker>
            </v-card>

            <v-card class="pa-2 text-center" color="secondary" dark>
              <span>{{configDatePicker.date}}</span>
              <br />
              <span>1 XPX = USD {{xpxUsd | formatUSD}}</span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      configDatePicker: {
        date: new Date().toISOString().substr(0, 10),
        max: new Date().toISOString().substr(0, 10),
        min: "2018-06-02",
        lang: "es-co",
        color: "secondary"
      },
      xpxUsd: ""
    };
  },
  methods: {
    ...mapMutations(["showLoading", "hideLoading"]),
    async getInfoXpx(date) {
      this.showLoading({ title: "Searching Information", colour: "secondary" });
      try {
        const arrayDate = date.split("-");
        const ddmmyy = `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`;
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/proximax/history?date=${ddmmyy}`
        );

        this.xpxUsd = response.data["market_data"][
          "current_price"
        ].usd.toString();
      } catch (error) {
      } finally {
        this.hideLoading();
      }
    }
  },
  created() {
    this.getInfoXpx(this.configDatePicker.date);
  }
};
</script>