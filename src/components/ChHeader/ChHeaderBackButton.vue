<template>
  <ChHeaderButton>
    <!-- eslint-disable-next-line -->
    <svg width="24" height="25" style="fill: currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m5.449 11.593 4.733-4.733-1.414-1.415-7.182 7.182 7.182 7.183 1.414-1.415-4.803-4.802h15.596v-2H5.45Z"/></svg>
  </ChHeaderButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChHeaderButton from './ChHeaderButton.vue'

export default defineComponent({
  name: 'ChHeader.BackButton',
  components: { ChHeaderButton }
})
</script>
