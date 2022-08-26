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
    box-shadow: 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858), 0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792), 0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742), 0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532)

  &__icon_left
    margin-right: 8px

  &__icon_right
    margin-left: 8px
</style>
