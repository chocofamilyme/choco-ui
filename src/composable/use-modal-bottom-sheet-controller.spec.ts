import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useModalBottomSheetController } from './use-modal-bottom-sheet-controller'

let modalBottomSheetController = null

describe('use-modal-bottom-sheet', () => {
  beforeEach(() => {
    modalBottomSheetController = useModalBottomSheetController()
  })

  afterEach(() => {
    modalBottomSheetController = null
  })

  it('should set modal visible', () => {
    modalBottomSheetController.show('test-modal')
    expect(modalBottomSheetController.isVisible('test-modal')).toBe(true)
    expect(modalBottomSheetController.isVisible('non-existing-modal')).toBe(false)
  })

  it('should hide visible modal', () => {
    modalBottomSheetController.show('test-modal')
    expect(modalBottomSheetController.isVisible('test-modal')).toBe(true)

    modalBottomSheetController.hide('test-modal')
    expect(modalBottomSheetController.isVisible('test-modal')).toBe(false)
  })

  it('should get modal params', () => {
    const modalParams = { foo: 'bar', test: 123 }
    modalBottomSheetController.show('test-modal', modalParams)
    expect(modalBottomSheetController.getParams('test-modal')).toMatchObject(modalParams)
  })

  describe('keydown', () => {
    beforeEach(() => {
      vi.restoreAllMocks()
    })

    const addEventListenerMock = vi.fn()

    it('should add event listener when modal is shown by default', () => {
      document.addEventListener = addEventListenerMock

      modalBottomSheetController.show('test-modal')

      expect(addEventListenerMock).toHaveBeenCalled()
      expect(addEventListenerMock).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should not add event listener when modal is shown with "captureEscape: false" parameter', () => {
      document.addEventListener = addEventListenerMock

      modalBottomSheetController.show('test-modal', {
        captureEscape: false
      })

      expect(addEventListenerMock).not.toHaveBeenCalled()
    })
  })
})
