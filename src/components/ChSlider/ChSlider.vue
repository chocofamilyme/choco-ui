<template>
  <div class="ch-slider">
    <div class="ch-slider__top-bar" v-if="title">
      <h3 class="ch-slider__label">{{ title }}</h3>
    </div>
    <div class="ch-slider__controls">
      <div class="ch-slider__rail" ref="rail"></div>
      <template v-if="isRangeMode">
        <div
          class="ch-slider__thumb"
          v-for="thumbValue in value"
          :key="thumbValue"
          :data-value="thumbValue"
          @mousedown.prevent="onThumbMouseDown"
          @touchstart.prevent="onThumbMouseDown"
        />
        <div class="ch-slider__track" v-if="track" ref="track" />
      </template>
      <div
        class="ch-slider__thumb"
        :data-value="value"
        v-else
        @mousedown.prevent="onThumbMouseDown"
        @touchstart.prevent="onThumbMouseDown"
      />
    </div>
    <div class="ch-slider__bottom-bar">
      <p class="ch-slider__info-text">{{ infoText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: [Number, Array],
  title: String,
  step: Number,
  track: {
    type: Boolean,
    default: false
  },
  infoText: String,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
})

const { modelValue, min, max, step } = toRefs(props)

const value = computed({
  get() {
    return modelValue?.value
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const isRangeMode = computed(() => Array.isArray(value.value) && value.value.length > 1)
let needForRAF = true
let thumbDragStart = false
const rail = ref<null | HTMLElement>(null)
const track = ref<null | HTMLElement>(null)
const currentThumb = ref<null | HTMLElement>(null)
const thumbWidth = ref(0)

function onThumbMouseDown(e: MouseEvent | TouchEvent) {
  const target = e.target as HTMLInputElement
  const { width: targetWidth } = target.getBoundingClientRect()

  thumbDragStart = true
  thumbWidth.value = targetWidth
  currentThumb.value = target
}

let oldCursorXPos = 0
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints

function onThumbMouseMove(e: MouseEvent | TouchEvent) {
  function update(touch?: Touch) {
    if (!thumbDragStart && !needForRAF) return
    const { left: leftOffset = 0, width: railWidth = 0 } = rail.value
      ? rail.value.getBoundingClientRect()
      : {}

    const maxCursorPos = railWidth - thumbWidth.value

    const cursorStep = Math.round(
      step?.value
        ? step.value <= max.value
          ? 100 * (step.value / max.value)
          : 100 * (max.value / max.value)
        : (max.value / maxCursorPos) * 100
    )

    const clientX = isTouch ? touch?.clientX || 0 : (e as MouseEvent).clientX
    const thumbHalfWidth = thumbWidth.value / 2
    const leftPosition = ((clientX - leftOffset - thumbHalfWidth) / maxCursorPos) * 100
    const minCursorPos = 100 * (min.value / max.value)
    const cursorXPos = -Math.round(minCursorPos - leftPosition)
    const cursorXPosDiff = Math.abs(cursorXPos - oldCursorXPos)

    needForRAF = false

    console.log({ cursorXPosDiff, oldCursorXPos, cursorStep, cursorXPos })
    if (cursorXPosDiff > cursorStep) {
      oldCursorXPos = cursorXPos

      const allowableLeftPosition =
        cursorXPos >= maxCursorPos
          ? maxCursorPos
          : cursorXPos <= minCursorPos
          ? minCursorPos
          : cursorXPos

      requestAnimationFrame(() => {
        if (currentThumb.value) currentThumb.value.style.left = `${allowableLeftPosition}%`
      })
    }
  }

  if (isTouch) {
    var touches = (e as TouchEvent).changedTouches

    for (var i = 0; i < touches.length; i++) {
      update(touches[i])
    }
  } else {
    update()
  }
}

function onThumbMouseUp() {
  thumbDragStart = false
  thumbWidth.value = 0
}

document.addEventListener('mousemove', onThumbMouseMove)
document.addEventListener('touchmove', onThumbMouseMove)
document.addEventListener('mouseup', onThumbMouseUp)
document.addEventListener('touchend', onThumbMouseUp)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChSlider'
})
</script>

<style lang="sass" scoped>
.ch-slider

  &__top-bar
    margin-bottom: 8px

  &__bottom-bar
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 8px

  &__controls
    position: relative
    padding: 18px 0

  &__rail
    background: var(--color-primary-grey)
    height: 2px
    width: 100%

  &__track
    position: absolute
    top: 50%
    transform: translateY(-50%)
    background: var(--color-primary-dark)
    height: 4px
    width: 100%

  &__thumb
    width: 36px
    height: 36px
    border: 10px solid var(--color-light)
    background: var(--color-primary-dark)
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858), 0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792), 0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742), 0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532)
    border-radius: 50%
    position: absolute
    // transition: left 0.1s
    top: 50%
    will-change: left
    transform: translateY(-50%)
    cursor: pointer
</style>
