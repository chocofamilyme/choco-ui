import { ref, readonly, nextTick } from 'vue'
import type { Ref } from 'vue'
import { lockScroll, unlockScroll, clearAllLocks } from './utils/scroll-lock'

export type ModalBottomSheet = {
  activeName: string
  params: Record<string, unknown>
}

type ModalBottomSheetParameters = Record<string, unknown> & {
  shouldLockScroll?: boolean
}

export type ModalBottomSheetController = ReturnType<typeof useModalBottomSheetController>

export function useModalBottomSheetController() {
  const state = ref<ModalBottomSheet[]>([])

  function isVisible(name: string): boolean {
    return state.value.some(modal => modal.activeName === name)
  }

  function show(
    name: string,
    { shouldLockScroll = true, ...params }: ModalBottomSheetParameters = {}
  ) {
    if (isVisible(name)) {
      return
    }

    const newItem = {
      activeName: name,
      params: params as ModalBottomSheet
    }

    state.value = [newItem, ...state.value]

    if (shouldLockScroll) {
      nextTick(() => lockScroll(name))
    }
  }

  function getParams(name: string): Record<string, unknown> {
    const modal = state.value.find(modal => modal.activeName === name)
    return modal ? modal.params : {}
  }

  function hide(name: string) {
    /**
     * Need to unlock scroll the same time it was locked.
     * Otherwise counter of locked scrolls goes to negative and breaks on the next unlocks
     */
    if (isVisible(name)) {
      unlockScroll(name)
      state.value = state.value.filter(modal => modal.activeName !== name)
    }
  }

  function onDestroy(name: string) {
    clearAllLocks()
    state.value = state.value.filter(modal => modal.activeName !== name)
  }

  return {
    show,
    isVisible,
    getParams,
    hide,
    onDestroy,
    state: readonly<Ref<ModalBottomSheet[]>>(state)
  }
}
