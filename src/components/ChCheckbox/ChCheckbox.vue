<template>
  <label :class="['ch-checkbox', { '--disabled': disabled, '--reversed': reversed }]">
    <input
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      class="ch-checkbox__input"
      data-test-id="checkbox-input"
    />
    <span class="ch-checkbox__checkbox" />
    <slot>
      <p v-if="label" class="ch-checkbox__label-text">{{ label }}</p>
    </slot>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  disabled?: boolean
  checked?: boolean
  reversed?: boolean
  label?: string
}>()
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCheckbox'
})
</script>

<style lang="sass" scoped>
.ch-checkbox
  display: inline-flex
  align-items: center
  font-style: normal
  font-weight: 400
  font-size: 16px
  line-height: 18px
  align-items: center
  letter-spacing: 0.005em

  &.--reversed
    flex-direction: row-reverse

    .ch-checkbox__label-text
      padding-left: 0
      padding-right: 8px

  &.--disabled &__checkbox
    cursor: not-allowed

  &.--disabled &__checkbox::before,
  &.--disabled &__checkbox::after
    opacity: 0.3

  &__input
    display: none

  &__label-text
    width: 100%
    padding-left: 8px

  &__checkbox
    cursor: pointer
    position: relative

    &::before
      content: ''
      display: block
      top: 50%
      right: calc(100% + 38px)
      width: 30px
      height: 30px
      border: 1px solid var(--color-secondary-dark)
      border-radius: 8px
      transition: background-color 0.2s

    &::after
      content: ''
      width: 17px
      height: 8px
      position: absolute
      top: 19%
      left: 16px
      border: 3px solid var(--color-light)
      border-top: none
      border-right: none
      background: transparent
      opacity: 0
      transform: rotate(-45deg) translate(-50%, -50%)
      transition: opacity 0.2s
      transition-delay: 0.1s

  &__input:checked + &__checkbox::before
    background: var(--color-primary-dark)
    border-color: var(--color-primary-dark)

  &__input:checked + &__checkbox::after
    opacity: 1
</style>
