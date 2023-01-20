import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ChCarouselItem from './ChCarouselItem.vue'

describe('ChCarouselItem', () => {
  it("should display default slot's content", () => {
    const defaultSlotContent = '<p style="color: red;">Test default slot content</p>'
    const wrapper = shallowMount(ChCarouselItem, {
      slots: {
        default: defaultSlotContent
      }
    })
    expect(wrapper.html()).toContain(defaultSlotContent)
  })
})
