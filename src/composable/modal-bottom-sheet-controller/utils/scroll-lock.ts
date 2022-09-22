import { lock, unlock, clearBodyLocks } from 'tua-body-scroll-lock'

/**
 * Returns element that should preserve scroll while all other components' scroll is locked
 */
const getNode = (name: string): HTMLElement | null =>
  document.querySelector(`[data-preserve-scroll='${name}']`)

export const lockScroll = (scrollableElemName: string) => lock(getNode(scrollableElemName))
export const unlockScroll = (scrollableElemName: string) => unlock(getNode(scrollableElemName))
export const clearAllLocks = () => clearBodyLocks()
