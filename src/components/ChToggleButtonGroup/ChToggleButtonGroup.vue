<template>
  <div class="ch-toggle-button-group">
    <ch-toggle-button
      v-for="(option, i) in options"
      @click="handleBtnClick(i)"
      :key="i"
      :active="getActiveOption(option, i)"
      :label="typeof option === 'string' ? option : option.label"
      :icon="typeof option === 'string' ? undefined : option.icon"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ChToggleButton from '../ChToggleButton'

interface IOption {
  label: string
  icon: string[]
  active?: boolean
}

defineProps<{
  options: string[] | IOption[]
}>()

const currentActive = ref(0)

function handleBtnClick(index: number) {
  currentActive.value = index
}

let firstMount = true

function getActiveOption(option: IOption | string, index: number) {
  if (typeof option !== 'string' && option.active === true && firstMount) {
    currentActive.value = index
    firstMount = false
  }

  return currentActive.value === index
}
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChToggleButtonGroup'
})
</script>

<style lang="sass" scoped>
.ch-toggle-button-group
  background: var(--color-secondary-grey)
  border-radius: 12px
  padding: 4px
  display: inline-flex
  align-items: center
</style>
