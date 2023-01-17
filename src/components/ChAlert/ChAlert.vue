<template>
  <Transition name="slide-up">
    <div v-if="isVisible" class="ch-alert" data-test-id="alert-content">
      <div class="ch-alert__content">
        <div role="alert" aria-live="polite">
          <slot v-bind="{ content }" />
        </div>
        <slot name="icon" v-bind="{ content }" />
      </div>
      <div v-if="$slots.footer" class="ch-alert__footer">
        <slot name="footer" v-bind="{ content }" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, readonly, onBeforeUnmount } from 'vue'

defineEmits([]) // Workaround to a types generating problem https://github.com/qmhc/vite-plugin-dts/issues/98
const props = defineProps({
  duration: {
    type: Number,
    default: 5000
  },
  persistent: {
    type: Boolean,
    default: false
  }
})

const timeoutId = ref()
const content = ref()

const isVisible = ref(false)
const show = (alertContent?: unknown) => {
  isVisible.value = true
  content.value = alertContent
  if (!props.persistent) {
    timeoutId.value = setTimeout(hide, props.duration)
  }
}
const hide = () => {
  isVisible.value = false
  if (!props.persistent) {
    clearTimeout(timeoutId.value)
  }
}

defineExpose({
  show,
  hide,
  isVisible: readonly(isVisible)
})

onBeforeUnmount(hide)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChAlert'
})
</script>

<style scoped lang="sass">
.slide-up
  &-enter-from, &-leave-to
    transform: translateY(100%)
    opacity: 0

  &-enter-to, &-leave-from
    transform: translateX(0)
    opacity: 1

  &-enter-active, &-leave-active
    transition: all 500ms cubic-bezier(.24,.87,.71,.98)

.ch-alert
  position: absolute
  padding: 1rem
  border-radius: $border-xl
  color: var(--color-light, #fff)
  background-color: var(--color-primary-dark, #000)

  &__content
    display: flex
    align-items: center
    justify-content: space-between

    & > :not(:first-child)
      margin-left: 0.25rem

  &__footer
    margin-top: 0.75rem
</style>
