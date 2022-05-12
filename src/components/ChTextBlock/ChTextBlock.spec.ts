import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChTextBlock from './ChTextBlock.vue'

describe('ChTextBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(ChTextBlock, { label: 'Hello Vitest' })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
