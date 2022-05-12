import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChInput from './ChInput.vue'

describe('ChInput', () => {
  it('renders properly', () => {
    const wrapper = mount(ChInput, { props: { label: 'Hello Vitest' } })
    expect(wrapper.html()).toContain('Hello Vitest')
  })
})
