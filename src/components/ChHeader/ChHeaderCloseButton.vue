<template>
  <ChHeaderButton>
    <img src="@/assets/images/icons/close.svg" width="24" height="24" alt="" />
  </ChHeaderButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChHeaderButton from './ChHeaderButton.vue'

export default defineComponent({
  name: 'ChHeader.CloseButton',
  components: { ChHeaderButton }
})
</script>
