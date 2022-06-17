<template>
  <div class="ch-hover-button-group">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.ch-hover-button-group
  $ch-hover-button-group-gap: 0.75rem

  --ch-hover-button-group-background-color: #fff

  display: grid
  gap: $ch-hover-button-group-gap
  grid-auto-flow: column
  grid-auto-columns: minmax(0, 1fr)
  align-items: stretch
  justify-content: center
  min-height: 3.25rem
  padding: 0.75rem 1rem
  background-color: var(--ch-hover-button-group-background-color, #fff)
  border-radius: 1.125rem // There is no such radius in global variables and it is used only here
  box-shadow: 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858), 0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792), 0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742), 0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532)

  & > :not(:last-of-type) // Every direct child except first one
    position: relative

    &:after
      content: ''
      position: absolute
      right: calc($ch-hover-button-group-gap / 2 * -1 - 1px)
      width: 2px
      height: 1.75rem
      background-color: #F1F2F7
</style>
