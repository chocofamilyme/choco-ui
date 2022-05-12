import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToggleButtonGroup from './ChToggleButtonGroup.vue'

describe('ChToggleButtonGroup', () => {
  it('renders properly', () => {
    const wrapper = mount(ChToggleButtonGroup, { label: 'Hello Vitest' })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
