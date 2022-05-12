import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChTooltip from './ChTooltip.vue'

describe('ChTooltip', () => {
  it('renders properly', () => {
    const wrapper = mount(ChTooltip, { label: 'Hello Vitest' })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
