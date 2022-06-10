<template>
  <div class="ch-slider">
    <div class="ch-slider__top-bar" v-if="title">
      <h3 class="ch-slider__label">{{ title }}</h3>
    </div>
    <div class="ch-slider__body" ref="sliderBody"></div>
    <div class="ch-slider__bottom-bar">
      <p class="ch-slider__info-text">{{ infoText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs, ref, onMounted } from 'vue'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

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
const sliderBody = ref<null | HTMLElement>(null)

onMounted(() => {
  noUiSlider.create(sliderBody.value, {
    start: [4000, 8000],
    range: {
      min: [2000],
      max: [10000]
    }
  })
})

const value = computed({
  get() {
    return modelValue?.value
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style lang="sass">
.ch-slider
  &__top-bar
    margin-bottom: 8px

  &__bottom-bar
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 8px

  &__controls, &__body
    position: relative
    padding: 18px 0

  .noUi-target
    background: inherit
    border-radius: 0
    border: 0
    box-shadow: none

  .noUi-connects
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

  .noUi-handle
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

    &:before, &:after
      display: none
</style>
