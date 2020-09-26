<template>
  <button :class="[variant, { accent }, 'button']" v-on="$listeners">
    <span class="sr-only">{{ title }}</span>
  </button>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
      accent: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: $transition-fast;
    &:hover {
      opacity: 0.8;
    }
  }

  .stop {
    background-color: $color-primary;
    &.accent {
      background-color: $color-accent;
    }
  }
  .play {
    border-style: solid;
    border-width: 1rem 0px 1rem 2rem;
    border-color: transparent transparent transparent $color-primary;
    &.accent {
      border-color: transparent transparent transparent $color-accent;
    }
  }
  .pause {
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      width: 0.3rem;
      background-color: $color-primary;
    }
    &:before {
      left: 0.5rem;
    }
    &:after {
      right: 0.5rem;
    }
    &.accent:before,
    &.accent:after {
      background-color: $color-accent;
    }
  }
  .add {
    &:before,
    &:after {
      content: "";
      position: absolute;
      background-color: $color-primary;
    }
    &:before {
      height: 100%;
      width: 0.3rem;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      width: 100%;
      height: 0.3rem;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &.accent:before,
    &.accent:after {
      background-color: $color-accent;
    }
  }
</style>
