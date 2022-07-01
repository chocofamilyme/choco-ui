import { ref, watch } from 'vue'
import ChSlider from './ChSlider.vue'

export default {
  title: 'Slider',
  component: ChSlider,
  argTypes: {
    title: { control: 'text' },
    configs: { control: 'object' }
  }
}

const Template = (args, { parameters }) => ({
  components: { ChSlider },
  setup() {
    const modelValue = ref(args.configs.start)

    watch(modelValue, newValue => {
      console.log({ ...newValue })
    })

    return { args, parameters, modelValue }
  },
  template: `
    <ChSlider v-bind="args" v-model="modelValue">
      <template v-if="parameters.withLabels" #labels="{ labels }">
        <div style="display: flex; justify-content: space-between">
          <span>{{ labels[0] }}</span>
          <span>{{ labels[1] }}</span>
        </div>
      </template>
    </ChSlider>
  `
})

export const Empty = Template.bind({})
Empty.args = {
  title: 'Стоимость товара',
  configs: {
    start: [0, 5],
    range: {
      min: [0],
      max: [10]
    },
    connect: [false, true, false]
  }
}

export const WithLabels = Template.bind({})
WithLabels.args = {
  title: 'Стоимость товара',
  configs: {
    start: [100, 500],
    range: {
      min: [100],
      max: [500]
    },
    connect: [false, true, false]
  }
}
WithLabels.parameters = {
  withLabels: true
}

export const WithHandlesMargin = Template.bind({})
WithHandlesMargin.args = {
  title: 'С расстоянием между слайдерами',
  configs: {
    start: [0, 24],
    step: 1,
    range: {
      min: [0],
      max: [24]
    },
    margin: 2,
    connect: [false, true, false]
  }
}
WithHandlesMargin.parameters = {
  withLabels: true
}
