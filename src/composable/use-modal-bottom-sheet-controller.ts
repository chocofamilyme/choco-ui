import { ref, readonly } from 'vue'
import type { Ref } from 'vue'

export type ModalBottomSheet = {
  activeName: string
  params: Record<string, unknown>
}

type ModalBottomSheetParameters = Record<string, unknown>

export type ModalBottomSheetController = {
  show: (name: string, params: ModalBottomSheetParameters) => void
  isVisible: (name: string) => boolean
  getParams: (name: string) => ModalBottomSheetParameters
  hide: (name: string) => void
  state: Readonly<Ref<ModalBottomSheet[]>>
}

export function useModalBottomSheetController() {
  const state = ref<ModalBottomSheet[]>([])

  function isVisible(name: string) {
    return state.value.some(modal => modal.activeName === name)
  }

  function show(name: string, params: ModalBottomSheetParameters) {
    if (isVisible(name)) {
      return
    }

    state.value.push({
      activeName: name,
      params: params as ModalBottomSheet
    })
  }

  function getParams(name: string) {
    const modal = state.value.find(modal => modal.activeName === name)
    return modal ? modal.params : {}
  }

  function hide(name: string) {
    state.value = state.value.filter(modal => modal.activeName !== name)
  }

  return {
    show,
    isVisible,
    getParams,
    hide,
    state: readonly<Ref<ModalBottomSheet[]>>(state)
  }
}
