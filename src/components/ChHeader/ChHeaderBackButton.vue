<template>
  <ChHeaderButton>
    <img src="@/assets/images/icons/arrow-left.svg" width="24" height="24" alt="" />
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
