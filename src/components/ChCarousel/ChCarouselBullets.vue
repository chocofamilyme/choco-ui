<template>
  <div
    class="glide__bullets ch-carousel__bullets-container"
    data-glide-el="controls[nav]"
    data-test-id="carousel-bullets-container"
  >
    <button
      v-for="i in numberOfSlides || 0"
      :key="i"
      class="glide__bullet ch-carousel__bullet"
      :data-glide-dir="`=${i - 1}`"
      :aria-current="isActive(i - 1)"
      data-test-id="carousel-bullets"
    >
      <span class="ch-carousel__bullet-dot"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { carouselConfig } from './config'

const glider = inject(carouselConfig.gliderInjectionKey)
const numberOfSlides = inject(carouselConfig.numberOfSlidesInjectionKey)
const isActive = (idx: number) => idx === glider?.value?.index
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCarouselBullets'
})
</script>

<style scoped lang="sass">
.ch-carousel
  &__bullets-container
    display: flex
    justify-content: center
    margin-top: 8px

    & > .ch-carousel__bullet:not(:first-of-type)
      margin-left: 0.375rem

  &__bullet
    display: flex
    align-items: center
    justify-content: center
    width: 0.75rem
    height: 0.75rem
    padding: 0
    border: 0
    background-color: transparent

  &__bullet-dot
    width: 0.25rem
    height: 0.25rem
    border-radius: $border-full
    background-color: var(--ch-carousel-bg-color, #D4D3DF)
    transition: 0.2s

.glide__bullet--active .ch-carousel__bullet-dot
  width: 0.5rem
  height: 0.5rem
  background-color: var(--ch-carousel-active-bullet-color, #A4A2B7)
</style>
