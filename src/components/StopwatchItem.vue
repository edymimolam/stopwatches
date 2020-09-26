<template>
  <div :class="['container', { active: stopwatch.isRunning }]">
    <div class="time">
      <span>{{ stopwatch.time.seconds | prependZero }}</span>
      <span v-if="stopwatch.time.minutes !== null">{{
        stopwatch.time.minutes | prependZero
      }}</span>
      <span v-if="stopwatch.time.hours !== null">{{
        stopwatch.time.hours | prependZero
      }}</span>
    </div>
    <div class="controls">
      <BaseButton
        v-if="stopwatch.isRunning"
        variant="pause"
        title="pause stopwatch"
        @click="stopwatch.pause"
        :accent="stopwatch.isRunning"
      />
      <BaseButton
        v-else
        variant="play"
        title="start stopwatch"
        @click="stopwatch.run"
        :accent="stopwatch.isRunning"
      />
      <BaseButton
        variant="stop"
        title="stop stopwatch"
        @click="stopwatch.stop"
        :accent="stopwatch.isRunning"
      />
    </div>
  </div>
</template>

<script>
  import BaseButton from "./BaseButton";
  export default {
    filters: {
      prependZero: function(num) {
        return ("0" + String(num)).slice(-2);
      },
    },
    props: {
      stopwatch: {
        type: Object,
        default: () => ({}),
      },
    },
    components: { BaseButton },
  };
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: $size-stopwatch-item-width;
    height: $size-stopwatch-item-height;
    background-color: $color-bg-light;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      top: 50%;
      background-color: $color-primary;
    }
  }
  .active {
    color: $color-accent;
    &::after {
      background-color: $color-accent;
    }
  }

  .time,
  .controls {
    height: 50%;
    display: flex;
    align-items: center;
  }
  .time {
    justify-content: center;
    flex-direction: row-reverse;
    & span:not(:first-child)::after {
      content: ":";
    }
  }
  .controls {
    margin: auto;
    width: $size-stopwatch-item-controls-width;
    justify-content: space-between;
  }
</style>
