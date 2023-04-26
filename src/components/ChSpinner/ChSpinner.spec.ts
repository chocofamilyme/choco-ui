import { describe, it, expect, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'

import ChSpinner from './ChSpinner.vue'

describe('ChSpinner', () => {
  let wrapper: VueWrapper | null = null

  const createWrapper = (props: object = {}) => {
    const defaultProps: object = { size: 'base', box: false }

    wrapper = shallowMount(ChSpinner, {
      propsData: { ...defaultProps, ...props }
    })
  }

  afterEach(() => {
    wrapper?.unmount()
    wrapper = null
  })

  it('renders properly with size', () => {
    const size = 'lg'
    createWrapper({ size })
    expect(wrapper?.classes()).toContain(`ch-spinner-container_${size}`)
  })

  it('renders properly with box', () => {
    createWrapper({ box: true })
    expect(wrapper?.classes()).toContain('ch-spinner-container_box')
  })
})
