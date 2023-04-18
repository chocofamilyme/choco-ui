<template>
  <div class="ch-tabbar" role="tablist">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChTabbar'
})
</script>

<style scoped lang="sass">
.ch-tabbar
  display: flex
  align-items: center
  justify-content: space-around
  padding: 0.75rem 0
  background-color: #fff
</style>
