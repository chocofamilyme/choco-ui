import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChRadio from './ChRadio.vue'

describe('ChRadio', () => {
  it('renders properly', () => {
    const wrapper = mount(ChRadio, {
      props: { name: 'Hello Vitest' },
      slots: { default: 'Hello Vitest' }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
