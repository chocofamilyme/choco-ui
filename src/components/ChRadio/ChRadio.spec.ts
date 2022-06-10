import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChRadio from './ChRadio.vue'

describe('ChRadio', () => {
  it('renders properly', () => {
    const defaultText = 'Hello Vitest'
    const wrapper = mount(ChRadio, {
      props: { name: defaultText },
      slots: { default: defaultText }
    })
    expect(wrapper.text()).toContain(defaultText)
  })
})
