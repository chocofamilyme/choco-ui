import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import { findByTestId } from '@/__test__/utils'
import ChInput from './ChInput.vue'

const findInput = (wrapper: VueWrapper) => findByTestId(wrapper, 'ch-input-input-component')

describe('ChInput', () => {
  it('renders properly', () => {
    const wrapper = mount(ChInput, { props: { label: 'Hello Vitest' } })
    expect(wrapper.html()).toContain('Hello Vitest')
  })

  it('should be input by default', () => {
    const wrapper = mount(ChInput)
    expect(findInput(wrapper as VueWrapper).element.tagName).toBe('INPUT')
  })

  it('should be textarea', () => {
    const wrapper = mount(ChInput, { props: { component: 'textarea' } })
    expect(findInput(wrapper as VueWrapper).element.tagName).toBe('TEXTAREA')
  })

  it('should be input of type "text" by default', () => {
    const wrapper = mount(ChInput)
    expect(findInput(wrapper as VueWrapper).element.getAttribute('type')).toBe('text')
  })

  it('should be input of type "number"', () => {
    const wrapper = mount(ChInput, { props: { type: 'number' } })
    expect(findInput(wrapper as VueWrapper).element.getAttribute('type')).toBe('number')
  })
})
