<template>
  <div class="ch-tooltip">
    <div
      :data-p="position"
      :class="['ch-tooltip__label', `ch-tooltip__label_pos_${position}`]"
      v-if="($slots.label || label) && hasHover"
    >
      <slot name="label" v-if="$slots.label" />
      <p class="ch-tooltip__label-text" v-else-if="label">{{ label }}</p>
    </div>
    <div
      class="ch-tooltip__target"
      v-if="$slots.default"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      @click="onClick"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  },
  behaviour: {
    type: String,
    default: 'hover',
    validator(value: string) {
      const options = ['click', 'hover']
      return options.includes(value)
    }
  },
  position: {
    type: String,
    default: 'top-right',
    validator(value: string) {
      const options = [
        'top',
        'left',
        'right',
        'bottom',
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left'
      ]

      return options.includes(value)
    }
  }
})

const { behaviour, duration } = toRefs(props)

const hasHover = ref(false)

function onMouseOver() {
  if (behaviour.value !== 'hover') return
  hasHover.value = true
}

function onMouseOut() {
  if (behaviour.value !== 'hover') return
  hasHover.value = false
}

let clickTimeout: ReturnType<typeof setTimeout> | null = null

function onClick() {
  if (behaviour.value !== 'click') return
  if (clickTimeout) clearTimeout(clickTimeout)

  hasHover.value = true

  clickTimeout = setTimeout(() => {
    hasHover.value = false
  }, duration.value)
}
</script>

<style lang="sass" scoped>
.ch-tooltip
  position: relative
  display: inline-flex

  &__label
    min-width: 100px
    display: inline-block
    background: var(--color-primary-dark)
    font-style: normal
    font-weight: 400
    font-size: 12px
    line-height: 14px
    text-align: center
    letter-spacing: 0.005em
    color: var(--color-light)
    border-radius: 8px
    padding: 8px
    position: absolute

    &_pos_top::after,
    &_pos_left::after,
    &_pos_right::after,
    &_pos_bottom::after,
    &_pos_top-left::after,
    &_pos_top-right::after,
    &_pos_bottom-left::after,
    &_pos_bottom-right::after
      content: ''
      position: absolute
      border-left: 8px solid transparent
      border-right: 8px solid transparent

    &_pos_top-left
      bottom: calc(100% + 8px)
      left: 0
      transform: translateX(-50%)

    &_pos_top-left::after
      top: 100%
      right: 16px
      border-top: 8px solid var(--color-primary-dark)

    &_pos_top-right
      bottom: calc(100% + 8px)
      right: 0
      transform: translateX(50%)

    &_pos_top-right::after
      top: 100%
      left: 16px
      border-top: 8px solid var(--color-primary-dark)

    &_pos_bottom-left
      top: calc(100% + 8px)
      left: 0
      transform: translateX(-50%)

    &_pos_bottom-left::after
      bottom: 100%
      right: 16px
      border-bottom: 8px solid var(--color-primary-dark)

    &_pos_bottom-right
      top: calc(100% + 8px)
      right: 0
      transform: translateX(50%)

    &_pos_bottom-right::after
      bottom: 100%
      left: 16px
      border-bottom: 8px solid var(--color-primary-dark)

    &_pos_top
      bottom: calc(100% + 8px)
      left: 50%
      transform: translateX(-50%)

    &_pos_top::after
      top: 100%
      left: 50%
      transform: translateX(-50%)
      border-top: 8px solid var(--color-primary-dark)

    &_pos_bottom
      top: calc(100% + 8px)
      left: 50%
      transform: translateX(-50%)

    &_pos_bottom::after
      bottom: 100%
      left: 50%
      transform: translateX(-50%)
      border-bottom: 8px solid var(--color-primary-dark)

    &_pos_left
      right: calc(100% + 8px)
      top: 50%
      transform: translateY(-50%)

    &_pos_left::after
      top: 50%
      left: 100%
      transform: translateY(-50%)
      border-left: 8px solid var(--color-primary-dark)
      border-top: 8px solid transparent
      border-bottom: 8px solid transparent

    &_pos_right
      left: calc(100% + 8px)
      top: 50%
      transform: translateY(-50%)

    &_pos_right::after
      top: 50%
      right: 100%
      transform: translateY(-50%)
      border-right: 8px solid var(--color-primary-dark)
      border-top: 8px solid transparent
      border-bottom: 8px solid transparent
</style>
