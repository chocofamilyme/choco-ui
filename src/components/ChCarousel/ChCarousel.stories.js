import ChCarousel from './ChCarousel.vue'
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
    ChCarouselBullets
  },
  setup() {
    return { parameters }
  },
  template: `
    <div style="height: 100vh; padding: 20px 0; background-color: #F1F2F7">
      <ChCarousel>
        <template #default>
          <ChCarouselCardItem>
            <template #left>
              <span>Нет фото</span>
            </template>
            <div>
              <h3>Нур-Султан — Москва</h3>
              <p>22 февр, 15:25 – 23 февр, 11:15</p>
            </div>
          </ChCarouselCardItem>
          <template v-if="!parameters.isStandalone">
            <ChCarouselCardItem>
              <template #left>
                <span>Нет фото</span>
              </template>
              <div>
                <h3>Москва — Нур-Султан</h3>
                <p>23 февр, 15:25 – 24 февр, 15:15</p>
              </div>
            </ChCarouselCardItem>
            <ChCarouselCardItem>
              <template #left>
                <span>Нет фото</span>
              </template>
              <div>
                <h3>Нур-Султан — Алматы</h3>
                <p>26 февр, 15:25 – 27 февр, 11:15</p>
              </div>
            </ChCarouselCardItem>
            <ChCarouselCardItem>
              <template #left>
                <span>Нет фото</span>
              </template>
              <div>
                <h3>Алматы — Москва</h3>
                <p>28 февр, 15:25 – 01 мар, 11:15</p>
              </div>
            </ChCarouselCardItem>
          </template>
        </template>
        <template v-if="parameters.withBullets" #bullets="{ numberOfBullets }">
          <ChCarouselBullets :number-of-bullets="numberOfBullets" />
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
