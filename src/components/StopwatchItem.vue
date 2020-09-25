<template>
  <div :class="['container', { active: stopwatch.isRunning }]">
    <div class="time">
      <span>59</span>
      <span>30</span>
      <span>2</span>
    </div>
    <div class="controls">
      <BaseButton
        variant="play"
        @click="stopwatch.run"
        :accent="stopwatch.isRunning"
      />
      <BaseButton
        variant="stop"
        @click="stopwatch.stop"
        :accent="stopwatch.isRunning"
      />
    </div>
  </div>
</template>

<script>
  import BaseButton from "./BaseButton";
  export default {
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
