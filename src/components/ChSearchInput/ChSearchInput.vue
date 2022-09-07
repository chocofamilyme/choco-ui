<template>
  <div class="ch-search-input">
    <ChInput
      :model-value="modelValue"
      :placeholder="placeholder"
      clearable
      class="ch-search-input__input"
      @update:modelValue="emit('onInput', $event)"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #prepend v-if="Boolean($slots.prepend)">
        <slot name="prepend" />
      </template>
      <template #append v-if="Boolean($slots.append)">
        <slot name="append" />
      </template>
      <template #clearButton v-if="Boolean($slots.clearButton)">
        <slot name="clearButton" />
      </template>
    </ChInput>
    <Transition name="сancel-button-leave">
      <ChButton
        v-if="isVisibleCancelButton"
        type="button"
        size="xs"
        simple
        data-test-id="сancel-button"
        class="ch-search-input__button"
        @click="onCancel"
      >
        Отмена
      </ChButton>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChInput, ChButton } from '../../index'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits<{
  (e: 'onInput', value: string): void
  (e: 'onCancel'): void
}>()
const isVisibleCancelButton = ref(false)

function onFocus() {
  isVisibleCancelButton.value = true
}
function onBlur() {
  if (props.modelValue === '') {
    isVisibleCancelButton.value = false
  }
}
function onCancel() {
  isVisibleCancelButton.value = false
  emit('onCancel')
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChSearchInput'
})
</script>

<style lang="sass" scoped>
.ch-search-input
  display: flex

  &__input
    height: 100%
    display: flex
    align-items: center
    flex-grow: 1
    border-radius: 16px
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.08), -1px -1px 10px rgba(0, 0, 0, 0.08)

  &__button
    padding: 0
    width: 68px
    justify-content: end
    color: var(--color-secondary-text)
    overflow: hidden

.сancel-button-leave
  &-enter-active,
  &-leave-active
    transition: all 0.5s ease
    width: 68px
    opacity: 1

  &-enter-from,
  &-leave-to
    width: 0px
    opacity: 0
</style>
