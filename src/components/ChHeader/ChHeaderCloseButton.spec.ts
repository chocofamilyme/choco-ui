import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChHeaderCloseButton from './ChHeaderCloseButton.vue'

describe('ChHeaderCloseButton', () => {
  it('should emit onCloseButtonClick event on click', async () => {
    const wrapper = mount(ChHeaderCloseButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted().onCloseButtonClick).toBeTruthy()
  })
})
