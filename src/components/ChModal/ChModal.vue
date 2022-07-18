<template>
  <transition name="ch-modal-fade">
    <section
      v-if="controller?.isVisible(name)"
      class="ch-modal"
      :data-disable-scroll-name="name"
      data-test-id="modal-element"
      @click.self="hideOnOutsideClick"
    >
      <div class="ch-modal__container" data-test-id="modal-container">
        <slot name="right-action" v-bind="{ hide, params }" />
        <slot name="header" v-bind="{ hide, params }" />
        <div class="ch-modal__body">
          <slot v-bind="{ hide, params }" />
        </div>
      </div>
    </section>
  </transition>
</template>

<script setup lang="ts">
import { computed, inject, watch } from 'vue'
import { injectionKey } from './plugin/injection-key.config'
import type { ModalBottomSheetController } from '@/composable/modal-bottom-sheet-controller/use-modal-bottom-sheet-controller'

const props = defineProps<{
  name: string
  persistent?: boolean
}>()

const controllerInjectionKey = inject<string>(injectionKey) as string
const controller = inject<ModalBottomSheetController>(controllerInjectionKey)

const emit = defineEmits(['onClose'])

if (controller) {
  watch(controller.state, (_, prevState) => {
    const wasActive = prevState.find(elem => elem.activeName === props.name)
    if (!controller.isVisible(props.name) && wasActive) {
      emit('onClose')
    }
  })
}

const hide = () => controller?.hide(props.name)
const hideOnOutsideClick = () => {
  if (!props.persistent) {
    hide()
  }
}

const params = computed(() => controller?.getParams(props.name) || {})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'ChModal' })
</script>

<style lang="sass">
.ch-modal-fade
  &-enter-active,
  &-leave-active
    transition-property: opacity

  &-enter-from,
  &-leave-to
    opacity: 0

.ch-modal
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  width: 100%
  padding: 1rem
  box-sizing: border-box
  background-color: rgba(15 15 17/0.15)
  backdrop-filter: blur(9px) // Not fully supported. Browsers that do not support it simple display gray bg without blur
  z-index: 1000
  transition: 300ms cubic-bezier(0, 0, 0.2, 1)

  &__container
    position: relative
    display: flex
    flex-direction: column
    width: var(--choco-ui-modal-width, 100%)
    max-width: 100%
    max-height: 90%
    box-sizing: border-box
    border-radius: $border-lg
    padding: 1.5rem 1rem 1rem 1rem
    background-color: var(--choco-ui-modal-bg-color, #fff)

  &__body
    max-width: 100%
    overscroll-behavior: none
    overflow-x: hidden
    overflow-y: auto
</style>
