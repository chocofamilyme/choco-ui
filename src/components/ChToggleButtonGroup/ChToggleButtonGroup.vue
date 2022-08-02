<template>
  <div class="ch-toggle-button-group">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'

provide('onSelect', handleBtnClick)
provide('isActive', isActive)

const currentActive = ref('')

function handleBtnClick(index: string) {
  currentActive.value = index
}

function isActive(id: string) {
  return currentActive.value === id
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChToggleButtonGroup'
})
</script>

<style lang="sass" scoped>
.ch-toggle-button-group
  background: var(--color-secondary-grey)
  border-radius: 12px
  padding: 4px
  display: inline-flex
  align-items: center
</style>
