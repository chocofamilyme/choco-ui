import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToast from './ChToast.vue'

describe('ChToast', () => {
  it("should correctly display slot's content", () => {
    const wrapper = mount(ChToast, { slots: { default: 'Toast content' } })
    expect(wrapper.text()).toContain('Toast content')
  })
})
