<template>
  <div
    class="ch-spinner-container"
    :class="[
      size === 'base' ? '' : `ch-spinner-container_${size}`,
      { 'ch-spinner-container_box': box }
    ]"
  >
    <div class="ch-spinner">
      <div class="ch-spinner__inner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'base',
    validator(value: string) {
      return ['lg', 'md', 'base', 'sm'].includes(value)
    }
  },
  box: {
    type: Boolean,
    default: false
  }
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChSpinner'
})
</script>

<style lang="sass" scoped>
@keyframes spinner
  0%
    transform: translate(-50%, -50%) rotate(0deg)

  100%
    transform: translate(-50%, -50%) rotate(360deg)

.ch-spinner
  position: relative
  width: 100%
  height: 100%

  &-container
    width: 1.5rem
    height: 1.5rem
    margin: auto
    overflow: hidden

  &-container_box
    width: 3.5rem
    height: 3.5rem
    background: var(--color-light)
    border-radius: 1rem
    box-shadow: 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858), 0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792), 0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742), 0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532)

  &__inner
    position: absolute
    top: 50%
    left: 50%
    width: 1.5rem
    height: 1.5rem
    border-style: solid
    border-width: 3px
    border-color: var(--color-spinner)
    border-top-color: transparent
    border-radius: 50%
    animation: spinner 1s linear infinite

  &-container_lg
    width: 2.75rem
    height: 2.75rem

    &.ch-spinner-container_box
      width: 5.75rem
      height: 5.75rem
      border-radius: 1.5rem

  &-container_lg &__inner
    width: 2.75rem
    height: 2.75rem
    border-width: 3.5px

  &-container_md
    width: 2rem
    height: 2rem

    &.ch-spinner-container_box
      width: 4rem
      height: 4rem
      border-radius: 1.5rem

  &-container_md &__inner
    width: 2rem
    height: 2rem
    border-width: 3px

  &-container_sm
    width: 1rem
    height: 1rem

    &.ch-spinner-container_box
      width: 3rem
      height: 3rem
      border-radius: 0.75rem

  &-container_sm &__inner
    width: 1rem
    height: 1rem
    border-width: 2px
</style>
