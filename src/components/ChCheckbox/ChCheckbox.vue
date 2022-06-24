<template>
  <div :class="['ch-checkbox', { 'ch-checkbox_disabled': disabled }]">
    <input
      :id="id"
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      class="ch-checkbox__input"
    />
    <label :for="id" class="ch-checkbox__label">
      <p class="ch-checkbox__label-text">{{ label }}</p>
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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCheckbox'
})
</script>

<style lang="sass" scoped>
.ch-checkbox

  &_disabled &__label
    cursor: not-allowed

  &_disabled &__label::before,
  &_disabled &__label::after
    opacity: 0.3

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
    width: 30px
    height: 30px
    border: 1px solid var(--color-secondary-dark)
    border-radius: 8px
    margin-right: 8px
    transition: background-color 0.2s

  &__label::after
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

  &__input:checked + &__label::before
    background: var(--color-primary-dark)
    border-color: var(--color-primary-dark)

  &__input:checked + &__label::after
    opacity: 1
</style>
