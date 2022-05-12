import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChSwitch from './ChSwitch.vue'

describe('ChSwitch', () => {
  it('renders properly', () => {
    const wrapper = mount(ChSwitch, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
