import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import { findAllByTestId } from '@/__test__/utils'
import { carouselConfig } from './config'
import ChCarouselBullets from './ChCarouselBullets.vue'

const getWrapper = (numberOfSlides: number) =>
  mount(ChCarouselBullets, {
    global: {
      provide: {
        [carouselConfig.numberOfSlidesInjectionKey]: numberOfSlides
      }
    }
  })

describe('ChCarouselBullets', () => {
  it('should display correct number of bullets', () => {
    const numberOfSlides = 3
    const wrapper = getWrapper(numberOfSlides)
    expect(findAllByTestId(wrapper, 'carousel-bullets').length).toBe(numberOfSlides)
  })

  it('should not display bullets if number of slides is 0', () => {
    const numberOfSlides = 0
    const wrapper = getWrapper(numberOfSlides)
    expect(findAllByTestId(wrapper, 'carousel-bullets').length).toBe(numberOfSlides)
  })
})
