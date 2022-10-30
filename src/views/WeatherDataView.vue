<script lang="ts">
import axios from "axios";
import { weatherStore } from "@/stores/weather";

class WeatherObject {
  resolvedAddress?: string;
  latitude?: number;
  longitude?: number;
}

class CurrentConditions {
  temp?: number;
  windspeed?: number;
}

export default {
  data() {
    return {
      weatherData: weatherStore(),
      result: new WeatherObject(),
      current: new CurrentConditions(),
      errorMessage: "",
    };
  },
  computed: {
    uri(): string {
      var uriString =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        this.weatherData.city +
        "?unitGroup=metric&include=current&key=" +
        this.weatherData.apiKey +
        "&contentType=json";
      return uriString;
    },
  },
  methods: {
    async onClick() {
      await axios
        .get(this.uri)
        .then((response) => {
          console.log(response);
          this.result = response.data;
          this.current = response.data.currentConditions;
          this.errorMessage = "";
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = err;
          this.result = new WeatherObject();
        });
    },
  },
};
</script>

<template>
  <div class="weatherData">
    <p>
      <label of="key">Key: </label>
      <input
        type="password"
        id="key"
        v-model="weatherData.apiKey"
        placeholder="paste api key here"
      /><br />
      <label of="city">City: </label>
      <input
        type="text"
        id="city"
        v-model="weatherData.city"
        placeholder="place city here"
      />
    </p>
    <p>
      Resolved address:
      {{ result.resolvedAddress }}, latitude: {{ result.latitude }}, longitude:
      {{ result.longitude }}
    </p>
    <p>
      Current temperature is {{ current.temp }}, and wind speed is
      {{ current.windspeed }}
    </p>
    <button v-on:click="onClick">Get weather data</button>
    <p>Entered city in uppercase is {{ weatherData.upCity }}</p>
    <p>
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped lang="scss">
$inputBackground: rgb(162, 211, 146);
$buttonBackground: rgb(79, 195, 212);

@media (min-width: 1024px) {
  .weatherData {
    min-height: 100vh;
    display: block;
    text-align: center;
    padding-top: 2rem;
  }
}

p {
  font-size: medium;
  margin-top: 0.5rem;

  input {
    background-color: $inputBackground;
  }
}

button {
  background: $buttonBackground;
}
</style>
