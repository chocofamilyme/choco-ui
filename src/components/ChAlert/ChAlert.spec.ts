import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, afterEach } from 'vitest'

import { findByTestId } from '@/__test__/utils'
import ChAlert from './ChAlert.vue'

const iconSlotContent = 'Icon'
const alertMainContent = 'Alert content'
const footerSlotContent = 'Footer'

const getWrapper = (persistent?: boolean) =>
  mount(ChAlert, {
    props: {
      persistent
    },
    slots: {
      icon: iconSlotContent,
      default: alertMainContent,
      footer: footerSlotContent
    }
  })

describe('ChAlert', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should show alert when show method is called', async () => {
    const wrapper = getWrapper()
    wrapper.vm.show()
    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(findByTestId(wrapper, 'alert-content').exists()).toBe(true)
  })

  it('should hide alert when hide method is called', async () => {
    const wrapper = getWrapper()
    wrapper.vm.show()
    await wrapper.vm.$nextTick()

    wrapper.vm.hide()
    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(findByTestId(wrapper, 'alert-content').exists()).toBe(false)
  })

  it('should automatically hide alert when "duration" time passed', async () => {
    vi.useFakeTimers()
    const wrapper = getWrapper()
    wrapper.vm.show()

    vi.runAllTimers()

    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(findByTestId(wrapper, 'alert-content').exists()).toBe(false)
  })

  it('should not automatically hide alert when persistent props is passed', async () => {
    vi.useFakeTimers()
    const wrapper = getWrapper(true)
    wrapper.vm.show()

    vi.runAllTimers()

    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(findByTestId(wrapper, 'alert-content').exists()).toBe(true)
  })

  it('should hide persistent alert when hide method is called', async () => {
    const wrapper = getWrapper(true)
    wrapper.vm.show()
    await wrapper.vm.$nextTick()

    wrapper.vm.hide()
    await wrapper.vm.$nextTick()
    // @ts-ignore
    expect(findByTestId(wrapper, 'alert-content').exists()).toBe(false)
  })

  it('should have icon slot', async () => {
    const wrapper = getWrapper()
    wrapper.vm.show()
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain(iconSlotContent)
  })

  it('should have footer slot', async () => {
    const wrapper = getWrapper()
    wrapper.vm.show()
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain(footerSlotContent)
  })
})
