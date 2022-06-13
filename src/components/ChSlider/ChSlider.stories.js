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
      console.log({ newValue })
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

// export const Disabled = Template.bind({})
// Disabled.args = {
//   disabled: true,
//   checked: true,
//   label: 'Switch'
// }

// export const Checked = Template.bind({})
// Checked.args = {
//   checked: true,
//   label: 'Switch'
// }
