<template>
  <div class="glide__bullets ch-carousel__bullets-container" data-glide-el="controls[nav]">
    <button
      v-for="i in numberOfBullets"
      :key="i"
      class="glide__bullet ch-carousel__bullet"
      :data-glide-dir="`=${i - 1}`"
    >
      <span class="ch-carousel__bullet-dot"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  numberOfBullets: {
    type: Number,
    default: 0
  }
})
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
      margin-left: 0.5rem

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
    opacity: 0.5
    background-color: var(--ch-carousel-bg-color, #A4A2B7)
    transition: 0.2s

.glide__bullet--active .ch-carousel__bullet-dot
  width: 0.5rem
  height: 0.5rem
  opacity: 1
</style>
