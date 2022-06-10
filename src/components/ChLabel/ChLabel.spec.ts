import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChLabel from './ChLabel.vue'

describe('ChLabel', () => {
  it("should correctly display slot's content", () => {
    const wrapper = mount(ChLabel, { slots: { default: 'Label content' } })
    expect(wrapper.text()).toContain('Label content')
  })
})
