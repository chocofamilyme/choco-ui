import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import { findByTestId } from '@/__test__/utils'
import ChModal from './ChModal.vue'
import { ChModalPlugin } from './index'

const ModalHeader = {
  params: {
    headerButtonText: 'Header button text',
    headerButtonDataTestId: 'modal-header-button'
  },
  template: `
    <template #header="{ hide, params }">
      <h3>Modal header</h3>
      <button @click="hide" :data-test-id="params.headerButtonDataTestId">{{ params.headerButtonText }}</button>
    </template>
  `,
  getParsedTemplate() {
    return `<h3>BottomSheet header</h3><button data-test-id="${this.params.headerButtonDataTestId}">${this.params.headerButtonText}</button>`
  }
}

const ModalContent = {
  params: {
    contentButtonText: 'Content button text',
    contentButtonDataTestId: 'modal-content-button'
  },
  template: `
    <template #default="{ hide, params }">
      <p>Modal content</p>
      <button @click="hide" :data-test-id="params.contentButtonDataTestId">{{ params.contentButtonText }}</button>
    </template>
  `,
  getParsedTemplate() {
    return `<p>Modal content</p><button data-test-id="${this.params.contentButtonDataTestId}">${this.params.contentButtonText}</button>`
  }
}

const modalName = 'example-bottom-sheet'
const modalParams = { ...ModalHeader.params, ...ModalContent.params }

const getWrapper = ({ persistent }: { persistent?: boolean } = {}) =>
  mount(ChModal, {
    props: {
      name: modalName,
      persistent
    },
    slots: {
      header: ModalHeader.template,
      default: ModalContent.template
    },
    global: {
      plugins: [[ChModalPlugin, { controllerInjectionKey: 'modal-controller-for-test' }]]
    }
  }) as VueWrapper

describe('ChModal', () => {
  describe('default modal', () => {
    let modal: VueWrapper | null = null

    beforeEach(async () => {
      ChModalPlugin.controller.show(modalName, modalParams)
      modal = getWrapper()
      await modal.vm.$nextTick() // Need to wait until next tick to modal to appear
    })

    afterEach(() => {
      modal = null
    })

    it('should show modal', async () => {
      expect(findByTestId(modal as VueWrapper, 'modal-container').exists()).toBe(true)
    })

    it('should hide modal', async () => {
      expect(findByTestId(modal as VueWrapper, 'modal-container').exists()).toBe(true)

      ChModalPlugin.controller.hide(modalName)
      await modal?.vm.$nextTick()
      expect(findByTestId(modal as VueWrapper, 'modal-container').exists()).toBe(false)
    })

    it('should emit "onClose" event when modal is hidden', async () => {
      ChModalPlugin.controller.hide(modalName)
      await modal?.vm.$nextTick()
      expect(modal?.emitted('onClose')).toBeTruthy()
    })

    it("should hide modal on header slot's hide method call", async () => {
      const modalHeaderCloseButton = findByTestId(
        modal as VueWrapper,
        ModalHeader.params.headerButtonDataTestId
      )

      await modalHeaderCloseButton.trigger('click')
      expect(findByTestId(modal as VueWrapper, 'modal-container').exists()).toBe(false)
    })

    it("should hide modal on default slot's hide method call", async () => {
      const modalCloseButton = findByTestId(
        modal as VueWrapper,
        ModalContent.params.contentButtonDataTestId
      )

      await modalCloseButton.trigger('click')
      expect(findByTestId(modal as VueWrapper, 'modal-container').exists()).toBe(false)
    })
  })

  describe('persistent modal', () => {
    let persistentModal: VueWrapper | null = null

    beforeEach(async () => {
      ChModalPlugin.controller.show(modalName, modalParams)
      persistentModal = getWrapper({ persistent: true })
      await persistentModal.vm.$nextTick() // Need to wait until next tick to modal to appear
    })

    afterEach(() => {
      persistentModal = null
    })

    it('should not hide persistent modal on outside click', async () => {
      const outsideModalContainer = findByTestId(persistentModal as VueWrapper, 'modal-element')

      await outsideModalContainer.trigger('click')
      expect(findByTestId(persistentModal as VueWrapper, 'modal-container').exists()).toBe(true)
    })

    it('should hide persistent modal on if hide method is called', async () => {
      const modalHeaderCloseButton = findByTestId(
        persistentModal as VueWrapper,
        ModalHeader.params.headerButtonDataTestId
      )

      await modalHeaderCloseButton.trigger('click')
      expect(findByTestId(persistentModal as VueWrapper, 'modal-container').exists()).toBe(false)
    })
  })
})
