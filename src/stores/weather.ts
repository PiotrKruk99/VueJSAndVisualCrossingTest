import { defineStore } from "pinia";

export const weatherStore = defineStore("weatherData", {
  state: () => {
    return {
      apiKey: "",
      city: "",
    };
  },
});
