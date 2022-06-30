import { ref, watch } from 'vue'
import ChSlider from './ChSlider.vue'

export default {
  title: 'Slider',
  component: ChSlider,
  argTypes: {
    title: { control: 'text' },
    infoText: { control: 'text' },
    configs: { control: 'object' }
  }
}

const Template = args => ({
  components: { ChSlider },
  setup() {
    const modelValue = ref(args.configs.start)

    watch(modelValue, newValue => {
      console.log({ ...newValue })
    })

    return { args, modelValue }
  },
  template: '<ch-slider v-bind="args" v-model="modelValue" />'
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
    connect: [false, true, false],
    labels: {
      begin: '100тг',
      end: '500тг'
    }
  }
}

export const WithHandlesMargin = Template.bind({})
WithHandlesMargin.args = {
  title: 'С расстоянием между слайдерами',
  configs: {
    start: [0, 24],
    range: {
      min: [0],
      max: [24]
    },
    margin: 1,
    connect: [false, true, false],
    labels: {
      begin: '00:00',
      end: '24:00'
    }
  }
}
