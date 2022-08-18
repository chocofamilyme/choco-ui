import ChToggleButton from './ChToggleButton.vue'
import ChToggleButtonGroup from '../ChToggleButtonGroup'

export default {
  title: 'ToggleButton',
  component: ChToggleButton,
  argTypes: {
    label: { control: 'text' }
  }
}

const Template = args => ({
  components: { ChToggleButton, ChToggleButtonGroup },
  setup() {
    return { args }
  },
  template: `
    <ch-toggle-button-group current-id="1">
      <ch-toggle-button v-bind="args" id="1" name="toggle-button">1</ch-toggle-button>
    </ch-toggle-button-group>
  `
})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label'
}
