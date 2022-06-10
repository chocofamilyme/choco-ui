import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChHeader from './ChHeader.vue'

const slotContent = {
  default: 'Header title',
  leftAction: 'Left action',
  rightAction: 'Right action'
}

describe('ChHeader', () => {
  it("should correctly render slots' content", () => {
    const wrapper = mount(ChHeader, {
      slots: {
        default: slotContent.default,
        leftAction: slotContent.leftAction,
        rightAction: slotContent.rightAction
      }
    })
    expect(wrapper.text()).toContain(slotContent.default)
    expect(wrapper.text()).toContain(slotContent.leftAction)
    expect(wrapper.text()).toContain(slotContent.rightAction)
  })
})
