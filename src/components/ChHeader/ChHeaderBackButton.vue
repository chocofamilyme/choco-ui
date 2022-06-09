<template>
  <button type="button" class="ch-header__default-button" @click="$emit('onBackButtonClick')">
    <img src="@/assets/images/icons/arrow-left.svg" width="24" height="24" alt="" />
  </button>
</template>

<script lang="ts">
export default {
  name: 'ChHeader.BackButton'
}
</script>
