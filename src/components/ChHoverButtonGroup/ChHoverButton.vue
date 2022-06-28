<template>
  <button class="ch-hover-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChHoverButton'
})
</script>

<style lang="sass" scoped>
.ch-hover-button
  display: flex
  align-items: center
  justify-content: center
  padding: 0
  background-color: transparent
  border: none
  outline: none
  cursor: pointer
</style>
