<template>
  <button
    type="button"
    class="ch-tabbar-item"
    :class="{ '--active': isActive }"
    role="tab"
    :aria-selected="isActive"
    :aria-label="alt"
  >
    <span v-show="badgeAmount" class="ch-tabbar-item__badge" data-test-id="tabbar-badge">
      {{ badgeAmount }}
    </span>
    <span class="ch-tabbar-item__content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  alt: string
  isActive?: boolean
  badgeAmount?: number | string
}>()
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChTabbarItem'
})
</script>

<style scoped lang="sass">
.ch-tabbar-item
  position: relative
  padding: 0
  border: none
  outline: none
  background: transparent
  cursor: pointer

  &__content
    display: flex
    align-items: center
    justify-content: center
    width: 2.5rem
    height: 2.5rem
    opacity: 0.3
    transition: 300ms

  &__badge
    position: absolute
    top: -0.25rem
    right: -0.25rem
    display: flex
    align-items: center
    justify-content: center
    width: 1rem
    height: 1rem
    border-radius: $border-full
    background-color: var(--ch-tabbar-item-badge-bg-color, #F6074C)
    color: var(--color-light, #fff)
    font-size: 0.875rem
    font-weight: 900
    line-height: .1rem
    z-index: 20

  &.--active
    .ch-tabbar-item__content
      opacity: 1
</style>
