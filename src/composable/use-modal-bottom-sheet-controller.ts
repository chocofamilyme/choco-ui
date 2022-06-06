import { ref, readonly } from 'vue'
import type { Ref } from 'vue'

export type ModalBottomSheet = {
  activeName: string
  params: Record<string, unknown>
}

export type ModalBottomSheetController = {
  show: (
    name: string,
    { captureEscape, ...params }?: { captureEscape?: boolean | undefined }
  ) => void
  isVisible: (name: string) => boolean
  getParams: (name: string) => Record<string, unknown>
  hide: (name: string) => void
  state: Readonly<Ref<ModalBottomSheet[]>>
}

export function useModalBottomSheetController() {
  const state = ref<ModalBottomSheet[]>([])
  const escapeHandler = (e: KeyboardEvent) => e.key === 'Escape' && hideLast()

  function isVisible(name: string) {
    return state.value.some(modal => modal.activeName === name)
  }

  function show(name: string, { captureEscape = true, ...params } = {}) {
    if (isVisible(name)) {
      return
    }

    state.value.push({
      activeName: name,
      params: params as ModalBottomSheet
    })

    if (captureEscape) {
      document.addEventListener('keydown', escapeHandler)
    }
  }

  function getParams(name: string) {
    const modal = state.value.find(modal => modal.activeName === name)
    return modal ? modal.params : {}
  }

  function hide(name: string) {
    state.value = state.value.filter(modal => modal.activeName !== name)
    clearEventListenerForEmptystate()
  }

  function hideLast() {
    state.value.pop()

    clearEventListenerForEmptystate()
  }

  function clearEventListenerForEmptystate() {
    if (state.value.length === 0) {
      document.removeEventListener('keydown', escapeHandler)
    }
  }

  return {
    show,
    isVisible,
    getParams,
    hide,
    state: readonly<Ref<ModalBottomSheet[]>>(state)
  }
}
