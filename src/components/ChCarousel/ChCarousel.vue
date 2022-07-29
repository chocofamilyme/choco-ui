<template>
  <div
    ref="carouselRef"
    class="glide ch-carousel"
    role="region"
    aria-label="carousel"
    aria-live="polite"
    aria-atomic="true"
  >
    <div class="glide__track" data-glide-el="track">
      <div class="glide__slides" ref="trackRef" role="group">
        <slot />
      </div>
    </div>
    <slot name="bullets" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide, nextTick } from 'vue'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

const props = defineProps({
  carouselConfig: {
    type: Object as () => Glide.Options,
    default: () => ({
      rewind: false,
      peek: 20
    })
  }
})

const carouselRef = ref()
const trackRef = ref()
const numberOfSlides = ref(0)
const glider = ref<Glide.Properties>()

provide('glider', glider)
provide('numberOfSlides', numberOfSlides)

onMounted(() => {
  numberOfSlides.value = trackRef.value.children.length
  nextTick(() => {
    glider.value = new Glide(carouselRef.value, props.carouselConfig).mount() // Need to wait next tick for bullets to render before Glide initialization
  })
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCarousel'
})
</script>
