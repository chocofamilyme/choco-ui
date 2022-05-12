import { ref } from 'vue'
import ChSlider from './ChSlider.vue'

export default {
  title: 'Slider',
  component: ChSlider,
  argTypes: {
    title: { control: 'text' },
    infoText: { control: 'text' }
  }
}

const Template = ({ value = [0, 10], ...args }) => ({
  components: { ChSlider },
  setup() {
    const modelValue = ref(value)
    return { args, modelValue }
  },
  template: '<ch-slider v-bind="args" v-model="modelValue" />'
})

export const Empty = Template.bind({})
Empty.args = {
  title: 'Стоимость товара'
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
