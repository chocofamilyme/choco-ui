<template>
  <header class="ch-header">
    <div class="ch-header__left-action">
      <slot name="leftAction" />
    </div>
    <h2 class="ch-header__title">
      <slot />
    </h2>
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

  &__title
    font-size: 18px
    font-weight: 800
    flex-grow: 1
    text-align: center
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
