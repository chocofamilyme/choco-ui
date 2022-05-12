import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChSlider from './ChSlider.vue'

describe('ChSlider', () => {
  it('renders properly', () => {
    const wrapper = mount(ChSlider, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})