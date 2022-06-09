import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChHeaderBackButton from './ChHeaderBackButton.vue'

describe('ChHeaderBackButton', () => {
  it('should emit onBackButtonClick event on click', async () => {
    const wrapper = mount(ChHeaderBackButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted().onBackButtonClick).toBeTruthy()
  })
})
