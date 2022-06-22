import type { VueWrapper } from '@vue/test-utils'

export function findByTestId(wrapper: VueWrapper, id: string) {
  return wrapper.find(`[data-test-id="${id}"]`)
}
