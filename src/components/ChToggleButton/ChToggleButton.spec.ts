import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToggleButton from './ChToggleButton.vue'

describe('ChToggleButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ChToggleButton, {
      slots: {
        default: 'Hello Vitest'
      },
      props: {
        name: 'toggle-button',
        id: '1'
      }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
