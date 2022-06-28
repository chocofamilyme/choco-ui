<template>
  <div class="ch-text-block">
    <div class="ch-text-block__top">
      <h3 class="ch-text-block__title">{{ label }}</h3>
      <p class="ch-text-block__additional">{{ additional }}</p>
    </div>
    <p class="ch-text-block__desc">{{ description }}</p>
    <div class="ch-text-block__caption">
      <slot v-if="$slots.default" />
      <div class="ch-text-block__caption-item" v-else>
        <fa-icon class="ch-text-block__caption-icon" v-if="icon" :icon="icon" />
        <p class="ch-text-block__caption-text">{{ caption }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string
  additional?: string
  description?: string
  caption?: string
  icon?: string[]
}>()
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChTextBlock'
})
</script>

<style lang="sass" scoped>
.ch-text-block

  &__title
    font-style: normal
    font-weight: 900
    font-size: 18px
    line-height: 110%
    color: var(--color-primary-dark)

  &__desc
    color: var(--color-secondary-text)
    font-size: 12px
    line-height: 14px
    letter-spacing: 0.005em
    margin: 4px 0

  &__caption
    display: flex
    align-items: center

  &__caption-item
    display: flex
    align-items: center
    margin: 4px 0

    &:not(:first-child)
      margin-left: 8px

  &__caption-text
    font-weight: 400
    font-size: 12px
    line-height: 14px
    letter-spacing: 0.005em

  &__caption-icon
    margin-right: 4px

  &__top
    display: flex
    align-items: center

  &__additional
    color: var(--color-secondary-text)
    font-weight: 500
    font-size: 12px
    line-height: 115%
    display: flex
    align-items: center
    letter-spacing: -0.015em
    margin-left: 4px
</style>
