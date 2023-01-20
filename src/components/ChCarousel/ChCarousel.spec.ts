import { h, resolveComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'

import { findByTestId, findAllByTestId } from '@/__test__/utils'
import ChCarousel from './ChCarousel.vue'
import ChCarouselItem from './ChCarouselItem.vue'
import ChCarouselBullets from './ChCarouselBullets.vue'

const itemsIds = [1, 2, 3]
const carouselItemTestId = 'carousel-item'

const renderCarouselItem = () =>
  h(
    resolveComponent('ChCarouselItem'),
    { 'data-test-id': carouselItemTestId },
    () => 'Carousel item'
  )

const renderCarouselContent = () => ({
  name: 'ChCarouselTest',
  components: { ChCarouselItem },
  render: () => itemsIds.map(renderCarouselItem)
})

const getWrapper = () =>
  mount(ChCarousel, {
    slots: {
      default: renderCarouselContent(),
      bullets: ChCarouselBullets
    }
  })

describe('ChCarousel', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = getWrapper()
  })

  it('should render all carousel items in default slot', () => {
    expect(findAllByTestId(wrapper, carouselItemTestId).length).toBe(itemsIds.length)
  })

  it('should render bullets in bullets slot', () => {
    expect(findByTestId(wrapper, 'carousel-bullets-container').exists()).toBe(true)
  })

  it('should render the same number of bullets and carousel items', async () => {
    await wrapper.vm.$nextTick() // Wait next tick for bullets to render
    expect(findAllByTestId(wrapper, 'carousel-bullets').length).toBe(itemsIds.length)
  })
})
