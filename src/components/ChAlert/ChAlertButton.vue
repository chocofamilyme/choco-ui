<template>
  <button type="button" class="ch-alert__button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChAlertButton'
})
</script>

<style scoped lang="sass">
.ch-alert__button
  width: 100%
  padding: 0.5rem
  color: var(--color-primary-dark, #000)
  background-color: var(--color-light, #fff)
  border-radius: $border-base
  border: none
  outline: none
  cursor: pointer
  transition: 0.3s

  &:active
    opacity: 0.8
</style>
