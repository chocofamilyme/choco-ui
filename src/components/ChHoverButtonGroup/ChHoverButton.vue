<template>
  <button class="ch-hover-button">
    <slot />
  </button>
</template>

<style lang="sass" scoped>
.ch-hover-button
  display: flex
  align-items: center
  justify-content: center
  padding: 0
  background-color: transparent
  border: none
  outline: none
  cursor: pointer
</style>
