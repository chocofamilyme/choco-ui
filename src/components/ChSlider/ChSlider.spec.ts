import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { findByTestId } from '@/__test__/utils'
import ChSlider from './ChSlider.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { Options } from 'nouislider'

describe('ChSlider', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ChSlider, { props: { title: 'Hello Vitest' } })
    expect(wrapper.html()).toContain('Hello Vitest')
  })

  it('should render slot and pass slider values into it', async () => {
    const RANGE = { min: [0], max: [5] }
    const wrapper = shallowMount(ChSlider, {
      props: {
        configs: {
          range: RANGE,
          start: [RANGE.min[0], RANGE.max[0]]
        } as Options
      },
      slots: {
        labels: `
          <template #labels="{ labels }">
            <span>{{ labels }}</span>
            <span data-test-id="lower-value-label">{{ labels[0] }}</span>
            <span data-test-id="upper-value-label">{{ labels[1] }}</span>
          </template>
        `
      }
    })

    await wrapper.vm.$nextTick()
    const lowerLabel = findByTestId(wrapper as VueWrapper, 'lower-value-label')
    const upperLabel = findByTestId(wrapper as VueWrapper, 'upper-value-label')
    expect(parseInt(lowerLabel.text())).toBe(RANGE.min[0])
    expect(parseInt(upperLabel.text())).toBe(RANGE.max[0])
  })

  it('should expose sliderAPI object of type noUiSlider.API', () => {
    const wrapper = shallowMount(ChSlider)
    expect(wrapper.vm.sliderAPI).toBeTruthy()
    expect(wrapper.vm.sliderAPI).toMatchInlineSnapshot(
      {
        target: expect.any(HTMLElement),
        options: expect.any(Object)
      },
      `
        {
          "__moveHandles": [Function],
          "destroy": [Function],
          "get": [Function],
          "getOrigins": [Function],
          "getPositions": [Function],
          "getTooltips": [Function],
          "off": [Function],
          "on": [Function],
          "options": Any<Object>,
          "pips": [Function],
          "removePips": [Function],
          "removeTooltips": [Function],
          "reset": [Function],
          "set": [Function],
          "setHandle": [Function],
          "steps": [Function],
          "target": Any<HTMLElement>,
          "updateOptions": [Function],
        }
      `
    )
  })
})
