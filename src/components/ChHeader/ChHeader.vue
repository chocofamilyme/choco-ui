<template>
  <header class="ch-header">
    <div class="ch-header__left-action">
      <slot name="leftAction" />
    </div>
    <div class="ch-header__content">
      <slot />
    </div>
    <div class="ch-header__right-action">
      <slot name="rightAction" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChHeader'
})
</script>

<style lang="sass" scoped>
$actions-width: 3.625rem

.ch-header
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  box-sizing: border-box

  &__left-action, &__right-action
    flex-shrink: 0
    width: $actions-width

  &__right-action
    display: flex
    justify-content: right

  &__content
    flex-grow: 1
    width: calc(100% - 2 * $actions-width)
</style>
