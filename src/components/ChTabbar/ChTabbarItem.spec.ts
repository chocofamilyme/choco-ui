import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { findByTestId } from '@/__test__/utils'
import ChTabbarItem from './ChTabbarItem.vue'

describe('ChTabbarItem', () => {
  it('should display badge amount', () => {
    const badgeAmount = '4'
    const wrapper = shallowMount(ChTabbarItem, { props: { badgeAmount } })
    expect(findByTestId(wrapper, 'tabbar-badge').text()).toBe(badgeAmount)
  })

  it('should not display badge if badgeAmount prop is not provided', () => {
    const wrapper = shallowMount(ChTabbarItem)
    expect(findByTestId(wrapper, 'tabbar-badge').isVisible()).toBe(false)
  })
})
