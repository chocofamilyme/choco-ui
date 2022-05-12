import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToggleButton from './ChToggleButton.vue'

describe('ChToggleButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ChToggleButton, { label: 'Hello Vitest' })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
