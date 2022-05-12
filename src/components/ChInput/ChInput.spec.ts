import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChInput from './ChInput.vue'

describe('ChInput', () => {
  it('renders properly', () => {
    const wrapper = mount(ChInput, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
