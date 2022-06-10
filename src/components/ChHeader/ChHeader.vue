<template>
  <header class="ch-header">
    <div class="ch-header__left-action">
      <slot name="leftAction" />
    </div>
    <div class="ch-header__content">
      <slot />
    </div>
    <div class="ch-header__right-action">
      <slot name="rightAction" />
    </div>
  </header>
</template>

<style lang="sass" scoped>
.ch-header
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  box-sizing: border-box

  &__left-action, &__right-action
    flex-shrink: 0
    width: 58px

  &__content
    flex-grow: 1
</style>

<style lang="sass">
.ch-header__default-button
  display: flex
  align-items: center
  justify-content: center
  width: 36px
  height: 36px
  padding: 0
  background-color: transparent
  border: none
  outline: none
  cursor: pointer
</style>
