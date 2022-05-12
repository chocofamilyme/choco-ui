import ChToggleButton from './ChToggleButton.vue'

export default {
  title: 'ToggleButton',
  component: ChToggleButton,
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = args => ({
  components: { ChToggleButton },
  setup() {
    return { args }
  },
  template: '<ch-toggle-button v-bind="args" />'
})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label'
}
