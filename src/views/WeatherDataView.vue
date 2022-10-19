<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      uri: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/leszno/2022-10-18/2022-10-19?unitGroup=metric&include=days%2Ccurrent&key=4NCLQ7CWLBLG539SD2U4YZUB9&contentType=json",
      result: "",
      resultObj: JSON,
    };
  },
  methods: {
    onClick() {
      this.result = "qwertys";
      axios.get(this.uri).then((responce) => {
        this.result = responce.data;
        this.resultObj = JSON.parse(this.result);
      });
    },
  },
  setup() {
    const bleee = "tralalala";
    return {
      bleee,
    };
  },
};
</script>

<template>
  <div class="weatherData">
    <h2>Data from Visual Weather Forecast {{ bleee }}</h2>
    <p>i coś jeszcze testowego do obrobienia {{ result }}</p>
    <p>
      Miasto: {{ resultObj.resolvedAddress ? resultObj.resolvedAddress : "error" }}
    </p>
    <button v-on:click="onClick">Kliknij mnie</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .weatherData {
    min-height: 100vh;
    display: block;
    text-align: center;
    padding-top: 2rem;
  }
}
</style>
