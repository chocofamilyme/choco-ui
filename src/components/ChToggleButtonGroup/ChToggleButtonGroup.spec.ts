import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToggleButtonGroup from './ChToggleButtonGroup.vue'

describe('ChToggleButtonGroup', () => {
  it('renders properly', () => {
    const wrapper = mount(ChToggleButtonGroup, {
      slots: {
        default: 'Label 2'
      },
      props: {
        currentId: '1'
      }
    })
    expect(wrapper.html()).toContain('Label 2')
  })
})
