import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { findByTestId } from '@/__test__/utils'
import ChCheckbox from './ChCheckbox.vue'

import type { VueWrapper } from '@vue/test-utils'

const getWrapper = (params?: Record<string, unknown>) =>
  shallowMount(ChCheckbox, params) as VueWrapper

describe('ChCheckbox', () => {
  it('renders properly', () => {
    const wrapper = getWrapper({ slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('should display label text from props', () => {
    const labelContent = 'Label content'
    const wrapper = getWrapper({ props: { label: labelContent } })
    expect(wrapper.text()).toBe(labelContent)
  })

  it("should render slot's content instead of label prop", () => {
    const slotContent = 'Slot content'
    const wrapper = getWrapper({
      props: { label: 'Not to be displayed' },
      slots: { default: slotContent }
    })
    expect(wrapper.text()).toBe(slotContent)
  })

  it('should set input checked attr to true on click', async () => {
    const wrapper = getWrapper()
    await wrapper.trigger('click')
    const checkbox = findByTestId(wrapper, 'checkbox-input').element as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('should not set input checked attr for diabled checkbox', async () => {
    const wrapper = getWrapper({ props: { disabled: true } })
    await wrapper.trigger('click')
    const checkbox = findByTestId(wrapper, 'checkbox-input').element as HTMLInputElement
    expect(checkbox.checked).toBe(false)
  })
})
