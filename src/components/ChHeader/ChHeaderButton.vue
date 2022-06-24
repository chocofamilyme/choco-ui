<template>
  <button type="button" class="ch-header__default-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChHeader.Button'
})
</script>

<style lang="sass" scoped>
.ch-header__default-button
  display: flex
  align-items: center
  justify-content: center
  width: 2.25rem
  height: 2.25rem
  padding: 0
  background-color: transparent
  border: none
  outline: none
  cursor: pointer
</style>
