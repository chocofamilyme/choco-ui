import ChCarousel from './ChCarousel.vue'
import ChCarouselItem from './ChCarouselItem.vue'
import ChCarouselCardItem from './ChCarouselCardItem.vue'
import ChCarouselBullets from './ChCarouselBullets.vue'

export default {
  title: 'ChCarousel',
  component: ChCarousel,
  argTypes: {}
}

const Template = (_, { parameters }) => ({
  components: {
    ChCarousel,
    ChCarouselCardItem,
    ChCarouselBullets,
    ChCarouselItem
  },
  setup() {
    return { parameters }
  },
  template: `
    <div style="max-width: 375px; height: 100vh; padding: 20px 0; background-color: #F1F2F7">
      <ChCarousel>
        <template #default>
          <ChCarouselCardItem>
            <template #left>
              <span>Нет фото</span>
            </template>
            <div>
              <h3>Астана — Лондон</h3>
              <p>22 февр, 15:25 – 23 февр, 11:15</p>
            </div>
          </ChCarouselCardItem>
          <template v-if="!parameters.isStandalone">
            <ChCarouselCardItem>
              <template #left>
                <span>Нет фото</span>
              </template>
              <div>
                <h3>Лондон — Астана</h3>
                <p>23 февр, 15:25 – 24 февр, 15:15</p>
              </div>
            </ChCarouselCardItem>
            <ChCarouselCardItem>
              <template #left>
                <span>Нет фото</span>
              </template>
              <div>
                <h3>Астана — Алматы</h3>
                <p>26 февр, 15:25 – 27 февр, 11:15</p>
              </div>
            </ChCarouselCardItem>
            <ChCarouselCardItem>
              <template #left>
                <span>Нет фото</span>
              </template>
              <div>
                <h3>Алматы — Лондон</h3>
                <p>28 февр, 15:25 – 01 мар, 11:15</p>
              </div>
            </ChCarouselCardItem>
          </template>
        </template>
        <template v-if="parameters.withBullets" #bullets>
          <ChCarouselBullets />
        </template>
      </ChCarousel>
    </div>
  `
})

const TemplateWithGeneralItems = () => ({
  components: {
    ChCarousel,
    ChCarouselBullets,
    ChCarouselItem
  },
  template: `
    <div style="max-width: 375px; height: 100vh; padding: 20px 0; background-color: #F1F2F7">
      <ChCarousel>
        <template #default>
          <ChCarouselItem>
            <h1>Hello!</h1>
          </ChCarouselItem>
          <ChCarouselItem style="display: flex; align-items: center; border-radius: 10px; background-color: #46C01B;">
            <p>This is</p>
          </ChCarouselItem>
          <ChCarouselItem>
            carousel items
          </ChCarouselItem>
          <ChCarouselItem style="padding: 5px; background-color: white;">
            with custom ui
            <div>Custom blocks</div>
          </ChCarouselItem>
        </template>
        <template #bullets>
          <ChCarouselBullets style="--ch-carousel-active-bullet-color: #46C01B" />
        </template>
      </ChCarousel>
    </div>
  `
})

export const Default = Template.bind({})

export const WithBullets = Template.bind({})
WithBullets.parameters = {
  withBullets: true
}

export const Standalone = Template.bind({})
Standalone.parameters = {
  isStandalone: true
}

export const WithGeneralCarouselItem = TemplateWithGeneralItems.bind({})
