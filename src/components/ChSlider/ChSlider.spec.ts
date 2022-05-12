import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChSlider from './ChSlider.vue'

describe('ChSlider', () => {
  it('renders properly', () => {
    const wrapper = mount(ChSlider, { props: { title: 'Hello Vitest' } })
    expect(wrapper.html()).toContain('Hello Vitest')
  })
})
