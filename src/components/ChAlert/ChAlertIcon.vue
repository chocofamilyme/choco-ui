<template>
  <div class="ch-alert__icon">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChAlertIcon'
})
</script>

<style scoped lang="sass">
.ch-alert__icon
  display: flex
  align-items: center
  justify-content: center
  min-width: 2.25rem
  min-height: 2.25rem
  border-radius: $border-base
  background-color: var(--ch-alert-icon-bg-color, rgba(255, 255, 255, 0.2))
</style>
