import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChCheckbox from './ChCheckbox.vue'

describe('ChCheckbox', () => {
  it('renders properly', () => {
    const wrapper = mount(ChCheckbox, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
