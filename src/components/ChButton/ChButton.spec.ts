import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChButton from './ChButton.vue'

describe('ChButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ChButton, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
