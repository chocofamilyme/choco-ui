<template>
  <button
    :class="['ch-toggle-button', { 'ch-toggle-button_active': isActive() }]"
    type="button"
    @click="onClick(id)"
  >
    <slot v-if="$slots.default" />
  </button>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const props = defineProps<{
  id: string
}>()

const onSelect = inject<(id: string) => void>('onSelect')
const checkIsActive = inject<(id: string) => boolean>('isActive')

function onClick(id: string) {
  if (onSelect) {
    onSelect(id)
  }
}

function isActive() {
  if (checkIsActive) {
    return checkIsActive(props.id)
  }
  return false
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChToggleButton'
})
</script>

<style lang="sass" scoped>
.ch-toggle-button
  border-radius: 12px
  display: flex
  justify-content: center
  align-items: center
  padding: 12px 24px
  border-radius: 8px
  font-style: normal
  font-weight: 400
  font-size: 16px
  line-height: 18px
  text-align: center
  letter-spacing: 0.005em
  cursor: pointer
  width: 100%
  border: none

  &_active
    background: var(--color-light)
    box-shadow: $main-shadow

  &:not(:first-child)
    margin-left: 8px

  &__icon_left
    margin-right: 8px

  &__icon_right
    margin-left: 8px
</style>
