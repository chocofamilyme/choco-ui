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
    <ChToggleButtonGroup current-id="1">
      <ChToggleButton v-bind="args" id="1" name="toggle-button">1</ChToggleButton>
    </ChToggleButtonGroup>
  `
})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label'
}
