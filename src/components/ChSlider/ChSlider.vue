<template>
  <div class="ch-slider">
    <div class="ch-slider__top-bar" v-if="title">
      <h3 class="ch-slider__title">{{ title }}</h3>
    </div>
    <div class="ch-slider__body" ref="sliderBody"></div>
    <div class="ch-slider__bottom-bar">
      <div class="ch-slider__labels" v-if="configs.labels">
        <div>{{ configs.labels.begin }}</div>
        <div>{{ configs.labels.end }}</div>
      </div>
      <p class="ch-slider__info-text">{{ infoText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import noUiSlider from 'nouislider'
import type { PropType } from 'vue'
import type { SliderConfig } from '@/components/ChSlider/config.types'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Object,
  title: String,
  infoText: String,
  showRanges: {
    type: Boolean,
    default: false
  },
  configs: {
    type: Object as PropType<SliderConfig>,
    default() {
      return {
        start: [0],
        range: {
          min: [0],
          max: [10]
        }
      }
    }
  }
})

const sliderBody = ref({})

onMounted(() => {
  // @ts-ignore
  noUiSlider.create(sliderBody.value, {
    cssPrefix: 'ch-slider__',
    ...props.configs
  })

  // @ts-ignore
  sliderBody.value.noUiSlider.on('end', function (values: unknown) {
    emit('update:modelValue', values)
  })
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChSlider'
})
</script>

<style lang="sass">
$handleWidth: 36px

.ch-slider
  &__top-bar
    margin-bottom: 8px

  &__bottom-bar
    margin-top: 8px

  &__labels
    display: flex
    justify-content: space-between

  &__controls, &__body
    position: relative
    padding: 18px 0

  &__target, &__target *
    -webkit-touch-callout: none
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    -webkit-user-select: none
    -ms-touch-action: none
    touch-action: none
    -ms-user-select: none
    -moz-user-select: none
    user-select: none
    -moz-box-sizing: border-box
    box-sizing: border-box

  &__base, &__connects
    width: 100%
    height: 100%
    position: relative
    z-index: 1

  &__connects
    background: var(--color-primary-grey)
    height: 2px

  &__track
    position: absolute
    top: 50%
    transform: translateY(-50%)
    background: var(--color-primary-dark)
    height: 4px
    width: 100%
    overflow: hidden
    z-index: 0

  &__connect, &__origin
    will-change: transform
    position: absolute
    z-index: 1
    top: 0
    right: 0
    height: 100%
    width: 100%
    -ms-transform-origin: 0 0
    -webkit-transform-origin: 0 0
    -webkit-transform-style: preserve-3d
    transform-origin: 0 0
    transform-style: flat

  &__connect
    background: #000
    height: 4px
    top: -1px

  &__handle
    background: #FFF
    width: $handleWidth
    height: $handleWidth
    border: 10px solid var(--color-light)
    background: var(--color-primary-dark)
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858), 0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792), 0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742), 0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532)
    border-radius: 50%
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    position: absolute
    top: 50%
    will-change: left
    transform: translateY(-50%)
    cursor: pointer

  &__handle-lower
    right: -$handleWidth

  &__handle-upper
    right: 0

  &__txt-dir-rtl.ch-slider__horizontal .ch-slider__origin
    left: 0
    right: auto

  &__horizontal .ch-slider__origin
    height: 0

  &__touch-area
    height: 100%
    width: 100%

  &__state-tap &-connect, &__state-tap &-origin
    -webkit-transition: transform 0.3s
    transition: transform 0.3s

  &__state-drag *
    cursor: inherit !important

  &__horizontal
    height: 18px

  &__draggable
    cursor: ew-resize

  [disabled] &__connect
    background: #B8B8B8

  [disabled].ch-slider__target,
  [disabled].ch-slider__handle,
  [disabled] &__handle
    cursor: not-allowed

  &__pips, &__pips *
    -moz-box-sizing: border-box
    box-sizing: border-box

  &__pips
    position: absolute
    color: #999

  &__value
    position: absolute
    white-space: nowrap
    text-align: center

  &__value-sub
    color: #ccc
    font-size: 10px

  &__marker
    position: absolute
    background: #CCC

  &__marker-sub
    background: #AAA

  &__marker-large
    background: #AAA

  &__pips-horizontal
    padding: 10px 0
    height: 80px
    top: 100%
    left: 0
    width: 100%

  &__tooltip
    margin-top: 1.2rem

  &__value-horizontal
    -webkit-transform: translate(-50%, 50%)
    transform: translate(-50%, 50%)

  &__rtl &-value-horizontal
    -webkit-transform: translate(50%, 50%)
    transform: translate(50%, 50%)
</style>
