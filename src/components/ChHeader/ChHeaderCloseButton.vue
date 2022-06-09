<template>
  <button
    type="button"
    class="ch-header__default-button ch-header__close-btn"
    @click="$emit('onCloseButtonClick')"
  >
    <img src="@/assets/images/icons/close.svg" width="24" height="24" alt="" />
  </button>
</template>

<script lang="ts">
export default {
  name: 'ChHeader.CloseButton'
}
</script>

<style lang="sass" scoped>
.ch-header__close-btn
  margin-left: auto
</style>
