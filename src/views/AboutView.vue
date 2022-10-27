<template>
  <div class="about">
    <h1>
      This is an about page and test of getting store value from another page.
      Entered city name is {{ weatherValues.city }}
    </h1>
  </div>
</template>

<script lang="ts">
import { weatherStore } from "@/stores/weather";

export default {
  data() {
    return {
      weatherValues: weatherStore(),
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
