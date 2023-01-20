import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ChCarouselCardItem from './ChCarouselCardItem.vue'

describe('ChCarouselCardItem', () => {
  it("should display slots' content", () => {
    const defaultSlotContent = '<p style="color: red;">Test default slot content</p>'
    const leftSlotContent = '<span>Test left slot content</span>'
    const wrapper = shallowMount(ChCarouselCardItem, {
      slots: {
        left: leftSlotContent,
        default: defaultSlotContent
      }
    })
    expect(wrapper.html()).toContain(defaultSlotContent)
    expect(wrapper.html()).toContain(leftSlotContent)
  })
})
