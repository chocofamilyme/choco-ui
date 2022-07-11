<template>
  <transition name="bottom-sheet-slide-up">
    <div
      v-if="controller?.isVisible(props.name)"
      class="bottom-sheet-container"
      data-test-id="bottom-sheet-container"
    >
      <div
        class="bottom-sheet-container__blackout"
        @touchstart="onBlackoutTouchStart"
        @touchend="onBlackoutTouchEnd"
        @click="hide"
      ></div>
      <div class="bottom-sheet">
        <div
          ref="bottomSheetRef"
          :style="{ transform: `translateY(${bottomSheetState.sheetShift}px)` }"
          class="bottom-sheet__content"
          role="dialog"
          aria-modal="true"
          @touchstart="onSheetTouchStart"
          @touchmove="onSheetTouchMove"
          @touchend="onSheetTouchEnd"
        >
          <div class="bottom-sheet__handle-bar-container" @click="hide">
            <span class="bottom-sheet__handle-bar"></span>
          </div>
          <div data-test-id="bottom-sheet-header">
            <slot
              name="header"
              v-bind="{ hide, params: controller?.getParams(props.name) || {} }"
            ></slot>
          </div>
          <div ref="contentRef" class="bottom-sheet__body" data-test-id="bottom-sheet-content">
            <slot
              v-bind="{
                hide,
                params: controller?.getParams(props.name) || {}
              }"
            ></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, inject, watch, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import type { ModalBottomSheetController } from '@/composable/modal-bottom-sheet-controller/use-modal-bottom-sheet-controller'

const props = defineProps<{
  name: string
}>()

const emit = defineEmits(['onClose'])

const controller = inject<ModalBottomSheetController>('modalBottomSheetController')
const bottomSheetRef = ref()
const contentRef = ref()
const bottomSheetState = ref({
  blackoutTouchStarted: false,
  sheetTouchStarted: false,
  sheetTouchStart: 0,
  sheetShift: 0
})

if (controller) {
  watch(controller.state, (_, prevState) => {
    const wasActive = prevState.find(elem => elem.activeName === props.name)
    if (!controller.isVisible(props.name) && wasActive) {
      emit('onClose')
    }
  })
}

onBeforeUnmount(() => hide())

const onBlackoutTouchStart = () => (bottomSheetState.value.blackoutTouchStarted = true)

const onBlackoutTouchEnd = () => {
  if (bottomSheetState.value.blackoutTouchStarted) {
    bottomSheetState.value.blackoutTouchStarted = false
    hide()
  }
}

const extractTouch = (e: TouchEvent) => e.changedTouches[0].clientY

const onSheetTouchStart = (e: TouchEvent) => {
  bottomSheetState.value.sheetTouchStarted =
    (contentRef as Ref<HTMLDivElement>)?.value.scrollTop === 0
  bottomSheetState.value.sheetTouchStart = extractTouch(e)
}

const onSheetTouchMove = (e: TouchEvent) => {
  if (bottomSheetState.value.sheetTouchStarted) {
    const shift = extractTouch(e) - bottomSheetState.value.sheetTouchStart
    bottomSheetState.value.sheetShift = Math.max(0, shift)
  }
}

const onSheetTouchEnd = () => {
  const bottomSheetHeight = (bottomSheetRef.value as HTMLElement).offsetHeight
  const closingLimit = bottomSheetHeight < 200 ? bottomSheetHeight * 0.3 : 100
  if (
    bottomSheetState.value.sheetTouchStarted &&
    bottomSheetState.value.sheetShift >= closingLimit
  ) {
    hide()
  }

  bottomSheetState.value.sheetTouchStarted = false
  bottomSheetState.value.sheetShift = 0
}

const hide = () => controller?.hide(props.name)
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChBottomSheet'
})
</script>

<style lang="sass" scoped>
.bottom-sheet-slide-up
  &-enter-active,
  &-leave-active
    transition: 500ms

  &-enter-active > .bottom-sheet-container__blackout,
  &-leave-active > .bottom-sheet-container__blackout
    transition: 500ms

  &-enter-from > .bottom-sheet-container__blackout,
  &-leave-to > .bottom-sheet-container__blackout
    opacity: 0

  &-enter-active > .bottom-sheet,
  &-leave-active > .bottom-sheet
    transition: 200ms ease-in

  &-enter-from > .bottom-sheet,
  &-leave-to > .bottom-sheet
    transform: translateY(100%)

.bottom-sheet-container
  --color-primary-dark: 15 15 17

  z-index: 1000
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex

  &__blackout
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 10
    background-color: rgba(var(--color-primary-dark)/0.15)
    backdrop-filter: blur(9px) // Not fully supported. Browsers that do not support it simple display gray bg without blur

.bottom-sheet
  position: absolute
  z-index: 10
  bottom: 0
  display: flex
  width: 100%
  max-height: 95%

  &__content
    position: relative
    width: 100%
    display: flex
    flex-direction: column
    background-color: var(--choco-ui-bottom-sheet-bg-color, #fff)
    overflow: hidden
    border-top-left-radius: 12px
    border-top-right-radius: 12px
    transition: 300ms cubic-bezier(0, 0, 0.2, 1)
    touch-action: pan-y

  &__handle-bar-container
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0

  &__handle-bar
    margin: 8px 0
    height: 6px
    width: 73px
    background-color: #D4D3DF
    border-radius: 42px

  &__body
    max-height: 100vh
    overscroll-behavior: none
    overflow-x: hidden
    overflow-y: auto
</style>
