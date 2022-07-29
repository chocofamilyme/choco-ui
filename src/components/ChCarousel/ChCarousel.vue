<template>
  <div
    ref="carouselRef"
    class="glide ch-carousel"
    role="region"
    aria-label="carousel"
    aria-live="polite"
  >
    <div class="glide__track" data-glide-el="track">
      <div class="glide__slides" ref="trackRef">
        <slot />
      </div>
    </div>
    <slot name="bullets" v-bind="{ numberOfBullets }" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
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
const numberOfBullets = ref(0)

onMounted(() => {
  numberOfBullets.value = trackRef.value.children.length
  nextTick(() => {
    new Glide(carouselRef.value, props.carouselConfig).mount() // Need to wait next tick for bullets to render before Glide initialization
  })
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChCarousel'
})
</script>
