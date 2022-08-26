<template>
  <div class="ch-toggle-button-group">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'

provide('isActive', isActive)

const props = defineProps<{
  currentId: string
}>()

function isActive(id: string) {
  return props.currentId === id
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
