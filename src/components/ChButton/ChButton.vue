<template>
  <button
    :disabled="disabled"
    :class="[
      'ch-button',
      {
        [`ch-button_size_${size}`]: size,
        [`ch-button_shape_${shape}`]: shape,
        'ch-button_light': light,
        'ch-button_bordered': bordered,
        'ch-button_simple': simple
      }
    ]"
  >
    <div class="ch-button__prepend" v-if="Boolean($slots.prepend)">
      <slot name="prepend" />
    </div>
    <p class="ch-button__text">
      <slot />
    </p>
    <div class="ch-button__append" v-if="Boolean($slots.append)">
      <slot name="append" />
    </div>
  </button>
</template>

<script setup lang="ts">
type SizeType = 'md' | 'sm' | 'xs'
type ShapeType = 'circle' | 'flexible'

defineProps<{
  size?: SizeType
  shape?: ShapeType
  light?: boolean
  bordered?: boolean
  simple?: boolean
  disabled?: boolean
}>()
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChButton'
})
</script>

<style lang="sass" scoped>
.ch-button
  font-style: normal
  font-weight: 900
  font-size: 24px
  line-height: 115%
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  letter-spacing: 0.015em
  color: var(--color-light-text)
  background: var(--color-secondary-dark)
  border-radius: 16px
  border: none
  padding: 16px
  width: 180px
  cursor: pointer

  &__prepend
    margin-right: 10px

  &__append
    margin-left: 10px

  &:disabled
    opacity: 0.5
    cursor: not-allowed

  &_light
    background: var(--color-secondary-grey)
    color: var(--color-primary-text)

  &_bordered
    border: 1px solid var(--color-secondary-dark)
    background: transparent
    color: var(--color-primary-text)

  &_simple
    background: transparent
    color: var(--color-primary-text)

  &_size_md
    border-radius: 12px
    font-size: 18px
    line-height: 110%

  &_size_sm
    border-radius: 12px
    padding: 12px
    font-size: 18px
    line-height: 110%

  &_size_xs
    padding: 8px
    border-radius: 12px
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 18px

  &_shape_flexible
    width: auto

  &_shape_circle
    padding: 8px
    width: 36px
    height: 36px
    border-radius: 50%
</style>
