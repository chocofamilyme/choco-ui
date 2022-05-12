<template>
  <div :class="['ch-switch', { 'ch-switch_disabled': disabled }]">
    <input
      :id="id"
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      class="ch-switch__input"
    />
    <label :for="id" class="ch-switch__label">
      <p class="ch-switch__label-text">{{ label }}</p>
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import uuid from '@/utils/uuid'

const id = uuid()

defineProps<{
  disabled?: boolean
  checked?: boolean
  label?: string
}>()
</script>

<style lang="sass" scoped>
.ch-switch

  &_disabled &__label
    cursor: not-allowed

  &_disabled &__label::before
    opacity: 0.5

  &__input
    display: none

  &__label-text
    padding-right: 8px

  &__label
    cursor: pointer
    position: relative
    display: inline-flex
    align-items: center
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 18px
    align-items: center
    letter-spacing: 0.005em

  &__label::before
    content: ''
    display: block
    top: 50%
    right: calc(100% + 38px)
    width: 42px
    height: 26px
    background: var(--color-primary-grey)
    border-radius: 48px
    margin-right: 8px
    transition: background-color 0.2s

  &__label::after
    content: ''
    width: 22px
    height: 22px
    position: absolute
    // top: 15%
    left: 2px
    background: var(--color-light)
    border-radius: 50%
    // transform: translate(-50%, -50%)
    transition: opacity 0.2s, left 0.2s
    transition-delay: 0.1s

  &__input:checked + &__label::before
    background: var(--color-secondary-dark)

  &__input:checked + &__label::after
    left: 18px
</style>
