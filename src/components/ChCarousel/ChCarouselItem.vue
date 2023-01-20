<template>
  <div class="glide__slide ch-carousel-item">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCarouselItem'
})
</script>

<style scoped>
.ch-carousel-item {
  height: auto;
  overflow: hidden;
}
</style>
