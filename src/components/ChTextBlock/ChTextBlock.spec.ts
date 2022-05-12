import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChTextBlock from './ChTextBlock.vue'

describe('ChTextBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(ChTextBlock, { props: { label: 'Hello Vitest' } })
    expect(wrapper.html()).toContain('Hello Vitest')
  })
})
