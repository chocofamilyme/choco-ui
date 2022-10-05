<template>
  <div :class="['ch-input', { 'ch-input_has-error': hasError, 'ch-input_disabled': disabled }]">
    <label :for="id" class="ch-input__outer-label" v-if="outerLabel">{{ outerLabel }}</label>
    <div class="ch-input__field">
      <div class="ch-input__label-wrapper">
        <label :for="id" class="ch-input__inner-label" v-if="label">{{ label }}</label>
        <div
          :class="[
            'ch-input__input-container',
            { 'ch-input__input-container_has-prepend-slot': Boolean($slots.prepend) }
          ]"
        >
          <div class="ch-input__prepend" v-if="Boolean($slots.prepend)">
            <slot name="prepend" />
          </div>
          <component
            :is="component"
            :type="type"
            :id="id"
            ref="input"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder"
            :class="[
              'ch-input__input',
              {
                'ch-input__input_no-padding': label,
                'ch-input__input_has-after-slots': isClearable || Boolean($slots.append)
              }
            ]"
            data-test-id="ch-input-input-component"
            @input="onInput"
            @focus="emit('focus')"
            @blur="emit('blur')"
          />
        </div>
      </div>
      <div class="ch-input__clear-btn" v-if="isClearable" @click="onClear">
        <template v-if="Boolean($slots.clearButton)">
          <slot name="clearButton" />
        </template>
        <fa-icon v-else :icon="['fas', 'xmark']" />
      </div>
      <div class="ch-input__append" v-if="Boolean($slots.append)">
        <slot name="append" />
      </div>
    </div>
    <div class="ch-input__after-container" v-if="afterText">
      <template v-if="Array.isArray(afterText)">
        <p class="ch-input__after-text" v-for="str in afterText" :key="String(str)">
          {{ str }}
        </p>
      </template>
      <p class="ch-input__after-text" v-else>{{ afterText }}</p>
    </div>
    <div class="ch-input__error-list ch-input__after-text ch-input__after-text_color_error">
      <slot name="errorMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref, onMounted } from 'vue'
import uuid from '@/utils/uuid'

type InputComponent = 'input' | 'textarea'

const props = defineProps({
  disabled: Boolean,
  clearable: Boolean,
  modelValue: String,
  label: String,
  component: {
    type: String as () => InputComponent,
    default: 'input'
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  outerLabel: String,
  afterText: [String, Array],
  hasError: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  }
})

const { clearable, modelValue, component } = toRefs(props)
const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const value = computed({
  get() {
    return modelValue?.value
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const input = ref()
const id = uuid()
const isClearable = computed(() => clearable.value && Boolean(value?.value))

onMounted(() => {
  if (props.autofocus) {
    input.value.focus()
  }
})

function onInput(e: Event) {
  if (component.value === 'textarea') textAreaAdjust()
  const target = e.target as HTMLInputElement
  value.value = target.value
}

function onClear() {
  value.value = ''
  input.value.focus()
}

function textAreaAdjust() {
  input.value.style.height = '1px'
  input.value.style.height = 25 + input.value.scrollHeight + 'px'
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChInput'
})
</script>

<style lang="sass" scoped>
.ch-input

  &_disabled
    opacity: 0.5
    cursor: not-allowed

    .ch-input__inner-label
      cursor: not-allowed

  &_has-error &__field
    border-color: var(--color-error) !important

  &__field
    border: 1px solid transparent
    border-radius: 12px
    background: var(--color-secondary-grey)
    display: flex
    align-items: center
    padding: 8px 12px
    width: 100%

    &:focus-within
      border-color: var(--color-active)

  ::placeholder
    color: var(--color-secondary-dark)

  ::placeholder,
  &__input
    font-style: normal
    font-weight: 600
    font-size: 16px
    line-height: 18px
    letter-spacing: 0.005em

  &__input-container
    width: 100%

    &_has-prepend-slot
      display: flex
      align-items: center

      .ch-input__input
        padding: 0

  &__prepend
    margin-right: 4px

  &__append
    margin-left: 8px
    margin-right: 8px

  &__input
    border: none
    width: 100%
    outline: none
    padding: 8px 0
    resize: none
    font-family: "Inter", sans-serif
    background: var(--color-secondary-grey)

    &_no-padding
      padding: 0

    &_has-after-slots
      width: 98%

    &:disabled
      cursor: not-allowed

  &__inner-label
    display: block
    margin-bottom: 4px
    font-style: normal
    font-weight: 600
    font-size: 12px
    line-height: 14px
    letter-spacing: 0.005em
    color: var(--color-secondary-dark)

    & + .ch-input__input
      padding: 0

  &__label-wrapper
    display: block
    flex: 1

  &__outer-label
    font-style: normal
    font-weight: 900
    font-size: 18px
    line-height: 110%
    margin-bottom: 12px
    display: block

  &__clear-btn
    color: var(--color-secondary-dark)
    cursor: pointer
    margin: 0 4px

  &__after-container,
  &__error-list
    margin-top: 4px

  &__after-text
    font-style: normal
    font-weight: 400
    font-size: 12px
    line-height: 14px
    letter-spacing: 0.005em
    color: var(--color-secondary-dark)

    &_color_error
      color: var(--color-error)
</style>
