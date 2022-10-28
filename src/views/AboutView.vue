<template>
  <div class="about">
    <h2>
      Sample project for testing getting data from weather api by axios to
      typescript and for testing some concepts of VueJS and it's plugins.
    </h2>
    <h2>
      This is a test of getting stored value from another view. Entered city
      name is {{ weatherValues.city }}
    </h2>
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
    flex-direction: column;
    justify-content: center;
  }

  .about h2 {
    margin-top: 1rem;
  }
}
</style>
