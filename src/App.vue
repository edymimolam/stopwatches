<template>
  <div id="app">
    <StopwatchItem
      v-for="stopwatch of stopwatches"
      :key="stopwatch.id"
      :stopwatch="stopwatch"
    />
    <NewStopwatch @click="createStopwatch" />
  </div>
</template>

<script>
  import NewStopwatch from "./components/NewStopwatch";
  import StopwatchItem from "./components/StopwatchItem";
  import Stopwatch from "./stopwatch";

  export default {
    name: "App",
    data: () => ({ stopwatches: [] }),
    methods: {
      createStopwatch: function() {
        this.stopwatches.push(new Stopwatch());
      },
    },
    components: {
      NewStopwatch,
      StopwatchItem,
    },
  };
</script>

<style lang="scss">
  #app {
    margin: $size-content-margin-top auto 0;
    max-width: $size-content-width-max-phone;
    display: grid;
    grid-gap: $size-content-grid-gap;
  }

  @media screen and (min-width: $size-tablet) {
    #app {
      max-width: $size-content-width-max-tablet;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: $size-desktop) {
    #app {
      max-width: $size-content-width-max-desktop;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
