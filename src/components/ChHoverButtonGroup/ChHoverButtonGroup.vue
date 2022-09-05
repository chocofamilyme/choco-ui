<template>
  <div class="ch-hover-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChHoverButtonGroup'
})
</script>

<style lang="sass" scoped>
.ch-hover-button-group
  $ch-hover-button-group-gap: 0.75rem

  --ch-hover-button-group-background-color: #fff

  display: grid
  gap: $ch-hover-button-group-gap
  grid-auto-flow: column
  grid-auto-columns: minmax(0, 1fr)
  align-items: stretch
  justify-content: center
  box-sizing: border-box
  min-height: 3.25rem
  padding: 0.75rem 1rem
  background-color: var(--ch-hover-button-group-background-color, #fff)
  border-radius: 1.125rem // There is no such radius in global variables and it is used only here
  box-shadow: $main-shadow

  & > :not(:last-of-type) // Every direct child except first one
    position: relative

    &:after
      content: ''
      position: absolute
      right: calc($ch-hover-button-group-gap / 2 * -1 - 1px)
      width: 2px
      height: 1.75rem
      background-color: #F1F2F7
</style>
