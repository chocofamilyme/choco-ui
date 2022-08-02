<template>
  <div class="glide__slide ch-carousel-card-item">
    <div class="ch-carousel-card-item__left">
      <slot name="left" />
    </div>
    <div class="ch-carousel-card-item__right">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCarouselItem'
})
</script>

<style scoped lang="sass">
.ch-carousel-card-item
  display: grid
  grid-template-columns: 1fr 2fr
  height: auto
  overflow: hidden
  border-radius: $border-xl
  background-color: #fff

  &__left
    display: flex
    align-items: center
    justify-content: center

  &__right
    padding: 0.75rem
</style>
