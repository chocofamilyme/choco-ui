<template>
  <div :class="['ch-toggle-button', { 'ch-toggle-button_active': active }]">
    <slot v-if="$slots.default" />
    <template v-else>
      <p class="ch-toggle-button__text">{{ label }}</p>
      <fa-icon
        class="ch-toggle-button__icon ch-toggle-button__icon_right"
        v-if="icon"
        :icon="icon"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  active?: boolean
  label: string
  icon?: string[]
}>()
</script>

<style lang="sass" scoped>
.ch-toggle-button
  border-radius: 12px
  display: flex
  justify-content: center
  align-items: center
  padding: 12px 24px
  border-radius: 8px
  font-style: normal
  font-weight: 400
  font-size: 16px
  line-height: 18px
  text-align: center
  letter-spacing: 0.005em
  cursor: pointer

  &_active
    background: var(--color-light)
    box-shadow: 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858), 0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792), 0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742), 0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532)

  &:not(:first-child)
    margin-left: 8px

  &__icon_left
    margin-right: 8px

  &__icon_right
    margin-left: 8px
</style>
