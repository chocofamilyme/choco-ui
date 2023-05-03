import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import { findByTestId } from '@/__test__/utils'
import ChBottomSheet from './ChBottomSheet.vue'
import { ChBottomSheetPlugin } from './index'

const BottomSheetHeader = {
  params: {
    headerButtonText: 'Header button text',
    headerButtonDataTestId: 'bottom-sheet-header-button'
  },
  template: `
    <template #header="{ hide, params }">
      <h3>BottomSheet header</h3>
      <button @click="hide" :data-test-id="params.headerButtonDataTestId">{{ params.headerButtonText }}</button>
    </template>
  `,
  getParsedTemplate() {
    return `<h3>BottomSheet header</h3><button data-test-id="${this.params.headerButtonDataTestId}">${this.params.headerButtonText}</button>`
  }
}

const BottomSheetContent = {
  params: {
    contentButtonText: 'Content button text',
    contentButtonDataTestId: 'bottom-sheet-content-button'
  },
  template: `
    <template #default="{ hide, params }">
      <p>BottomSheet content</p>
      <button @click="hide" :data-test-id="params.contentButtonDataTestId">{{ params.contentButtonText }}</button>
    </template>
  `,
  getParsedTemplate() {
    return `<p>BottomSheet content</p><button data-test-id="${this.params.contentButtonDataTestId}">${this.params.contentButtonText}</button>`
  }
}

const bottomSheetName = 'example-bottom-sheet'
let bottomSheet: VueWrapper | null = null
const modalParams = { ...BottomSheetHeader.params, ...BottomSheetContent.params }

describe('ChBottomSheet', () => {
  beforeEach(async () => {
    ChBottomSheetPlugin.controller.show(bottomSheetName, modalParams)
    bottomSheet = mount(ChBottomSheet, {
      props: {
        name: bottomSheetName,
        persistent: false
      },
      slots: {
        header: BottomSheetHeader.template,
        default: BottomSheetContent.template
      },
      global: {
        plugins: [
          [ChBottomSheetPlugin, { controllerInjectionKey: 'bottom-sheet-controller-for-test' }]
        ]
      }
    }) as VueWrapper
    await bottomSheet.vm.$nextTick() // Need to wait until next tick to bottom sheet to appear
  })

  afterEach(() => {
    bottomSheet = null
  })

  it('should show bottom sheet', async () => {
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(true)
  })

  it('should hide bottom sheet', async () => {
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(true)

    ChBottomSheetPlugin.controller.hide(bottomSheetName)
    await bottomSheet?.vm.$nextTick()
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(false)
  })

  it('should emit "onOpen" event when bottom sheet is show', async () => {
    ChBottomSheetPlugin.controller.hide(bottomSheetName)
    await bottomSheet?.vm.$nextTick()

    ChBottomSheetPlugin.controller.show(bottomSheetName)
    await bottomSheet?.vm.$nextTick()
    expect(bottomSheet?.emitted('onOpen')).toBeTruthy()
  })

  it('should emit "onClose" event when bottom sheet is hidden', async () => {
    ChBottomSheetPlugin.controller.hide(bottomSheetName)
    await bottomSheet?.vm.$nextTick()
    expect(bottomSheet?.emitted('onClose')).toBeTruthy()
  })

  it('should ignore blackout click if has persistent', async () => {
    bottomSheet?.setProps({ name: bottomSheetName, persistent: true })
    await bottomSheet?.vm.$nextTick()
    findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-blackout').trigger('click')
    expect(bottomSheet?.emitted('onClose')).toBeFalsy()
  })

  it('should emit "onSheetTouchEnd" event when the sheet touch on header is interrupted', () => {
    const bottomSheetInstance = findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-header')
    bottomSheetInstance.trigger('touchstart')
    bottomSheetInstance.trigger('touchmove')
    bottomSheetInstance.trigger('touchend')
    expect(bottomSheet?.emitted('onSheetTouchEnd')).toBeTruthy()
  })

  it('should emit "onSheetTouchEnd" event when the sheet touch on content is interrupted', () => {
    const bottomSheetInstance = findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-content')
    bottomSheetInstance.trigger('touchstart')
    bottomSheetInstance.trigger('touchmove')
    bottomSheetInstance.trigger('touchend')
    expect(bottomSheet?.emitted('onSheetTouchEnd')).toBeTruthy()
  })

  it('should emit "onHandleBarClick" event when handle bar clicked', () => {
    findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-handle-bar').trigger('click')
    expect(bottomSheet?.emitted('onHandleBarClick')).toBeTruthy()
  })

  it('should display bottom sheet header slot content', async () => {
    const bottomSheetHeader = findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-header')
    expect(bottomSheetHeader.exists()).toBe(true)
    expect(bottomSheetHeader.element.innerHTML).toBe(BottomSheetHeader.getParsedTemplate())
  })

  it("should hide bottom sheet on header slot's hide method call", async () => {
    const bottomSheetHeaderCloseButton = findByTestId(
      bottomSheet as VueWrapper,
      BottomSheetHeader.params.headerButtonDataTestId
    )

    await bottomSheetHeaderCloseButton.trigger('click')
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(false)
  })

  it('should display bottom sheet content', async () => {
    const bottomSheetContent = findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-content')
    expect(bottomSheetContent.exists()).toBe(true)
    expect(bottomSheetContent.element.innerHTML).toBe(BottomSheetContent.getParsedTemplate())
  })

  it("should hide bottom sheet on default slot's hide method call", async () => {
    const bottomSheetContentCloseButton = findByTestId(
      bottomSheet as VueWrapper,
      BottomSheetContent.params.contentButtonDataTestId
    )

    await bottomSheetContentCloseButton.trigger('click')
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(false)
  })

  it('should lock body when bottom sheet is shown', async () => {
    const bodyHtmlElement = document.querySelector('body')
    expect(bodyHtmlElement?.style.overflow).toBe('hidden')
  })

  it('should unlock body when bottom sheet is hidden', async () => {
    ChBottomSheetPlugin.controller.hide(bottomSheetName)
    await bottomSheet?.vm.$nextTick()
    const bodyHtmlElement = document.querySelector('body')
    expect(bodyHtmlElement?.style.overflow).toBe('')
  })

  it('should not lock body when bottom sheet is shown with param shouldLockScroll = false', async () => {
    ChBottomSheetPlugin.controller.hide(bottomSheetName)
    ChBottomSheetPlugin.controller.show(bottomSheetName, {
      ...BottomSheetHeader.params,
      ...BottomSheetContent.params,
      shouldLockScroll: false
    })
    await bottomSheet?.vm.$nextTick()
    const bodyHtmlElement = document.querySelector('body')
    expect(bodyHtmlElement?.style.overflow).toBe('')
  })
})
