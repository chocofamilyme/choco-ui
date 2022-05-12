import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChTooltip from './ChTooltip.vue'

describe('ChTooltip', () => {
  it('renders properly', async () => {
    const wrapper = mount(ChTooltip, {
      props: {
        label: 'Hello Vitest',
        behaviour: 'click'
      },
      slots: { default: '<button>button</button>' }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('Hello Vitest')
  })
})
