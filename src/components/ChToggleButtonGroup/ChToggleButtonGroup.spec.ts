import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChToggleButtonGroup from './ChToggleButtonGroup.vue'
import { WithLabel } from './ChToggleButtonGroup.stories.js'

describe('ChToggleButtonGroup', () => {
  it('renders properly', () => {
    const wrapper = mount(ChToggleButtonGroup, { props: { ...WithLabel.args } })
    expect(wrapper.html()).toContain('Label 2')
  })
})
