import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import { findByTestId } from '@/__test__/utils'
import ChInput from './ChInput.vue'

describe('ChInput', () => {
  it('renders properly', () => {
    const wrapper = mount(ChInput, { props: { label: 'Hello Vitest' } })
    expect(wrapper.html()).toContain('Hello Vitest')
  })

  it('should be input by default', () => {
    const wrapper = mount(ChInput)
    expect(findByTestId(wrapper as VueWrapper, 'ch-input-input-component').element.tagName).toBe(
      'INPUT'
    )
  })

  it('should be textarea', () => {
    const wrapper = mount(ChInput, { props: { component: 'textarea' } })
    expect(findByTestId(wrapper as VueWrapper, 'ch-input-input-component').element.tagName).toBe(
      'TEXTAREA'
    )
  })
})
