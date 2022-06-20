import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useModalBottomSheetController } from './use-modal-bottom-sheet-controller'
import type { ModalBottomSheetController } from './use-modal-bottom-sheet-controller'

let modalBottomSheetController: ModalBottomSheetController | null = null

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
})
