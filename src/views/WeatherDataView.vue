<script lang="ts">
import axios from "axios";

interface ResultT {
  resolvedAddress: string;
}

class Result {
  resolvedAddress!: string;
}

export default {
  data() {
    return {
      uri: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/leszno/2022-10-18/2022-10-19?unitGroup=metric&include=days%2Ccurrent&key=4NCLQ7CWLBLG539SD2U4YZUB9&contentType=json",
      //result: any,
      resultObj: null,
    };
  },
  methods: {
    async onClick() {
      //this.result = "qwertys";
      await axios.get(this.uri).then((responce) => {
        console.log(responce);
        this.result = responce.data;
        //this.resultObj = JSON.parse(this.result);
        //var lalala = JSON.parse(this.result);
      });
    },
  },
  setup() {
    const bleee = "tralalala";
    var result = null;
    return {
      bleee,
      result,
    };
  },
};
</script>

<template>
  <div class="weatherData">
    <h2>Data from Visual Weather Forecast {{ bleee }}</h2>
    <p>
      Miasto:
      {{ resultObj ? resultObj.resolvedAddress : "error" }}
    </p>
    <p>
      Miasto:
      {{ result ? result.resolvedAddress : "" }}
    </p>
    <button v-on:click="onClick">Kliknij mnie</button>
    <p>i coś jeszcze testowego do obrobienia {{ result }}</p>
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
