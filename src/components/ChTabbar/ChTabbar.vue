<template>
  <div class="ch-tabbar">
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
  height: 3.5rem
  background-color: #fff
  border-radius: 2.5rem
  box-shadow: $main-shadow
</style>
