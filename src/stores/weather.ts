import { defineStore } from "pinia";

export const weatherStore = defineStore("weatherData", {
  state: () => {
    return {
      apiKey: "",
      city: "",
    };
  },
  getters: {
    upCity: (state) => state.city.toUpperCase(),
  },
});
