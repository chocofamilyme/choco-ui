import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToast from './ChToast.vue'

const toastContent = 'Toast content'

describe('ChToast', () => {
  it("should correctly display slot's content", () => {
    const wrapper = mount(ChToast, { slots: { default: toastContent } })
    expect(wrapper.text()).toContain(toastContent)
  })
})
