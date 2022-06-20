import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import { useModalBottomSheetController } from '@/composable/use-modal-bottom-sheet-controller'
import type { ModalBottomSheetController } from '@/composable/use-modal-bottom-sheet-controller'
import { findByTestId } from '@/__test__/utils'
import ChBottomSheet from './ChBottomSheet.vue'

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

let bottomSheet: VueWrapper | null = null
let modalBottomSheetController: ModalBottomSheetController | null = null
const modalParams = { ...BottomSheetHeader.params, ...BottomSheetContent.params }

describe('ChBottomSheet', () => {
  beforeEach(() => {
    modalBottomSheetController = useModalBottomSheetController()
    modalBottomSheetController?.show('example-bottom-sheet', modalParams)
    bottomSheet = mount(ChBottomSheet, {
      props: {
        name: 'example-bottom-sheet'
      },
      slots: {
        header: BottomSheetHeader.template,
        default: BottomSheetContent.template
      },
      global: {
        provide: {
          modalBottomSheetController
        }
      }
    })
  })

  afterEach(() => {
    bottomSheet = null
    modalBottomSheetController = null
  })

  it('should show bottom sheet', async () => {
    await bottomSheet?.vm.$nextTick()
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(true)
  })

  it('should hide bottom sheet', async () => {
    await bottomSheet?.vm.$nextTick()
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(true)

    modalBottomSheetController?.hide('example-bottom-sheet')
    await bottomSheet?.vm.$nextTick()
    expect(findByTestId(bottomSheet as VueWrapper, 'bottom-sheet-container').exists()).toBe(false)
  })

  it('should display bottom sheet header slot content', async () => {
    await bottomSheet?.vm.$nextTick()
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
    await bottomSheet?.vm.$nextTick()
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
})
