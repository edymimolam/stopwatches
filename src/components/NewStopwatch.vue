<template>
  <button class="container" v-on="$listeners">
    <BaseButton variant="add" title="create stopwatch" />
  </button>
</template>

<script>
  import BaseButton from "./BaseButton";
  export default {
    components: { BaseButton },
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $size-stopwatch-item-width;
    height: $size-stopwatch-item-height;
    border: none;
    background-color: $color-bg-light;
    cursor: pointer;
  }
</style>
