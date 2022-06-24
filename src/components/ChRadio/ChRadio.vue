<template>
  <div :class="['ch-radio', { 'ch-radio_disabled': disabled }]">
    <input
      :id="id"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      type="radio"
      class="ch-radio__input"
    />
    <label :for="id" class="ch-radio__label">
      <p class="ch-radio__label-text">{{ label }}</p>
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
  name: string
}>()
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChRadio'
})
</script>

<style lang="sass" scoped>
.ch-radio

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
    border: 1px solid var(--color-primary-dark)
    border-radius: 50%
    margin-right: 8px
    transition: background-color 0.2s, border-color 0.2s

  &__label::after
    content: ''
    width: 16px
    height: 16px
    position: absolute
    top: 50%
    left: 15px
    border-radius: 50%
    background: transparent
    transform: translate(-50%, -50%)
    transition: background-color 0.2s
    transition-delay: 0.1s

  &__input:checked + &__label::after
    background: var(--color-primary-dark)
</style>
