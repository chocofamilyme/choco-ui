import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChHeader from './ChHeader.vue'

describe('ChHeader', () => {
  it("should correctly render slots' content", () => {
    const wrapper = mount(ChHeader, {
      slots: {
        default: 'Header title',
        leftAction: 'Left action',
        rightAction: 'Right action'
      }
    })
    expect(wrapper.text()).toContain('Header title')
    expect(wrapper.text()).toContain('Left action')
    expect(wrapper.text()).toContain('Right action')
  })
})
