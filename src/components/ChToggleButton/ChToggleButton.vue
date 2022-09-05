<template>
  <label class="ch-toggle-button__label">
    <input class="ch-toggle-button__input" type="radio" :name="name" v-bind="$attrs" />
    <span :class="['ch-toggle-button', { 'ch-toggle-button_active': checkIsActive() }]">
      <slot v-if="$slots.default" />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const props = defineProps<{
  id: string
  name: string
}>()

const isActive = inject<(id: string) => boolean>('isActive')

function checkIsActive() {
  if (isActive) {
    return isActive(props.id)
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

  &__input
    display: none
  &__label
    display: block
  &_active
    background: var(--color-light)
    box-shadow: $main-shadow

  &__icon_left
    margin-right: 8px

  &__icon_right
    margin-left: 8px
</style>
