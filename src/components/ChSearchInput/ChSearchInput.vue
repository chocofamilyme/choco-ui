<template>
  <div class="ch-search-input">
    <ChInput
      :model-value="modelValue"
      :placeholder="placeholder"
      clearable
      class="ch-search-input__input"
      :class="{ 'ch-search-input__input_with-shadow': hasShadow }"
      @update:modelValue="emit('onInput', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ChInput } from '../../'

const props = defineProps({
  modelValue: String,
  placeholder: String,
  hasShadow: Boolean
})

const emit = defineEmits(['onInput'])
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

    &_with-shadow
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.08), -1px -1px 10px rgba(0, 0, 0, 0.08)
</style>
