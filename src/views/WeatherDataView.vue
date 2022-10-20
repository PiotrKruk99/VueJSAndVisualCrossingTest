<script lang="ts">
import axios from "axios";

class CurrentConditions {
  datetime?: string;
  datetimeEpoch?: number;
  temp?: number;
  feelslike?: number;
  humidity?: number;
  dew?: number;
  precip?: number;
  precipprob?: any;
  snow?: number;
  snowdepth?: number;
  preciptype?: any;
  windgust?: any;
  windspeed?: number;
  winddir?: number;
  pressure?: number;
  visibility?: number;
  cloudcover?: number;
  solarradiation?: number;
  solarenergy?: any;
  uvindex?: number;
  conditions?: string;
  icon?: string;
  stations?: string[];
  sunrise?: string;
  sunriseEpoch?: number;
  sunset?: string;
  sunsetEpoch?: number;
  moonphase?: number;
}

export default {
  data() {
    return {
      //uri: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/leszno/2022-10-18/2022-10-19?unitGroup=metric&include=days%2Ccurrent&key=4NCLQ7CWLBLG539SD2U4YZUB9&contentType=json",
      uri: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/leszno?unitGroup=metric&include=current&key=4NCLQ7CWLBLG539SD2U4YZUB9&contentType=json",
      result: null,
      current: new CurrentConditions(),
    };
  },
  methods: {
    async onClick() {
      await axios
        .get(this.uri)
        .then((response) => {
          console.log(response);
          this.result = response.data;
          this.current = response.data.currentConditions;
        })
        .catch((err) => {
          console.log(err);
          this.result = null;
        });
    },
  },
  setup() {
    //var current: CurrentConditions;
    return {
      //current,
    };
  },
};
</script>

<template>
  <div class="weatherData">
    <p>
      Miasto:
      {{ result?.[`resolvedAddress`] }}, szerokość geograficzna:
      {{ result?.[`latitude`] }}, długość geograficzna:
      {{ result?.[`longitude`] }}
    </p>
    <p>
      Aktualna temperatura to {{ current?.temp }}, and wind speed is
      {{ current?.windspeed }}
    </p>
    <button v-on:click="onClick">Get weather data</button>
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
