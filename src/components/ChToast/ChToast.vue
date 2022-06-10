<template>
  <span class="ch-toast" :class="toastClasses">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Variant = 'regular' | 'wide'

const props = defineProps({
  variant: {
    type: String,
    default: 'regular',
    validator: (v: Variant) => ['regular', 'wide'].includes(v)
  }
})

const toastClasses = computed(() => (props.variant === 'regular' ? '--regular' : '--wide'))
</script>

<style lang="sass" scoped>
.ch-toast
  border-radius: 1em

  &.--regular
    padding: 0.25em 0.5em

  &.--wide
    padding: 0.5em 0.75em
</style>
